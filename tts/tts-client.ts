export interface TtsSubmitter {
  /** 提交一条播报，返回入队后的服务端队列长度 */
  speak(text: string, signal?: AbortSignal): Promise<number>;
}

/** tts-server HTTP 客户端 */
export class TtsClient implements TtsSubmitter {
  private readonly baseUrl: string;

  constructor(
    baseUrl: string,
    private readonly voice = "",
    private readonly timeout = 5000,
  ) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  async speak(text: string, signal?: AbortSignal): Promise<number> {
    const res = await fetch(`${this.baseUrl}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice_type: this.voice || undefined }),
      signal: this.signal(signal),
    });
    const body = await res.text();
    let data: { success?: boolean; error?: string; position?: number } | null = null;
    try {
      data = JSON.parse(body);
    } catch {}
    if (!data || typeof data !== "object") {
      // 非 JSON 响应（如反向代理错误页），用状态码兜底
      throw new Error(`/tts 返回状态码 ${res.status}，响应不是合法 JSON: ${body.slice(0, 200).trim()}`);
    }
    if (!data.success) {
      throw new Error(`tts-server 返回失败: ${data.error ?? `状态码 ${res.status}`}`);
    }
    return Number(data.position) || 0;
  }

  /** 检查 tts-server 是否可达 */
  async health(signal?: AbortSignal): Promise<void> {
    const res = await fetch(`${this.baseUrl}/health`, { signal: this.signal(signal) });
    await res.arrayBuffer();
    if (!res.ok) throw new Error(`/health 返回状态码 ${res.status}`);
  }

  private signal(signal?: AbortSignal) {
    const timeout = AbortSignal.timeout(this.timeout);
    return signal ? AbortSignal.any([signal, timeout]) : timeout;
  }
}
