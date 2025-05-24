const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BASE_URL = 'https://termuxapps.com';
const SITEMAP_PATH = path.join('public', 'sitemap.xml');

console.log('Sitemap generation script started.');

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase letters
    .replace(/[\s_]+/g, '-') // replace all spaces and low dash
    .toLowerCase();
}

async function generateSitemap() {
  const pages = [];

  // Find files in src/pages
  const pageFiles = glob.sync('src/pages/**/*.tsx', {
    ignore: ['src/pages/_*.tsx', 'src/pages/api/**'],
  });

  pageFiles.forEach(file => {
    const stats = fs.statSync(file);
    const lastMod = stats.mtime.toISOString().split('T')[0];
    let pathSegment = path.relative('src/pages', file);
    pathSegment = pathSegment.substring(0, pathSegment.lastIndexOf('.'));

    let url;
    if (pathSegment === 'Index') {
      url = '/';
    } else {
      url = `/${toKebabCase(pathSegment)}`;
    }
    
    pages.push({
      url: `${BASE_URL}${url}`,
      lastMod,
      changefreq: 'weekly', // Default, can be adjusted
      priority: url === '/' ? 1.0 : 0.9, // Default, can be adjusted
    });
  });

  // Find files in src/pages/posts
  const postFiles = glob.sync('src/pages/posts/**/*.tsx', {
    ignore: ['src/pages/posts/Index.tsx', 'src/pages/posts/_*.tsx'], 
  });

  postFiles.forEach(file => {
    const stats = fs.statSync(file);
    const lastMod = stats.mtime.toISOString().split('T')[0];
    let fileName = path.basename(file, '.tsx');
    // Assuming post URLs should be /blog/kebab-case-filename
    const url = `/blog/${toKebabCase(fileName)}`;

    pages.push({
      url: `${BASE_URL}${url}`,
      lastMod,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });
  
  // Add static pages if not already dynamically found (or to ensure specific priority/changefreq)
  const staticPages = [
    { url: `${BASE_URL}/`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/commands`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/download`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/pc`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.9 }, // Main blog listing
    { url: `${BASE_URL}/about`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastMod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  ];

  // Merge and remove duplicates, giving preference to static definitions for priority/changefreq
  const urlMap = new Map();
  staticPages.forEach(page => urlMap.set(page.url, page));
  pages.forEach(page => {
    if (!urlMap.has(page.url)) { // Add if not defined by staticPages
        urlMap.set(page.url, page);
    }
  });
  
  const finalPages = Array.from(urlMap.values());

  const sitemapXml = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${finalPages
    .map(
      page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    )
    .join('')}
</urlset>
  `.trim();

  try {
    // Ensure public directory exists
    const publicDir = path.dirname(SITEMAP_PATH);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log(`Created directory: ${publicDir}`);
    }
    
    fs.writeFileSync(SITEMAP_PATH, sitemapXml);
    console.log('Sitemap generated successfully at', SITEMAP_PATH);
  } catch (error) {
    console.error('Error writing sitemap:', error);
  }
}

generateSitemap();
