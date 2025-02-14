import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { siteRoutes, siteConfig } from './src/config/sitemap';

// Function to generate sitemap.xml
function generateSitemapXML(routes: typeof siteRoutes) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    const url = `${siteConfig.baseUrl}${route.path}`;
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <changefreq>${route.changefreq || siteConfig.defaultChangeFreq}</changefreq>\n`;
    xml += `    <priority>${route.priority || siteConfig.defaultPriority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

// Function to update sitemap
function updateSitemap() {
  // Generate sitemap.xml
  const sitemapXML = generateSitemapXML(siteRoutes);
  fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemapXML);
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      buildEnd() {
        updateSitemap();
      },
    },
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});