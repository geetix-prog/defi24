export async function GET() {
  const siteUrl = 'https://defi24h.mmimontbeliard.com';
  
  const pages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'equipe', changefreq: 'daily', priority: '0.9' },
    { url: 'programme', changefreq: 'weekly', priority: '0.9' },
    { url: 'galerie', changefreq: 'weekly', priority: '0.8' },
    { url: 'classement', changefreq: 'daily', priority: '0.9' },
    { url: 'contact', changefreq: 'monthly', priority: '0.7' },
    { url: 'creations', changefreq: 'weekly', priority: '0.8' },
    { url: 'inscription', changefreq: 'daily', priority: '0.9' },
    { url: 'connexion', changefreq: 'monthly', priority: '0.6' },
    { url: 'cgu', changefreq: 'monthly', priority: '0.3' },
    { url: 'confidentialite', changefreq: 'monthly', priority: '0.3' },
    { url: 'mentions', changefreq: 'monthly', priority: '0.3' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}/${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
