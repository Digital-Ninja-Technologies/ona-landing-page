// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update if a custom domain is attached in Vercel later.
const SITE_URL = 'https://ona-landing-page-navy.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
