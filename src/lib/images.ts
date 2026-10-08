import variants from '../data/image-variants.json';

type Entry = { width: number; height: number; variants: { w: number; src: string }[] };
const manifest = variants as Record<string, Entry>;

// `sizes` for each screenshot slot, mirroring that slot's CSS clamp()/media rules,
// so the browser picks the smallest variant that is still sharp on the device.
// The hero phones reuse files that also appear further down the page (home hero → feature cards,
// case-study hero → gallery). Their `sizes` deliberately match the later slot on phones, so both
// pick the same variant and the browser downloads each screenshot once instead of twice.
const card = '(max-width: 654px) 9rem, (max-width: 981px) 22vw, 13.5rem';
const gallery = '(max-width: 872px) 12rem, (max-width: 1163px) 22vw, 16rem';
export const shotSizes = {
  /** index.astro .hero-stage .shot (renders 6.25–7.5rem on phones, up to 15rem on desktop) */
  homeHero: '(max-width: 654px) 9rem, (max-width: 959px) 22vw, (max-width: 999px) 24vw, 15rem',
  /** FeatureCard.astro .stage .shot: clamp(9rem, 22vw, 13.5rem) */
  card,
  /** [slug].astro .hero-shots .shot (9–14rem); same choice as the gallery below it */
  caseHero: gallery,
  /** [slug].astro .gallery li: clamp(12rem, 22vw, 16rem) */
  gallery,
};

/** srcset for a screenshot in /public, plus the largest available file (used by the lightbox). */
export function responsive(src: string) {
  const e = manifest[src];
  if (!e) return { src, srcset: undefined, largest: src };
  return {
    src,
    srcset: e.variants.map((v) => `${v.src} ${v.w}w`).join(', '),
    largest: e.variants[e.variants.length - 1].src,
  };
}
