import assert from "node:assert/strict";
import http from "node:http";
import { AddressInfo } from "node:net";
import { after, before, describe, it } from "node:test";
import { TtsClient } from "./tts-client";

describe("TtsClient", () => {
  const requests: { url?: string; body: string }[] = [];
  let healthStatus = 200;
  let baseUrl = "";

  const server = http.createServer((req, res) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      requests.push({ url: req.url, body });
      if (req.url === "/health") {
        res.writeHead(healthStatus, { "Content-Type": "application/json" });
        res.end('{"status":"ok"}');
        return;
      }
      const { text } = JSON.parse(body);
      if (text === "ok") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, task_id: "t1", position: 3 }));
      } else if (text === "fail") {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: "text is required" }));
      } else if (text === "slow") {
        setTimeout(() => res.end("{}"), 1000);
      } else {
        res.writeHead(502, { "Content-Type": "text/html" });
        res.end("<html>Bad Gateway</html>");
      }
    });
  });

  before(async () => {
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  after(() => {
    server.closeAllConnections();
    server.close();
  });

  it("提交成功返回 position，并带上音色", async () => {
    const client = new TtsClient(`${baseUrl}/`, "voice-1");
    assert.equal(await client.speak("ok"), 3);
    const last = requests.at(-1)!;
    assert.equal(last.url, "/tts");
    assert.deepEqual(JSON.parse(last.body), { text: "ok", voice_type: "voice-1" });
  });

  it("未设置音色时不传 voice_type", async () => {
    await new TtsClient(baseUrl).speak("ok");
    assert.deepEqual(JSON.parse(requests.at(-1)!.body), { text: "ok" });
  });

  it("服务端返回失败", async () => {
    await assert.rejects(new TtsClient(baseUrl).speak("fail"), /tts-server 返回失败: text is required/);
  });

  it("非 JSON 响应带上状态码", async () => {
    await assert.rejects(new TtsClient(baseUrl).speak("html"), /状态码 502.*Bad Gateway/);
  });

  it("超时或取消时报错", async () => {
    await assert.rejects(new TtsClient(baseUrl, "", 50).speak("slow"));
    await assert.rejects(new TtsClient(baseUrl).speak("slow", AbortSignal.abort()));
  });

  it("健康检查", async () => {
    const client = new TtsClient(baseUrl);
    healthStatus = 200;
    await client.health();
    healthStatus = 503;
    await assert.rejects(client.health(), /状态码 503/);
  });
});
