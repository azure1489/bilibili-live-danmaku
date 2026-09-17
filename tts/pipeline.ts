import { DanmakuFilter, Deduper, GiftAggregator, LikeAggregator, userKey } from "./aggregate";
import { EventKind, LiveEvent } from "./event";
import { Logger } from "./log";
import {
  RawMessage,
  parseDanmaku,
  parseGift,
  parseGuard,
  parseLike,
  parseSuperChat,
  parseSuperChatDelete,
} from "./parse";
import { EventQueue } from "./queue";

export type EventSwitch = "danmaku" | "gift" | "like" | "fansclub" | "superchat" | "guard";
export type EnableOptions = Record<EventSwitch, boolean>;

export interface PipelineOptions {
  /** 未开播时不播报 */
  onlyLive: boolean;
  /** 跳过主播本人的弹幕 */
  skipAnchorDanmaku: boolean;
  enable: EnableOptions;
  logger: Logger;
  now?: () => number;
}

export interface RoomInfo {
  roomId: number;
  anchorUid: number;
  live: boolean;
}

/** 粉丝团灯牌：送出即加入粉丝团 */
const FANS_CLUB_GIFT_ID = 31164;
/** 大航海礼物（总督 / 提督 / 舰长），由 USER_TOAST_MSG_V2 播报 */
const GUARD_GIFT_IDS = new Set([10001, 10002, 10003]);
/** 受开播状态控制的消息 */
const PLAYABLE_CMDS = new Set([
  "DANMU_MSG",
  "SEND_GIFT_V2",
  "LIKE_INFO_V3_CLICK",
  "SUPER_CHAT_MESSAGE",
  "USER_TOAST_MSG_V2",
]);

/** 把直播消息过滤、聚合后推入播报队列 */
export class Pipeline {
  private anchorUid = 0;
  private live = false;
  private loginNoticeWarned = false;
  private readonly danmaku = new DanmakuFilter(50, 30_000);
  private readonly gifts = new GiftAggregator();
  private readonly likes = new LikeAggregator(10_000);
  private readonly fansclubDedup = new Deduper(30_000);
  private readonly superChatDedup = new Deduper(10 * 60_000);
  private readonly guardDedup = new Deduper(10 * 60_000);
  private readonly now: () => number;

  constructor(
    private readonly queue: EventQueue,
    private readonly options: PipelineOptions,
  ) {
    this.now = options.now ?? Date.now;
  }

  /** 连接直播间时更新房间信息 */
  setRoom(room: RoomInfo) {
    this.anchorUid = room.anchorUid;
    this.setLive(room.live);
  }

  setLive(live: boolean) {
    if (live === this.live) return;
    this.live = live;
    this.options.logger.info(live ? "直播中，开始播报" : "未开播", {
      onlyLive: this.options.onlyLive,
    });
  }

  handle(msg: RawMessage) {
    const { enable, logger } = this.options;
    const cmd = msg.cmd ?? "";
    if (this.options.onlyLive && !this.live && PLAYABLE_CMDS.has(cmd)) return;
    const now = this.now();
    switch (cmd) {
      case "DANMU_MSG": {
        if (!enable.danmaku) return;
        const danmaku = parseDanmaku(msg, this.anchorUid);
        if (!danmaku) return;
        const fromAnchor = this.anchorUid > 0 && danmaku.uid === this.anchorUid;
        if (fromAnchor && this.options.skipAnchorDanmaku) return;
        const ev = this.danmaku.process(danmaku, now);
        if (ev) this.push(ev);
        return;
      }
      case "SEND_GIFT_V2": {
        const gift = parseGift(msg, this.anchorUid);
        if (!gift) {
          logger.debug("礼物消息未解码，已忽略");
          return;
        }
        const { sender } = gift;
        for (const item of gift.items) {
          if (GUARD_GIFT_IDS.has(item.giftId)) continue;
          if (item.giftId === FANS_CLUB_GIFT_ID && enable.fansclub) {
            logger.debug("收到粉丝团灯牌", {
              uid: sender.uid,
              hasAnchorMedal: sender.hasAnchorMedal,
              fanLevel: sender.fanLevel,
            });
            // 没有本主播勋章视为新加入粉丝团；老成员送灯牌（重新点亮）按普通礼物处理
            if (!sender.hasAnchorMedal) {
              if (this.fansclubDedup.allow(userKey(sender.uid, sender.nickname), now)) {
                this.push({ kind: EventKind.Fansclub, uid: sender.uid, nickname: sender.nickname, fanLevel: 0 });
              }
              continue;
            }
          }
          if (enable.gift) this.gifts.add(sender, item, now);
        }
        return;
      }
      case "LIKE_INFO_V3_CLICK": {
        const like = enable.like ? parseLike(msg) : undefined;
        if (like) this.likes.add(like.uid, like.nickname, now);
        return;
      }
      case "SUPER_CHAT_MESSAGE": {
        const sc = enable.superchat ? parseSuperChat(msg, this.anchorUid) : undefined;
        if (!sc || !this.superChatDedup.allow(sc.id, now)) return;
        this.push({
          kind: EventKind.SuperChat,
          uid: sc.uid,
          nickname: sc.nickname,
          fanLevel: sc.fanLevel,
          content: sc.content,
          price: sc.price,
          scId: sc.id,
        });
        return;
      }
      case "SUPER_CHAT_MESSAGE_DELETE": {
        const ids = new Set(parseSuperChatDelete(msg));
        const removed = this.queue.removeWhere((ev) => ev.scId !== undefined && ids.has(ev.scId));
        if (removed) logger.info("SC 已被删除，取消播报", { ids: [...ids] });
        return;
      }
      case "USER_TOAST_MSG_V2": {
        const guard = enable.guard ? parseGuard(msg) : undefined;
        if (!guard || !this.guardDedup.allow(guard.key, now)) return;
        this.push({
          kind: EventKind.Guard,
          uid: guard.uid,
          nickname: guard.nickname,
          fanLevel: 0,
          guardLevel: guard.guardLevel,
          renew: guard.renew,
        });
        return;
      }
      case "LIVE":
        this.setLive(true);
        return;
      case "PREPARING":
      case "CUT_OFF":
        this.setLive(false);
        return;
      case "LOG_IN_NOTICE":
        if (!this.loginNoticeWarned) {
          this.loginNoticeWarned = true;
          logger.warn("未登录，他人昵称会被打码，可运行 npm run login 扫码登录");
        }
        return;
    }
  }

  /** 定时调用：输出已结束的礼物连击与到期的点赞窗口 */
  tick() {
    const now = this.now();
    for (const ev of this.gifts.flush(now)) this.push(ev);
    const like = this.likes.flush(now);
    if (like) this.push(like);
  }

  private push(ev: LiveEvent) {
    const dropped = this.queue.push(ev);
    if (dropped) {
      this.options.logger.debug("播报队列已满，丢弃消息", {
        kind: EventKind[dropped.kind],
        nickname: dropped.nickname,
      });
    }
  }
}
