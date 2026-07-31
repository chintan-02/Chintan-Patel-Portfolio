import { useLocation } from 'react-router-dom';
import { projects } from '../../data/projects.js';
import { siteMeta } from '../../data/siteMeta.js';
import { writingItems } from '../../data/writing.js';
import { PageMeta } from './PageMeta.jsx';

const BASE_URL = siteMeta.portfolio.replace(/\/$/, '');
const PERSON_ID = `${BASE_URL}/#person`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const DEFAULT_IMAGE = {
  path: '/og-image.png',
  width: 1200,
  height: 630
};

const CASE_STUDY_IMAGES = {
  '/case-studies/triageai': {
    path: '/images/case-studies/triageai/01-command-center.png',
    width: 2944,
    height: 1428
  },
  '/case-studies/policygpt-enterprise': {
    path: '/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png',
    width: 2990,
    height: 1722
  }
};

const HOME_DESCRIPTION =
  "Chintan Patel's applied AI/ML engineering portfolio: evaluated healthcare ML, privacy-aware resume intelligence, and a v0.3.0 evidence-first policy RAG system with reviewable outputs and honest deployment boundaries.";
const PROJECTS_DESCRIPTION =
  'A focused portfolio of AI/ML applications with production-minded architecture, model workflow, APIs, explainability, and deployment.';
const CASE_STUDIES_DESCRIPTION =
  'Full system breakdowns covering problem framing, data pipelines, model decisions, evaluation, deployment architecture, limitations, and next engineering steps.';
const WRITING_DESCRIPTION =
  'Technical notes explaining ML concepts, project decisions, model evaluation, responsible AI, and production concerns.';
const ABOUT_DESCRIPTION =
  'Learn how Chintan Patel combines software engineering, operational systems thinking, and applied AI/ML work in Calgary, Alberta.';
const CONTACT_DESCRIPTION =
  'Contact Chintan Patel about AI/ML Engineering, Data Science, Analytics, and Applied Software opportunities in Canada.';
const PRIVACY_DESCRIPTION =
  'How the Chintan Patel portfolio uses private, aggregate Netlify Web Analytics and handles external links, email, and public downloads.';
const NOT_FOUND_DESCRIPTION =
  'The requested portfolio page could not be found. Use the site navigation to return to available projects, case studies, and technical writing.';

function absoluteUrl(path) {
  return `${BASE_URL}${path === '/' ? '/' : path}`;
}

function imageMetadata(image = DEFAULT_IMAGE) {
  return {
    image: absoluteUrl(image.path),
    imageWidth: image.width,
    imageHeight: image.height
  };
}

function personReference() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: siteMeta.name,
    url: absoluteUrl('/')
  };
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

function homeStructuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${BASE_URL}/#profile-page`,
      name: 'Chintan Patel | Applied AI/ML Engineer',
      url: absoluteUrl('/'),
      mainEntity: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': PERSON_ID,
      name: siteMeta.name,
      jobTitle: siteMeta.title,
      url: absoluteUrl('/'),
      sameAs: [siteMeta.github, siteMeta.linkedin],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calgary',
        addressRegion: 'Alberta',
        addressCountry: 'Canada'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: 'Chintan Patel Portfolio',
      url: absoluteUrl('/'),
      publisher: { '@id': PERSON_ID }
    }
  ];
}

function caseStudyMetadata(project) {
  const canonicalPath = project.caseStudyUrl;
  const canonical = absoluteUrl(canonicalPath);
  const selectedImage =
    project.seo?.image
      ? {
          path: project.seo.image,
          width: 2990,
          height: 1722
        }
      : CASE_STUDY_IMAGES[canonicalPath] ?? DEFAULT_IMAGE;
  const image = imageMetadata(selectedImage);
  const title = project.seo?.title ?? `${project.title} | ${project.subtitle}`;
  const description = project.seo?.description ?? project.description;

  return {
    title,
    description,
    canonical,
    ogType: 'article',
    ...image,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description,
        author: personReference(),
        url: canonical,
        image: image.image
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: project.title, path: canonicalPath }
      ])
    ]
  };
}

function articleMetadata(article) {
  const canonical = absoluteUrl(article.route);
  const image = imageMetadata();

  return {
    title: `${article.title} | Chintan Patel`,
    description: article.description,
    canonical,
    ogType: 'article',
    ...image,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: article.title,
        description: article.description,
        author: personReference(),
        mainEntityOfPage: canonical,
        url: canonical,
        image: image.image
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Writing', path: '/writing' },
        { name: article.title, path: article.route }
      ])
    ]
  };
}

function metadataForPath(pathname) {
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const image = imageMetadata();

  if (path === '/') {
    return {
      title: 'Chintan Patel | Applied AI/ML Engineer',
      description: HOME_DESCRIPTION,
      canonical: absoluteUrl('/'),
      ...image,
      structuredData: homeStructuredData()
    };
  }

  const staticPages = {
    '/projects': {
      title: 'AI/ML Projects | Chintan Patel',
      description: PROJECTS_DESCRIPTION
    },
    '/case-studies': {
      title: 'AI/ML Case Studies | Chintan Patel',
      description: CASE_STUDIES_DESCRIPTION
    },
    '/writing': {
      title: 'Technical Writing | Chintan Patel',
      description: WRITING_DESCRIPTION
    },
    '/about': {
      title: 'About Chintan Patel | Applied AI/ML Engineer',
      description: ABOUT_DESCRIPTION
    },
    '/contact': {
      title: 'Contact Chintan Patel | Applied AI/ML Engineer',
      description: CONTACT_DESCRIPTION
    },
    '/privacy': {
      title: 'Privacy | Chintan Patel Portfolio',
      description: PRIVACY_DESCRIPTION
    }
  };

  if (staticPages[path]) {
    return {
      ...staticPages[path],
      canonical: absoluteUrl(path),
      ...image,
      structuredData: []
    };
  }

  const canonicalCasePath =
    path === '/case-studies/policygpt' ? '/case-studies/policygpt-enterprise' : path;
  const project = projects.find((item) => item.caseStudyUrl === canonicalCasePath);
  if (project) return caseStudyMetadata(project);

  const article = writingItems.find((item) => item.route === path);
  if (article) return articleMetadata(article);

  return {
    title: 'Page Not Found | Chintan Patel Portfolio',
    description: NOT_FOUND_DESCRIPTION,
    canonical: absoluteUrl(path),
    robots: 'noindex, nofollow',
    ...image,
    structuredData: []
  };
}

export function RouteMetadata() {
  const { pathname } = useLocation();
  return <PageMeta {...metadataForPath(pathname)} />;
}
