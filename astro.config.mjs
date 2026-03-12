import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bioclean-pro.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
