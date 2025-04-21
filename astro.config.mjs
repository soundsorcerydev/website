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
    envPrefix: 'PUBLIC_',
    // define: {
    //   'process.env.PUBLIC_SANITY_PROJECT_ID': JSON.stringify(process.env.PUBLIC_SANITY_PROJECT_ID),
    //   'process.env.PUBLIC_SANITY_DATASET': JSON.stringify(process.env.PUBLIC_SANITY_DATASET),
    //   'process.env.PUBLIC_SANITY_API_TOKEN': JSON.stringify(process.env.PUBLIC_SANITY_API_TOKEN)
    // }
  },
  integrations: [sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'projectID',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2025-04-04",
    useCdn: false,
    studioBasePath: '/admin',
    stega: {
      studioUrl: "/admin",
    },
  }), react()],
  adapter: netlify(),
});