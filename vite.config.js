import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        produse: resolve(__dirname, "src/pages/produse.html"),
        despre_mine: resolve(__dirname, "src/pages/despre_mine.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
      },
    },
  },
});
