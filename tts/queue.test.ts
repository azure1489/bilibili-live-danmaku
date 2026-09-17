import assert from "node:assert/strict";
import { getEventListeners } from "node:events";
import { describe, it } from "node:test";
import { EventKind } from "./event";
import { EventQueue } from "./queue";
import { makeEvent } from "./testing";

describe("EventQueue", () => {
  it("按优先级出队", async () => {
    const queue = new EventQueue();
    for (const kind of [EventKind.Like, EventKind.Danmaku, EventKind.Fansclub, EventKind.Gift, EventKind.Guard, EventKind.SuperChat]) {
      queue.push(makeEvent(kind));
    }
    const order = [];
    while (queue.size) order.push((await queue.pop())!.kind);
    assert.deepEqual(order, [
      EventKind.SuperChat,
      EventKind.Guard,
      EventKind.Gift,
      EventKind.Fansclub,
      EventKind.Danmaku,
      EventKind.Like,
    ]);
  });

  it("满时丢弃等级最低中最旧的一条", async () => {
    const queue = new EventQueue();
    const events = [3, 1, 1, 2, 5].map((fanLevel, i) =>
      makeEvent(EventKind.Danmaku, { fanLevel, content: `d${i}` }),
    );
    for (const ev of events) assert.equal(queue.push(ev), undefined);
    const dropped = queue.push(makeEvent(EventKind.Danmaku, { fanLevel: 1, content: "new" }));
    assert.equal(dropped?.content, "d1");
    const contents = [];
    while (queue.size) contents.push((await queue.pop())!.content);
    assert.deepEqual(contents, ["d0", "d2", "d3", "d4", "new"]);
  });

  it("新事件等级严格最低时直接丢弃新事件", () => {
    const queue = new EventQueue();
    for (let i = 0; i < 5; i++) queue.push(makeEvent(EventKind.Danmaku, { fanLevel: 2 }));
    const ev = makeEvent(EventKind.Danmaku, { fanLevel: 1 });
    assert.equal(queue.push(ev), ev);
    assert.equal(queue.size, 5);
  });

  it("SC 与大航海永不丢弃", () => {
    const queue = new EventQueue();
    for (let i = 0; i < 100; i++) {
      assert.equal(queue.push(makeEvent(EventKind.SuperChat)), undefined);
      assert.equal(queue.push(makeEvent(EventKind.Guard)), undefined);
    }
    assert.equal(queue.size, 200);
  });

  it("容量为 0 时丢弃新事件", () => {
    const queue = new EventQueue({
      [EventKind.SuperChat]: 0,
      [EventKind.Guard]: 0,
      [EventKind.Gift]: 0,
      [EventKind.Fansclub]: 0,
      [EventKind.Danmaku]: 0,
      [EventKind.Like]: 0,
    });
    const ev = makeEvent(EventKind.Gift);
    assert.equal(queue.push(ev), ev);
    assert.equal(queue.size, 0);
  });

  it("removeWhere 移除匹配的事件", async () => {
    const queue = new EventQueue();
    queue.push(makeEvent(EventKind.SuperChat, { scId: "1" }));
    queue.push(makeEvent(EventKind.SuperChat, { scId: "2" }));
    queue.push(makeEvent(EventKind.Danmaku));
    assert.equal(queue.removeWhere((ev) => ev.scId === "1"), 1);
    assert.equal(queue.size, 2);
    assert.equal((await queue.pop())?.scId, "2");
  });

  it("队列为空时等待新事件，并移除 abort 监听", async () => {
    const queue = new EventQueue();
    const controller = new AbortController();
    const pending = queue.pop(controller.signal);
    assert.equal(getEventListeners(controller.signal, "abort").length, 1);
    const ev = makeEvent(EventKind.Gift);
    assert.equal(queue.push(ev), undefined);
    assert.equal(await pending, ev);
    assert.equal(queue.size, 0);
    assert.equal(getEventListeners(controller.signal, "abort").length, 0);
  });

  it("等待时取消返回 undefined，之后可以再次等待", async () => {
    const queue = new EventQueue();
    const controller = new AbortController();
    const pending = queue.pop(controller.signal);
    controller.abort();
    assert.equal(await pending, undefined);
    const next = queue.pop();
    queue.push(makeEvent(EventKind.Like));
    assert.equal((await next)?.kind, EventKind.Like);
  });

  it("signal 已取消时立即返回", async () => {
    const queue = new EventQueue();
    queue.push(makeEvent(EventKind.Like));
    assert.equal(await queue.pop(AbortSignal.abort()), undefined);
    assert.equal(queue.size, 1);
  });

  it("不允许多个等待者", async () => {
    const queue = new EventQueue();
    const controller = new AbortController();
    const pending = queue.pop(controller.signal);
    await assert.rejects(queue.pop(), /只允许一个等待者/);
    controller.abort();
    await pending;
  });
});
