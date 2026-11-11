// システムフォントの輪郭を、3D の押し出し文字用のデータ(1em=1)に変換する
const opentype = require('opentype.js'), fs = require('fs');
const out = {};
const take = (file, chars) => {
  const b = fs.readFileSync('C:/Windows/Fonts/' + file), f = opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)), u = f.unitsPerEm;
  for (const ch of chars) {
    const g = f.charToGlyph(ch); if (!g || g.index === 0) throw new Error('no glyph ' + ch);
    const c = g.getPath(0, 0, 1).commands.map(k => k.type === 'Z' ? ['Z'] : [k.type, ...[k.x1, k.y1, k.x2, k.y2, k.x, k.y].filter(v => v !== undefined).map((v, i) => +((i % 2 ? -v : v)).toFixed(4))]);
    out[ch] = { a: +(g.advanceWidth / u).toFixed(4), c };
  }
};
take(process.argv[2], 'FABLE5.21MK8x ');
take(process.argv[3], '読む考えるやり抜くつ');
fs.writeFileSync(process.argv[4], JSON.stringify(out));
console.log('glyphs', Object.keys(out).length, fs.statSync(process.argv[4]).size);
