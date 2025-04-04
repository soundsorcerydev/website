import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sound Sorcery',
  basePath: '/admin',

  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,

  // projectId: 'ts62aukc',
  // dataset: 'production',

  // plugins: [structureTool(), visionTool()],
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
  vite: {
    envPrefix: 'PUBLIC_'
  }
})