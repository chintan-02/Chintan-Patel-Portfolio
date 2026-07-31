import { access, readFile } from 'node:fs/promises';
import {
  CASE_STUDY_ROUTES,
  HOMEPAGE_CANONICAL,
  REQUIRED_META_FIELDS
} from './case-study-metadata.mjs';

const SOURCE_HTML = 'dist/index.html';
const errors = [];

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&');
}

function parseAttributes(tag) {
  const attributes = {};
  const pattern = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;

  while ((match = pattern.exec(tag))) {
    attributes[match[1].toLowerCase()] = decodeHtml(
      match[2] ?? match[3] ?? match[4] ?? ''
    );
  }

  return attributes;
}

function valuesForField(html, field) {
  if (field.kind === 'title') {
    return Array.from(html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi), (match) =>
      decodeHtml(match[1].trim())
    );
  }

  if (field.kind === 'canonical') {
    return Array.from(html.matchAll(/<link\b[^>]*>/gi))
      .map((match) => parseAttributes(match[0]))
      .filter((attributes) => attributes.rel?.toLowerCase() === 'canonical')
      .map((attributes) => attributes.href);
  }

  const identifyingAttribute = field.kind === 'meta-name' ? 'name' : 'property';
  return Array.from(html.matchAll(/<meta\b[^>]*>/gi))
    .map((match) => parseAttributes(match[0]))
    .filter((attributes) => attributes[identifyingAttribute] === field.key)
    .map((attributes) => attributes.content);
}

function stripCrawlerMetadata(html) {
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*>/gi, (tag) => {
      const attributes = parseAttributes(tag);
      const targeted = REQUIRED_META_FIELDS.some(
        (field) =>
          (field.kind === 'meta-name' && attributes.name === field.key) ||
          (field.kind === 'meta-property' && attributes.property === field.key)
      );
      return targeted ? '' : tag;
    })
    .replace(/<link\b[^>]*>/gi, (tag) => {
      const attributes = parseAttributes(tag);
      return attributes.rel?.toLowerCase() === 'canonical' ? '' : tag;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

function isAbsoluteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

let sourceHtml;

try {
  sourceHtml = await readFile(SOURCE_HTML, 'utf8');
} catch (error) {
  console.error(`Metadata validation failed: cannot read ${SOURCE_HTML}`);
  console.error(error.message);
  process.exit(1);
}

const expectedShell = stripCrawlerMetadata(sourceHtml);

for (const route of CASE_STUDY_ROUTES) {
  try {
    await access(route.output);
  } catch {
    errors.push(`${route.output}: generated file is missing`);
    continue;
  }

  const html = await readFile(route.output, 'utf8');

  for (const field of REQUIRED_META_FIELDS) {
    const values = valuesForField(html, field);
    const expected = field.expected(route);

    if (values.length !== 1) {
      errors.push(
        `${route.output}: expected exactly one ${field.key}, found ${values.length}`
      );
      continue;
    }

    if (values[0] !== expected) {
      errors.push(
        `${route.output}: incorrect ${field.key}; expected "${expected}", found "${values[0]}"`
      );
    }
  }

  for (const field of ['og:image', 'twitter:image']) {
    const definition = REQUIRED_META_FIELDS.find((item) => item.key === field);
    const [value] = valuesForField(html, definition);
    if (!value || !isAbsoluteHttpUrl(value)) {
      errors.push(`${route.output}: ${field} must be an absolute HTTP(S) URL`);
    }
  }

  const canonicalDefinition = REQUIRED_META_FIELDS.find(
    (field) => field.kind === 'canonical'
  );
  if (valuesForField(html, canonicalDefinition).includes(HOMEPAGE_CANONICAL)) {
    errors.push(`${route.output}: still contains the homepage canonical URL`);
  }

  if (stripCrawlerMetadata(html) !== expectedShell) {
    errors.push(
      `${route.output}: Vite-generated application shell differs from ${SOURCE_HTML}`
    );
  }
}

if (errors.length > 0) {
  console.error('Case-study metadata validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

for (const route of CASE_STUDY_ROUTES) {
  console.log(
    `Verified ${route.route}: title, canonical, Open Graph, Twitter, robots, and Vite shell`
  );
}
