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
        player: resolve(__dirname, "player/index.html"),
        og: resolve(__dirname, "2004/index.html"),
        ogBio: resolve(__dirname, "2004/bio.html"),
        ogDisco: resolve(__dirname, "2004/disco.html"),
        ogFoto: resolve(__dirname, "2004/foto.html"),
        ogGig: resolve(__dirname, "2004/gig.html"),
        ogLink: resolve(__dirname, "2004/link.html"),
        ogMedia: resolve(__dirname, "2004/media.html"),
        ogNews: resolve(__dirname, "2004/news.html"),
        ogStandard: resolve(__dirname, "2004/standard.html"),
        ogZebo: resolve(__dirname, "2004/zebo.html"),
      },
    },
  },
});
