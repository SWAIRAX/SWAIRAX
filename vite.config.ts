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
      hostname: "https://quantumintelligence.co.tz",
      dynamicRoutes: [
        "/",
        "/services",
        "/clients",
        "/industries",
        "/industries/financial-services",
        "/industries/telecommunications",
        "/industries/education-services",
        "/industries/utilities",
        "/industries/retail-logistics",
        "/industries/healthcare-pharmacy",
        "/careers",
        "/resources",
        "/blog",
        "/about",
        "/contact",
        "/ai-studio",
        "/mlops",
        "/mlops-devops",
        "/quantum-genai",
        "/deep-operator",
        "/quantum-annotate",
        "/business-analysis",
        "/try-now",
        "/privacy",
        "/terms",
        "/faq",
        "/glossary",
        "/research",
        "/partnerships",
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
}));
