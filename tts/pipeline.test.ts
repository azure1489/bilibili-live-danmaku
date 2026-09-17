import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EventKind } from "./event";
import { EnableOptions, Pipeline } from "./pipeline";
import { EventQueue } from "./queue";
import { memoryLogger, simpleGift } from "./testing";

const ANCHOR = 777;

function setup(
  options: { onlyLive?: boolean; live?: boolean; skipAnchorDanmaku?: boolean; enable?: Partial<EnableOptions> } = {},
) {
  let now = 0;
  const queue = new EventQueue();
  const logger = memoryLogger();
  const pipeline = new Pipeline(queue, {
    onlyLive: options.onlyLive ?? true,
    skipAnchorDanmaku: options.skipAnchorDanmaku ?? true,
    enable: { danmaku: true, gift: true, like: true, fansclub: true, superchat: true, guard: true, ...options.enable },
    logger,
    now: () => now,
  });
  pipeline.setRoom({ roomId: 1, anchorUid: ANCHOR, live: options.live ?? true });
  return {
    queue,
    logger,
    pipeline,
    advance: (ms: number) => {
      now += ms;
    },
  };
}

function danmakuMsg(content: string, uid = 1) {
  return { cmd: "DANMU_MSG", info: [[], content, [uid, `用户${uid}`, 0], []] };
}

describe("Pipeline", () => {
  it("未开播时不处理可播报消息，开播后恢复", () => {
    const { pipeline, queue } = setup({ live: false });
    pipeline.handle(danmakuMsg("早"));
    assert.equal(queue.size, 0);
    pipeline.handle({ cmd: "LIVE" });
    pipeline.handle(danmakuMsg("开播啦"));
    assert.equal(queue.size, 1);
    pipeline.handle({ cmd: "PREPARING" });
    pipeline.handle(danmakuMsg("下播了"));
    assert.equal(queue.size, 1);
  });

  it("only_live 关闭时未开播也处理", () => {
    const { pipeline, queue } = setup({ live: false, onlyLive: false });
    pipeline.handle(danmakuMsg("早"));
    assert.equal(queue.size, 1);
  });

  it("默认跳过主播本人的弹幕", () => {
    const { pipeline, queue } = setup();
    pipeline.handle(danmakuMsg("我是主播", ANCHOR));
    assert.equal(queue.size, 0);
  });

  it("关闭 skipAnchorDanmaku 时播报主播弹幕", async () => {
    const { pipeline, queue } = setup({ skipAnchorDanmaku: false });
    pipeline.handle(danmakuMsg("我是主播", ANCHOR));
    const ev = await queue.pop();
    assert.equal(ev?.uid, ANCHOR);
    assert.equal(ev?.content, "我是主播");
  });

  it("主播 uid 未知时不当作主播弹幕", () => {
    const { pipeline, queue } = setup();
    pipeline.setRoom({ roomId: 1, anchorUid: 0, live: true });
    pipeline.handle(danmakuMsg("未登录时的弹幕", 0));
    assert.equal(queue.size, 1);
  });

  it("礼物连击合并后输出，下播后 tick 仍会输出已有连击", async () => {
    const { pipeline, queue, advance } = setup();
    for (let i = 1; i <= 3; i++) {
      pipeline.handle(simpleGift({ superBatchGiftNum: i, anchorUid: ANCHOR, medalLevel: 5 }));
      advance(1000);
    }
    pipeline.handle({ cmd: "PREPARING" });
    pipeline.tick();
    assert.equal(queue.size, 0);
    advance(6000);
    pipeline.tick();
    const ev = await queue.pop();
    assert.equal(ev?.kind, EventKind.Gift);
    assert.equal(ev?.count, 3);
    assert.equal(ev?.fanLevel, 5);
  });

  it("跳过大航海礼物", () => {
    const { pipeline, queue, advance } = setup();
    pipeline.handle(simpleGift({ giftId: 10003, giftName: "舰长" }));
    advance(10_000);
    pipeline.tick();
    assert.equal(queue.size, 0);
  });

  it("没有本主播勋章的用户送灯牌视为加入粉丝团，并去重", async () => {
    const { pipeline, queue, logger } = setup();
    const lamp = { giftId: 31164, giftName: "粉丝团灯牌" };
    pipeline.handle(simpleGift({ ...lamp, uid: 1 }));
    pipeline.handle(simpleGift({ ...lamp, uid: 1, batchComboId: "batch:2" }));
    // 只有其他主播的勋章，同样视为新加入
    pipeline.handle(simpleGift({ ...lamp, uid: 2, anchorUid: 123, medalLevel: 21, batchComboId: "batch:3" }));
    assert.equal(queue.size, 2);
    assert.equal((await queue.pop())?.uid, 1);
    const second = await queue.pop();
    assert.equal(second?.kind, EventKind.Fansclub);
    assert.equal(second?.uid, 2);
    assert.ok(logger.lines.some((line) => line.includes("收到粉丝团灯牌")));
  });

  it("老成员送灯牌（包括 1 级）按普通礼物处理", async () => {
    const { pipeline, queue, advance } = setup();
    const lamp = { giftId: 31164, giftName: "粉丝团灯牌" };
    pipeline.handle(simpleGift({ ...lamp, uid: 1, anchorUid: ANCHOR, medalLevel: 1, batchComboId: "batch:1" }));
    pipeline.handle(simpleGift({ ...lamp, uid: 2, anchorUid: ANCHOR, medalLevel: 10, batchComboId: "batch:2" }));
    assert.equal(queue.size, 0);
    advance(6000);
    pipeline.tick();
    const gifts = [await queue.pop(), await queue.pop()];
    assert.deepEqual(
      gifts.map((ev) => [ev?.kind, ev?.uid, ev?.fanLevel, ev?.giftName]),
      [
        [EventKind.Gift, 1, 1, "粉丝团灯牌"],
        [EventKind.Gift, 2, 10, "粉丝团灯牌"],
      ],
    );
  });

  it("关闭粉丝团播报时灯牌按礼物处理", async () => {
    const { pipeline, queue, advance } = setup({ enable: { fansclub: false } });
    pipeline.handle(simpleGift({ giftId: 31164, giftName: "粉丝团灯牌" }));
    advance(6000);
    pipeline.tick();
    assert.equal((await queue.pop())?.kind, EventKind.Gift);
  });

  it("关闭的事件类型不入队", () => {
    const { pipeline, queue, advance } = setup({
      enable: { danmaku: false, gift: false, like: false, superchat: false, guard: false },
    });
    pipeline.handle(danmakuMsg("你好"));
    pipeline.handle(simpleGift({}));
    pipeline.handle({ cmd: "LIKE_INFO_V3_CLICK", data: { uid: 1, uname: "柠檬" } });
    pipeline.handle({ cmd: "SUPER_CHAT_MESSAGE", data: { id: 1, uid: 1, price: 30, message: "hi" } });
    pipeline.handle({ cmd: "USER_TOAST_MSG_V2", data: { guard_info: { guard_level: 3 } } });
    advance(20_000);
    pipeline.tick();
    assert.equal(queue.size, 0);
  });

  it("点赞窗口聚合", async () => {
    const { pipeline, queue, advance } = setup();
    pipeline.handle({ cmd: "LIKE_INFO_V3_CLICK", data: { uid: 1, uname: "柠檬" } });
    pipeline.handle({ cmd: "LIKE_INFO_V3_CLICK", data: { uid: 2, uname: "橘子" } });
    advance(10_000);
    pipeline.tick();
    assert.equal((await queue.pop())?.count, 2);
  });

  it("SC 去重，被删除时从队列移除", () => {
    const { pipeline, queue } = setup();
    const sc = (id: number) => ({
      cmd: "SUPER_CHAT_MESSAGE",
      data: { id, uid: 1, price: 30, message: "加油", user_info: { uname: "柠檬" } },
    });
    pipeline.handle(sc(1));
    pipeline.handle(sc(1));
    pipeline.handle(sc(2));
    assert.equal(queue.size, 2);
    pipeline.handle({ cmd: "PREPARING" });
    // 删除消息不受开播状态影响
    pipeline.handle({ cmd: "SUPER_CHAT_MESSAGE_DELETE", data: { ids: [1] } });
    assert.equal(queue.size, 1);
  });

  it("大航海消息入队并去重", async () => {
    const { pipeline, queue } = setup();
    const toast = {
      cmd: "USER_TOAST_MSG_V2",
      data: {
        sender_uinfo: { uid: 1, base: { name: "柠檬" } },
        guard_info: { guard_level: 3 },
        pay_info: { payflow_id: "p1" },
        option: { op_type: 2 },
      },
    };
    pipeline.handle(toast);
    pipeline.handle(toast);
    assert.equal(queue.size, 1);
    const ev = await queue.pop();
    assert.equal(ev?.kind, EventKind.Guard);
    assert.equal(ev?.guardLevel, 3);
    assert.equal(ev?.renew, true);
  });

  it("未登录提示只输出一次", () => {
    const { pipeline, logger } = setup();
    pipeline.handle({ cmd: "LOG_IN_NOTICE" });
    pipeline.handle({ cmd: "LOG_IN_NOTICE" });
    assert.equal(logger.lines.filter((line) => line.includes("未登录")).length, 1);
  });

  it("未解码的礼物消息被忽略", () => {
    const { pipeline, queue, advance } = setup();
    pipeline.handle({ cmd: "SEND_GIFT_V2", data: { pb: "" } });
    advance(10_000);
    pipeline.tick();
    assert.equal(queue.size, 0);
  });
});
