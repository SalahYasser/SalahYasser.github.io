// Rebuild the bilingual homepage share posters from the original App Store images.
// The old posters supply the approved typography; only their phone area is replaced.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const size = { width: 1200, height: 630 };
const screens = {
  burda: path.join(publicDir, 'images/projects/al-burda/03_reader.webp'),
  madrasah: path.join(publicDir, 'images/projects/el-madrasah/01_parent_dashboard.webp'),
  trainSync: path.join(publicDir, 'images/projects/train-sync/01-today.webp'),
};

function backgroundPatch(locale) {
  const pixels = Buffer.alloc(size.width * size.height * 4);
  const arabic = locale === 'ar';
  for (let y = 0; y < size.height; y++) {
    const topWeight = (1 - y / size.height) ** 2;
    for (let x = 0; x < size.width; x++) {
      const alpha = arabic
        ? Math.min(1, Math.max(0, (510 - x) / 34))
        : Math.min(1, Math.max(0, (x - 686) / 34));
      if (!alpha) continue;
      const horizontal = x / size.width;
      const top = arabic
        ? [16 - 4 * horizontal, 28 - 11 * horizontal, 44 - 13 * horizontal]
        : [11 + 6 * horizontal, 17 + 13 * horizontal, 31 + 15 * horizontal];
      const offset = (y * size.width + x) * 4;
      for (let channel = 0; channel < 3; channel++) {
        pixels[offset + channel] = Math.round( [10, 15, 28][channel] * (1 - topWeight) + top[channel] * topWeight );
      }
      pixels[offset + 3] = Math.round(alpha * 255);
    }
  }
  return pixels;
}

async function tile(src, width, rotation) {
  const image = await sharp(src).resize({ width }).png().toBuffer();
  const { height } = await sharp(image).metadata();
  const mask = Buffer.from(`<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="18" fill="white"/></svg>`);
  const rounded = await sharp(image).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  return sharp(rounded).rotate(rotation, { background: '#00000000' }).png().toBuffer();
}

async function render(locale) {
  const arabic = locale === 'ar';
  const base = path.join(publicDir, arabic ? 'og/ar/home.png' : 'og.png');
  const output = path.join(publicDir, arabic ? 'og/ar/home-2026-11.png' : 'og/home-2026-11.png');
  const positions = arabic
    ? { burda: [24, 101], madrasah: [156, 83], trainSync: [270, 100] }
    : { burda: [705, 101], madrasah: [859, 83], trainSync: [975, 100] };
  const layers = [
    { input: backgroundPatch(locale), raw: { width: size.width, height: size.height, channels: 4 }, left: 0, top: 0 },
  ];
  // The outer screens frame the central product, matching the live homepage composition.
  for (const [name, width, rotation] of [['burda', 185, -7], ['trainSync', 185, 7], ['madrasah', 195, 0]]) {
    const [left, top] = positions[name];
    layers.push({ input: await tile(screens[name], width, rotation), left, top });
  }
  await sharp(base).ensureAlpha().composite(layers).png({ compressionLevel: 9 }).toFile(output);
  console.log(path.relative(root, output));
}

await render('en');
await render('ar');
