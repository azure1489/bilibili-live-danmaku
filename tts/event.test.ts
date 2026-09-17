import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EventKind, speech } from "./event";
import { makeEvent } from "./testing";

const first = () => 0;

describe("speech", () => {
  it("弹幕带粉丝团等级前缀", () => {
    const ev = makeEvent(EventKind.Danmaku, { fanLevel: 5, content: "主播好厉害" });
    assert.equal(speech(ev), "粉丝团5级的柠檬说：主播好厉害");
  });

  it("非团员弹幕不带前缀", () => {
    const ev = makeEvent(EventKind.Danmaku, { content: "你好" });
    assert.equal(speech(ev), "柠檬说：你好");
  });

  it("打码或缺失的昵称使用通用称呼且不带前缀", () => {
    const masked = makeEvent(EventKind.Danmaku, { nickname: "究***", fanLevel: 5, content: "hi" });
    assert.equal(speech(masked), "这位朋友说：hi");
    const empty = makeEvent(EventKind.Gift, { nickname: "", giftName: "小花花" });
    assert.equal(speech(empty, first), "哇，谢谢这位朋友送的小花花，么么哒！");
  });

  it("礼物区分单个与多个", () => {
    const single = makeEvent(EventKind.Gift, { fanLevel: 3, giftName: "小花花", count: 1 });
    assert.equal(speech(single, first), "哇，谢谢粉丝团3级的柠檬送的小花花，么么哒！");
    const multi = makeEvent(EventKind.Gift, { giftName: "小花花", count: 10 });
    assert.equal(speech(multi, first), "哇塞，谢谢柠檬一口气送的10个小花花，太宠主播啦，么么哒！");
  });

  it("随机数接近 1 时不越界", () => {
    const ev = makeEvent(EventKind.Gift, { giftName: "小花花" });
    assert.equal(speech(ev, () => 0.9999999), "谢谢柠檬送的小花花呀，主播超喜欢的！");
  });

  it("加入粉丝团不带等级前缀", () => {
    const ev = makeEvent(EventKind.Fansclub, { fanLevel: 1 });
    assert.equal(speech(ev, first), "欢迎柠檬加入粉丝团，以后就是一家人啦，抱抱！");
  });

  it("点赞区分单人与多人", () => {
    assert.equal(speech(makeEvent(EventKind.Like), first), "谢谢柠檬的点赞，么么哒！");
    assert.equal(
      speech(makeEvent(EventKind.Like, { count: 5 }), first),
      "谢谢柠檬等5位宝贝的点赞，你们最可爱啦！",
    );
  });

  it("SC 播报金额与内容", () => {
    const ev = makeEvent(EventKind.SuperChat, { fanLevel: 2, price: 30, content: "主播加油" });
    assert.equal(speech(ev), "谢谢粉丝团2级的柠檬的30元醒目留言：主播加油");
    const empty = makeEvent(EventKind.SuperChat, { price: 30, content: "" });
    assert.equal(speech(empty), "谢谢柠檬的30元醒目留言！");
  });

  it("大航海区分开通与续费", () => {
    const open = makeEvent(EventKind.Guard, { guardLevel: 3, fanLevel: 10 });
    assert.equal(speech(open, first), "哇，欢迎柠檬上船，谢谢你开通舰长，爱你哟！");
    const renew = makeEvent(EventKind.Guard, { guardLevel: 1, renew: true });
    assert.equal(speech(renew, first), "谢谢柠檬续费总督，一直陪着主播，好感动呀！");
    const unknown = makeEvent(EventKind.Guard, { guardLevel: 9 });
    assert.equal(speech(unknown, first), "哇，欢迎柠檬上船，谢谢你开通大航海，爱你哟！");
  });
});
