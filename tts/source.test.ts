import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { WSClientOptions } from "../src";
import { RawMessage } from "./parse";
import { RoomInfo } from "./pipeline";
import { LiveSource, SourceClient, SourceOptions } from "./source";
import { memoryLogger, waitFor } from "./testing";

class FakeLive extends EventTarget {
  closed = 0;

  constructor(
    readonly roomId: number,
    readonly config: WSClientOptions,
  ) {
    super();
  }

  close() {
    this.closed++;
  }

  emit(type: string, fields: Record<string, unknown> = {}) {
    this.dispatchEvent(Object.assign(new Event(type), fields));
  }
}

function fakeClient(options: { cookies?: Record<string, string>; failures?: number } = {}) {
  const cookies = new Map(Object.entries(options.cookies ?? { buvid3: "b3", DedeUserID: "42" }));
  let failures = options.failures ?? 0;
  const calls = { initCookie: 0, roomInit: 0 };
  const client: SourceClient = {
    cookies,
    async initCookie() {
      calls.initCookie++;
      cookies.set("buvid3", "generated");
    },
    async liveRoomInit({ id }) {
      calls.roomInit++;
      if (failures > 0) {
        failures--;
        throw new Error("network");
      }
      return { data: { room_id: id + 1, uid: 777, live_status: 1 } };
    },
    async xliveGetDanmuInfo() {
      return { data: { token: "key", host_list: [{ host: "example.com" }] } };
    },
  };
  return { client, calls };
}

function setup(overrides: Partial<SourceOptions> & { failures?: number; cookies?: Record<string, string> } = {}) {
  const lives: FakeLive[] = [];
  const messages: RawMessage[] = [];
  const rooms: RoomInfo[] = [];
  const logger = memoryLogger();
  const { client, calls } = fakeClient(overrides);
  const source = new LiveSource({
    roomId: 100,
    client,
    logger,
    handleMessage: (msg) => messages.push(msg),
    onRoom: (room) => rooms.push(room),
    createLive: (roomId, config) => {
      const live = new FakeLive(roomId, config);
      lives.push(live);
      return live;
    },
    handshakeTimeout: 1000,
    heartbeatTimeout: 1000,
    watchdogInterval: 5,
    backoff: { min: 20, max: 40, resetAfter: 60_000 },
    ...overrides,
  });
  const controller = new AbortController();
  const running = source.run(controller.signal);
  const stop = async () => {
    controller.abort();
    await running;
  };
  return { source, lives, messages, rooms, logger, calls, stop };
}

describe("LiveSource", () => {
  it("连接直播间并转发消息", async () => {
    const { lives, messages, rooms, stop } = setup();
    await waitFor(() => lives.length === 1);
    const [live] = lives;
    assert.equal(live.roomId, 101);
    assert.equal(live.config.address, "wss://example.com/sub");
    assert.equal(live.config.key, "key");
    assert.equal(live.config.buvid, "b3");
    assert.equal(live.config.uid, 42);
    assert.equal(live.config.decodeProtobuf, true);
    assert.deepEqual(rooms, [{ roomId: 101, anchorUid: 777, live: true }]);

    live.emit("CONNECT_SUCCESS");
    live.emit("MESSAGE", { data: { cmd: "DANMU_MSG" } });
    assert.deepEqual(messages, [{ cmd: "DANMU_MSG" }]);
    await stop();
    assert.equal(live.closed, 1);
  });

  it("缺少 buvid3 时先初始化 cookie", async () => {
    const { lives, calls, stop } = setup({ cookies: {} });
    await waitFor(() => lives.length === 1);
    assert.equal(calls.initCookie, 1);
    assert.equal(lives[0].config.buvid, "generated");
    assert.equal(lives[0].config.uid, 0);
    await stop();
  });

  it("error 与 close 同时触发只重连一次，旧连接的迟到事件被忽略", async () => {
    const { lives, messages, stop } = setup();
    await waitFor(() => lives.length === 1);
    const [old] = lives;
    old.emit("CONNECT_SUCCESS");
    old.emit("error", { error: new Error("boom") });
    old.emit("close");
    await waitFor(() => lives.length === 2);
    await new Promise((r) => setTimeout(r, 100));
    assert.equal(lives.length, 2);
    assert.equal(old.closed, 1);

    old.emit("MESSAGE", { data: { cmd: "OLD" } });
    lives[1].emit("MESSAGE", { data: { cmd: "NEW" } });
    assert.deepEqual(messages, [{ cmd: "NEW" }]);
    await stop();
  });

  it("握手超时后重连", async () => {
    const { lives, logger, stop } = setup({ handshakeTimeout: 30 });
    await waitFor(() => lives.length === 2);
    assert.equal(lives[0].closed, 1);
    assert.ok(logger.lines.some((line) => line.includes("握手超时")));
    await stop();
  });

  it("心跳超时后重连，收到心跳时保持连接", async () => {
    const { lives, logger, stop } = setup({ heartbeatTimeout: 60 });
    await waitFor(() => lives.length === 1);
    const [live] = lives;
    live.emit("CONNECT_SUCCESS");
    const keepAlive = setInterval(() => live.emit("HEARTBEAT_REPLY"), 10);
    await new Promise((r) => setTimeout(r, 150));
    assert.equal(lives.length, 1);
    clearInterval(keepAlive);
    await waitFor(() => lives.length === 2);
    assert.ok(logger.lines.some((line) => line.includes("心跳超时")));
    await stop();
  });

  it("接口失败时按退避重试", async () => {
    const { lives, calls, logger, stop } = setup({ failures: 2 });
    await waitFor(() => lives.length === 1);
    assert.equal(calls.roomInit, 3);
    assert.ok(logger.lines.some((line) => line.includes("连接直播间失败")));
    const waits = logger.lines
      .filter((line) => line.includes("等待重连"))
      .map((line) => Number(line.match(/wait=(\d+)/)?.[1]));
    assert.deepEqual(waits, [20, 40]);
    await stop();
  });

  it("退避期间取消立即退出", async () => {
    const { lives, stop } = setup({ backoff: { min: 60_000, max: 60_000, resetAfter: 60_000 } });
    await waitFor(() => lives.length === 1);
    lives[0].emit("close");
    const started = Date.now();
    await stop();
    assert.ok(Date.now() - started < 500);
  });

  it("处理消息抛出异常时不会中断", async () => {
    const { lives, logger, stop } = setup({
      handleMessage: () => {
        throw new Error("bad message");
      },
    });
    await waitFor(() => lives.length === 1);
    lives[0].emit("MESSAGE", { data: { cmd: "DANMU_MSG" } });
    assert.ok(logger.lines.some((line) => line.includes("处理消息出错") && line.includes("bad message")));
    await stop();
  });

  it("创建连接失败时重连", async () => {
    let attempts = 0;
    const { logger, stop } = setup({
      createLive: () => {
        attempts++;
        throw new Error("no websocket");
      },
    });
    await waitFor(() => attempts === 2);
    assert.ok(logger.lines.some((line) => line.includes("创建连接失败")));
    await stop();
  });
});
