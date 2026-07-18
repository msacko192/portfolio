/**
 * Prérendu statique multi-pages.
 *
 * Génère pour chaque route un fichier HTML complet avec contenu rendu,
 * balises meta, canonical et JSON-LD. Produit également dist/sitemap.xml.
 *
 * Usage : node scripts/prerender.mjs  (appelé par `npm run build`)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')

const log = (...a) => console.log('  ', ...a)

// ─── 1. Imports ─────────────────────────────────────────────────────────────
const serverEntry = join(root, 'dist/server/entry-server.js')
const { render } = await import(pathToFileURL(serverEntry).href)

// Import content.js directly (pure ES module, no JSX/CSS)
const { content, SITE_URL } = await import(pathToFileURL(join(root, 'src/data/content.js')).href)

// ─── 2. Routes ───────────────────────────────────────────────────────────────
const projectRoutes = content.projects.items.map((p) => ({
  path: `/projets/${p.slug}`,
  title: `${p.title} — DJEXA`,
  description: p.problem.slice(0, 160),
  canonical: `${SITE_URL}/projets/${p.slug}`,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.problem,
    creator: { '@type': 'Person', name: 'DJEXA' },
    url: `${SITE_URL}/projets/${p.slug}`,
  },
}))

const routes = [
  {
    path: '/',
    title: 'DJEXA — Applications métier sur mesure pour les PME',
    description: "Je développe des applications métier sur mesure adaptées à votre façon de travailler. J'aide les PME à remplacer leurs fichiers Excel, leurs tâches manuelles et leurs outils dispersés par des solutions simples, rapides et efficaces.",
    canonical: `${SITE_URL}/`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DJEXA',
      description: "Développement d'applications métier sur mesure pour les PME",
      serviceType: 'Développement logiciel sur mesure',
      url: `${SITE_URL}/`,
      areaServed: { '@type': 'Country', name: 'France' },
      knowsAbout: ['Applications métier', 'Développement sur mesure', 'Facturation électronique', 'ERP', 'PME'],
    },
  },
  ...projectRoutes,
]

// ─── 3. Gabarit ──────────────────────────────────────────────────────────────
const template = readFileSync(join(dist, 'index.html'), 'utf-8')

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// ─── 4. Build HTML ───────────────────────────────────────────────────────────
function buildHtml(route) {
  const appHtml = render(route.path)
  let html = template

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)

  // Description
  const descTag = `<meta name="description" content="${esc(route.description)}" />`
  if (/<meta name="description"[\s\S]*?\/>/.test(html)) {
    html = html.replace(/<meta name="description"[\s\S]*?\/>/, descTag)
  } else {
    html = html.replace('</head>', `  ${descTag}\n  </head>`)
  }

  // OG tags
  html = html.replace(/<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${esc(route.title)}" />`)
  html = html.replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${esc(route.description)}" />`)

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${esc(route.canonical)}" />`
  if (/<link rel="canonical"[^>]*\/>/.test(html)) {
    html = html.replace(/<link rel="canonical"[^>]*\/>/, canonicalTag)
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`)
  }

  // JSON-LD
  const ldScript = `<script type="application/ld+json">\n${JSON.stringify(route.jsonLd, null, 2)}\n</script>`
  if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/.test(html)) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, ldScript)
  } else {
    html = html.replace('</head>', `  ${ldScript}\n  </head>`)
  }

  // Inject rendered HTML
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  return html
}

function write(route, html) {
  const outDir = route.path === '/' ? dist : join(dist, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  const kb = (Buffer.byteLength(html) / 1024).toFixed(1)
  log(`${route.path.padEnd(40)} ${kb.padStart(7)} ko`)
}

// ─── 5. Prérendu ─────────────────────────────────────────────────────────────
console.log('\n▸ Prérendu des routes')
for (const route of routes) {
  write(route, buildHtml(route))
}

// 404 (pour serveur statique)
const notFoundHtml = buildHtml({
  path: '/404',
  title: 'Page introuvable — DJEXA',
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
  canonical: `${SITE_URL}/404`,
  jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Page introuvable' },
})
writeFileSync(join(dist, '404.html'), notFoundHtml)
log(`${'404.html'.padEnd(40)} ${(Buffer.byteLength(notFoundHtml) / 1024).toFixed(1).padStart(7)} ko`)

// ─── 6. Sitemap ──────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10)
const sitemapUrls = routes.map((r) => `
  <url>
    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls.join('')}
</urlset>`

writeFileSync(join(dist, 'sitemap.xml'), sitemap)
log(`\n✓ sitemap.xml — ${routes.length} URLs`)

const total = routes.length + 1
console.log(`\n✓ ${total} fichiers HTML générés\n`)
