import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

import { remarkReadingTime } from "./src/utils/all";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

export default defineConfig({
  server: { port: 3001 },
  site: "https://www.nomadicnerdventures.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    sanity({
      projectId,
      dataset,
      studioBasePath: "/admin",
      useCdn: false,
      apiVersion: '2024-06-25'}),
    react(),
    astroImageTools
  ],
});
