// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",

  // adapter: ,
  vite: {
    plugins: [tailwindcss()],
  },

  // adapter: node({
  //   mode: "standalone",
  // }),

  adapter: netlify(),
});
