import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import Renderer from "@prerenderer/renderer-jsdom";
import { SEO_ROUTES } from "./src/seo/seoRoutes";
import { SITE_URL } from "./src/seo/constants";

const toSitemapUrl = (routePath: string) =>
  `${SITE_URL}${routePath === "/" ? "/" : routePath}`;

const generateSitemapXml = () => {
  const urls = SEO_ROUTES.map((route) => {
    const priorityTag = route.priority
      ? `\n    <priority>${route.priority.toFixed(1)}</priority>`
      : "";
    return `  <url>\n    <loc>${toSitemapUrl(route.path)}</loc>${priorityTag}\n  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const generateRobotsTxt = () => `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
Sitemap: ${SITE_URL}/sitemap.xml
`;

const seoFilesPlugin = () => ({
  name: "dcore-seo-files",
  buildStart() {
    const publicDir = path.resolve(__dirname, "public");
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), generateSitemapXml());
    fs.writeFileSync(path.join(publicDir, "robots.txt"), generateRobotsTxt());
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true,
    strictPort: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    seoFilesPlugin(),
    prerender({
      staticDir: "dist",
      routes: SEO_ROUTES.map((route) => route.path),
      renderer: new Renderer({
        renderAfterDocumentEvent: "prerender-ready",
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tooltip',
          ],
          'vendor-ui': ['lucide-react', 'sonner', 'vaul', 'next-themes'],
          'vendor-charts': ['recharts'],
          'vendor-forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'vendor-data': ['@tanstack/react-query', '@supabase/supabase-js', 'date-fns'],
          'vendor-carousel': ['embla-carousel-react'],
          'vendor-ml': ['@huggingface/transformers'],
        },
      },
    },
  },
}));
