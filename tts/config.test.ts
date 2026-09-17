import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ConfigError, DEFAULT_CONFIG_PATH, loadConfig } from "./config";

function load(argv: string[], files: Record<string, string> = {}, env: Record<string, string> = {}) {
  return loadConfig(argv, { env, readFile: (path) => files[path] });
}

function assertConfigError(fn: () => unknown, pattern: RegExp, exitCode = 2) {
  assert.throws(fn, (err: unknown) => {
    assert.ok(err instanceof ConfigError);
    assert.match(err.message, pattern);
    assert.equal(err.exitCode, exitCode);
    return true;
  });
}

describe("loadConfig", () => {
  it("使用默认值", () => {
    assert.deepEqual(load(["573893"], {}, { API_CLIENT_COOKIE: "SESSDATA=x" }), {
      roomId: 573893,
      ttsServer: "http://localhost:8080",
      voice: "",
      logLevel: "info",
      dryRun: false,
      onlyLive: true,
      enable: { danmaku: true, gift: true, like: true, fansclub: true, superchat: true, guard: true },
      cookie: "SESSDATA=x",
    });
  });

  it("读取默认配置文件，命令行优先", () => {
    const files = {
      [DEFAULT_CONFIG_PATH]: [
        "room_id: 1",
        "tts_server: http://tts:9000",
        "voice: v1",
        "log_level: debug",
        "dry_run: true",
        "only_live: false",
        "enable: { like: false }",
      ].join("\n"),
    };
    const fromFile = load([], files);
    assert.equal(fromFile.roomId, 1);
    assert.equal(fromFile.ttsServer, "http://tts:9000");
    assert.equal(fromFile.voice, "v1");
    assert.equal(fromFile.logLevel, "debug");
    assert.equal(fromFile.dryRun, true);
    assert.equal(fromFile.onlyLive, false);
    assert.equal(fromFile.enable.like, false);
    assert.equal(fromFile.enable.gift, true);

    const fromCli = load(
      ["--tts-server", "http://cli", "--voice", "", "--log-level", "warn", "--no-dry-run", "--only-live", "2"],
      files,
    );
    assert.equal(fromCli.roomId, 2);
    assert.equal(fromCli.ttsServer, "http://cli");
    assert.equal(fromCli.voice, "");
    assert.equal(fromCli.logLevel, "warn");
    assert.equal(fromCli.dryRun, false);
    assert.equal(fromCli.onlyLive, true);
  });

  it("--config 指定文件", () => {
    const config = load(["--config", "my.yaml", "--dry-run", "--no-only-live"], { "my.yaml": "room_id: '3'" });
    assert.equal(config.roomId, 3);
    assert.equal(config.dryRun, true);
    assert.equal(config.onlyLive, false);
    assertConfigError(() => load(["--config", "missing.yaml", "1"]), /配置文件不存在/);
  });

  it("空配置文件", () => {
    assert.equal(load(["1"], { [DEFAULT_CONFIG_PATH]: "" }).roomId, 1);
  });

  it("显示帮助", () => {
    assertConfigError(() => load(["--help"]), /用法/, 0);
  });

  it("参数错误", () => {
    assertConfigError(() => load([]), /未指定房间号/);
    assertConfigError(() => load(["abc"]), /房间号/);
    assertConfigError(() => load(["0"]), /房间号/);
    assertConfigError(() => load(["1", "2"]), /只能指定一个房间号/);
    assertConfigError(() => load(["1.5"]), /房间号/);
    assertConfigError(() => load(["--max-queue", "2", "1"]), /max-queue/);
    assertConfigError(() => load(["--log-level", "verbose", "1"]), /log_level/);
    assertConfigError(() => load(["--unknown", "1"]), /unknown/);
  });

  it("配置文件错误", () => {
    const withFile = (text: string) => () => load(["1"], { [DEFAULT_CONFIG_PATH]: text });
    assertConfigError(withFile("room: 1"), /未知配置项：room/);
    assertConfigError(withFile("- 1"), /格式错误/);
    assertConfigError(withFile("a: [b"), /解析失败/);
    assertConfigError(withFile("dry_run: yes please"), /dry_run/);
    assertConfigError(withFile("enable: { chat: true }"), /未知事件：chat/);
    assertConfigError(withFile("enable: { gift: 1 }"), /enable.gift/);
    assertConfigError(withFile("enable: [gift]"), /enable 格式错误/);
    assertConfigError(withFile("tts_server: 8080"), /tts_server/);
  });
});
