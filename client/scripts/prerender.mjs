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

// Import data files (pure ES modules, no JSX/CSS)
const { content, SITE_URL } = await import(pathToFileURL(join(root, 'src/data/content.js')).href)
const { services }           = await import(pathToFileURL(join(root, 'src/data/services.js')).href)
const { posts }              = await import(pathToFileURL(join(root, 'src/data/blog.js')).href)
const { locations }          = await import(pathToFileURL(join(root, 'src/data/locations.js')).href)

// ─── 2. Routes ───────────────────────────────────────────────────────────────
const serviceRoutes = services.map((s) => ({
  path: `/${s.slug}`,
  title: s.meta.title,
  description: s.meta.description,
  canonical: `${SITE_URL}/${s.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  breadcrumbs: [
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: s.hero.eyebrow, url: `${SITE_URL}/${s.slug}` },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.hero.title,
    description: s.meta.description,
    provider: { '@type': 'Person', name: 'DJEXA' },
    areaServed: { '@type': 'Country', name: 'France' },
    url: `${SITE_URL}/${s.slug}`,
  },
}))

const blogIndexRoute = {
  path: '/blog',
  title: 'Blog — Ressources pour les PME | DJEXA',
  description: "Conseils pratiques, retours d'expérience et guides pour les dirigeants de PME qui cherchent à améliorer leurs outils et leurs processus numériques.",
  canonical: `${SITE_URL}/blog`,
  changefreq: 'weekly',
  priority: '0.7',
  breadcrumbs: [
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog DJEXA',
    description: "Ressources pour les PME qui veulent mieux travailler",
    url: `${SITE_URL}/blog`,
    author: { '@type': 'Person', name: 'DJEXA' },
  },
}

const blogPostRoutes = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: `${p.title} | DJEXA`,
  description: p.excerpt.slice(0, 160),
  canonical: `${SITE_URL}/blog/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.6',
  breadcrumbs: [
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: p.title, url: `${SITE_URL}/blog/${p.slug}` },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { '@type': 'Person', name: 'DJEXA' },
    publisher: { '@type': 'Person', name: 'DJEXA' },
    url: `${SITE_URL}/blog/${p.slug}`,
  },
}))

const locationRoutes = locations.map((l) => ({
  path: `/developpeur-applications-metier-${l.slug}`,
  title: `Développeur applications métier à ${l.city} | DJEXA`,
  description: `Développeur indépendant spécialisé en applications métier sur mesure pour les PME de ${l.region}. ERP, CRM, portail client, gestion de chantier — des logiciels pensés autour de votre activité.`,
  canonical: `${SITE_URL}/developpeur-applications-metier-${l.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
  breadcrumbs: [
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: `DJEXA ${l.city}`, url: `${SITE_URL}/developpeur-applications-metier-${l.slug}` },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `DJEXA — Développeur applications métier ${l.city}`,
    description: `Applications métier sur mesure pour les PME de ${l.region}`,
    serviceType: 'Développement logiciel sur mesure',
    areaServed: { '@type': 'AdministrativeArea', name: l.region },
    url: `${SITE_URL}/developpeur-applications-metier-${l.slug}`,
  },
}))

const projectRoutes = content.projects.items.map((p) => ({
  path: `/projets/${p.slug}`,
  title: `${p.title} — DJEXA`,
  description: p.problem.slice(0, 160),
  canonical: `${SITE_URL}/projets/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.6',
  breadcrumbs: [
    { name: 'Accueil', url: `${SITE_URL}/` },
    { name: 'Réalisations', url: `${SITE_URL}/` },
    { name: p.title, url: `${SITE_URL}/projets/${p.slug}` },
  ],
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
    path: '/mentions-legales',
    title: 'Mentions légales — DJEXA',
    description: 'Mentions légales du site djexa.fr — éditeur, hébergement, propriété intellectuelle et responsabilité.',
    canonical: `${SITE_URL}/mentions-legales`,
    changefreq: 'yearly',
    priority: '0.2',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Mentions légales — DJEXA' },
  },
  {
    path: '/politique-de-confidentialite',
    title: 'Politique de confidentialité — DJEXA',
    description: 'Politique de confidentialité et protection des données personnelles du site djexa.fr, conformément au RGPD.',
    canonical: `${SITE_URL}/politique-de-confidentialite`,
    changefreq: 'yearly',
    priority: '0.2',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Politique de confidentialité — DJEXA' },
  },
  {
    path: '/confirmation',
    title: 'Message envoyé — DJEXA',
    description: 'Votre message a bien été reçu. Nous vous répondrons dans les 48 heures ouvrées.',
    canonical: `${SITE_URL}/confirmation`,
    noSitemap: true,
    changefreq: 'never',
    priority: '0.0',
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Confirmation de message' },
  },
  {
    path: '/',
    title: 'DJEXA — Applications métier sur mesure pour les PME',
    description: "Je développe des applications métier sur mesure adaptées à votre façon de travailler. J'aide les PME à remplacer leurs fichiers Excel, leurs tâches manuelles et leurs outils dispersés par des solutions simples, rapides et efficaces.",
    canonical: `${SITE_URL}/`,
    changefreq: 'weekly',
    priority: '1.0',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DJEXA',
      description: "Développement d'applications métier sur mesure pour les PME",
      serviceType: 'Développement logiciel sur mesure',
      url: `${SITE_URL}/`,
      areaServed: { '@type': 'Country', name: 'France' },
      knowsAbout: ['Applications métier', 'ERP sur mesure', 'CRM sur mesure', 'Gestion de chantier', 'PME'],
    },
  },
  ...serviceRoutes,
  blogIndexRoute,
  ...blogPostRoutes,
  ...locationRoutes,
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

  // og:url — injected for every page
  const ogUrl = `<meta property="og:url" content="${esc(route.canonical)}" />`
  if (/<meta property="og:url"[^>]*\/>/.test(html)) {
    html = html.replace(/<meta property="og:url"[^>]*\/>/, ogUrl)
  } else {
    html = html.replace('</head>', `  ${ogUrl}\n  </head>`)
  }

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${esc(route.canonical)}" />`
  if (/<link rel="canonical"[^>]*\/>/.test(html)) {
    html = html.replace(/<link rel="canonical"[^>]*\/>/, canonicalTag)
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`)
  }

  // JSON-LD — primary schema
  const ldScript = `<script type="application/ld+json">\n${JSON.stringify(route.jsonLd, null, 2)}\n</script>`
  if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/.test(html)) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, ldScript)
  } else {
    html = html.replace('</head>', `  ${ldScript}\n  </head>`)
  }

  // BreadcrumbList JSON-LD — all pages except home and 404
  if (route.breadcrumbs && route.breadcrumbs.length > 0) {
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    }
    const breadcrumbScript = `<script type="application/ld+json">\n${JSON.stringify(breadcrumbLd, null, 2)}\n</script>`
    html = html.replace('</head>', `  ${breadcrumbScript}\n  </head>`)
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
const sitemapUrls = routes.filter((r) => !r.noSitemap).map((r) => `
  <url>
    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq ?? 'monthly'}</changefreq>
    <priority>${r.priority ?? '0.6'}</priority>
  </url>`)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls.join('')}
</urlset>`

writeFileSync(join(dist, 'sitemap.xml'), sitemap)
log(`\n✓ sitemap.xml — ${routes.length} URLs`)
console.log(`\n✓ ${routes.length + 1} fichiers HTML générés\n`)
