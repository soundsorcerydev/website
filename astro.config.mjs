// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: 'PUBLIC_'
  },
  integrations: [sanity({
    // projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    // dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    projectId: 'ts62aukc',
    dataset: 'production',
    
    useCdn: false,
    apiVersion: "2025-04-04",
    studioBasePath: '/admin'
  }), react()],
  adapter: netlify(),
});