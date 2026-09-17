import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { DanmakuFilter, Deduper, GiftAggregator, LikeAggregator } from "./aggregate";
import { EventKind } from "./event";
import { DanmakuRecord, GiftItem, GiftSender } from "./parse";

function danmaku(content: string, fields: Partial<DanmakuRecord> = {}): DanmakuRecord {
  return { uid: 1, nickname: "柠檬", content, isEmoticon: false, fanLevel: 0, ...fields };
}

const sender: GiftSender = { uid: 1, nickname: "柠檬", fanLevel: 3, hasAnchorMedal: true, isBlind: false };

function item(fields: Partial<GiftItem> = {}): GiftItem {
  return {
    giftId: 31036,
    giftName: "小花花",
    num: 1,
    price: 100,
    superBatchGiftNum: 0,
    comboTotalCoin: 0,
    batchComboId: "batch:1",
    comboStayTime: 5,
    ...fields,
  };
}

describe("DanmakuFilter", () => {
  it("跳过表情包弹幕与纯表情码", () => {
    const filter = new DanmakuFilter();
    assert.equal(filter.process(danmaku("[dog]", { isEmoticon: true }), 0), undefined);
    assert.equal(filter.process(danmaku(" [dog][笑哭] "), 0), undefined);
    assert.equal(filter.process(danmaku("   "), 0), undefined);
  });

  it("播报文本去掉表情码", () => {
    const ev = new DanmakuFilter().process(danmaku("哈哈[dog]好玩", { fanLevel: 2 }), 0);
    assert.deepEqual(ev, {
      kind: EventKind.Danmaku,
      uid: 1,
      nickname: "柠檬",
      fanLevel: 2,
      content: "哈哈好玩",
    });
  });

  it("超长截断", () => {
    const ev = new DanmakuFilter(5).process(danmaku("一二三四五六七"), 0);
    assert.equal(ev?.content, "一二三四五");
  });

  it("相同内容短时间内去重", () => {
    const filter = new DanmakuFilter(50, 30_000);
    assert.ok(filter.process(danmaku("你好"), 0));
    assert.equal(filter.process(danmaku("你好", { uid: 2 }), 29_999), undefined);
    assert.ok(filter.process(danmaku("你好"), 60_000));
  });
});

describe("GiftAggregator", () => {
  it("连击按累计数量合并，停止后才输出", () => {
    const gifts = new GiftAggregator();
    for (let i = 1; i <= 3; i++) {
      gifts.add(sender, item({ superBatchGiftNum: i, comboTotalCoin: i * 100 }), i * 1000);
    }
    // comboStayTime 5 秒 + 1 秒
    assert.deepEqual(gifts.flush(8999), []);
    assert.deepEqual(gifts.flush(9000), [
      { kind: EventKind.Gift, uid: 1, nickname: "柠檬", fanLevel: 3, giftName: "小花花", count: 3 },
    ]);
    assert.deepEqual(gifts.flush(20_000), []);
  });

  it("连击停顿后继续，只播报新增数量", () => {
    const gifts = new GiftAggregator();
    gifts.add(sender, item({ superBatchGiftNum: 3 }), 0);
    assert.equal(gifts.flush(6000)[0].count, 3);
    gifts.add(sender, item({ superBatchGiftNum: 4 }), 10_000);
    gifts.add(sender, item({ superBatchGiftNum: 5 }), 11_000);
    assert.equal(gifts.flush(17_000)[0].count, 2);
    // 乱序到达的旧消息不会重复感谢
    gifts.add(sender, item({ superBatchGiftNum: 2 }), 18_000);
    assert.deepEqual(gifts.flush(24_000), []);
  });

  it("重复推送的消息不会多算", () => {
    const gifts = new GiftAggregator();
    for (const n of [1, 2, 2, 3, 3]) gifts.add(sender, item({ superBatchGiftNum: n }), 0);
    assert.equal(gifts.flush(6000)[0].count, 3);
  });

  it("单次批量赠送至少按本次数量计", () => {
    const gifts = new GiftAggregator();
    gifts.add(sender, item({ num: 10, superBatchGiftNum: 1, price: 0 }), 0);
    assert.equal(gifts.flush(6000)[0].count, 10);
    // 金额可用时按金额反推
    gifts.add(sender, item({ batchComboId: "batch:2", num: 10, superBatchGiftNum: 2, comboTotalCoin: 2000 }), 0);
    assert.equal(gifts.flush(12_000)[0].count, 20);
  });

  it("没有连击 id 和累计数量时逐条累加", () => {
    const gifts = new GiftAggregator();
    const noCombo = { batchComboId: "", price: 0 };
    gifts.add(sender, item({ ...noCombo, num: 2 }), 0);
    gifts.add(sender, item({ ...noCombo, num: 1 }), 1000);
    assert.equal(gifts.flush(7000)[0].count, 3);
    gifts.add(sender, item({ ...noCombo, num: 2 }), 10_000);
    assert.equal(gifts.flush(16_000)[0].count, 2);
  });

  it("没有连击 id 时忽略消息中的累计值，连续单次赠送都会播报", () => {
    const gifts = new GiftAggregator();
    const single = item({ batchComboId: "", superBatchGiftNum: 1, comboTotalCoin: 100 });
    gifts.add(sender, single, 0);
    assert.equal(gifts.flush(6000)[0].count, 1);
    gifts.add(sender, single, 10_000);
    assert.equal(gifts.flush(16_000)[0].count, 1);
  });

  it("已播报记录过期后重新计数", () => {
    const gifts = new GiftAggregator(60_000);
    gifts.add(sender, item({ batchComboId: "", price: 0, num: 1 }), 0);
    assert.equal(gifts.flush(6000)[0].count, 1);
    gifts.add(sender, item({ batchComboId: "", price: 0, num: 1 }), 70_000);
    assert.equal(gifts.flush(76_000)[0].count, 1);
  });

  it("没有 superBatchGiftNum 时用金额反推数量", () => {
    const gifts = new GiftAggregator();
    gifts.add(sender, item({ comboTotalCoin: 1050 }), 0);
    assert.equal(gifts.flush(6000)[0].count, 10);
  });

  it("盲盒礼物不用金额反推数量", () => {
    const gifts = new GiftAggregator();
    gifts.add({ ...sender, isBlind: true }, item({ comboTotalCoin: 5000, num: 2 }), 0);
    assert.equal(gifts.flush(6000)[0].count, 2);
  });

  it("没有连击 id 时不同昵称分开聚合", () => {
    const gifts = new GiftAggregator();
    const masked = { ...sender, uid: 0 };
    gifts.add({ ...masked, nickname: "究***" }, item({ batchComboId: "" }), 0);
    gifts.add({ ...masked, nickname: "孤***" }, item({ batchComboId: "" }), 0);
    assert.equal(gifts.flush(6000).length, 2);
  });

  it("使用消息中的 comboStayTime", () => {
    const gifts = new GiftAggregator();
    gifts.add(sender, item({ comboStayTime: 2 }), 0);
    assert.deepEqual(gifts.flush(2999), []);
    assert.equal(gifts.flush(3000).length, 1);
  });

  it("昵称、礼物名、等级以连击首条为准", () => {
    const gifts = new GiftAggregator();
    gifts.add(sender, item({ superBatchGiftNum: 1 }), 0);
    gifts.add({ ...sender, nickname: "改名", fanLevel: 9 }, item({ superBatchGiftNum: 2, giftName: "" }), 0);
    const [ev] = gifts.flush(6000);
    assert.equal(ev.nickname, "柠檬");
    assert.equal(ev.fanLevel, 3);
    assert.equal(ev.giftName, "小花花");
    assert.equal(ev.count, 2);
  });
});

describe("LikeAggregator", () => {
  it("窗口期满输出首个用户与去重人数", () => {
    const likes = new LikeAggregator(10_000);
    assert.equal(likes.flush(0), undefined);
    likes.add(1, "柠檬", 1000);
    likes.add(1, "柠檬", 2000);
    likes.add(2, "橘子", 3000);
    likes.add(0, "究***", 4000);
    likes.add(0, "究***", 5000);
    assert.equal(likes.flush(10_999), undefined);
    assert.deepEqual(likes.flush(11_000), {
      kind: EventKind.Like,
      uid: 1,
      nickname: "柠檬",
      fanLevel: 0,
      count: 3,
    });
    assert.equal(likes.flush(30_000), undefined);
  });
});

describe("Deduper", () => {
  it("ttl 内拒绝重复 key", () => {
    const dedup = new Deduper(1000);
    assert.equal(dedup.allow("a", 0), true);
    assert.equal(dedup.allow("a", 999), false);
    assert.equal(dedup.allow("b", 999), true);
    assert.equal(dedup.allow("a", 1000), true);
  });

  it("记录过多时清理过期项", () => {
    const dedup = new Deduper(1000);
    for (let i = 0; i < 2000; i++) dedup.allow(`k${i}`, 0);
    assert.equal(dedup.allow("new", 5000), true);
    assert.equal(dedup.allow("k0", 5000), true);
  });
});
