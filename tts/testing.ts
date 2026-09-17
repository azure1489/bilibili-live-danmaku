/** 单元测试辅助工具 */
import { protoDecoderMap } from "../src/decoder";
import { bilibili } from "../src/proto";
import { EventKind, LiveEvent } from "./event";
import { Logger, createLogger } from "./log";
import { RawMessage } from "./parse";

/** 记录日志内容的 logger */
export function memoryLogger(): Logger & { lines: string[] } {
  const lines: string[] = [];
  return Object.assign(createLogger("debug", (line) => lines.push(line)), { lines });
}

/** 轮询等待条件成立 */
export async function waitFor(predicate: () => boolean, timeout = 1000) {
  const deadline = Date.now() + timeout;
  while (!predicate()) {
    if (Date.now() > deadline) throw new Error("waitFor 超时");
    await new Promise((r) => setTimeout(r, 5));
  }
}

export function makeEvent(kind: EventKind, fields: Partial<LiveEvent> = {}): LiveEvent {
  return { kind, uid: 1, nickname: "柠檬", fanLevel: 0, ...fields };
}

/** 构造经过真实 protobuf 编解码的 SEND_GIFT_V2 消息 */
export function giftMessage(properties: bilibili.live.gift.v1.ISendGiftBroadcast): RawMessage {
  const Broadcast = bilibili.live.gift.v1.SendGiftBroadcast;
  const pb = Buffer.from(Broadcast.encode(Broadcast.fromObject(properties)).finish()).toString("base64");
  const msg = { cmd: "SEND_GIFT_V2", data: { pb, dmscore: 1 } };
  protoDecoderMap.SEND_GIFT_V2!(msg);
  return msg;
}

/** 构造 SEND_GIFT_V2 消息的常用字段 */
export function simpleGift(options: {
  uid?: number;
  uname?: string;
  anchorUid?: number;
  medalLevel?: number;
  giftId?: number;
  giftName?: string;
  num?: number;
  price?: number;
  superBatchGiftNum?: number;
  comboTotalCoin?: number;
  batchComboId?: string;
  blind?: boolean;
}): RawMessage {
  const {
    uid = 1001,
    uname = "柠檬",
    anchorUid,
    medalLevel,
    giftId = 31036,
    giftName = "小花花",
    num = 1,
    price = 100,
    superBatchGiftNum = 1,
    comboTotalCoin = price * superBatchGiftNum,
    batchComboId = "batch:1",
    blind = false,
  } = options;
  return giftMessage({
    uid,
    uname,
    senderUinfo: {
      uid,
      base: { name: uname },
      ...(anchorUid !== undefined && medalLevel !== undefined
        ? { medal: { ruid: anchorUid, level: medalLevel, name: "柠檬团" } }
        : {}),
    },
    ...(blind ? { blindGift: { originalGiftName: "盲盒" } } : {}),
    giftList: [
      {
        giftId,
        giftName,
        num,
        price,
        superBatchGiftNum,
        comboTotalCoin,
        batchComboId,
        comboStayTime: 5,
        coinType: "gold",
      },
    ],
  });
}
