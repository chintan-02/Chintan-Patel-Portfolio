import { useEffect } from 'react';

function updateUniqueHeadElement({
  selector,
  tagName,
  identifyingAttributes,
  targetAttribute,
  value
}) {
  const matches = Array.from(document.head.querySelectorAll(selector));
  let element = matches.shift();
  const created = !element;
  const duplicates = matches.map((node) => ({
    node,
    parent: node.parentNode,
    nextSibling: node.nextSibling
  }));

  matches.forEach((node) => node.remove());

  if (!element) {
    element = document.createElement(tagName);
    Object.entries(identifyingAttributes).forEach(([name, attributeValue]) => {
      element.setAttribute(name, attributeValue);
    });
    document.head.appendChild(element);
  }

  const hadAttribute = element.hasAttribute(targetAttribute);
  const previousValue = element.getAttribute(targetAttribute);
  element.setAttribute(targetAttribute, value);

  return () => {
    if (created) {
      element.remove();
    } else if (hadAttribute) {
      element.setAttribute(targetAttribute, previousValue ?? '');
    } else {
      element.removeAttribute(targetAttribute);
    }

    duplicates.forEach(({ node, parent, nextSibling }) => {
      if (!parent) return;
      parent.insertBefore(node, nextSibling?.parentNode === parent ? nextSibling : null);
    });
  };
}

function updateMeta(attribute, key, value) {
  return updateUniqueHeadElement({
    selector: `meta[${attribute}="${key}"]`,
    tagName: 'meta',
    identifyingAttributes: { [attribute]: key },
    targetAttribute: 'content',
    value
  });
}

function updateCanonical(value) {
  return updateUniqueHeadElement({
    selector: 'link[rel="canonical"]',
    tagName: 'link',
    identifyingAttributes: { rel: 'canonical' },
    targetAttribute: 'href',
    value
  });
}

export function PageMeta({
  title,
  description,
  canonical,
  ogType = 'website',
  image,
  imageWidth = 1200,
  imageHeight = 630,
  robots = 'index, follow',
  structuredData = []
}) {
  const structuredDataSignature = JSON.stringify(structuredData);

  useEffect(() => {
    const previousTitle = document.title;
    const restorers = [
      updateMeta('name', 'description', description),
      updateCanonical(canonical),
      updateMeta('property', 'og:title', title),
      updateMeta('property', 'og:description', description),
      updateMeta('property', 'og:type', ogType),
      updateMeta('property', 'og:url', canonical),
      updateMeta('property', 'og:image', image),
      updateMeta('property', 'og:image:width', String(imageWidth)),
      updateMeta('property', 'og:image:height', String(imageHeight)),
      updateMeta('name', 'twitter:card', 'summary_large_image'),
      updateMeta('name', 'twitter:title', title),
      updateMeta('name', 'twitter:description', description),
      updateMeta('name', 'twitter:image', image),
      updateMeta('name', 'robots', robots)
    ];

    const previousJsonLd = Array.from(
      document.head.querySelectorAll('script[data-page-meta-json-ld]')
    ).map((node) => ({
      node,
      parent: node.parentNode,
      nextSibling: node.nextSibling
    }));
    previousJsonLd.forEach(({ node }) => node.remove());

    const jsonLdScripts = JSON.parse(structuredDataSignature).map((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageMetaJsonLd = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      return script;
    });

    document.title = title;

    return () => {
      document.title = previousTitle;
      jsonLdScripts.forEach((script) => script.remove());
      previousJsonLd.forEach(({ node, parent, nextSibling }) => {
        if (!parent) return;
        parent.insertBefore(node, nextSibling?.parentNode === parent ? nextSibling : null);
      });
      restorers.reverse().forEach((restore) => restore());
    };
  }, [
    canonical,
    description,
    image,
    imageHeight,
    imageWidth,
    ogType,
    robots,
    structuredDataSignature,
    title
  ]);

  return null;
}
