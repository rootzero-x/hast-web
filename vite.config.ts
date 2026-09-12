import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Four entry documents, one bundle.
 *
 * The legal pages and the app-opening page are real HTML files rather than
 * client-side routes so that their titles, descriptions and canonical URLs are
 * in the source. A privacy policy whose title only appears after JavaScript has
 * run is a privacy policy that an app-store reviewer's fetch, a crawler or a
 * shared-link preview sees under the marketing page's name.
 *
 * They all load the same bundle, which still picks the page from the path - so
 * there is one router and one place to add a page.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        maxfiylik: resolve(__dirname, 'maxfiylik.html'),
        shartlar: resolve(__dirname, 'shartlar.html'),
        ilova: resolve(__dirname, 'ilova.html'),
      },
    },
  },
});
