import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://hkfinancegroup.co';

// Static routes
const staticRoutes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/privacy-policy'
];

// Read servicesData to extract dynamic routes
const servicesFilePath = path.join(process.cwd(), 'src', 'data', 'services.js');
const servicesContent = fs.readFileSync(servicesFilePath, 'utf8');

// Use regex to find all slugs
const slugRegex = /slug:\s*["']([^"']+)["']/g;
const dynamicSlugs = [];
let match;

while ((match = slugRegex.exec(servicesContent)) !== null) {
  dynamicSlugs.push(`/services/${match[1]}`);
}

const allRoutes = [...staticRoutes, ...dynamicSlugs];
const today = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/services/') ? '0.8' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent, 'utf8');

console.log(`Generated sitemap with ${allRoutes.length} URLs at ${outputPath}`);
