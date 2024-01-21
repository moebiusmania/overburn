// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";
const base: string | undefined = isProd ? "/overburn/" : "";

export default defineConfig({
  base,
  server: {
    host: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "2004/index.html"),
      },
    },
  },
});
