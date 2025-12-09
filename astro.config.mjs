// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Ignorer les fichiers PocketBase pour éviter les refresh en boucle
        ignored: ['**/backend/pb/**', '**/pb_data/**', '**/*.db', '**/*.db-*']
      }
    }
  },
});