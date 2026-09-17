import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EventKind, LiveEvent } from "./event";
import { EventQueue } from "./queue";
import { Speaker } from "./speaker";
import { makeEvent, memoryLogger, waitFor } from "./testing";

type Reply = number | Error;

function setup(options: { replies?: Reply[]; dryRun?: boolean } = {}) {
  const queue = new EventQueue();
  const logger = memoryLogger();
  const replies = [...(options.replies ?? [])];
  const spoken: string[] = [];
  const sleeps: number[] = [];
  const tts = {
    async speak(text: string) {
      spoken.push(text);
      const reply = replies.shift() ?? 0;
      if (reply instanceof Error) throw reply;
      return reply;
    },
  };
  const speaker = new Speaker({
    queue,
    tts,
    dryRun: options.dryRun ?? false,
    logger,
    sleep: async (ms) => {
      sleeps.push(ms);
    },
    random: () => 0,
  });
  const controller = new AbortController();
  const run = (events: LiveEvent[]) => {
    for (const ev of events) queue.push(ev);
    return speaker.run(controller.signal);
  };
  return { spoken, sleeps, logger, run, stop: () => controller.abort() };
}

describe("Speaker", () => {
  it("按优先级逐条直接提交，不因服务端积压暂停", async () => {
    const { spoken, sleeps, logger, run, stop } = setup({ replies: [10, 20, 30] });
    const running = run([
      makeEvent(EventKind.Danmaku, { content: "一" }),
      makeEvent(EventKind.Danmaku, { content: "二" }),
      makeEvent(EventKind.SuperChat, { price: 30, content: "加油" }),
    ]);
    await waitFor(() => spoken.length === 3);
    stop();
    await running;
    assert.deepEqual(spoken, ["谢谢柠檬的30元醒目留言：加油", "柠檬说：一", "柠檬说：二"]);
    assert.deepEqual(sleeps, []);
    assert.ok(logger.lines.some((line) => line.includes("position=30")));
  });

  it("普通事件提交失败直接丢弃", async () => {
    const { spoken, sleeps, logger, run, stop } = setup({ replies: [new Error("boom"), 0] });
    const running = run([
      makeEvent(EventKind.Danmaku, { content: "一" }),
      makeEvent(EventKind.Danmaku, { content: "二" }),
    ]);
    await waitFor(() => spoken.length === 2);
    stop();
    await running;
    assert.deepEqual(sleeps, []);
    assert.ok(logger.lines.some((line) => line.includes("已丢弃") && line.includes("boom")));
  });

  it("SC 提交失败最多重试 2 次", async () => {
    const { spoken, sleeps, run, stop } = setup({
      replies: [new Error("1"), new Error("2"), 0, new Error("3"), new Error("4"), new Error("5")],
    });
    const running = run([
      makeEvent(EventKind.SuperChat, { price: 30, content: "加油" }),
      makeEvent(EventKind.Guard, { guardLevel: 3 }),
    ]);
    await waitFor(() => spoken.length === 6);
    stop();
    await running;
    assert.deepEqual(sleeps, [1000, 1000, 1000, 1000]);
  });

  it("dry-run 只打印文案", async () => {
    const { spoken, logger, run, stop } = setup({ dryRun: true });
    const running = run([makeEvent(EventKind.Danmaku, { content: "你好" })]);
    await waitFor(() => logger.lines.some((line) => line.includes("dry-run")));
    stop();
    await running;
    assert.deepEqual(spoken, []);
    assert.ok(logger.lines.some((line) => line.includes("柠檬说：你好")));
  });

  it("取消后退出", async () => {
    const { run, stop } = setup();
    const running = run([]);
    stop();
    await running;
  });
});
