// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the final public URL before deploying (e.g. a custom domain).
export default defineConfig({
  site: 'https://salahyasser.github.io',
  trailingSlash: 'always',
  // /projects/ is only a redirect to /#work and /ar/404/ is the Arabic not-found page, so both stay out of the sitemap (404 is excluded automatically).
  integrations: [sitemap({ filter: (page) => !page.endsWith('/projects/') && !page.endsWith('/ar/404/') })],
  build: { inlineStylesheets: 'always' },
});
