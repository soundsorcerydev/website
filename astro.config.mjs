// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: 'PUBLIC_'
  },
  integrations: [sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'projectID',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2025-04-04",
    useCdn: false,
    studioBasePath: '/admin'
  }), react()],
  adapter: netlify(),
});