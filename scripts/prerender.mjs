/**
 * Prerender (SSG) setelah `vite build`:
 *  1. Render <App /> jadi HTML statis → isi <div id="root">.
 *  2. Ganti blok <!--seo:start-->…<!--seo:end--> dengan meta SEO + JSON-LD.
 *  3. Preload font kritis (headline & body) supaya tidak "loncat" saat swap.
 *  4. Tulis sitemap.xml & robots.txt dari SITE_URL.
 * Tanpa dependency tambahan — hanya react-dom/server via bundle SSR Vite.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const { render, head, SITE_URL } = await import(
  pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
)

const replaceOnce = (html, pattern, value, label) => {
  if (!pattern.test(html)) throw new Error(`prerender: penanda ${label} tidak ditemukan di index.html`)
  return html.replace(pattern, () => value)
}

// Font kritis: Cormorant 600 (headline) + Inter 400 (body).
const assets = readdirSync(join(dist, 'assets'))
const critical = ['cormorant-garamond-latin-600-normal', 'inter-latin-400-normal']
const preloads = critical
  .map((name) => assets.find((f) => f.startsWith(name) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="./assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

let html = readFileSync(join(dist, 'index.html'), 'utf8')
html = replaceOnce(html, /<!--app-html-->/, render(), 'app-html')
html = replaceOnce(html, /<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(), 'seo:start/end')
html = replaceOnce(html, /<!--font-preload-->/, preloads, 'font-preload')
writeFileSync(join(dist, 'index.html'), html)

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
)
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap.xml', SITE_URL).href}
`,
)

console.log(`prerender: OK → ${SITE_URL} (${preloads ? critical.length : 0} font preload, sitemap, robots)`)
