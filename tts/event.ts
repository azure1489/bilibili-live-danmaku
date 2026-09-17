/** 事件类型，数值即优先级（越大越优先播报） */
export enum EventKind {
  Like = 0,
  Danmaku = 1,
  Fansclub = 2,
  Gift = 3,
  Guard = 4,
  SuperChat = 5,
}

/** 一条待播报的直播间事件 */
export interface LiveEvent {
  kind: EventKind;
  uid: number;
  nickname: string;
  /** 本直播间粉丝团等级，0 = 非团员 */
  fanLevel: number;
  /** 弹幕 / SC 内容 */
  content?: string;
  /** 礼物名 */
  giftName?: string;
  /** 礼物数量 / 点赞人数 */
  count?: number;
  /** 大航海等级：1 总督、2 提督、3 舰长 */
  guardLevel?: number;
  /** 大航海是否为续费 */
  renew?: boolean;
  /** SC 金额（元） */
  price?: number;
  /** SC id */
  scId?: string;
}

type Random = () => number;

// 礼物答谢话术（可爱女主播口吻），随机轮换避免呆板。
const giftThanksSingle = [
  (name: string, gift: string) => `哇，谢谢${name}送的${gift}，么么哒！`,
  (name: string, gift: string) => `收到${name}送的${gift}啦，主播好开心，抱抱你！`,
  (name: string, gift: string) => `谢谢${name}宝贝送的${gift}，比心比心！`,
  (name: string, gift: string) => `${name}送的${gift}，主播收到啦，爱你哟！`,
  (name: string, gift: string) => `谢谢${name}送的${gift}呀，主播超喜欢的！`,
];

const giftThanksMulti = [
  (name: string, count: number, gift: string) => `哇塞，谢谢${name}一口气送的${count}个${gift}，太宠主播啦，么么哒！`,
  (name: string, count: number, gift: string) => `${name}送了${count}个${gift}，主播被你砸中啦，抱抱你！`,
  (name: string, count: number, gift: string) => `谢谢${name}送的${count}个${gift}，好豪气呀，爱你哟！`,
  (name: string, count: number, gift: string) => `收到${name}的${count}个${gift}，主播开心到飞起，比心！`,
];

const likeThanksSingle = [
  (name: string) => `谢谢${name}的点赞，么么哒！`,
  (name: string) => `${name}给主播点赞啦，谢谢你呀，抱抱！`,
  (name: string) => `谢谢${name}的赞赞，爱你哟！`,
];

const likeThanksMulti = [
  (name: string, count: number) => `谢谢${name}等${count}位宝贝的点赞，你们最可爱啦！`,
  (name: string, count: number) => `哇，${name}等${count}位朋友都来点赞啦，谢谢你们，么么哒！`,
];

const fansclubWelcome = [
  (name: string) => `欢迎${name}加入粉丝团，以后就是一家人啦，抱抱！`,
  (name: string) => `${name}加入粉丝团啦，欢迎欢迎，么么哒！`,
];

const guardWelcome = [
  (name: string, guard: string) => `哇，欢迎${name}上船，谢谢你开通${guard}，爱你哟！`,
  (name: string, guard: string) => `感谢${name}开通${guard}，以后就是船上的一家人啦，抱抱！`,
];

const guardRenew = [
  (name: string, guard: string) => `谢谢${name}续费${guard}，一直陪着主播，好感动呀！`,
  (name: string, guard: string) => `${name}续费了${guard}，谢谢你的长情陪伴，么么哒！`,
];

const GUARD_NAMES: Record<number, string> = { 1: "总督", 2: "提督", 3: "舰长" };

/** 昵称打码或缺失时的称呼 */
export const UNKNOWN_NAME = "这位朋友";

/** 未登录时他人昵称会被打码，如 "究***" */
export function isMaskedName(nickname: string) {
  return nickname.includes("***");
}

function pick<T>(pool: T[], random: Random): T {
  return pool[Math.min(Math.floor(random() * pool.length), pool.length - 1)];
}

/** 昵称，打码或缺失时返回通用称呼 */
function displayName(ev: LiveEvent) {
  return !ev.nickname || isMaskedName(ev.nickname) ? UNKNOWN_NAME : ev.nickname;
}

/** 带粉丝团等级前缀的称呼，如 "粉丝团5级的柠檬" */
function speakerName(ev: LiveEvent) {
  const name = displayName(ev);
  if (name === UNKNOWN_NAME || ev.fanLevel <= 0) return name;
  return `粉丝团${ev.fanLevel}级的${name}`;
}

/** 生成播报文案 */
export function speech(ev: LiveEvent, random: Random = Math.random): string {
  switch (ev.kind) {
    case EventKind.Danmaku:
      return `${speakerName(ev)}说：${ev.content}`;
    case EventKind.Gift:
      if ((ev.count ?? 1) > 1) {
        return pick(giftThanksMulti, random)(speakerName(ev), ev.count!, ev.giftName ?? "礼物");
      }
      return pick(giftThanksSingle, random)(speakerName(ev), ev.giftName ?? "礼物");
    case EventKind.Fansclub:
      // 有意不用等级前缀：欢迎语带"粉丝团N级的"很怪
      return pick(fansclubWelcome, random)(displayName(ev));
    case EventKind.Like:
      if ((ev.count ?? 1) > 1) {
        return pick(likeThanksMulti, random)(displayName(ev), ev.count!);
      }
      return pick(likeThanksSingle, random)(displayName(ev));
    case EventKind.SuperChat:
      if (!ev.content) return `谢谢${speakerName(ev)}的${ev.price}元醒目留言！`;
      return `谢谢${speakerName(ev)}的${ev.price}元醒目留言：${ev.content}`;
    case EventKind.Guard: {
      const guard = GUARD_NAMES[ev.guardLevel ?? 0] ?? "大航海";
      return pick(ev.renew ? guardRenew : guardWelcome, random)(displayName(ev), guard);
    }
  }
}
