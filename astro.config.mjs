import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://christoskostouros.github.io',
  base: '/pest-control-site',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
