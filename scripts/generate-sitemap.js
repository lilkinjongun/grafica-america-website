import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://graficaamerica.com.br';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/ar-vr', priority: '0.9', changefreq: 'weekly' },
  { path: '/ar-vr/imoveis', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/video-3d', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/menu-restaurante', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/jogo-memoria', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/cartao-visita', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/lotr', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/movie-poster', priority: '0.8', changefreq: 'monthly' },
  { path: '/ar-vr/birthday-card', priority: '0.8', changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

try {
  const outputPath = join(process.cwd(), 'client', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap gerado com sucesso em:', outputPath);
} catch (error) {
  console.error('❌ Erro ao gerar sitemap:', error);
  process.exit(1);
}

