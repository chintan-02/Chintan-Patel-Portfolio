import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { CASE_STUDY_ROUTES, REQUIRED_META_FIELDS } from './case-study-metadata.mjs';

const SOURCE_HTML = 'dist/index.html';

function parseAttributes(tag) {
  const attributes = {};
  const pattern = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;

  while ((match = pattern.exec(tag))) {
    attributes[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  }

  return attributes;
}

function removeCrawlerMetadata(html) {
  const metaNames = new Set(
    REQUIRED_META_FIELDS.filter((field) => field.kind === 'meta-name').map(
      (field) => field.key
    )
  );
  const metaProperties = new Set(
    REQUIRED_META_FIELDS.filter((field) => field.kind === 'meta-property').map(
      (field) => field.key
    )
  );

  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*>/gi, (tag) => {
      const attributes = parseAttributes(tag);
      if (metaNames.has(attributes.name) || metaProperties.has(attributes.property)) {
        return '';
      }
      return tag;
    })
    .replace(/<link\b[^>]*>/gi, (tag) => {
      const attributes = parseAttributes(tag);
      return attributes.rel?.toLowerCase() === 'canonical' ? '' : tag;
    });
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderCrawlerMetadata(route) {
  const tag = (attribute, key, value) =>
    `    <meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;

  return [
    `    <title>${escapeHtml(route.title)}</title>`,
    tag('name', 'description', route.description),
    `    <link rel="canonical" href="${escapeHtml(route.canonical)}" />`,
    tag('name', 'robots', route.robots),
    tag('property', 'og:title', route.title),
    tag('property', 'og:description', route.description),
    tag('property', 'og:type', route.ogType),
    tag('property', 'og:url', route.canonical),
    tag('property', 'og:image', route.image),
    tag('property', 'og:image:width', route.imageWidth),
    tag('property', 'og:image:height', route.imageHeight),
    tag('property', 'og:image:type', route.imageType),
    tag('property', 'og:image:alt', route.imageAlt),
    tag('name', 'twitter:card', route.twitterCard),
    tag('name', 'twitter:title', route.title),
    tag('name', 'twitter:description', route.description),
    tag('name', 'twitter:image', route.image),
    tag('name', 'twitter:image:alt', route.imageAlt)
  ].join('\n');
}

function createRouteHtml(sourceHtml, route) {
  const shell = removeCrawlerMetadata(sourceHtml);
  const closingHeadIndex = shell.lastIndexOf('</head>');

  if (closingHeadIndex === -1) {
    throw new Error(`${SOURCE_HTML} does not contain a closing </head> tag`);
  }

  const metadata = renderCrawlerMetadata(route);
  return `${shell.slice(0, closingHeadIndex)}${metadata}\n  ${shell.slice(closingHeadIndex)}`;
}

const sourceHtml = await readFile(SOURCE_HTML, 'utf8');

for (const route of CASE_STUDY_ROUTES) {
  const routeHtml = createRouteHtml(sourceHtml, route);
  await mkdir(dirname(route.output), { recursive: true });
  await writeFile(route.output, routeHtml, 'utf8');
  console.log(`Generated ${route.output} for ${route.route}`);
}
