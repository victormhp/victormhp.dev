import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  vite: { plugins: [tailwindcss()] },
  site: "https://victormhp.dev/",
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
