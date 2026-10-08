// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the final public URL before deploying (e.g. a custom domain).
export default defineConfig({
  site: 'https://salahyasser.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
