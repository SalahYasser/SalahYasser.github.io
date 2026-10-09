// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';

// <lastmod> in the sitemap: the date of the commit being built (one date for the whole site; falls back to the build time outside git).
const lastCommit = (() => {
  try {
    return new Date(execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim());
  } catch {
    return new Date();
  }
})();

// Update `site` to the final public URL before deploying (e.g. a custom domain).
export default defineConfig({
  site: 'https://salahyasser.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /projects/ is only a redirect to /#work and /ar/404/ is the Arabic not-found page, so both stay out of the sitemap (404 is excluded automatically).
      filter: (page) => !page.endsWith('/projects/') && !page.endsWith('/ar/404/'),
      // Every URL lists its English and Arabic versions as xhtml:link hreflang alternates (English at /, Arabic under /ar/).
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
      lastmod: lastCommit,
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
