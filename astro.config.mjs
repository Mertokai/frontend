import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "sqhma3n4",
      dataset: "production",
      apiVersion: "2023-02-08",
      useCdn: false,
    }),
    react(),
  ],
});
