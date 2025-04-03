// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: 'ts62aukc',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
  adapter: netlify(),
});