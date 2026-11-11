// index.html を 1 コマずつ撮影し、music.wav と合わせて MP4 にする
//   node make-video.mjs                全コマを撮って MP4 を作る
//   node make-video.mjs --stills 2,8   指定した秒の静止画だけを撮る(確認用)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(path.join(process.env.APPDATA, 'npm', 'node_modules', 'playwright'))); }

const arg = k => { const i = process.argv.indexOf(k); return i < 0 ? null : process.argv[i + 1]; };
const stills = arg('--stills'), outDir = arg('--out') || path.join(os.tmpdir(), 'claude-intro-frames');
fs.rmSync(outDir, { recursive: true, force: true }); fs.mkdirSync(outDir, { recursive: true });

const url = pathToFileURL(path.join(here, 'index.html')).href + '?capture';
const browser = await chromium.launch();
const open = async () => {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(url); await page.evaluate(() => document.fonts.ready); return page;
};

if (stills) {
  const page = await open();
  for (const s of stills.split(',')) {
    await page.evaluate(t => window.renderAt(t), +s);
    await page.screenshot({ path: path.join(outDir, `still_${s}.jpg`), type: 'jpeg', quality: 80 });
  }
  await browser.close(); console.log('静止画:', outDir); process.exit(0);
}

const WORKERS = 4, page0 = await open();
const [TOTAL, FPS] = await page0.evaluate(() => [window.TOTAL, window.FPS]);
const pages = [page0, ...await Promise.all(Array.from({ length: WORKERS - 1 }, open))];
let done = 0;
await Promise.all(pages.map(async (page, w) => {
  for (let i = w; i < TOTAL; i += WORKERS) {
    await page.evaluate(t => window.renderAt(t), i / FPS);
    await page.screenshot({ path: path.join(outDir, String(i).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 96 });
    if (++done % 200 === 0) console.log(`${done} / ${TOTAL} コマ`);
  }
}));
await browser.close();

const mp4 = path.join(here, 'Claude自己紹介.mp4');
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(outDir, '%05d.jpg'), '-i', path.join(here, 'music.wav'),
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', mp4], { stdio: 'inherit' });
fs.rmSync(outDir, { recursive: true, force: true });
console.log('完成:', mp4);
