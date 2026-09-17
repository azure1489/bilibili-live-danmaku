import { LiveWS, WSClientOptions, parseLiveConfig } from "../src";
import { Logger } from "./log";
import { RawMessage } from "./parse";
import { RoomInfo } from "./pipeline";
import { sleep as defaultSleep } from "./sleep";

type SourceEventType = "CONNECT_SUCCESS" | "HEARTBEAT_REPLY" | "MESSAGE" | "error" | "close" | "error:decode";

/** 直播间连接（LiveWS 的最小接口，便于测试替换） */
export interface LiveConnection {
  addEventListener(type: SourceEventType, listener: (ev: any) => void, options?: AddEventListenerOptions): void;
  close(): void;
}

/** 用到的 API（BilibiliApiClient 的子集） */
export interface SourceClient {
  cookies: { get(key: string): string | undefined };
  initCookie(): Promise<void>;
  liveRoomInit(params: { id: number }): Promise<{ data: any }>;
  xliveGetDanmuInfo(params: { id: number }): Promise<{ data: any }>;
}

export interface SourceOptions {
  roomId: number;
  client: SourceClient;
  logger: Logger;
  handleMessage: (msg: RawMessage) => void;
  onRoom: (room: RoomInfo) => void;
  createLive?: (roomId: number, options: WSClientOptions) => LiveConnection;
  sleep?: (ms: number, signal?: AbortSignal) => Promise<void>;
  /** 等待 CONNECT_SUCCESS 的超时 */
  handshakeTimeout?: number;
  /** 多久没收到心跳回复视为断线 */
  heartbeatTimeout?: number;
  /** 心跳检查间隔 */
  watchdogInterval?: number;
  /** 重连退避：初始值、最大值、连接稳定多久后重置 */
  backoff?: { min: number; max: number; resetAfter: number };
}

/** 维持直播间连接：断线、握手超时、心跳超时后按退避重连 */
export class LiveSource {
  private readonly createLive: (roomId: number, options: WSClientOptions) => LiveConnection;
  private readonly sleep: (ms: number, signal?: AbortSignal) => Promise<void>;

  constructor(private readonly options: SourceOptions) {
    this.createLive = options.createLive ?? ((roomId, config) => new LiveWS(roomId, config));
    this.sleep = options.sleep ?? defaultSleep;
  }

  /** 持续运行直到 stop 取消 */
  async run(stop: AbortSignal) {
    const { logger } = this.options;
    const { min, max, resetAfter } = this.options.backoff ?? { min: 2000, max: 30_000, resetAfter: 60_000 };
    let backoff = min;
    while (!stop.aborted) {
      let connectedAt: number | undefined;
      try {
        connectedAt = await this.runOnce(stop);
      } catch (err) {
        if (stop.aborted) break;
        logger.warn("连接直播间失败", { err });
      }
      if (stop.aborted) break;
      // 连接稳定一段时间后断开，重置退避
      if (connectedAt !== undefined && Date.now() - connectedAt >= resetAfter) backoff = min;
      logger.info("等待重连", { wait: backoff });
      await this.sleep(backoff, stop);
      backoff = Math.min(backoff * 2, max);
    }
  }

  /** 建立一次连接，断开后返回连接成功的时间（未连接成功返回 undefined） */
  private async runOnce(stop: AbortSignal): Promise<number | undefined> {
    const { client, logger } = this.options;
    if (!client.cookies.get("buvid3")) await client.initCookie();
    if (stop.aborted) return;

    const init = (await client.liveRoomInit({ id: this.options.roomId })).data;
    if (stop.aborted) return;
    const room: RoomInfo = {
      roomId: Number(init.room_id),
      anchorUid: Number(init.uid),
      // live_status：0 未开播，1 直播中，2 轮播
      live: init.live_status === 1,
    };
    this.options.onRoom(room);

    const info = (await client.xliveGetDanmuInfo({ id: room.roomId })).data;
    if (stop.aborted) return;
    const config: WSClientOptions = {
      ...parseLiveConfig(info),
      buvid: client.cookies.get("buvid3"),
      uid: Number.parseInt(client.cookies.get("DedeUserID") ?? "") || 0,
      decodeProtobuf: true,
    };

    return new Promise((resolve) => {
      const round = new AbortController();
      let live: LiveConnection | undefined;
      let connectedAt: number | undefined;
      let lastHeartbeat = Date.now();
      let handshakeTimer: ReturnType<typeof setTimeout> | undefined;
      let watchdog: ReturnType<typeof setInterval> | undefined;

      // 结束本轮连接，多次触发只处理一次；不等待 close 事件（可能延迟数十秒）
      const finish = (reason: string, err?: unknown) => {
        if (round.signal.aborted) return;
        round.abort();
        clearTimeout(handshakeTimer);
        clearInterval(watchdog);
        stop.removeEventListener("abort", onStop);
        if (!stop.aborted) logger.warn("直播间连接断开", { reason, ...(err ? { err } : {}) });
        try {
          live?.close();
        } catch {}
        resolve(connectedAt);
      };
      const onStop = () => finish("stop");

      stop.addEventListener("abort", onStop, { once: true });
      handshakeTimer = setTimeout(() => finish("握手超时"), this.options.handshakeTimeout ?? 15_000);
      watchdog = setInterval(() => {
        const heartbeatTimeout = this.options.heartbeatTimeout ?? 70_000;
        if (connectedAt !== undefined && Date.now() - lastHeartbeat > heartbeatTimeout) {
          finish("心跳超时");
        }
      }, this.options.watchdogInterval ?? 5000);

      try {
        live = this.createLive(room.roomId, config);
      } catch (err) {
        finish("创建连接失败", err);
        return;
      }

      // 所有监听挂在本轮的 signal 上，旧连接的迟到事件不会再被处理
      const on = (type: SourceEventType, listener: (ev: any) => void) =>
        live!.addEventListener(
          type,
          (ev) => {
            if (!round.signal.aborted) listener(ev);
          },
          { signal: round.signal },
        );

      on("CONNECT_SUCCESS", () => {
        connectedAt = lastHeartbeat = Date.now();
        clearTimeout(handshakeTimer);
        logger.info("已连接直播间", { roomId: room.roomId });
      });
      on("HEARTBEAT_REPLY", () => {
        lastHeartbeat = Date.now();
      });
      on("MESSAGE", (ev) => {
        // 监听器中抛出的异常会导致进程退出，必须在此兜住
        try {
          this.options.handleMessage(ev.data);
        } catch (err) {
          logger.warn("处理消息出错", { cmd: ev.data?.cmd, err });
        }
      });
      on("error:decode", (ev) => logger.debug("消息解码失败", { err: ev.error }));
      on("error", (ev) => finish("连接错误", ev.error ?? ev.message));
      on("close", () => finish("连接关闭"));
    });
  }
}
