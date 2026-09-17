import { EventKind, LiveEvent } from "./event";
import { DanmakuRecord, GiftItem, GiftSender, truncate } from "./parse";

/** 表情码，如 "[dog]"、"[笑哭]" */
const EMOTE_RE = /\[[^[\]]*\]/g;

/** 去重键：有 uid 用 uid，否则用昵称 */
export function userKey(uid: number, nickname: string) {
  return uid > 0 ? `uid:${uid}` : `name:${nickname}`;
}

/** 按 key 的短时去重器 */
export class Deduper {
  private readonly seen = new Map<string, number>();

  constructor(private readonly ttl: number) {}

  /** 判断 key 是否放行；放行则记录时间 */
  allow(key: string, now: number): boolean {
    const last = this.seen.get(key);
    if (last !== undefined && now - last < this.ttl) return false;
    this.gc(now);
    this.seen.set(key, now);
    return true;
  }

  /** 惰性清理过期记录，避免长时间运行内存增长 */
  private gc(now: number) {
    if (this.seen.size < 1024) return;
    for (const [key, last] of this.seen) {
      if (now - last >= this.ttl) this.seen.delete(key);
    }
  }
}

/** 弹幕过滤：表情包、纯表情码、超长截断、短时去重 */
export class DanmakuFilter {
  private readonly dedup: Deduper;

  constructor(
    private readonly maxLength = 50,
    dedupTtl = 30_000,
  ) {
    this.dedup = new Deduper(dedupTtl);
  }

  process(danmaku: DanmakuRecord, now: number): LiveEvent | undefined {
    if (danmaku.isEmoticon) return;
    const content = truncate(danmaku.content.replace(EMOTE_RE, "").trim(), this.maxLength);
    if (!content || !this.dedup.allow(content, now)) return;
    return {
      kind: EventKind.Danmaku,
      uid: danmaku.uid,
      nickname: danmaku.nickname,
      fanLevel: danmaku.fanLevel,
      content,
    };
  }
}

interface ComboEntry {
  sender: GiftSender;
  giftName: string;
  /** 消息中携带的累计数量最大值，0 表示未知 */
  maxCumulative: number;
  /** 逐条累加的数量，仅在累计数量未知时使用 */
  sumNum: number;
  lastSeen: number;
  /** 最后一条消息后多久输出 */
  flushAfter: number;
}

/**
 * 礼物连击聚合：同一连击（batchComboId）合并为一条播报。
 * B站没有连击结束标记，超过 comboStayTime + 1 秒没有新消息即输出；
 * 连击停顿后继续时，只播报新增的数量。
 *
 * 数量优先使用消息携带的累计值（重复、乱序消息不影响结果），
 * 累计值未知时才逐条累加 num。
 */
export class GiftAggregator {
  private readonly pending = new Map<string, ComboEntry>();
  /** 已播报的数量，key → { count, at } */
  private readonly spoken = new Map<string, { count: number; at: number }>();

  constructor(private readonly spokenTtl = 60_000) {}

  add(sender: GiftSender, item: GiftItem, now: number) {
    const key = item.batchComboId || `${userKey(sender.uid, sender.nickname)}:${item.giftId}`;
    // 累计值只对同一连击有意义；没有连击 id 时按用户聚合，只能逐条累加。
    // 盲盒礼物的单价与连击金额口径不一致，不用金额反推数量
    const coinCount =
      !sender.isBlind && item.price > 0 ? Math.floor(item.comboTotalCoin / item.price) : 0;
    const cumulative = item.batchComboId ? Math.max(item.superBatchGiftNum, coinCount) : 0;
    const num = Math.max(item.num, 0);
    let entry = this.pending.get(key);
    if (!entry) {
      entry = {
        sender,
        giftName: item.giftName || "礼物",
        maxCumulative: 0,
        sumNum: 0,
        lastSeen: now,
        flushAfter: 0,
      };
      this.pending.set(key, entry);
    }
    if (cumulative > 0) {
      // 单次批量赠送时累计值可能只计次数，至少为本次数量
      entry.maxCumulative = Math.max(entry.maxCumulative, cumulative, num);
    }
    entry.sumNum += num;
    entry.lastSeen = now;
    entry.flushAfter = ((item.comboStayTime > 0 ? item.comboStayTime : 5) + 1) * 1000;
  }

  /** 输出已结束的连击 */
  flush(now: number): LiveEvent[] {
    for (const [key, record] of this.spoken) {
      if (now - record.at >= this.spokenTtl) this.spoken.delete(key);
    }
    const events: LiveEvent[] = [];
    for (const [key, entry] of this.pending) {
      if (now - entry.lastSeen < entry.flushAfter) continue;
      this.pending.delete(key);
      const already = this.spoken.get(key)?.count ?? 0;
      const total =
        entry.maxCumulative > 0 ? entry.maxCumulative : already + Math.max(entry.sumNum, 1);
      this.spoken.set(key, { count: Math.max(total, already), at: now });
      if (total <= already) continue;
      events.push({
        kind: EventKind.Gift,
        uid: entry.sender.uid,
        nickname: entry.sender.nickname,
        fanLevel: entry.sender.fanLevel,
        giftName: entry.giftName,
        count: total - already,
      });
    }
    return events;
  }
}

/** 点赞窗口聚合：窗口自第一条点赞起算，期满输出一条汇总（首个用户 + 去重人数） */
export class LikeAggregator {
  private windowStart = 0;
  private users = new Map<string, { uid: number; nickname: string }>();

  constructor(private readonly window = 10_000) {}

  add(uid: number, nickname: string, now: number) {
    if (this.users.size === 0) this.windowStart = now;
    const key = userKey(uid, nickname);
    if (!this.users.has(key)) this.users.set(key, { uid, nickname });
  }

  flush(now: number): LiveEvent | undefined {
    if (this.users.size === 0 || now - this.windowStart < this.window) return;
    const [first] = this.users.values();
    const count = this.users.size;
    this.users = new Map();
    return { kind: EventKind.Like, uid: first.uid, nickname: first.nickname, fanLevel: 0, count };
  }
}
