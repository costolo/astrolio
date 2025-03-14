import { defineConfig } from "astro/config";
import node from '@astrojs/node';
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? 'https://benco.st'
      : 'https://localhost:4321',
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    responsiveImages: true
  },
  image: {
    experimentalLayout: 'responsive'
  }
});
