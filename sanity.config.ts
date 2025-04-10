import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sound Sorcery',
  basePath: '/admin',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'projectID',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  vite: {
    envPrefix: 'PUBLIC_'
  }
})