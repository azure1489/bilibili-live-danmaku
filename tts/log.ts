export type LogLevel = "debug" | "info" | "warn" | "error";

const LEVELS: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };

export type Logger = Record<LogLevel, (msg: string, fields?: Record<string, unknown>) => void>;

export function isLogLevel(value: string): value is LogLevel {
  return Object.hasOwn(LEVELS, value);
}

/** 创建分级日志，格式：时间 级别 消息 key=value */
export function createLogger(
  level: LogLevel,
  write: (line: string) => void = (line) => process.stderr.write(line + "\n"),
): Logger {
  const log = (lv: LogLevel) => (msg: string, fields: Record<string, unknown> = {}) => {
    if (LEVELS[lv] < LEVELS[level]) return;
    const kv = Object.entries(fields).map(([k, v]) => ` ${k}=${formatValue(v)}`);
    write(`${new Date().toISOString()} ${lv.toUpperCase()} ${msg}${kv.join("")}`);
  };
  return { debug: log("debug"), info: log("info"), warn: log("warn"), error: log("error") };
}

function formatValue(value: unknown) {
  if (value instanceof Error) {
    // fetch 等错误的具体原因在 cause 中，如 ECONNRESET
    const code = (value.cause as { code?: unknown } | undefined)?.code;
    return JSON.stringify(code ? `${value.message} (${code})` : value.message);
  }
  if (typeof value === "string" || typeof value === "object") return JSON.stringify(value);
  return String(value);
}
