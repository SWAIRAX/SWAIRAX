import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

export default defineConfig(({ mode }) => ({
  base: "./", // ⭐⭐⭐ ADD THIS LINE

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),

    sitemap({
      hostname: "https://swairax.com",
      dynamicRoutes: [
        "/",
        "/services",
        "/products",
        "/sectors",
        "/about",
        "/contact",
        "/careers",
        "/blog",
        "/privacy",
        "/terms",
        "/faq",
      ],
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Pre-bundle the plexus background deps so their dynamic import works in dev.
  // vanta ships a CommonJS build; without this it fails to load under `vite dev`.
  optimizeDeps: {
    include: ["three", "vanta/dist/vanta.net.min"],
  },
}));
