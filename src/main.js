// Fable 5.2 紹介映像:時刻 t(秒)を渡すと、その瞬間の 3D 世界と字幕がすべて決まる
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import GLYPHS from './glyphs.json';

const FPS = 30, DUR = 67.2, TOTAL = Math.round(FPS * DUR), W = 1920, H = 1080;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const P = (t, a, b) => clamp((t - a) / (b - a));
const eo = x => 1 - Math.pow(1 - x, 3);
const eio = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const eb = x => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const lerp = (a, b, x) => a + (b - a) * x;
const $ = id => document.getElementById(id);
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const hash = (x, y) => { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return h - Math.floor(h); };
const vnoise = (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf); return lerp(lerp(hash(xi, yi), hash(xi + 1, yi), u), lerp(hash(xi, yi + 1), hash(xi + 1, yi + 1), u), v); };
const fbm = (x, y) => vnoise(x, y) * .55 + vnoise(x * 2.1 + 5, y * 2.1 + 3) * .28 + vnoise(x * 4.3 + 9, y * 4.3 + 7) * .17;
const AMBER = 0xf0946a, GOLD = 0xf3d9b1, BG = 0x07080f;

// ---------- 描画の土台 ----------
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(1); renderer.setSize(W, H, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene(); scene.background = new THREE.Color(BG); scene.fog = new THREE.FogExp2(BG, .016);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .55;
const camera = new THREE.PerspectiveCamera(42, W / H, .1, 600); scene.add(camera);
scene.add(new THREE.HemisphereLight(0x93a6ff, 0x1a1208, .7));
const sun = new THREE.DirectionalLight(0xffdcb8, 1.9); sun.position.set(14, 22, 10); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 90 }); sun.shadow.bias = -.0005; sun.shadow.normalBias = .04; scene.add(sun);
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples: 4 }));
composer.addPass(new RenderPass(scene, camera));
const hudScene = new THREE.Scene(), hudCam = new THREE.PerspectiveCamera(42, W / H, .1, 100); hudScene.environment = scene.environment; hudScene.environmentIntensity = .35;
hudScene.add(new THREE.HemisphereLight(0xffffff, 0x222244, .35)); { const l = new THREE.DirectionalLight(0xffe2c4, 1.25); l.position.set(-3, 5, 8); hudScene.add(l); const l2 = new THREE.DirectionalLight(0xff9a66, .7); l2.position.set(6, -2, 4); hudScene.add(l2); }
const hudPass = new RenderPass(hudScene, hudCam); hudPass.clear = false; hudPass.clearDepth = true; composer.addPass(hudPass);   // 見出しの立体文字は別レイヤーで重ねる
const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), .5, .7, 1); composer.addPass(bloom); composer.addPass(new OutputPass());

const props = []; const prop = o => { o.visible = false; (o.parent ? 0 : scene.add(o)); props.push(o); return o; };
const dummy = new THREE.Object3D(), col = new THREE.Color();
function glowTex() { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.25, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c); }
const GLOW = glowTex();

// 星空(いつも見えている)
{ const r = rng(3), n = 2600, p = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const u = r() * 2 - 1, a = r() * 6.2832, d = 170 + r() * 120, s = Math.sqrt(1 - u * u); p.set([Math.cos(a) * s * d, u * d, Math.sin(a) * s * d], i * 3); } const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xbfc8ff, size: 2.2, sizeAttenuation: false, fog: false, transparent: true, opacity: .75, map: GLOW, depthWrite: false }))); }

// 押し出し文字(フォントの輪郭データ → 立体)
function glyphShapes(ch) { const sp = new THREE.ShapePath(); for (const c of GLYPHS[ch].c) { if (c[0] === 'M') sp.moveTo(c[1], c[2]); else if (c[0] === 'L') sp.lineTo(c[1], c[2]); else if (c[0] === 'Q') sp.quadraticCurveTo(c[1], c[2], c[3], c[4]); else if (c[0] === 'C') sp.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]); } return sp.toShapes(false); }
function makeText(str, size, depth, matFn) {
  const g = new THREE.Group(), items = []; let x = 0;
  [...str].forEach((ch, i) => {
    if (ch !== ' ') {
      const geo = new THREE.ExtrudeGeometry(glyphShapes(ch), { depth: depth / size, curveSegments: 6, bevelEnabled: true, bevelThickness: .028, bevelSize: .016, bevelSegments: 3 });
      geo.scale(size, size, size); geo.computeBoundingBox(); const b = geo.boundingBox, cx = (b.min.x + b.max.x) / 2, cy = (b.min.y + b.max.y) / 2; geo.translate(-cx, -cy, -depth / 2);
      const m = new THREE.Mesh(geo, matFn(ch, i)); m.castShadow = true; m.userData.base = new THREE.Vector3(x + cx, cy, 0); items.push(m); g.add(m);
    }
    x += GLYPHS[ch].a * size;
  });
  items.forEach(m => { m.userData.base.x -= x / 2; m.position.copy(m.userData.base); }); g.userData.items = items; g.userData.width = x; return g;
}
const goldMat = new THREE.MeshStandardMaterial({ color: 0xffc67a, metalness: 1, roughness: .24, emissive: 0x3a2206, emissiveIntensity: .5 });
const verbMat = new THREE.MeshStandardMaterial({ color: 0xf0d9b4, metalness: .3, roughness: .38, emissive: 0x4a3018, emissiveIntensity: .25 });
const amberMat = new THREE.MeshStandardMaterial({ color: 0xf28a5c, metalness: 1, roughness: .22, emissive: 0x7a2c10, emissiveIntensity: .5 });

// ---------- 登場するもの ----------
// 結晶(Fable 5.2 の「核」)
const crystal = prop(new THREE.Group());
const cMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshPhysicalMaterial({ color: 0xffb38a, emissive: 0xe8703f, emissiveIntensity: 1, metalness: .15, roughness: .1, flatShading: true, clearcoat: 1 }));
const cShell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.38, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, .8, .5), wireframe: true, transparent: true, opacity: .32 }));
const cGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xff8a55, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: .55 })); cGlow.scale.set(7, 7, 1);
const cLight = new THREE.PointLight(0xff9a66, 40, 40); crystal.add(cMesh, cShell, cGlow, cLight);
function showCrystal(x, y, z, s, t) { crystal.visible = s > .001; crystal.position.set(x, y, z); crystal.scale.setScalar(Math.max(s, .001)); cMesh.rotation.set(t * .4, t * .6, 0); cShell.rotation.set(-t * .3, t * .2, t * .1); cMesh.material.emissiveIntensity = .9 + .35 * Math.sin(t * 2.4); }

// 誕生の粒子
const DN = 8000, dStart = new Float32Array(DN * 3), dEnd = new Float32Array(DN * 3), dDel = new Float32Array(DN), dPos = new Float32Array(DN * 3);
{ const r = rng(11); for (let i = 0; i < DN; i++) { const dir = () => { const u = r() * 2 - 1, a = r() * 6.2832, s = Math.sqrt(1 - u * u); return [Math.cos(a) * s, u, Math.sin(a) * s]; }; const a = dir(), b = dir(), d = 5 + r() * 14; dStart.set([a[0] * d, a[1] * d * .7, a[2] * d], i * 3); dEnd.set([b[0] * 1.05, b[1] * 1.05, b[2] * 1.05], i * 3); dDel[i] = r(); } }
const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
const dust = prop(new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: new THREE.Color(1.7, .95, .55), size: .09, map: GLOW, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }))); dust.frustumCulled = false;
function updateDust(t) {
  const burst = eo(P(t, 3.45, 4.6));
  for (let i = 0; i < DN; i++) {
    const d = dDel[i], p = eio(P(t, .2 + d * 1.5, 2.3 + d * 1.5)), a = (1 - p) * (2.6 + d * 2.4), c = Math.cos(a), s = Math.sin(a), k = 1 + burst * (2 + d * 5);
    const x = lerp(dStart[i * 3], dEnd[i * 3], p), y = lerp(dStart[i * 3 + 1], dEnd[i * 3 + 1], p), z = lerp(dStart[i * 3 + 2], dEnd[i * 3 + 2], p);
    dPos[i * 3] = (x * c + z * s) * k; dPos[i * 3 + 1] = y * k; dPos[i * 3 + 2] = (-x * s + z * c) * k;
  }
  dustGeo.attributes.position.needsUpdate = true; dust.material.opacity = P(t, 0, .8) * (1 - P(t, 3.7, 4.7));
}

// 床
const ground = prop(new THREE.Mesh(new THREE.CircleGeometry(90, 72), new THREE.MeshStandardMaterial({ color: 0x04050a, metalness: .45, roughness: .55, transparent: true })));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;

// タイトル「FABLE 5.2」
const title = prop(makeText('FABLE 5.2', 1.7, .5, (ch, i) => i >= 6 ? amberMat : goldMat));
function updateTitle(lt) { title.userData.items.forEach((m, i) => { const p = P(lt, i * .12, i * .12 + .75), e = eo(p); m.visible = p > 0; m.position.copy(m.userData.base); m.position.y += (1 - e) * 7 + Math.sin(Math.PI * P(lt, i * .12 + .75, i * .12 + 1.15)) * .12; m.rotation.set((1 - e) * -2.2, (1 - e) * .8, 0); }); }

// カメラに固定する立体の見出し(読む・考える・やり抜く・つくる)
const VERBS = ['読む', '考える', 'やり抜く', 'つくる'].map(s => { const g = makeText(s, 1.05, .3, () => verbMat); g.userData.items.forEach(m => { m.castShadow = false; }); g.visible = false; hudScene.add(g); return g; });
function showVerb(k, lt, out) {
  VERBS.forEach((g, i) => { g.visible = i === k; });
  if (k < 0) return;
  const g = VERBS[k];
  g.position.set(-5.9 + g.userData.width / 2, -.1, -10); g.rotation.set(0, .2 + .04 * Math.sin(lt * 1.3), 0); g.scale.setScalar(out > .02 ? 1 : .001);
  g.userData.items.forEach((m, i) => { const p = P(lt, .1 + i * .1, .75 + i * .1), e = eb(p); m.visible = p > 0 && out > .02; m.position.copy(m.userData.base); m.position.y += (1 - eo(p)) * -1.1; m.rotation.set((1 - eo(p)) * 1.5, 0, 0); m.scale.setScalar(Math.max(.001, e)); });
}

// 01 読む:ページのらせんトンネル
function pageTex() { const c = document.createElement('canvas'); c.width = 128; c.height = 176; const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, 128, 176); x.fillStyle = '#9a9a9a'; x.fillRect(16, 18, 60, 9); for (let i = 0; i < 9; i++) x.fillRect(16, 42 + i * 14, i % 4 === 3 ? 60 : 96, 5); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
const PN = 3000, pages = prop(new THREE.InstancedMesh(new THREE.BoxGeometry(.56, .77, .012), new THREE.MeshBasicMaterial({ map: pageTex() }), PN)); pages.frustumCulled = false;
function updatePages(lt, camZ) {
  const front = camZ - 17;
  for (let i = 0; i < PN; i++) {
    const a = i * .41, r = 4.7 + 1.2 * Math.sin(i * 1.7), z = -i * .04;
    dummy.position.set(Math.cos(a) * r, Math.sin(a) * r, z); dummy.lookAt(0, 0, z - 1.5); dummy.rotateZ(Math.sin(i * 2.3 + lt * .8) * .5); dummy.rotateY(Math.sin(i + lt * 1.5) * .25); dummy.updateMatrix(); pages.setMatrixAt(i, dummy.matrix);
    if (z > front) { const k = .42 + 2.4 * Math.exp(-(z - front) * .5); i % 19 === 0 ? col.setRGB(.3 * k, 1.2 * k, 1.05 * k) : col.setRGB(1.0 * k, .72 * k, .5 * k); } else col.setRGB(.1, .13, .28);
    pages.setColorAt(i, col);
  }
  pages.instanceMatrix.needsUpdate = true; pages.instanceColor.needsUpdate = true;
}

// 02 考える:立体の星座と、見つかる一本の道筋
const net = prop(new THREE.Group());
const NN = 120, nodeP = [], adj = Array.from({ length: NN }, () => []), edgeL = [];
{ const r = rng(5); while (nodeP.length < NN) { const v = new THREE.Vector3(r() * 2 - 1, r() * 2 - 1, r() * 2 - 1); if (v.length() > 1) continue; v.multiply(new THREE.Vector3(7.5, 4.2, 5)); if (nodeP.every(o => o.distanceTo(v) > .9)) nodeP.push(v); }
  nodeP.forEach((p, i) => { nodeP.map((q, j) => [p.distanceTo(q), j]).sort((a, b) => a[0] - b[0]).slice(1, 4).forEach(([, j]) => { if (!adj[i].includes(j)) { adj[i].push(j); adj[j].push(i); edgeL.push([i, j]); } }); }); }
const netLines = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(edgeL.flatMap(([a, b]) => [nodeP[a], nodeP[b]])), new THREE.LineBasicMaterial({ color: 0x6f7fd6, transparent: true, opacity: .55 }));
const netNodes = new THREE.InstancedMesh(new THREE.SphereGeometry(.11, 14, 14), new THREE.MeshBasicMaterial(), NN);
const netPulse = new THREE.InstancedMesh(new THREE.SphereGeometry(.05, 8, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.8, 2.6) }), edgeL.length);
let pathIdx = [];
{ const A = nodeP.reduce((m, p, i) => p.x < nodeP[m].x ? i : m, 0), B = nodeP.reduce((m, p, i) => p.x > nodeP[m].x ? i : m, 0), prev = new Array(NN).fill(-1), q = [A]; prev[A] = A; while (q.length) { const c = q.shift(); if (c === B) break; for (const n of adj[c]) if (prev[n] < 0) { prev[n] = c; q.push(n); } } if (prev[B] < 0) pathIdx = [A, B]; else { for (let c = B; c !== A; c = prev[c]) pathIdx.unshift(c); pathIdx.unshift(A); } }
const pathCurve = new THREE.CatmullRomCurve3(pathIdx.map(i => nodeP[i]), false, 'catmullrom', .08), TSEG = 400;
const netPath = new THREE.Mesh(new THREE.TubeGeometry(pathCurve, TSEG, .065, 8, false), new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.5, .7) }));
const netHead = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color: 0xffb080, blending: THREE.AdditiveBlending, depthWrite: false })); netHead.scale.set(2.4, 2.4, 1);
net.add(netLines, netNodes, netPulse, netPath, netHead);
function updateNet(lt) {
  const pr = eio(P(lt, 2.0, 3.8));
  nodeP.forEach((p, i) => { const k = pathIdx.indexOf(i), on = k >= 0 && pr >= k / (pathIdx.length - 1) - .001, s = eb(P(lt, .2 + (p.x + 7.5) / 15 * .9, .7 + (p.x + 7.5) / 15 * .9)) * (on ? 2.1 : 1); dummy.position.copy(p); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(Math.max(.001, s)); dummy.updateMatrix(); netNodes.setMatrixAt(i, dummy.matrix); on ? col.setRGB(3, 1.5, .7) : col.setRGB(.75, .85, 1.5); netNodes.setColorAt(i, col); });
  edgeL.forEach(([a, b], i) => { const f = (lt * .55 + hash(i, 7)) % 1; dummy.position.lerpVectors(nodeP[a], nodeP[b], f); dummy.scale.setScalar(Math.sin(f * Math.PI) * P(lt, .8, 1.4) + .001); dummy.updateMatrix(); netPulse.setMatrixAt(i, dummy.matrix); });
  netNodes.instanceMatrix.needsUpdate = true; netNodes.instanceColor.needsUpdate = true; netPulse.instanceMatrix.needsUpdate = true;
  netPath.geometry.setDrawRange(0, Math.floor(pr * TSEG) * 8 * 6); netPath.visible = pr > 0;
  netHead.visible = pr > 0 && pr < 1; netHead.position.copy(pathCurve.getPoint(pr)); netLines.material.opacity = .55 * P(lt, .3, 1.2);
}

// 03 やり抜く:ブロックを一つずつ積んで街をつくる
const city = prop(new THREE.Group()), cubes = [];
{ const r = rng(21), G = 17, SP = 1.35; for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) { if (r() < .24) continue; const x = (i - (G - 1) / 2) * SP, z = (j - (G - 1) / 2) * SP, d = Math.hypot(x, z), h = 1 + Math.floor((.35 + r() * .65) * 10 * clamp(1 - d / 12, .12, 1)); const tone = .75 + r() * .5; for (let k = 0; k < h; k++) cubes.push({ x, y: k + .5, z, key: k + d * .14 + r() * .6, top: k === h - 1, lit: r() < .09, tone }); } cubes.sort((a, b) => a.key - b.key); }
const CN = cubes.length, cityMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1.08, .94, 1.08), new THREE.MeshStandardMaterial({ roughness: .55, metalness: .15 }), CN); cityMesh.castShadow = cityMesh.receiveShadow = true; cityMesh.frustumCulled = false;
const cityGlow = new THREE.InstancedMesh(new THREE.BoxGeometry(1.1, .05, 1.1), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.7, .85, .4) }), CN); cityGlow.frustumCulled = false;
const cityFloor = new THREE.Mesh(new THREE.CircleGeometry(17, 64), new THREE.MeshStandardMaterial({ color: 0x141829, roughness: .7, metalness: .3 })); cityFloor.rotation.x = -Math.PI / 2; cityFloor.receiveShadow = true;
city.add(cityMesh, cityGlow, cityFloor);
cubes.forEach((c, i) => { c.lit ? col.setRGB(.95, .42, .16) : col.setRGB(.085 * c.tone, .11 * c.tone, .27 * c.tone); cityMesh.setColorAt(i, col); });
let cityLast = -1;
function updateCity(lt) {
  if (lt === cityLast) return 0; cityLast = lt; let placed = 0;
  cubes.forEach((c, i) => { const t0 = .3 + i / CN * 3.3, p = P(lt, t0, t0 + .45), e = eo(p); if (p >= 1) placed++; dummy.rotation.set(0, (1 - e) * 1.2, 0); dummy.position.set(c.x, c.y + (1 - e) * 9, c.z); dummy.scale.setScalar(p > 0 ? .3 + .7 * e : .0001); dummy.updateMatrix(); cityMesh.setMatrixAt(i, dummy.matrix); dummy.rotation.set(0, 0, 0); dummy.position.set(c.x, c.y + .5, c.z); dummy.scale.setScalar(c.top && p >= 1 && hash(i, 3) < .28 ? 1 : .0001); dummy.updateMatrix(); cityGlow.setMatrixAt(i, dummy.matrix); });
  cityMesh.instanceMatrix.needsUpdate = true; cityGlow.instanceMatrix.needsUpdate = true; return placed;
}

// 04 つくる:線の網から立ち上がる島
const island = prop(new THREE.Group());
const SEG = 64, SIZE = 30, IV = SEG * SEG * 6, iPos = new Float32Array(IV * 3), iCol = new Float32Array(IV * 3), iH = new Float32Array(IV);
const heightAt = (x, z) => { const s = clamp((13.5 - Math.hypot(x, z)) / 10), f = s * s * (3 - 2 * s); return f * (.5 + fbm(x * .19 + 3, z * .19 + 1) * 5.4) - .45; };
let HMAX = 0; for (let i = 0; i <= SEG; i++) for (let j = 0; j <= SEG; j++) HMAX = Math.max(HMAX, heightAt((i / SEG - .5) * SIZE, (j / SEG - .5) * SIZE));
{ let v = 0; const C = [[.8, .7, .48], [.4, .64, .32], [.26, .5, .3], [.5, .48, .45], [.84, .85, .88]]; for (let i = 0; i < SEG; i++) for (let j = 0; j < SEG; j++) { const x0 = (i / SEG - .5) * SIZE, x1 = ((i + 1) / SEG - .5) * SIZE, z0 = (j / SEG - .5) * SIZE, z1 = ((j + 1) / SEG - .5) * SIZE; const q = (i + j) % 2 ? [[x0, z0], [x0, z1], [x1, z0], [x1, z0], [x0, z1], [x1, z1]] : [[x0, z0], [x0, z1], [x1, z1], [x0, z0], [x1, z1], [x1, z0]]; for (let f = 0; f < 2; f++) { const hs = [0, 1, 2].map(k => heightAt(...q[f * 3 + k])), m = Math.max(...hs) + (hash(i * 2 + f, j) - .5) * .5, c = Math.max(...hs) < -.06 ? [.12, .36, .4] : C[m < .05 * HMAX ? 0 : m < .4 * HMAX ? 1 : m < .62 * HMAX ? 2 : m < .84 * HMAX ? 3 : 4], sh = .88 + hash(i + f * 9, j * 3) * .24; for (let k = 0; k < 3; k++) { iPos[v * 3] = q[f * 3 + k][0]; iPos[v * 3 + 2] = q[f * 3 + k][1]; iH[v] = hs[k]; iCol.set([Math.pow(c[0] * sh, 2.2), Math.pow(c[1] * sh, 2.2), Math.pow(c[2] * sh, 2.2)], v * 3); v++; } } } }
const iGeo = new THREE.BufferGeometry(); iGeo.setAttribute('position', new THREE.BufferAttribute(iPos, 3)); iGeo.setAttribute('color', new THREE.BufferAttribute(iCol, 3));
const iSolid = new THREE.Mesh(iGeo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: .85, metalness: 0 })); iSolid.receiveShadow = true; iSolid.castShadow = true; iSolid.frustumCulled = false;
const iWire = new THREE.Mesh(iGeo, new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color(1.5, .8, .45), transparent: true })); iWire.frustumCulled = false;
const iWater = new THREE.Mesh(new THREE.CircleGeometry(24, 72), new THREE.MeshStandardMaterial({ color: 0x176d7a, roughness: .4, metalness: .2, transparent: true, opacity: .96 })); iWater.rotation.x = -Math.PI / 2; iWater.position.y = -.02;
const trees = []; { const r = rng(9); while (trees.length < 170) { const x = (r() - .5) * 24, z = (r() - .5) * 24, h = heightAt(x, z); if (h > .07 * HMAX && h < .6 * HMAX) trees.push({ x, z, h, s: .7 + r() * .7, o: r() }); } }
const treeGeo = new THREE.ConeGeometry(.3, 1, 6); treeGeo.translate(0, .5, 0);
const treeMat = new THREE.MeshStandardMaterial({ color: 0x2f7d46, flatShading: true, roughness: .8 }), treeWire = new THREE.MeshBasicMaterial({ color: new THREE.Color(.5, 1.5, .8), wireframe: true });
const iTrees = new THREE.InstancedMesh(treeGeo, treeMat, trees.length); iTrees.castShadow = true; iTrees.frustumCulled = false;
island.add(iSolid, iWire, iWater, iTrees);
let islLast = null;
function updateIsland(lt, wire = false) {
  const key = lt + (wire ? 'w' : ''); if (key === islLast) return; islLast = key;
  const g = eio(P(lt, .5, 2.2)); for (let v = 0; v < IV; v++) iPos[v * 3 + 1] = iH[v] * g; iGeo.attributes.position.needsUpdate = true;
  const sol = P(lt, 1.8, 2.7); iSolid.visible = sol > 0 && !wire; iSolid.material.transparent = sol < 1; iSolid.material.opacity = sol; iTrees.material = wire ? treeWire : treeMat;
  iWire.visible = sol < 1 || wire; iWire.material.opacity = wire ? .9 : P(lt, 0, .5) * (1 - P(lt, 2.2, 3.0)); iWater.material.opacity = (wire ? .18 : .96) * P(lt, 1.6, 2.6); iWater.visible = lt > 1.6;
  trees.forEach((tr, i) => { const t0 = 2.6 + tr.o * .9, s = eb(P(lt, t0, t0 + .4)) * tr.s; dummy.position.set(tr.x, tr.h - .05, tr.z); dummy.rotation.set(0, tr.o * 6, 0); dummy.scale.setScalar(Math.max(.0001, s)); dummy.updateMatrix(); iTrees.setMatrixAt(i, dummy.matrix); }); iTrees.instanceMatrix.needsUpdate = true;
}

// 数字の台座
const SPEC = [['1M', '一度に読める量は、100万トークン', '分厚い本を何冊も、まるごと抱えたまま考えられます'], ['128K', '一度に書ける量は、最大 12.8万トークン', '長い報告書も、大きなプログラムも、ひと続きで'], ['5', '考える深さは、5 段階', 'すばやい返事から、とことん考え抜く答えまで'], ['2.5x', '高速モードなら、最大 2.5 倍の速さ', '同じ賢さのまま、急ぎの仕事にも']];
const specs = prop(new THREE.Group()), specX = i => (i - 1.5) * 6.5;
const pedMat = new THREE.MeshStandardMaterial({ color: 0x1a1d30, metalness: .8, roughness: .35 }), ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, .7, .32) });
const specNum = SPEC.map(([s], i) => { const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.95, .5, 56), pedMat); ped.position.set(specX(i), .25, 0); ped.receiveShadow = true; const ring = new THREE.Mesh(new THREE.TorusGeometry(1.78, .035, 10, 80), ringMat); ring.rotation.x = Math.PI / 2; ring.position.set(specX(i), .52, 0); const n = makeText(s, 2.0, .55, () => goldMat); n.position.set(specX(i), .7, 0); specs.add(ped, ring, n); return n; });

// 守りの輪
const rings = prop(new THREE.Group());
const ringM = [[1.95, new THREE.Color(1.5, .7, .32)], [2.3, new THREE.Color(.3, 1.25, 1.1)], [2.65, new THREE.Color(1.3, 1.0, .55)]].map(([r, c]) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, .028, 10, 120), new THREE.MeshBasicMaterial({ color: c })); rings.add(m); return m; });

// ---------- 字幕 ----------
const UI = {}; for (const k of ['birth', 'title', 'abil', 'meta', 'spec', 'trust', 'fin']) UI[k] = $('u_' + k);
const st = (el, o, tx = 0, ty = 0, sc = 1) => { el.style.opacity = o; el.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; };
const rise = (el, t, t0, d = .6, dy = 34) => { const p = eo(P(t, t0, t0 + d)); st(el, p, 0, (1 - p) * dy); };
function split(el) { const s = [...el.textContent]; el.textContent = ''; return s.map(c => { const e = document.createElement('span'); e.textContent = c; e.style.display = 'inline-block'; if (c === ' ') e.style.width = '.3em'; el.appendChild(e); return e; }); }
const chars = (sp, t, t0, stag = .06, dy = 50) => sp.forEach((e, i) => { const p = eo(P(t, t0 + i * stag, t0 + i * stag + .55)); st(e, p, 0, (1 - p) * dy); });
const bCap = split($('b_cap')), fH = split($('f_h'));
const ABIL = [['100万トークン。本にして何冊ぶんもの資料を、<br>一度に頭に入れて考えます。'], ['いつも、考えてから答えます。<br>問題のむずかしさに合わせて、深さは自分で調整。'], ['何時間もかかる長い仕事も、計画し、<br>確かめながら、最後まで自分で進めます。'], ['コードも、文章も、こんな 3D の世界も。<br>言葉から、形にします。']];
const trustRows = [$('r1'), $('r2'), $('r3')], HT = [48.8, 51.6, 54.4], DIPS = [12, 16.8, 21.6, 26.4, 38.4, 48, 57.6];
const cam = (px, py, pz, lx, ly, lz, off = 0) => { camera.position.set(px, py, pz); camera.lookAt(lx, ly, lz); off ? camera.setViewOffset(W, H, off, 0, W, H) : camera.clearViewOffset(); };
const pose = (o, x, y, z, s, ry = 0) => { o.visible = true; o.position.set(x, y, z); o.scale.setScalar(s); o.rotation.set(0, ry, 0); };

// ---------- 1 コマを描く ----------
function renderAt(t) {
  props.forEach(p => { p.visible = false; p.position.set(0, 0, 0); p.scale.setScalar(1); p.rotation.set(0, 0, 0); });
  ground.rotation.x = -Math.PI / 2; camera.up.set(0, 1, 0); for (const k in UI) UI[k].style.display = 'none';
  let verb = -1, vlt = 0, vout = 1, scrim = 0, lower = 0, flash = 0; bloom.strength = .5; scene.fog.density = .016;

  if (t < 4.8) {                                             // 誕生
    dust.visible = true; updateDust(t); showCrystal(0, 0, 0, eb(P(t, 3.4, 4.1)), t);
    const m = eio(P(t, 0, 4.8)); cam(-2.4 * m, lerp(1.5, .75, m), lerp(12, 6.58, m), 0, 0, 0);
    bloom.strength = .5 + 1.2 * Math.sin(Math.PI * P(t, 3.35, 4.3)); flash = .5 * Math.sin(Math.PI * P(t, 3.38, 3.8));
    UI.birth.style.display = 'block'; UI.birth.style.opacity = 1 - P(t, 3.0, 3.4); chars(bCap, t, .9, .07); lower = P(t, .6, 1.2) * (1 - P(t, 3.0, 3.4));
  } else if (t < 12) {                                       // タイトル
    const m = eio(P(t, 4.8, 5.9)); showCrystal(0, lerp(0, 3.45, m), 0, lerp(1, .5, m), t);
    ground.visible = true; ground.material.opacity = P(t, 4.8, 6); title.visible = true; updateTitle(t - 5.0);
    const a = lerp(-.35, .32, eio(P(t, 4.8, 12))), r = lerp(7, 10.5, eo(P(t, 4.8, 7.5)));
    cam(Math.sin(a) * r, lerp(.75, 1.9, eo(P(t, 4.8, 8))), Math.cos(a) * r, 0, lerp(0, 1.25, eo(P(t, 4.8, 6.6))), 0);
    UI.title.style.display = 'block'; UI.title.style.opacity = 1 - P(t, 11.5, 11.85); rise($('t_l1'), t, 7.4); rise($('t_l2'), t, 8.8); lower = P(t, 7, 7.8);
  } else if (t < 31.2) {                                     // できること 4 つ
    const k = Math.min(3, Math.floor((t - 12) / 4.8)), lt = t - 12 - k * 4.8; verb = k; vlt = lt; vout = 1 - P(lt, 4.45, 4.7);
    let chip = '';
    if (k === 0) {
      const z = 3 - lt * 13; pages.visible = true; updatePages(lt, z); scene.fog.density = .02;
      camera.up.set(Math.sin(lt * .3) * .25, 1, 0); cam(Math.sin(lt * .6) * .5, Math.cos(lt * .5) * .4, z, 0, 0, z - 10, -300);
      chip = Math.round(1e6 * eio(P(lt, .4, 4.0))).toLocaleString('en-US') + ' tokens';
    } else if (k === 1) {
      net.visible = true; updateNet(lt); net.rotation.y = lt * .12 - .2;
      const a = .35 + lt * .05, r = lerp(19, 16.5, eio(P(lt, 0, 4.8))); cam(Math.sin(a) * r, 1.5 + lt * .25, Math.cos(a) * r, 0, 0, 0, -330);
      chip = lt < 2 ? 'thinking …' : lt < 3.8 ? '道筋を確かめています' : '答えが見つかりました';
    } else if (k === 2) {
      city.visible = true; const n = updateCity(lt), a = .6 + lt * .2, r = lerp(31, 26, eio(P(lt, 0, 4.8)));
      cam(Math.sin(a) * r, lerp(9, 14, eio(P(lt, 0, 4.8))), Math.cos(a) * r, 0, 3, 0, -330);
      chip = `step ${String(n).padStart(3, '0')} / ${CN}`;
    } else {
      island.visible = true; updateIsland(lt); const a = .5 + lt * .22, r = lerp(36, 31, eio(P(lt, 0, 4.8)));
      cam(Math.sin(a) * r, lerp(15, 11, eio(P(lt, 0, 4.8))), Math.cos(a) * r, 0, 1, 0, -330);
      chip = lt < 2.2 ? 'mesh.generate()' : lt < 3 ? 'material.apply()' : 'forest.grow()';
    }
    UI.abil.style.display = 'block'; UI.abil.style.opacity = k === 3 ? 1 - P(lt, 4.45, 4.8) : vout;
    $('a_num').innerHTML = `0${k + 1} <span style="color:#7c829c">/ 04</span>`; $('a_cap').innerHTML = ABIL[k][0]; $('a_chip_t').textContent = chip;
    rise($('a_num'), lt, .05, .5, 20); rise($('a_cap'), lt, .7); rise($('a_chip'), lt, 1.0, .5, 20);
  } else if (t < 38.4) {                                     // この映像も
    const lt = t - 26.4, wire = t < 35.4; island.visible = true; updateIsland(99, wire); scrim = 1;
    const a = .5 + lt * .22, r = lerp(31, 40, eio(P(t, 31.2, 38.4))); cam(Math.sin(a) * r, lerp(11, 17, eio(P(t, 31.2, 38.4))), Math.cos(a) * r, 0, 1, 0, -330);
    flash = Math.max(.35 * (1 - P(t, 31.2, 31.5)), .4 * Math.sin(Math.PI * P(t, 35.3, 35.7)));
    UI.meta.style.display = 'block'; UI.meta.style.opacity = 1 - P(t, 37.85, 38.2);
    rise($('m_lab'), t, 31.4, .5, 20); rise($('m_h'), t, 31.6, .8, 50); rise($('m_b'), t, 32.9, .8); rise($('m_frame'), t, 33.6, .5, 20);
    $('m_frame').textContent = `frame ${String(Math.round(t * FPS)).padStart(4, '0')} / ${TOTAL}  ${wire ? '・ wireframe' : '・ shaded'}`;
  } else if (t < 48) {                                       // 数字で見る
    ground.visible = true; ground.material.opacity = 1; specs.visible = true; lower = 1;
    const k = Math.min(3, Math.floor((t - 38.4) / 2.4)), lt = t - 38.4 - k * 2.4, cx = -9.75 + (t - 39.6) * 2.708;
    specNum.forEach((n, i) => { const t0 = 38.4 + i * 2.4 + .15, p = P(t, t0, t0 + .55); n.scale.setScalar(Math.max(.001, eb(p))); n.rotation.y = (1 - eo(P(t, t0, t0 + 1.3))) * -2.4 + .12 * Math.sin(t * .9 + i); n.position.y = .72 + .08 * Math.sin(t * 1.4 + i); });
    showCrystal(cx + 2 * Math.sin(t * .5), 4.7, -6, .45, t); cam(cx, 2.3, 8.6, cx + .5, 1.05, 0);
    UI.spec.style.display = 'block'; UI.spec.style.opacity = 1 - P(t, 47.6, 47.9); rise($('s_h'), t, 38.6, .5, 20);
    $('s_big').textContent = SPEC[k][1]; $('s_small').textContent = SPEC[k][2];
    const o = 1 - P(lt, 2.15, 2.4); rise($('s_big'), lt, .25, .5, 30); $('s_big').style.opacity *= o; rise($('s_small'), lt, .5, .5, 20); $('s_small').style.opacity *= o;
  } else if (t < 57.6) {                                     // 正直に言うと
    showCrystal(0, 0, 0, 1.05, t); rings.visible = true; scrim = 1; bloom.strength = .38;
    ringM.forEach((m, i) => { m.scale.setScalar(Math.max(.001, eb(P(t, HT[i], HT[i] + .7)))); m.rotation.set(t * (.5 + i * .13) + i * 1.1, t * (.35 - i * .1) + i * 2, i * .7); });
    const a = -.4 + (t - 48) * .06; cam(Math.sin(a) * 10.5, 1.2 + (t - 48) * .08, Math.cos(a) * 10.5, 0, 0, 0, -430);
    UI.trust.style.display = 'block'; UI.trust.style.opacity = 1 - P(t, 57.1, 57.45); rise($('r_lab'), t, 48.3, .5, 20);
    trustRows.forEach((r, i) => { const p = eo(P(t, HT[i], HT[i] + .7)), dim = i < 2 ? lerp(1, .6, P(t, HT[i + 1] - .1, HT[i + 1] + .5)) : 1; st(r, p * dim, (1 - p) * -50, 0); st(r.children[1], eo(P(t, HT[i] + .8, HT[i] + 1.4))); });
  } else {                                                   // フィナーレ
    title.visible = true; updateTitle(t - 57.9); showCrystal(0, 3.45, 0, .5 * eb(P(t, 57.7, 58.5)), t); lower = P(t, 59, 60);
    const o = eo(P(t, 58.6, 60.6)), ph = k => t * .16 + k * 2.094 + .9, sat = (g, k, s, y) => pose(g, Math.cos(ph(k)) * 10.5, y + Math.sin(t * .7 + k) * .35, Math.sin(ph(k)) * 4 - 6.5, s * o, t * .2 + k);
    updateIsland(99); sat(island, 0, .2, 3.3); updateCity(99); sat(city, 1, .2, 3.0); updateNet(99); sat(net, 2, .36, 4.8);
    const a = lerp(-.28, .26, eio(P(t, 57.6, 67.2))), r = lerp(8.5, 14.5, eo(P(t, 57.6, 64))); cam(Math.sin(a) * r, lerp(1.2, 1.5, eo(P(t, 57.6, 64))), Math.cos(a) * r, 0, lerp(1.2, .35, eo(P(t, 57.6, 64))), 0);
    UI.fin.style.display = 'block'; chars(fH, t, 60.0, .08, 60); rise($('f_c1'), t, 63.6, .7, 20); rise($('f_c2'), t, 64.1, .7, 20);
  }

  showVerb(verb, vlt, vout);
  $('scrim').style.opacity = scrim; $('lower').style.opacity = lower; $('flash').style.opacity = flash;
  let dip = Math.max(1 - P(t, 0, .7), P(t, 66.1, 67.1)); for (const b of DIPS) dip = Math.max(dip, 1 - Math.abs(t - b) / .24);
  $('black').style.opacity = clamp(dip);
  composer.render();
}
window.renderAt = renderAt; window.TOTAL = TOTAL; window.FPS = FPS;

// ---------- ブラウザでそのまま再生(撮影時は ?capture) ----------
function fit() { const s = Math.min(innerWidth / W, innerHeight / H); $('stage').style.transform = `translate(${(innerWidth - W * s) / 2}px,${(innerHeight - H * s) / 2}px) scale(${s})`; }
addEventListener('resize', fit); fit(); renderAt(0); window.ready = true;
if (!location.search.includes('capture')) {
  const au = $('au'), pl = $('play'); pl.style.display = 'flex';
  pl.onclick = () => {
    pl.style.display = 'none'; const t0 = performance.now(); let useAu = true; au.currentTime = 0; au.play().catch(() => { useAu = false; });
    const loop = () => { const t = useAu && !au.paused ? au.currentTime : (performance.now() - t0) / 1000; if (t >= DUR - .02 || au.ended) { renderAt(DUR - .001); pl.style.display = 'flex'; return; } renderAt(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  };
}
