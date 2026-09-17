# B站直播 TTS 语音播报

监听 B 站直播间的弹幕、礼物、点赞、加入粉丝团、醒目留言（SC）、大航海消息，格式化后提交本地
tts-server（`POST /tts`）进行语音播放。设计参考 lemon-douyinlive（抖音版）。

本目录不会发布到 npm。

## 前置条件

- Node.js 22+
- tts-server 已在本地运行（默认 `http://localhost:8080`）
- 建议先登录：未登录时他人昵称会被打码（如 `究***`）

```bash
npm run login   # 扫码登录，cookie 写入 .env
```

## 使用

```bash
# 直播间号取自 https://live.bilibili.com/<房间号>
npm run tts -- 573893

# 只打印文案，不提交到 tts-server（无需启动 tts-server）
npm run tts -- --dry-run 573893

# 全部参数
npm run tts -- \
  --tts-server http://localhost:8080 \
  --voice yuanhua_lemon_20260607 \
  --log-level info \
  --no-only-live \
  --no-skip-anchor-danmaku \
  573893
```

所有参数都可以写入配置文件（优先级：命令行 > 配置文件 > 默认值）：

```bash
cp tts/config.example.yaml tts/config.yaml   # 编辑后无需命令行参数
npm run tts
npm run tts -- --config /path/to/config.yaml
```

`tts/config.yaml` 已被 git 忽略。登录 cookie 始终从 `.env` 的 `API_CLIENT_COOKIE` 读取。

## 播报规则

| 事件 | 消息 | 处理 | 文案示例 |
|------|------|------|----------|
| SC | `SUPER_CHAT_MESSAGE` | 100 字截断；被删除的 SC 取消播报 | 谢谢粉丝团5级的柠檬的30元醒目留言：主播加油 |
| 大航海 | `USER_TOAST_MSG_V2` | 区分开通 / 续费 | 感谢柠檬开通舰长，以后就是船上的一家人啦，抱抱！ |
| 礼物 | `SEND_GIFT_V2` | 按连击合并，停止连击 6 秒后播报；免费礼物同样播报 | 谢谢粉丝团5级的柠檬送的10个小花花，好豪气呀，爱你哟！ |
| 加入粉丝团 | `SEND_GIFT_V2`（粉丝团灯牌） | 没有本主播勋章的用户送出灯牌；30 秒去重（老成员送灯牌按礼物播报） | 欢迎柠檬加入粉丝团，以后就是一家人啦，抱抱！ |
| 弹幕 | `DANMU_MSG` | 跳过表情包、纯表情码和主播本人弹幕（`skip_anchor_danmaku`）；50 字截断；30 秒去重 | 粉丝团5级的柠檬说：主播好厉害 |
| 点赞 | `LIKE_INFO_V3_CLICK` | 10 秒窗口合并 | 谢谢柠檬等5位宝贝的点赞，你们最可爱啦！ |

事件逐条直接提交到 tts-server，由服务端按队列顺序播放。弹幕很多时服务端队列会持续增长，可通过 `enable.danmaku` 关闭弹幕播报。SC、大航海提交失败时最多重试 2 次。

提交请求进行中（如 tts-server 响应慢或正在重试）时，新事件暂存在本地有界队列，按 SC > 大航海 > 礼物 > 加入粉丝团 > 弹幕 > 点赞 的优先级提交。容量为 SC、大航海不限，礼物 8、粉丝团 2、弹幕 5、点赞 2；满时丢弃「粉丝团等级最低中最旧」的一条。

默认只在直播中播报（`only_live`），下播后继续接收消息但不播报。

连接断开、握手超时或心跳超时后自动重连（退避 2 秒起，最长 30 秒）。Ctrl-C 退出。

## 开发

```bash
npm run test:tts      # tts 单元测试
npm run check:tools   # 类型检查（含 tts、scripts、demo）
npm test              # 全量检查
```

## 目录结构

```
tts/
├── index.ts        # 入口：配置、登录检查、启动与退出
├── config.ts       # 命令行 / YAML 配置
├── event.ts        # 事件类型与播报文案
├── queue.ts        # 有界优先级队列
├── parse.ts        # 原始消息解析
├── aggregate.ts    # 弹幕过滤、礼物连击 / 点赞聚合、去重
├── pipeline.ts     # 消息分发与处理
├── source.ts       # 直播间连接、重连、心跳检测
├── tts-client.ts   # tts-server HTTP 客户端
├── speaker.ts      # 播报调度（提交 tts-server）
├── log.ts / sleep.ts
└── *.test.ts       # 单元测试
```
