import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';
import { projects } from '../src/data/projects.js';
import { writingItems } from '../src/data/writing.js';
import { metadataForPath } from '../src/data/routeMetadata.js';
import { CASE_STUDY_ROUTES } from './case-study-metadata.mjs';

const routes = ['/', '/projects', '/engineering', '/writing', '/about', '/contact', '/privacy',
  ...projects.filter(p => p.caseStudyUrl).map(p => p.caseStudyUrl),
  ...writingItems.map(item => item.route)];
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const shell = await readFile('dist/index.html', 'utf8');
const serverDirectory = resolve('dist/.prerender');

try {
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: serverDirectory, emptyOutDir: true, minify: false } });
  const { render } = await import(pathToFileURL(resolve(serverDirectory, 'entry-server.js')));
  // The homepage's lazy CSS must be present before hydration as well as after it.
  const extraStyles = (await readdir('dist/assets')).filter(name => name.endsWith('.css') && !shell.includes(`/assets/${name}`));
  for (const route of new Set(routes)) {
    const runtime = metadataForPath(route);
    const metadata = { ...runtime, ...CASE_STUDY_ROUTES.find(item => item.route === route) };
    const html = await render(route);
    assert(!html.includes('<script'), `${route}: unexpected streaming script`);
    assert(html.includes('<h1'), `${route}: missing primary heading`);
    assert(!html.includes('<!--$!-->') && !html.includes('<!--$?-->'), `${route}: unresolved server rendering boundary`);
    const tags = [
      ['name', 'description', metadata.description], ['name', 'robots', metadata.robots ?? 'index, follow'],
      ['property', 'og:site_name', 'Chintan Patel Portfolio'], ['property', 'og:locale', 'en_CA'],
      ['property', 'og:title', metadata.title], ['property', 'og:description', metadata.description],
      ['property', 'og:type', metadata.ogType ?? 'website'], ['property', 'og:url', metadata.canonical],
      ['property', 'og:image', metadata.image], ['property', 'og:image:width', metadata.imageWidth],
      ['property', 'og:image:height', metadata.imageHeight], ['property', 'og:image:type', metadata.imageType ?? 'image/jpeg'],
      ['property', 'og:image:alt', metadata.imageAlt ?? metadata.title],
      ['name', 'twitter:card', 'summary_large_image'], ['name', 'twitter:title', metadata.title],
      ['name', 'twitter:description', metadata.description], ['name', 'twitter:image', metadata.image],
      ['name', 'twitter:image:alt', metadata.imageAlt ?? metadata.title]
    ];
    let page = shell.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
      .replace(/<link\b[^>]*rel="canonical"[^>]*>/gi, '')
      .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/gi, '');
    const head = `<title>${escape(metadata.title)}</title>\n<link rel="canonical" href="${escape(metadata.canonical)}" />\n` +
      tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${escape(value)}" />`).join('\n') +
      runtime.structuredData.map(data => `<script type="application/ld+json" data-page-meta-json-ld="true">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`).join('\n') +
      extraStyles.map(name => `<link rel="stylesheet" href="/assets/${name}" />`).join('\n') +
      '<noscript><style>.prerender-reveal{opacity:1!important;transform:none!important}</style></noscript>';
    page = page.replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${escape(route)}">${html}</div>`);
    assert(page.includes(`data-prerendered="${route}"`), `${route}: root replacement failed`);
    assert.equal((page.match(/<link rel="canonical"/g) ?? []).length, 1, `${route}: duplicate canonicals`);
    assert.equal((page.match(/<title>/g) ?? []).length, 1, `${route}: duplicate titles`);
    if (route === '/') assert(page.includes('lower is better') && page.includes('explore-by-role'));
    if (route === '/case-studies/triageai') assert(page.includes('70.37%') && page.includes('54.70%'));
    if (route.startsWith('/writing/')) assert(page.includes('TechArticle') && page.includes('prose-ai'));
    if (route === '/writing/regimpact-human-ai-evaluation') {
      assert(page.includes('When AI Labels Aren’t Ground Truth'));
      assert(page.includes('82.35%') && page.includes('single_human_reference'));
      assert(page.includes('2026-11-15'), `${route}: missing structured publication date`);
    }
    if (route === '/writing/regimpact-secure-ai-companion') {
      assert(page.includes('Before Building the Agent'));
      assert(page.includes('Browser-token passthrough') && page.includes('REGIMPACT_COMPANION_ACCESS_ENABLED'));
      assert(page.includes('2026-11-16'), `${route}: missing structured publication date`);
    }
    const output = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, page);
    console.log(`Prerendered and validated ${route}`);
  }
  // Keep the sitemap aligned with real canonical pages, including every published article.
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    [...new Set(routes)].map(route => `  <url><loc>${escape(metadataForPath(route).canonical)}</loc></url>`).join('\n') + '\n</urlset>\n';
  await writeFile('dist/sitemap.xml', sitemap);
} finally {
  await rm(serverDirectory, { recursive: true, force: true });
}
