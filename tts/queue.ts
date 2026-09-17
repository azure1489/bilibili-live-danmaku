import { EventKind, LiveEvent } from "./event";

export type QueueCapacity = Record<EventKind, number>;

/** 各类事件的队列容量：SC 与上舰永不丢弃 */
export const DEFAULT_CAPACITY: QueueCapacity = {
  [EventKind.SuperChat]: Infinity,
  [EventKind.Guard]: Infinity,
  [EventKind.Gift]: 8,
  [EventKind.Fansclub]: 2,
  [EventKind.Danmaku]: 5,
  [EventKind.Like]: 2,
};

const KINDS_BY_PRIORITY = [
  EventKind.SuperChat,
  EventKind.Guard,
  EventKind.Gift,
  EventKind.Fansclub,
  EventKind.Danmaku,
  EventKind.Like,
];

/**
 * 有界优先级队列：SC > 上舰 > 礼物 > 加入粉丝团 > 弹幕 > 点赞；
 * 同级已满时按粉丝团等级丢弃，保证播报内容新鲜。
 */
export class EventQueue {
  private readonly buckets = new Map<EventKind, LiveEvent[]>(
    KINDS_BY_PRIORITY.map((kind) => [kind, []]),
  );
  private waiter?: (ev: LiveEvent) => void;

  constructor(private readonly capacity: QueueCapacity = DEFAULT_CAPACITY) {}

  get size() {
    let size = 0;
    for (const bucket of this.buckets.values()) size += bucket.length;
    return size;
  }

  /**
   * 入队；同级已满时丢弃「粉丝团等级最低中最旧」的一条并返回。
   * 新事件本身等级严格最低时直接丢弃新事件；等级打平丢队列中最旧的。未丢弃返回 undefined。
   */
  push(ev: LiveEvent): LiveEvent | undefined {
    const bucket = this.buckets.get(ev.kind)!;
    let dropped: LiveEvent | undefined;
    if (bucket.length >= this.capacity[ev.kind]) {
      if (bucket.length === 0) return ev;
      let victim = 0;
      for (let i = 1; i < bucket.length; i++) {
        if (bucket[i].fanLevel < bucket[victim].fanLevel) victim = i;
      }
      if (ev.fanLevel < bucket[victim].fanLevel) return ev;
      [dropped] = bucket.splice(victim, 1);
    }
    bucket.push(ev);
    this.wake();
    return dropped;
  }

  /** 移除满足条件的事件，返回移除数量 */
  removeWhere(predicate: (ev: LiveEvent) => boolean): number {
    let removed = 0;
    for (const [kind, bucket] of this.buckets) {
      const kept = bucket.filter((ev) => !predicate(ev));
      removed += bucket.length - kept.length;
      this.buckets.set(kind, kept);
    }
    return removed;
  }

  /** 按优先级出队；队列为空时等待，signal 取消时返回 undefined。同一时间只允许一个等待者 */
  pop(signal?: AbortSignal): Promise<LiveEvent | undefined> {
    if (signal?.aborted) return Promise.resolve(undefined);
    const ev = this.take();
    if (ev) return Promise.resolve(ev);
    if (this.waiter) return Promise.reject(new Error("EventQueue 只允许一个等待者"));
    return new Promise((resolve) => {
      const onAbort = () => {
        this.waiter = undefined;
        resolve(undefined);
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      this.waiter = (ev) => {
        signal?.removeEventListener("abort", onAbort);
        resolve(ev);
      };
    });
  }

  private take(): LiveEvent | undefined {
    for (const kind of KINDS_BY_PRIORITY) {
      const ev = this.buckets.get(kind)!.shift();
      if (ev) return ev;
    }
  }

  private wake() {
    const waiter = this.waiter;
    if (!waiter) return;
    const ev = this.take();
    if (!ev) return;
    this.waiter = undefined;
    waiter(ev);
  }
}
