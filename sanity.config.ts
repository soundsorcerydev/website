import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  name: 'default',
  title: 'Sound Sorcery',
  basePath: '/admin',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'projectID',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  vite: {
    envPrefix: 'PUBLIC_'
  }
})