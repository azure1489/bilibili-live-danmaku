import fs from "node:fs";
import { parseArgs } from "node:util";
import YAML from "yaml";
import { LogLevel, isLogLevel } from "./log";
import { EnableOptions, EventSwitch } from "./pipeline";

export interface Config {
  roomId: number;
  ttsServer: string;
  voice: string;
  logLevel: LogLevel;
  dryRun: boolean;
  onlyLive: boolean;
  /** 跳过主播本人的弹幕 */
  skipAnchorDanmaku: boolean;
  enable: EnableOptions;
  /** 登录 cookie，来自环境变量 API_CLIENT_COOKIE */
  cookie: string;
}

export const DEFAULT_CONFIG_PATH = "tts/config.yaml";

export const USAGE = `用法：npm run tts -- [选项] [房间号]

选项（优先级：命令行 > 配置文件 > 默认值）：
  --config <路径>           配置文件，默认 ${DEFAULT_CONFIG_PATH}（不存在时忽略）
  --tts-server <地址>       tts-server 地址，默认 http://localhost:8080
  --voice <音色>            音色 voice_type，默认使用服务端配置
  --log-level <级别>        debug / info / warn / error，默认 info
  --dry-run                 只打印文案，不提交到 tts-server
  --no-only-live            未开播时也播报
  --no-skip-anchor-danmaku  播报主播本人的弹幕
  -h, --help                显示帮助

登录 cookie 从 .env 的 API_CLIENT_COOKIE 读取，可运行 npm run login 扫码登录。`;

/** 配置错误，exitCode 为 0 表示仅显示帮助 */
export class ConfigError extends Error {
  constructor(
    message: string,
    readonly exitCode = 2,
  ) {
    super(message);
  }
}

const ENABLE_KEYS: EventSwitch[] = ["danmaku", "gift", "like", "fansclub", "superchat", "guard"];

interface FileConfig {
  room_id?: unknown;
  tts_server?: unknown;
  voice?: unknown;
  log_level?: unknown;
  dry_run?: unknown;
  only_live?: unknown;
  skip_anchor_danmaku?: unknown;
  enable?: unknown;
}

const FILE_KEYS = new Set<string>([
  "room_id",
  "tts_server",
  "voice",
  "log_level",
  "dry_run",
  "only_live",
  "skip_anchor_danmaku",
  "enable",
]);

export interface LoadConfigDeps {
  env?: Record<string, string | undefined>;
  readFile?: (path: string) => string | undefined;
}

/** 读取文件，不存在时返回 undefined */
function readFileIfExists(path: string) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return;
    throw err;
  }
}

function intValue(value: unknown, name: string, min: number): number {
  const num = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  if (typeof num !== "number" || !Number.isInteger(num) || num < min) {
    throw new ConfigError(`${name} 必须是不小于 ${min} 的整数，当前值：${String(value)}`);
  }
  return num;
}

function stringValue(value: unknown, name: string): string {
  if (typeof value !== "string") throw new ConfigError(`${name} 必须是字符串`);
  return value;
}

function boolValue(value: unknown, name: string): boolean {
  if (typeof value !== "boolean") throw new ConfigError(`${name} 必须是 true 或 false`);
  return value;
}

function logLevelValue(value: unknown, name: string): LogLevel {
  if (typeof value !== "string" || !isLogLevel(value)) {
    throw new ConfigError(`${name} 必须是 debug / info / warn / error 之一`);
  }
  return value;
}

function parseFile(text: string, path: string): FileConfig {
  let data: unknown;
  try {
    data = YAML.parse(text);
  } catch (err) {
    throw new ConfigError(`配置文件 ${path} 解析失败：${(err as Error).message}`);
  }
  if (data == null) return {};
  if (typeof data !== "object" || Array.isArray(data)) {
    throw new ConfigError(`配置文件 ${path} 格式错误`);
  }
  const unknown = Object.keys(data).filter((key) => !FILE_KEYS.has(key));
  if (unknown.length) {
    throw new ConfigError(`配置文件 ${path} 含未知配置项：${unknown.join(", ")}`);
  }
  return data as FileConfig;
}

function parseEnable(value: unknown, path: string): EnableOptions {
  const enable = Object.fromEntries(ENABLE_KEYS.map((key) => [key, true])) as EnableOptions;
  if (value == null) return enable;
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new ConfigError(`配置文件 ${path} 的 enable 格式错误`);
  }
  for (const [key, flag] of Object.entries(value)) {
    if (!ENABLE_KEYS.includes(key as EventSwitch)) {
      throw new ConfigError(`配置文件 ${path} 的 enable 含未知事件：${key}`);
    }
    enable[key as EventSwitch] = boolValue(flag, `enable.${key}`);
  }
  return enable;
}

/** 解析命令行参数与配置文件 */
export function loadConfig(argv: string[], deps: LoadConfigDeps = {}): Config {
  const env = deps.env ?? process.env;
  const readFile = deps.readFile ?? readFileIfExists;

  let parsed;
  try {
    parsed = parseArgs({
      args: argv,
      allowPositionals: true,
      allowNegative: true,
      options: {
        config: { type: "string" },
        "tts-server": { type: "string" },
        voice: { type: "string" },
        "log-level": { type: "string" },
        "dry-run": { type: "boolean" },
        "only-live": { type: "boolean" },
        "skip-anchor-danmaku": { type: "boolean" },
        help: { type: "boolean", short: "h" },
      },
    });
  } catch (err) {
    throw new ConfigError(`${(err as Error).message}\n\n${USAGE}`);
  }
  const { values: cli, positionals } = parsed;
  if (cli.help) throw new ConfigError(USAGE, 0);
  if (positionals.length > 1) throw new ConfigError(`只能指定一个房间号\n\n${USAGE}`);

  const path = cli.config ?? DEFAULT_CONFIG_PATH;
  const text = readFile(path);
  if (text === undefined && cli.config !== undefined) {
    throw new ConfigError(`配置文件不存在：${path}`);
  }
  const file = text === undefined ? {} : parseFile(text, path);

  const roomId = positionals[0] ?? file.room_id;
  if (roomId === undefined) throw new ConfigError(`未指定房间号\n\n${USAGE}`);

  return {
    roomId: intValue(roomId, "房间号", 1),
    ttsServer: stringValue(cli["tts-server"] ?? file.tts_server ?? "http://localhost:8080", "tts_server"),
    voice: stringValue(cli.voice ?? file.voice ?? "", "voice"),
    logLevel: logLevelValue(cli["log-level"] ?? file.log_level ?? "info", "log_level"),
    dryRun: boolValue(cli["dry-run"] ?? file.dry_run ?? false, "dry_run"),
    onlyLive: boolValue(cli["only-live"] ?? file.only_live ?? true, "only_live"),
    skipAnchorDanmaku: boolValue(
      cli["skip-anchor-danmaku"] ?? file.skip_anchor_danmaku ?? true,
      "skip_anchor_danmaku",
    ),
    enable: parseEnable(file.enable, path),
    cookie: env.API_CLIENT_COOKIE ?? "",
  };
}
