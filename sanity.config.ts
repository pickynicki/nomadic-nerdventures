// Different environments use different variables

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID!;
  const dataset =
  process.env.SANITY_STUDIO_DATASET!;

  // Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {schemaTypes}  from "./schemaTypes";

export default defineConfig({
  name: "nomadic-nerdventures", // Can be whatever
  title: "Nomadic Nerdventures", // Can be whatever
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});