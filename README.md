# Salah Yasser — Portfolio

Static, mobile-first portfolio built with [Astro](https://astro.build). No backend, minimal JavaScript, content in static HTML.

## Run locally
```bash
npm install
npm run dev                              # production content only
PUBLIC_SHOW_PENDING=true npm run dev     # preview: also shows projects awaiting approval
npm run build                            # outputs ./dist
```

## Update content
All user-facing text lives in `src/data/` — pages and components only render it. Edit the data, never the `.astro` files, for copy changes.

- **Profile, experience, skills:** `src/data/site.ts` (`site`, `experience`, `education`, `skills`)
- **Every UI string** (hero, section titles, CTAs, nav, footer, case-study labels, 404): `copy` in `src/data/site.ts`
- **Projects:** `src/data/projects.ts`. Each project has:
  - `approval`: `'approved'` ships to production; `'pending'` only appears in preview builds.
  - `caseStudy: true` + `sections` → gets its own page at `/projects/<slug>/`. Otherwise it shows as a compact card.
  - `role` is the short line on the homepage card and the case-study **Role** box; `sections.roleDetail` is the longer **My role** paragraph — keep them telling the same story.
  - `heroShot`: which screenshot appears in the homepage hero (default 0).
  - `displayShotOrder`: optional visual order for the card and case-study lead; the screenshot gallery keeps store order.
  - `screenshots`: put images in `public/images/projects/<slug>/` and add `src`, `alt`, `caption`.
- **CV download:** add the PDF to `public/cv/` and set `cvPath` in `site.ts` (keep it `null` until a public CV without the phone number is ready).

## Deploy (GitHub Pages)
1. Push this folder to a public GitHub repo. For the root URL `https://salahyasser.github.io/`, name the repo `SalahYasser.github.io`.
2. In the repo: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`.
4. If you use a different repo name or a custom domain, update `site` in `astro.config.mjs` (and add `base` for a project repo).

## Content status (18 Nov 2026)
- Al-Burda, FLEXI, El Madrasah and Makkah College: live on the App Store and Google Play. FLEXI keeps the App Store screenshots in its case study; Makkah College uses its current App Store screenshots.
- Train&Sync: Salah's own product, live on the App Store. Android is in closed testing; the case study describes only verified released features.
- PersonaRise and RFMS: compact cards marked On TestFlight. RFMS is described as a team project because its employer attribution and Salah's detailed role have not been verified.
- BDC approval confirmed by Salah for El Madrasah.
- Phone number intentionally omitted. Run PageSpeed Insights on the live URL after deploying.

## Verification sources and display decisions (18 Nov 2026)
- [Makkah College on the App Store](https://apps.apple.com/eg/app/makkah-college/id6813632607): live iOS listing and six official listing screenshots. Its welcome screen leads the portfolio card, with courses on the right; the gallery keeps Apple's listing order.
- [FLEXI on Google Play](https://play.google.com/store/apps/details?id=com.flexi.hr): confirms the Android release. The existing App Store screenshots remain the visual source for its case study.
- [Train&Sync on the App Store](https://apps.apple.com/eg/app/train-sync/id6834534014) and [its README](https://github.com/SalahYasser/training_sync): describe the released product and six listing screenshots. Android closed-testing status was supplied by Salah. Unreleased development features are excluded from the case study.
- [RFMS repository](https://github.com/Abdullah-mamdouh/rfms-mobile): app purpose and Flutter stack; its TestFlight status was supplied by Salah. The card uses neutral team-project attribution until an exact role or employer is verified.
- The homepage hero uses the existing App Store images for Al-Burda, El Madrasah and Train&Sync, in that fixed order. Three overlapping CSS layers keep the product screens visible; responsive image `sizes` follows their actual widths, and reduced-motion users see a static composition.
