/**
 * 原始直播消息 → 结构化记录。
 * 输出只含 number / string / boolean；所有函数在关键字段缺失时返回 undefined。
 */
import { bilibili } from "../src/proto";

/** 原始消息，字段结构以实际数据为准 */
export type RawMessage = { cmd?: string; [key: string]: any };

type MedalLike = { ruid?: unknown; level?: unknown } | null | undefined;

const toNumber = (value: unknown) => Number(value) || 0;
const toText = (value: unknown) => (typeof value === "string" ? value : "");

/** 勋章属于本主播时返回等级，否则返回 0 */
export function fanLevelOf(medal: MedalLike, anchorUid: number): number {
  if (!medal || !anchorUid || toNumber(medal.ruid) !== anchorUid) return 0;
  return toNumber(medal.level);
}

export function truncate(text: string, maxLength: number) {
  const chars = [...text];
  return chars.length > maxLength ? chars.slice(0, maxLength).join("") : text;
}

export interface DanmakuRecord {
  uid: number;
  nickname: string;
  content: string;
  /** 表情包弹幕 */
  isEmoticon: boolean;
  fanLevel: number;
}

export function parseDanmaku(msg: RawMessage, anchorUid: number): DanmakuRecord | undefined {
  const info = msg.info;
  if (!Array.isArray(info) || typeof info[1] !== "string") return;
  const user = info[0]?.[15]?.user;
  // info[3]：佩戴的勋章，[0] 等级，[12] 勋章所属主播 uid
  const medal: MedalLike =
    user?.medal ?? (Array.isArray(info[3]) ? { level: info[3][0], ruid: info[3][12] } : undefined);
  return {
    uid: toNumber(info[2]?.[0]),
    nickname: toText(info[2]?.[1]) || toText(user?.base?.name),
    content: info[1],
    isEmoticon: info[0]?.[12] === 1,
    fanLevel: fanLevelOf(medal, anchorUid),
  };
}

export interface GiftSender {
  uid: number;
  nickname: string;
  fanLevel: number;
  /** 是否已有本主播的粉丝勋章 */
  hasAnchorMedal: boolean;
  /** 盲盒礼物 */
  isBlind: boolean;
}

export interface GiftItem {
  giftId: number;
  giftName: string;
  num: number;
  /** 单价（金瓜子） */
  price: number;
  /** 连击累计数量，0 表示未知 */
  superBatchGiftNum: number;
  /** 连击累计金瓜子 */
  comboTotalCoin: number;
  batchComboId: string;
  /** 连击保持时间（秒） */
  comboStayTime: number;
}

export interface GiftRecord {
  sender: GiftSender;
  items: GiftItem[];
}

/** 解析 SEND_GIFT_V2，需先经过 protobuf 解码（decodeProtobuf: true） */
export function parseGift(msg: RawMessage, anchorUid: number): GiftRecord | undefined {
  if (!msg.decoded) return;
  // int64 字段解码后为 Long 对象，统一转为 number
  const data = bilibili.live.gift.v1.SendGiftBroadcast.toObject(msg.decoded, {
    longs: Number,
    arrays: true,
  });
  const medal = data.senderUinfo?.medal;
  const fanLevel = fanLevelOf(medal, anchorUid);
  return {
    sender: {
      uid: toNumber(data.uid),
      nickname: toText(data.uname) || toText(data.senderUinfo?.base?.name),
      fanLevel,
      hasAnchorMedal: !!medal && toNumber(medal.ruid) === anchorUid,
      isBlind: !!data.blindGift,
    },
    items: data.giftList.map((item: Record<string, unknown>) => ({
      giftId: toNumber(item.giftId),
      giftName: toText(item.giftName),
      num: toNumber(item.num),
      price: toNumber(item.price),
      superBatchGiftNum: toNumber(item.superBatchGiftNum),
      comboTotalCoin: toNumber(item.comboTotalCoin),
      batchComboId: toText(item.batchComboId),
      comboStayTime: toNumber(item.comboStayTime),
    })),
  };
}

export interface LikeRecord {
  uid: number;
  nickname: string;
}

export function parseLike(msg: RawMessage): LikeRecord | undefined {
  const data = msg.data;
  if (!data) return;
  const nickname = toText(data.uname) || toText(data.uinfo?.base?.name);
  if (!nickname) return;
  return { uid: toNumber(data.uid), nickname };
}

export interface SuperChatRecord {
  id: string;
  uid: number;
  nickname: string;
  fanLevel: number;
  content: string;
  /** 金额（元） */
  price: number;
}

export function parseSuperChat(msg: RawMessage, anchorUid: number): SuperChatRecord | undefined {
  const data = msg.data;
  if (!data) return;
  const uid = toNumber(data.uid);
  const medal: MedalLike =
    data.uinfo?.medal ??
    (data.medal_info
      ? { level: data.medal_info.medal_level, ruid: data.medal_info.target_id }
      : undefined);
  return {
    id: data.id != null ? String(data.id) : `${uid}:${toNumber(data.ts)}`,
    uid,
    nickname: toText(data.user_info?.uname) || toText(data.uinfo?.base?.name),
    fanLevel: fanLevelOf(medal, anchorUid),
    content: truncate(toText(data.message).trim(), 100),
    price: toNumber(data.price),
  };
}

/** 解析 SUPER_CHAT_MESSAGE_DELETE，返回被删除的 SC id */
export function parseSuperChatDelete(msg: RawMessage): string[] {
  const ids = msg.data?.ids;
  return Array.isArray(ids) ? ids.map(String) : [];
}

export interface GuardRecord {
  /** 去重键 */
  key: string;
  uid: number;
  nickname: string;
  /** 1 总督、2 提督、3 舰长 */
  guardLevel: number;
  renew: boolean;
}

/**
 * 解析 USER_TOAST_MSG_V2（开通 / 续费大航海）。
 * 字段结构根据直播网页端代码推断，缺失时尽量容错。
 */
export function parseGuard(msg: RawMessage): GuardRecord | undefined {
  const data = msg.data;
  const guardLevel = toNumber(data?.guard_info?.guard_level);
  if (!guardLevel) return;
  const uid = toNumber(data.sender_uinfo?.uid);
  const toast = toText(data.toast_msg);
  const nickname =
    toText(data.sender_uinfo?.base?.name) || (toast.match(/<%([^%>]+)%>/)?.[1] ?? "");
  // op_type：1 开通，其余为续费 / 自动续费
  const opType = toNumber(data.option?.op_type ?? data.guard_info?.op_type);
  const payflowId = toText(data.pay_info?.payflow_id) || toText(data.payflow_id);
  return {
    key: payflowId || `${uid}:${guardLevel}:${toNumber(data.guard_info?.start_time)}`,
    uid,
    nickname,
    guardLevel,
    renew: opType > 1,
  };
}
