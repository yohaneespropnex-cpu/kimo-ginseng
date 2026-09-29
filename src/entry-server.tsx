/**
 * Entry build-time (SSR) — dipakai scripts/prerender.mjs untuk menghasilkan
 * HTML statis. Konten jadi terbaca crawler & scraper sosial tanpa menjalankan
 * JS, dan FCP/LCP jauh lebih cepat.
 */
import { renderToString } from 'react-dom/server'
import App from './App'
import { FAQS } from './config/content'
import { HEALTH_DISCLAIMER, SEO, SITE, SITE_URL } from './config/site'

export function render(): string {
  return renderToString(<App />)
}

const abs = (path: string) => new URL(path, SITE_URL).href

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** JSON aman di dalam <script>: cegah `</script>` menutup tag lebih awal. */
const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function structuredData() {
  const orgId = `${SITE_URL}#organization`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE.company,
        url: SITE_URL,
        logo: abs('apple-touch-icon.png'),
        email: SITE.email,
        sameAs: [SITE.instagramUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: SITE.brand,
        url: SITE_URL,
        inLanguage: 'id-ID',
        publisher: { '@id': orgId },
      },
      {
        // Sengaja TANPA aggregateRating/review: testimoni masih placeholder,
        // dan rating palsu di schema melanggar kebijakan Google.
        '@type': 'Product',
        '@id': `${SITE_URL}#product`,
        name: SITE.brand,
        brand: { '@type': 'Brand', name: SITE.brand },
        manufacturer: { '@id': orgId },
        category: 'Suplemen Kesehatan Herbal',
        description: `${SEO.description} ${HEALTH_DISCLAIMER}`,
        image: [abs('images/product.jpg')],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

/** Seluruh tag <head> untuk SEO — menggantikan blok seo:start…seo:end. */
export function head(): string {
  const url = SITE_URL
  const img = abs(SEO.ogImage)
  return [
    `<title>${esc(SEO.title)}</title>`,
    `<meta name="description" content="${esc(SEO.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.brand)}" />`,
    `<meta property="og:locale" content="${SEO.locale}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(SEO.title)}" />`,
    `<meta property="og:description" content="${esc(SEO.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(SEO.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(SEO.title)}" />`,
    `<meta name="twitter:description" content="${esc(SEO.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    jsonLd(structuredData()),
  ].join('\n    ')
}

export { SITE_URL }
