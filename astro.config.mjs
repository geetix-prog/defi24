// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Ignorer les fichiers PocketBase pour éviter les refresh en boucle
        ignored: ['**/backend/pb/**', '**/pb_data/**', '**/*.db', '**/*.db-*']
      }
    }
  },

  adapter: node({
    mode: 'standalone',
  }),
});