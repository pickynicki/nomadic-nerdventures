import { defineCliConfig } from 'sanity/cli'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID!;
  const dataset =
  process.env.SANITY_STUDIO_DATASET!;

export default defineCliConfig({
  api: {
    projectId, // Replace with your actual project ID
    dataset, // Or 'development' if working on a development dataset
  },
})