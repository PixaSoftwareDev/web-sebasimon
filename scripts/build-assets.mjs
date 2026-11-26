// Genera los assets de marca y web a partir de /material-original.
// Uso: npm run assets
import sharp from 'sharp'
import potrace from 'potrace'
import { mkdir, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const SRC = 'material-original'
const IMG = 'src/assets/img'
const BRAND = 'src/assets/brand'
const VID = 'public/video'
const wa = (s) => path.join(SRC, `WhatsApp Image 2026-11-25 at ${s}.jpeg`)
const wv = (s) => path.join(SRC, `WhatsApp Video 2026-11-25 at ${s}.mp4`)

await Promise.all([IMG, BRAND, VID, 'public'].map((d) => mkdir(d, { recursive: true })))

// ---------- Fotos ----------
const photos = {
  'hero': '20.02.32',
  'reves-bn': '20.02.30',
  'pala-cancha': '20.02.31',
  'detalle-pala': '20.02.31 (1)',
  'espalda-pala': '20.02.31 (2)',
  'saque-publico': '20.02.31 (3)',
  'saque': '20.02.31 (4)',
  'pelotas': '20.02.32 (1)',
  'smash': '20.02.32 (3)',
  'volea-baja': '20.02.32 (4)',
  'perfil-pala': '20.02.33',
  'orkell-producto': '20.02.34',
}
for (const [name, file] of Object.entries(photos)) {
  await sharp(wa(file))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(IMG, `${name}.webp`))
}
console.log('fotos ok')

// ---------- Firma: vectorizado + trazo más fino ----------
// Se agranda x4, se erosiona la tinta (eso "come" el contorno y
// afina el trazo de forma pareja) y se suaviza el borde antes de trazar.
const THIN = Number(process.env.THIN ?? 12) // px a quitar por lado (x4). Más alto = más fino
const sigBuf = await sharp(wa('20.02.32 (2)'))
  .extract({ left: 40, top: 60, width: 1130, height: 400 })
  .greyscale()
  .resize({ width: 1130 * 4, kernel: 'lanczos3' })
  .blur(6)
  .threshold(128)
  .erode(THIN)
  .blur(7)
  .threshold(128)
  .png()
  .toBuffer()

const trace = (buf, opts) =>
  new Promise((res, rej) => potrace.trace(buf, opts, (e, svg) => (e ? rej(e) : res(svg))))
const raw = await trace(sigBuf, { turdSize: 400, optTolerance: 0.6, alphaMax: 1.2, color: '#000' })
const d = raw.match(/ d="([^"]+)"/)[1]
const [, w, h] = raw.match(/width="(\d+)" height="(\d+)"/)

// Recorte al contenido real
const { info } = await sharp(sigBuf).negate().trim().toBuffer({ resolveWithObject: true })
const vb = [-info.trimOffsetLeft, -info.trimOffsetTop, info.width, info.height]
  .map((n) => Math.abs(n)).join(' ')
void w, void h

const svg = (fill) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="Seba Simón"><path fill="${fill}" fill-rule="evenodd" d="${d}"/></svg>\n`
await writeFile(path.join(BRAND, 'firma.svg'), svg('currentColor'))
await writeFile(path.join(BRAND, 'firma-blanca.svg'), svg('#F5F5F0'))
await writeFile(path.join(BRAND, 'firma-negra.svg'), svg('#0A0A0A'))
await writeFile(path.join(BRAND, 'firma-lima.svg'), svg('#D7F531'))
await writeFile(path.join(BRAND, 'firma-path.json'), JSON.stringify({ viewBox: vb, d }))
console.log('firma ok', vb)

// ---------- Videos ----------
const ff = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: 'inherit' })
const videos = {
  'promo': { file: '20.40.40', audio: true, poster: 15 },
  // Solo los primeros 6 s: planos generales de la clase, sin primeros planos de los chicos.
  'clase': { file: '20.40.28', poster: 3.4, dur: 6 },
  'punto': { file: '20.40.26', poster: 29 },
  'saque': { file: '20.40.35', poster: 3 },
  'entrenamiento': { file: '20.40.38', poster: 4 },
}
if (!process.env.SKIP_VIDEO) {
  for (const [name, v] of Object.entries(videos)) {
    ff(['-i', wv(v.file), ...(v.dur ? ['-t', String(v.dur)] : []), '-vf', 'scale=540:-2', '-c:v', 'libx264', '-crf', '29', '-preset', 'slow',
      '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
      ...(v.audio ? ['-c:a', 'aac', '-b:a', '96k'] : ['-an']),
      path.join(VID, `${name}.mp4`)])
    ff(['-ss', String(v.poster), '-i', wv(v.file), '-frames:v', '1', '-vf', 'scale=540:-2',
      '-q:v', '4', path.join(VID, `${name}.jpg`)])
  }
  // Video del bloque Orkell: sin audio, 30 fps, tamaño original
  ff(['-i', wv('20.40.20 (1)'), '-an', '-r', '30', '-c:v', 'libx264', '-crf', '27', '-preset', 'slow',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(VID, 'orkell.mp4')])
  ff(['-ss', '14.5', '-i', wv('20.40.20 (1)'), '-frames:v', '1', '-q:v', '4', path.join(VID, 'orkell.jpg')])
  console.log('videos ok')
}
