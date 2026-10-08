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
  - `screenshots`: put images in `public/images/projects/<slug>/` and add `src`, `alt`, `caption`.
- **CV download:** add the PDF to `public/cv/` and set `cvPath` in `site.ts` (keep it `null` until a public CV without the phone number is ready).

## Deploy (GitHub Pages)
1. Push this folder to a public GitHub repo. For the root URL `https://salahyasser.github.io/`, name the repo `SalahYasser.github.io`.
2. In the repo: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`.
4. If you use a different repo name or a custom domain, update `site` in `astro.config.mjs` (and add `base` for a project repo).

## Content status (8 Oct 2026)
- Al-Burda, FLEXI, El Madrasah: live on the App Store; case studies published (BDC approval confirmed by Salah for El Madrasah).
- PersonaRise, Makkah College: compact cards; on TestFlight and submitted to App Store review. Add App Store links once approved.
- Phone number intentionally omitted. Run PageSpeed Insights on the live URL after deploying.
