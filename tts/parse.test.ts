import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  fanLevelOf,
  parseDanmaku,
  parseGift,
  parseGuard,
  parseLike,
  parseSuperChat,
  parseSuperChatDelete,
  truncate,
} from "./parse";
import { simpleGift } from "./testing";

const ANCHOR = 5_000_000_001;

describe("fanLevelOf", () => {
  it("只认本主播的勋章", () => {
    assert.equal(fanLevelOf({ ruid: ANCHOR, level: 7 }, ANCHOR), 7);
    assert.equal(fanLevelOf({ ruid: 123, level: 7 }, ANCHOR), 0);
    assert.equal(fanLevelOf(undefined, ANCHOR), 0);
    assert.equal(fanLevelOf({ ruid: 0, level: 7 }, 0), 0);
  });
});

describe("truncate", () => {
  it("按字符截断", () => {
    assert.equal(truncate("😀😀😀", 2), "😀😀");
    assert.equal(truncate("abc", 5), "abc");
  });
});

describe("parseGift", () => {
  it("经过真实 protobuf 解码，int64 转为 number", () => {
    const uid = 3_546_000_000_000_123;
    const gift = parseGift(
      simpleGift({ uid, anchorUid: ANCHOR, medalLevel: 12, superBatchGiftNum: 3, batchComboId: "batch:abc" }),
      ANCHOR,
    );
    assert.deepEqual(gift, {
      sender: { uid, nickname: "柠檬", fanLevel: 12, hasAnchorMedal: true, isBlind: false },
      items: [
        {
          giftId: 31036,
          giftName: "小花花",
          num: 1,
          price: 100,
          superBatchGiftNum: 3,
          comboTotalCoin: 300,
          batchComboId: "batch:abc",
          comboStayTime: 5,
        },
      ],
    });
  });

  it("勋章不属于本主播时等级为 0", () => {
    const gift = parseGift(simpleGift({ anchorUid: 123, medalLevel: 20 }), ANCHOR);
    assert.equal(gift?.sender.fanLevel, 0);
    assert.equal(gift?.sender.hasAnchorMedal, false);
  });

  it("没有勋章与盲盒", () => {
    const gift = parseGift(simpleGift({ blind: true }), ANCHOR);
    assert.equal(gift?.sender.hasAnchorMedal, false);
    assert.equal(gift?.sender.isBlind, true);
  });

  it("未解码时返回 undefined", () => {
    assert.equal(parseGift({ cmd: "SEND_GIFT_V2", data: { pb: "" } }, ANCHOR), undefined);
  });
});

describe("parseDanmaku", () => {
  function danmakuMsg(info0: unknown[], info3: unknown[] = []) {
    return { cmd: "DANMU_MSG", info: [info0, "你好[dog]", [42, "柠檬", 0], info3] };
  }

  it("优先使用 user.medal", () => {
    const info0: unknown[] = [];
    info0[12] = 0;
    info0[15] = { user: { medal: { ruid: ANCHOR, level: 8 }, base: { name: "柠檬" } } };
    assert.deepEqual(parseDanmaku(danmakuMsg(info0), ANCHOR), {
      uid: 42,
      nickname: "柠檬",
      content: "你好[dog]",
      isEmoticon: false,
      fanLevel: 8,
    });
  });

  it("没有 user.medal 时使用 info[3]", () => {
    const info3: unknown[] = [6, "柠檬团", "主播", 1];
    info3[12] = ANCHOR;
    assert.equal(parseDanmaku(danmakuMsg([], info3), ANCHOR)?.fanLevel, 6);
    info3[12] = 1;
    assert.equal(parseDanmaku(danmakuMsg([], info3), ANCHOR)?.fanLevel, 0);
  });

  it("识别表情包弹幕", () => {
    const info0: unknown[] = [];
    info0[12] = 1;
    assert.equal(parseDanmaku(danmakuMsg(info0), ANCHOR)?.isEmoticon, true);
  });

  it("格式不符时返回 undefined", () => {
    assert.equal(parseDanmaku({ cmd: "DANMU_MSG" }, ANCHOR), undefined);
    assert.equal(parseDanmaku({ cmd: "DANMU_MSG", info: [[], 1] }, ANCHOR), undefined);
  });
});

describe("parseLike", () => {
  it("读取昵称与 uid", () => {
    assert.deepEqual(parseLike({ data: { uid: 1, uname: "柠檬" } }), { uid: 1, nickname: "柠檬" });
    assert.deepEqual(parseLike({ data: { uinfo: { base: { name: "橘子" } } } }), { uid: 0, nickname: "橘子" });
    assert.equal(parseLike({ data: {} }), undefined);
    assert.equal(parseLike({}), undefined);
  });
});

describe("parseSuperChat", () => {
  it("读取 SC 字段并截断内容", () => {
    const sc = parseSuperChat(
      {
        data: {
          id: 99,
          uid: 42,
          price: 30,
          message: ` ${"字".repeat(120)} `,
          user_info: { uname: "柠檬" },
          uinfo: { medal: { ruid: ANCHOR, level: 4 } },
        },
      },
      ANCHOR,
    );
    assert.deepEqual(sc, {
      id: "99",
      uid: 42,
      nickname: "柠檬",
      fanLevel: 4,
      content: "字".repeat(100),
      price: 30,
    });
  });

  it("没有 uinfo 时使用 medal_info，没有 id 时用 uid 与时间", () => {
    const sc = parseSuperChat(
      { data: { uid: 42, ts: 1700, price: 50, message: "hi", medal_info: { target_id: ANCHOR, medal_level: 9 } } },
      ANCHOR,
    );
    assert.equal(sc?.id, "42:1700");
    assert.equal(sc?.fanLevel, 9);
    assert.equal(sc?.nickname, "");
  });
});

describe("parseSuperChatDelete", () => {
  it("兼容数字与字符串 id", () => {
    assert.deepEqual(parseSuperChatDelete({ data: { ids: [1, "2"] } }), ["1", "2"]);
    assert.deepEqual(parseSuperChatDelete({ data: {} }), []);
  });
});

describe("parseGuard", () => {
  it("读取开通信息", () => {
    const guard = parseGuard({
      data: {
        sender_uinfo: { uid: 42, base: { name: "柠檬" } },
        guard_info: { guard_level: 3, start_time: 100 },
        pay_info: { payflow_id: "pay-1" },
        option: { op_type: 1 },
      },
    });
    assert.deepEqual(guard, { key: "pay-1", uid: 42, nickname: "柠檬", guardLevel: 3, renew: false });
  });

  it("续费与字段兜底", () => {
    const guard = parseGuard({
      data: {
        guard_info: { guard_level: 2, start_time: 100, op_type: 2 },
        toast_msg: "<%橘子%> 续费了提督",
      },
    });
    assert.deepEqual(guard, { key: "0:2:100", uid: 0, nickname: "橘子", guardLevel: 2, renew: true });
  });

  it("缺少大航海等级时返回 undefined", () => {
    assert.equal(parseGuard({ data: { guard_info: {} } }), undefined);
    assert.equal(parseGuard({}), undefined);
  });
});
