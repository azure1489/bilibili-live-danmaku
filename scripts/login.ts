/**
 * 扫码登录B站，并将登录cookie写入 env 文件（API_CLIENT_COOKIE）
 *
 * 用法：npm run login [-- --out <文件路径>]，默认写入当前目录下的 .env
 */
import fs from "fs";
import path from "path";
import QRCode from "qrcode";
import { BilibiliApiClient, QrcodeLoginCode } from "../src";

const POLL_INTERVAL = 2000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function getOutPath() {
  const i = process.argv.indexOf("--out");
  const out = i >= 0 ? process.argv[i + 1] : undefined;
  return path.resolve(out || ".env");
}

/** 获取匹配变量赋值行的正则 */
function envLineRegExp(key: string) {
  return new RegExp(`^\\s*(export\\s+)?${key}\\s*=`);
}

/** 更新 env 文件中的变量，保留文件中的其他内容 */
function updateEnvFile(file: string, vars: Record<string, string>) {
  const lines = fs.existsSync(file)
    ? fs.readFileSync(file, "utf8").split(/\r?\n/)
    : [];
  for (const [key, value] of Object.entries(vars)) {
    const line = `${key}="${value}"`;
    const index = lines.findIndex((l) => envLineRegExp(key).test(l));
    if (index >= 0) {
      lines[index] = line;
    } else if (lines.at(-1) === "") {
      lines.splice(lines.length - 1, 0, line);
    } else {
      lines.push(line);
    }
  }
  let text = lines.join("\n");
  if (!text.endsWith("\n")) text += "\n";
  fs.writeFileSync(file, text, { mode: 0o600 });
  // 文件包含登录凭证，仅允许当前用户读写（mode 只对新建文件生效，已有文件需单独设置）
  fs.chmodSync(file, 0o600);
}

const outPath = getOutPath();
const outName = path.relative(process.cwd(), outPath) || outPath;
if (
  fs.existsSync(outPath) &&
  fs
    .readFileSync(outPath, "utf8")
    .split(/\r?\n/)
    .some((l) => envLineRegExp("API_CLIENT_COOKIE").test(l))
) {
  console.warn(`注意：登录成功后将覆盖 ${outName} 中已有的 API_CLIENT_COOKIE\n`);
}

const client = new BilibiliApiClient();

// 与浏览器一致，先获取设备标识等cookie再登录
await client.initCookie();

const { url, qrcode_key } = (await client.passportQrcodeGenerate()).data;
console.log(await QRCode.toString(url, { type: "terminal", small: true }));
console.log("请使用哔哩哔哩手机客户端扫描二维码登录");
console.log(`若二维码显示异常，可将以下链接转换为二维码后扫描：\n${url}\n`);

let scanned = false;
let refreshToken = "";
while (true) {
  await sleep(POLL_INTERVAL);
  const { data } = await client.passportQrcodePoll({ qrcode_key });
  if (data.code === QrcodeLoginCode.SUCCESS) {
    refreshToken = data.refresh_token;
    break;
  } else if (data.code === QrcodeLoginCode.SCANNED) {
    if (!scanned) console.log("已扫码，请在手机上确认登录");
    scanned = true;
  } else if (data.code === QrcodeLoginCode.EXPIRED) {
    console.error("二维码已失效，请重新运行");
    process.exit(1);
  } else if (data.code !== QrcodeLoginCode.WAITING) {
    console.error(`登录失败：${data.code} ${data.message}`);
    process.exit(1);
  }
}

if (!client.cookies.get("SESSDATA")) {
  console.error("登录失败：未获取到登录cookie");
  process.exit(1);
}

// 验证登录状态
const nav = await client.xapiNav();
if (!nav.data.isLogin) {
  console.error("登录失败：登录状态校验未通过");
  process.exit(1);
}

updateEnvFile(outPath, {
  API_CLIENT_COOKIE: client.cookie,
  API_CLIENT_REFRESH_TOKEN: refreshToken,
});

console.log(`登录成功：${nav.data.uname}（uid: ${nav.data.mid}）`);
console.log(`登录cookie已写入 ${outName}，请妥善保管，切勿泄露或提交到代码仓库`);
