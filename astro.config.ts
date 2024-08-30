import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

console.log(import.meta.env)
console.log(process.env)

export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? process.env.SITE_URL
      : process.env.LOCAL_URL,
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
