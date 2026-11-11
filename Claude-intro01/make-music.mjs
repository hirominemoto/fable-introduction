// 音楽と効果音を数式から合成して music.wav に書き出す(100 BPM・1小節 2.4 秒・全 28 小節)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 44100, DUR = 67.2, N = Math.round(SR * DUR), BEAT = 0.6, BAR = 2.4, TAU = Math.PI * 2;
const L = new Float32Array(N), R = new Float32Array(N);     // そのまま出す音
const AL = new Float32Array(N), AR = new Float32Array(N);   // ディレイをかける音(アルペジオ・ベル)
const hz = m => 440 * 2 ** ((m - 69) / 12);
let seed = 12345; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

// fn(経過秒) の波形を t0 から dur 秒ぶん、左右のバランス pan(-1〜1)で足す
function add(bl, br, t0, dur, pan, fn) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR), gl = Math.cos((pan + 1) * Math.PI / 4), gr = Math.sin((pan + 1) * Math.PI / 4);
  for (let i = 0; i < n; i++) { const j = i0 + i; if (j < 0 || j >= N) continue; const v = fn(i / SR); bl[j] += v * gl; br[j] += v * gr; }
}

const CH = {
  D: { root: 38, pad: [50, 57, 61, 64, 66] },
  Bm: { root: 35, pad: [47, 54, 57, 62, 66] },
  G: { root: 43, pad: [55, 59, 62, 66, 69] },
  A: { root: 33, pad: [52, 57, 61, 64, 66] },
};
const PROG = ['D', 'Bm', 'G', 'A'];
const chordOf = b => CH[b >= 24 ? ['G', 'A', 'D', 'D'][b - 24] : PROG[b % 4]];
const sec = b => b < 2 ? 'intro' : b < 5 ? 'title' : b < 13 ? 'main' : b < 16 ? 'break' : b < 20 ? 'full' : b < 24 ? 'soft' : b < 26 ? 'full' : 'end';

const pluck = (f, g, d = 6) => t => g * (Math.sin(TAU * f * t) + .35 * Math.sin(TAU * 2 * f * t) * Math.exp(-t * 4)) * Math.exp(-t * d) * Math.min(1, t * 400);
const ARP = [0, 2, 3, 1, 4, 3, 2, 1];

for (let b = 0; b < 28; b++) {
  const t0 = b * BAR, c = chordOf(b), s = sec(b);
  if (b === 27) break;
  // パッド(ゆっくり立ち上がる和音)
  const padDur = s === 'end' ? 5.2 : BAR + .7, padG = { intro: .06, title: .06, main: .05, break: .065, full: .055, soft: .065, end: .07 }[s];
  c.pad.forEach((m, i) => {
    const f = hz(m), ph = rnd() * TAU;
    add(L, R, t0, padDur, (i - 2) * .3, t => {
      const env = Math.min(1, t / .6) * Math.min(1, (padDur - t) / (s === 'end' ? 3.5 : .7));
      return padG * env * (Math.sin(TAU * f * t) + .6 * Math.sin(TAU * f * 1.004 * t + ph) + .22 * Math.sin(TAU * 2 * f * t + ph) + .08 * Math.sin(TAU * 3 * f * t));
    });
  });
  // アルペジオ
  if (s !== 'intro' && s !== 'end') {
    const up = s === 'full' ? 24 : 12, g = { title: .09, main: .085, break: .08, full: .1, soft: .06 }[s];
    for (let k = 0; k < 8; k++) {
      if ((s === 'break' || s === 'soft') && k % 2) continue;
      add(AL, AR, t0 + k * .3, 1.2, k % 2 ? .5 : -.5, pluck(hz(c.pad[ARP[k]] + up), g));
    }
  }
  // ベース
  if (s === 'main' || s === 'full' || s === 'soft' || s === 'end') {
    const f = hz(c.root), bass = (g, d) => t => g * (Math.sin(TAU * f * t) + .3 * Math.sin(TAU * 2 * f * t)) * Math.exp(-t * d) * Math.min(1, t * 150);
    add(L, R, t0, s === 'end' ? 4 : 1.4, 0, bass(.3, s === 'end' ? .8 : 2.2));
    if (s === 'main' || s === 'full') add(L, R, t0 + BEAT * 2.5, .8, 0, bass(.22, 3.5));
  }
  // キックとハイハット
  if (s === 'main' || s === 'full' || s === 'end') {
    for (const bt of s === 'end' ? [0] : [0, 2]) add(L, R, t0 + bt * BEAT, .5, 0, t => .5 * Math.sin(TAU * (45 * t + 3 * (1 - Math.exp(-30 * t)))) * Math.exp(-t * 9));
    if (s !== 'end') for (let k = 0; k < 8; k++) { let p = 0; add(L, R, t0 + k * .3, .08, k % 2 ? .3 : -.3, t => { const n = rnd() * 2 - 1, v = n - p; p = n; return (k % 2 ? .035 : .014) * v * Math.exp(-t * 70); }); }
  }
}

// 効果音
const tick = (t, g = .1) => add(L, R, t, .03, rnd() * 1.2 - .6, x => g * ((rnd() * 2 - 1) * .7 + Math.sin(TAU * 2100 * x)) * Math.exp(-x * 220));
const bell = (t, m, g = .16, pan = 0) => add(AL, AR, t, 1.6, pan, pluck(hz(m), g, 4));
function whoosh(t, g = .05) { let lp = 0; add(L, R, t - .55, .9, 0, x => { const e = x < .55 ? (x / .55) ** 2 : Math.max(0, 1 - (x - .55) / .35), k = .02 + .25 * e; lp += k * ((rnd() * 2 - 1) - lp); return g * e * lp * 4; }); }

for (let i = 0; i < 6; i++) tick(1.0 + i * .16, .13);                                  // 「こんにちは。」
for (let t = 22.2; t < 25.2; t += .075) tick(t, .05 + rnd() * .03);                    // コードを書く
for (const t of [26.9, 28.0, 29.1]) for (let i = 0; i < 5; i++) tick(t + i * .08, .07); // コマンド入力
[81, 85, 88].forEach((m, i) => bell(27.45 + i * 1.1, m, .15, .3));                     // ✓
[74, 78, 81, 86, 90].forEach((m, i) => bell(39.6 + i * .35, m, .13, -.6 + i * .3));    // カードが出る
[69, 66, 74].forEach((m, i) => bell(48.8 + i * 2.8, m, .12));                          // 正直に言うと
[67, 71, 74, 78, 83].forEach((m, i) => bell(57.8 + i * .12, m, .12, -.5 + i * .25));   // フィナーレ
[74, 78, 81, 85, 90].forEach((m, i) => bell(62.4 + i * .14, m, .14, -.5 + i * .25));   // 最後の和音
bell(3.0, 74, .14); bell(3.15, 81, .1);                                                // ロゴが咲く
for (const t of [4.8, 12, 16.8, 21.6, 26.4, 31.2, 38.4, 48, 57.6]) whoosh(t);

// 付点8分のピンポンディレイ
const dl = Math.round(.45 * SR);
for (let i = dl; i < N; i++) { AL[i] += AR[i - dl] * .38; AR[i] += AL[i - dl] * .38; }
for (let i = 0; i < N; i++) { L[i] += AL[i]; R[i] += AR[i]; }

// かんたんなリバーブ(コムフィルタ4本+オールパス2本)
const wet = new Float32Array(N);
for (const [d, fb] of [[1557, .8], [1617, .79], [1491, .81], [1422, .78]]) {
  const buf = new Float32Array(d); let lp = 0;
  for (let i = 0; i < N; i++) { const k = i % d, y = buf[k]; lp = y * .7 + lp * .3; buf[k] = (L[i] + R[i]) * .5 + lp * fb; wet[i] += y * .25; }
}
for (const d of [225, 556]) { const buf = new Float32Array(d); for (let i = 0; i < N; i++) { const k = i % d, bo = buf[k], x = wet[i]; buf[k] = x + bo * .5; wet[i] = bo - x * .5; } }
for (let i = 0; i < N; i++) { L[i] += wet[i] * .3; R[i] += (wet[Math.max(0, i - 29)] || 0) * .3; }

// 仕上げ:フェード、やわらかいリミッター、音量をそろえて 16bit WAV に
let peak = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR, f = Math.min(1, t / .3) * Math.min(1, Math.max(0, (DUR - .1 - t) / 2.2));
  L[i] = Math.tanh(L[i] * 1.6) * f; R[i] = Math.tanh(R[i] * 1.6) * f; peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
}
const out = Buffer.alloc(44 + N * 4), g = .9 / peak * 32767;
out.write('RIFF', 0); out.writeUInt32LE(36 + N * 4, 4); out.write('WAVEfmt ', 8); out.writeUInt32LE(16, 16); out.writeUInt16LE(1, 20); out.writeUInt16LE(2, 22);
out.writeUInt32LE(SR, 24); out.writeUInt32LE(SR * 4, 28); out.writeUInt16LE(4, 32); out.writeUInt16LE(16, 34); out.write('data', 36); out.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) { out.writeInt16LE(Math.round(L[i] * g), 44 + i * 4); out.writeInt16LE(Math.round(R[i] * g), 46 + i * 4); }
const file = path.join(path.dirname(fileURLToPath(import.meta.url)), 'music.wav');
fs.writeFileSync(file, out);
console.log('music.wav を書き出しました', (out.length / 1e6).toFixed(1) + 'MB', 'peak', peak.toFixed(3));
