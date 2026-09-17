/**
 * B站直播间 TTS 语音播报
 * 监听弹幕、礼物、点赞、加入粉丝团、SC、上舰，生成文案后提交 tts-server 播放。
 *
 * 用法：npm run tts -- [选项] [房间号]，详见 tts/README.md
 */
import { BilibiliApiClient } from "../src";
import { Config, ConfigError, loadConfig } from "./config";
import { createLogger } from "./log";
import { Pipeline } from "./pipeline";
import { EventQueue } from "./queue";
import { sleep } from "./sleep";
import { LiveSource } from "./source";
import { Speaker } from "./speaker";
import { TtsClient } from "./tts-client";

/** B站接口请求超时 */
const API_TIMEOUT = 10_000;

try {
  process.loadEnvFile(".env");
} catch (err) {
  if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
}

let config: Config;
try {
  config = loadConfig(process.argv.slice(2));
} catch (err) {
  if (!(err instanceof ConfigError)) throw err;
  (err.exitCode ? console.error : console.log)(err.message);
  process.exit(err.exitCode);
}

const logger = createLogger(config.logLevel);
const stop = new AbortController();
const tts = new TtsClient(config.ttsServer, config.voice);

logger.info("启动", { roomId: config.roomId, ttsServer: config.ttsServer, dryRun: config.dryRun });

if (!config.dryRun) {
  try {
    await tts.health();
  } catch (err) {
    logger.error("tts-server 不可达，请先启动 tts-server", { addr: config.ttsServer, err });
    process.exit(1);
  }
}

const client = new BilibiliApiClient({
  cookie: config.cookie,
  fetch: (input, init) =>
    fetch(input, {
      ...init,
      signal: AbortSignal.any([
        stop.signal,
        AbortSignal.timeout(API_TIMEOUT),
        ...(init?.signal ? [init.signal] : []),
      ]),
    }),
});

try {
  const nav = (await client.xapiNav()).data;
  if (nav.isLogin) {
    logger.info("已登录", { uname: nav.uname, uid: nav.mid });
  } else {
    logger.warn("未登录，他人昵称会被打码，可运行 npm run login 扫码登录");
  }
} catch (err) {
  logger.warn("登录状态检查失败", { err });
}

const queue = new EventQueue();
const pipeline = new Pipeline(queue, {
  onlyLive: config.onlyLive,
  skipAnchorDanmaku: config.skipAnchorDanmaku,
  enable: config.enable,
  logger,
});
const speaker = new Speaker({ queue, tts, dryRun: config.dryRun, logger });
const source = new LiveSource({
  roomId: config.roomId,
  client,
  logger,
  handleMessage: (msg) => pipeline.handle(msg),
  onRoom: (room) => pipeline.setRoom(room),
});

const ticker = setInterval(() => pipeline.tick(), 1000);
const tasks = Promise.all([speaker.run(stop.signal), source.run(stop.signal)]);

async function shutdown() {
  if (stop.signal.aborted) return;
  logger.info("正在退出");
  stop.abort();
  clearInterval(ticker);
  // WebSocket 关闭可能延迟数十秒，最多等待 2 秒后直接退出
  await Promise.race([tasks, sleep(2000)]);
  process.exit(0);
}

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);

tasks.catch((err) => {
  logger.error("运行出错", { err });
  process.exit(1);
});
