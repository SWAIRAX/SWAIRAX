import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";
import { blogPosts } from "./src/data/blogPosts";

// Detail-page slugs (kept in sync with src/data) so every real URL is in the
// sitemap. Service/sector slugs are listed literally to avoid importing the
// icon-laden data modules into the Vite config.
const serviceSlugs = ["ai", "data-science", "cybersecurity", "big-data", "software", "cloud-devops"];
const sectorSlugs = [
  "agriculture", "manufacturing", "construction", "retail-logistics", "financial-services",
  "healthcare-pharmacy", "education", "energy-utilities", "telecommunications", "beauty-wellness",
];

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
        "/about",
        "/services",
        "/products",
        "/sectors",
        "/blog",
        "/contact",
        ...serviceSlugs.map((s) => `/services/${s}`),
        ...sectorSlugs.map((s) => `/sectors/${s}`),
        ...blogPosts.map((p) => `/blog/${p.slug}`),
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
