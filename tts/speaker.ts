import { EventKind, LiveEvent, speech } from "./event";
import { Logger } from "./log";
import { EventQueue } from "./queue";
import { sleep as defaultSleep } from "./sleep";
import { TtsSubmitter } from "./tts-client";

export interface SpeakerOptions {
  queue: EventQueue;
  tts: TtsSubmitter;
  /** 只打印文案，不提交 */
  dryRun: boolean;
  logger: Logger;
  /** 付费消息提交失败后的重试间隔 */
  retryDelayMs?: number;
  sleep?: (ms: number, signal?: AbortSignal) => Promise<void>;
  random?: () => number;
}

/** 付费消息（SC、上舰）提交失败时的最大尝试次数 */
const PAID_ATTEMPTS = 3;

/** 播报调度器：从队列取事件直接提交 /tts，由 tts-server 按队列顺序播放 */
export class Speaker {
  private readonly retryDelayMs: number;
  private readonly sleep: (ms: number, signal?: AbortSignal) => Promise<void>;

  constructor(private readonly options: SpeakerOptions) {
    this.retryDelayMs = options.retryDelayMs ?? 1000;
    this.sleep = options.sleep ?? defaultSleep;
  }

  /** 持续调度直到 signal 取消 */
  async run(signal: AbortSignal) {
    const { queue, dryRun, logger } = this.options;
    while (!signal.aborted) {
      const ev = await queue.pop(signal);
      if (!ev) return;
      const text = speech(ev, this.options.random);
      if (dryRun) {
        logger.info("播报（dry-run）", { text });
        continue;
      }
      const position = await this.submit(ev, text, signal);
      if (position !== undefined) logger.info("已提交播报", { text, position });
    }
  }

  /** 提交播报，失败返回 undefined；付费消息会重试 */
  private async submit(ev: LiveEvent, text: string, signal: AbortSignal) {
    const { tts, logger } = this.options;
    const paid = ev.kind === EventKind.SuperChat || ev.kind === EventKind.Guard;
    const attempts = paid ? PAID_ATTEMPTS : 1;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        return await tts.speak(text, signal);
      } catch (err) {
        if (signal.aborted) return;
        if (attempt < attempts) {
          logger.warn("提交播报失败，稍后重试", { text, attempt, err });
          await this.sleep(this.retryDelayMs, signal);
        } else {
          logger.warn("提交播报失败，已丢弃", { text, err });
        }
      }
    }
  }
}
