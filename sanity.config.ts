import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";

export default defineConfig({
  // name: 'default',
  // title: 'Sound Sorcery',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'projectID',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: "2025-04-04",
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  vite: {
    envPrefix: 'PUBLIC_'
  }
})