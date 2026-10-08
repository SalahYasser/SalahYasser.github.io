// Generates smaller WebP variants of every project screenshot for srcset, plus a manifest.
// Run with `npm run images` after adding or replacing screenshots, then commit the output.
// Never upscales: a width is only generated when the source is wider than it.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PUBLIC = path.join(ROOT, 'public');
const DIR = path.join(PUBLIC, 'images/projects');
const WIDTHS = [320, 440, 1180]; // plus the original; 1180 is only made when the source is that wide (for the lightbox)
const VARIANT = /-\d+w\.webp$/;

const manifest = {};
for (const slug of fs.readdirSync(DIR).sort()) {
  const dir = path.join(DIR, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.webp') || VARIANT.test(file) || file === 'icon.webp') continue;
    const abs = path.join(dir, file);
    const { width, height } = await sharp(abs).metadata();
    const src = '/' + path.relative(PUBLIC, abs).split(path.sep).join('/');
    const variants = [];
    for (const w of WIDTHS) {
      if (w >= width) continue;
      const outName = file.replace(/\.webp$/, `-${w}w.webp`);
      const out = path.join(dir, outName);
      if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(abs).mtimeMs) {
        await sharp(abs).resize({ width: w, kernel: 'lanczos3' }).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(out);
      }
      variants.push({ w, src: src.replace(/\.webp$/, `-${w}w.webp`) });
    }
    variants.push({ w: width, src });
    manifest[src] = { width, height, variants };
  }
}
const outFile = path.join(ROOT, 'src/data/image-variants.json');
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2) + '\n');
console.log(`${Object.keys(manifest).length} screenshots → ${path.relative(ROOT, outFile)}`);
