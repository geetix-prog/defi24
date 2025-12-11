import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://defi24h.mmimontbeliard.com',
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
  
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});