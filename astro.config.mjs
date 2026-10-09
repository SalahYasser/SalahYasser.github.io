// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the final public URL before deploying (e.g. a custom domain).
export default defineConfig({
  site: 'https://salahyasser.github.io',
  trailingSlash: 'always',
  // /projects/ is only a redirect to /#work, so it stays out of the sitemap (404 is excluded automatically).
  integrations: [sitemap({ filter: (page) => !page.endsWith('/projects/') })],
  build: { inlineStylesheets: 'always' },
});
