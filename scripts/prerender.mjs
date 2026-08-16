// Post-build step: renders the app to static HTML and injects it into dist/index.html
// so crawlers get real content instead of an empty <div id="app">, then emits
// robots.txt and sitemap.xml. Run automatically by `npm run build`.

import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer, loadEnv } from 'vite';
import { renderToString } from 'vue/server-renderer';
import { createPinia, setActivePinia } from 'pinia';

const DIST = path.resolve('dist');
// Node does not read .env on its own — pull it through Vite so this script and
// index.html's %VITE_SITE_URL% resolve to the same value.
const env = loadEnv('production', process.cwd(), 'VITE_');
const SITE_URL = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || '').replace(/\/+$/, '');

if (!/^https?:\/\/[^/]+$/.test(SITE_URL)) {
  throw new Error(`VITE_SITE_URL is not a bare origin: "${SITE_URL}" (expected e.g. https://example.com)`);
}

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

let appHtml;
let faq;
try {
  const { createShopApp } = await server.ssrLoadModule('/src/createApp.js');
  const { buildFaq } = await server.ssrLoadModule('/src/faq.js');
  const { useShopStore } = await server.ssrLoadModule('/src/stores/shop.js');

  // Build the FAQ for the store's *default* region so the JSON-LD describes exactly
  // what the prerendered markup shows — Google penalises schema that isn't on-page.
  setActivePinia(createPinia());
  const store = useShopStore();
  faq = buildFaq(store.providerData, store.region);

  const app = createShopApp({ ssr: true });
  app.config.errorHandler = (err) => { throw err; };
  appHtml = await renderToString(app);
} finally {
  await server.close();
}

// The prerendered markup is what crawlers index, so a render that hasn't settled
// (duplicate "best value" cards) must fail the build rather than ship silently.
const occurrences = needle => appHtml.split(needle).length - 1;

// The FAQ answers are generated from providerData; the JSON-LD below is generated from
// the same call. Assert the rendered <dd> text is identical to what goes into the
// schema, so a change to providerData can never leave the two disagreeing.
const decodeEntities = value => value
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&');

const renderedAnswers = [...appHtml.matchAll(/<p class="faq__answer"[^>]*>([\s\S]*?)<\/p>/g)]
  .map(match => decodeEntities(match[1].replace(/<[^>]+>/g, '')).trim());

const checks = [
  ['app rendered', appHtml.length > 2000],
  ['exactly one "Best Value!" banner', occurrences('Best Value!') === 1],
  ['provider cards present', occurrences('<article') >= 4],
  ['FAQ present', faq.length > 0 && occurrences('<summary') === faq.length],
  ['FAQ answers match the JSON-LD exactly', faq.length > 0
    && renderedAnswers.length === faq.length
    && faq.every((item, i) => renderedAnswers[i] === item.a)],
  ['no unrendered <template> elements', !appHtml.includes('<template')],
];

const failed = checks.filter(([, ok]) => !ok);
checks.forEach(([label, ok]) => console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${label}`));
if (failed.length) {
  throw new Error(`Prerender sanity checks failed: ${failed.map(([l]) => l).join(', ')}`);
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const indexPath = path.join(DIST, 'index.html');
let html = await fs.readFile(indexPath, 'utf8');

if (!html.includes('<div id="app"></div>')) {
  throw new Error('dist/index.html has no empty <div id="app"></div> to fill — did the build change?');
}

html = html
  .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n  </head>`);

await fs.writeFile(indexPath, html, 'utf8');

await fs.writeFile(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  'utf8',
);

await fs.writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
`,
  'utf8',
);

console.log(`  prerendered ${appHtml.length.toLocaleString()} chars into dist/index.html`);
console.log(`  wrote robots.txt and sitemap.xml for ${SITE_URL}`);
