export const SITE_URL = 'https://chintan-patel-ai.netlify.app';
export const HOMEPAGE_CANONICAL = `${SITE_URL}/`;

export const CASE_STUDY_ROUTES = [
  {
    route: '/case-studies/triageai',
    output: 'dist/case-studies/triageai/index.html',
    title: 'TriageAI — Clinical Intake & ESI Care Routing | Chintan Patel',
    description:
      'Review-first healthcare AI case study combining a 273-feature LightGBM ESI model, evidence-linked clinical NLP, transparent safety escalation, clinician review, audit trails, and PDF reporting.',
    canonical: `${SITE_URL}/case-studies/triageai`,
    robots: 'index, follow',
    ogType: 'article',
    image: `${SITE_URL}/images/case-studies/triageai/01-command-center.png`,
    imageWidth: '2944',
    imageHeight: '1428',
    imageType: 'image/png',
    imageAlt:
      'TriageAI clinical intake command center and review-first ESI care-routing workflow',
    twitterCard: 'summary_large_image'
  },
  {
    route: '/case-studies/policygpt-enterprise',
    output: 'dist/case-studies/policygpt-enterprise/index.html',
    title: 'PolicyGPT Enterprise | Evidence-Gated Policy RAG Case Study',
    description:
      'Production-style policy RAG case study with FastAPI, Next.js, PostgreSQL, ChromaDB, evidence gating, page-level citations, confidence diagnostics, controlled evaluation, and Docker Compose.',
    canonical: `${SITE_URL}/case-studies/policygpt-enterprise`,
    robots: 'index, follow',
    ogType: 'article',
    image: `${SITE_URL}/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png`,
    imageWidth: '2990',
    imageHeight: '1722',
    imageType: 'image/png',
    imageAlt:
      'PolicyGPT Enterprise evidence-backed policy answer with confidence diagnostics and page-level citations',
    twitterCard: 'summary_large_image'
  },
  {
    route: '/case-studies/resumeiq',
    output: 'dist/case-studies/resumeiq/index.html',
    title: 'ResumeIQ — Privacy-Aware Resume Intelligence | Chintan Patel',
    description:
      'Privacy-aware resume intelligence case study covering multi-format parsing, TF-IDF classification, semantic job-description matching, skill analysis, writing review, and human decision support.',
    canonical: `${SITE_URL}/case-studies/resumeiq`,
    robots: 'index, follow',
    ogType: 'article',
    image: `${SITE_URL}/images/resumeiq-og.png`,
    imageWidth: '2904',
    imageHeight: '1574',
    imageType: 'image/png',
    imageAlt: 'ResumeIQ privacy-aware resume intelligence and job application dashboard',
    twitterCard: 'summary_large_image'
  }
];

export const REQUIRED_META_FIELDS = [
  { kind: 'title', key: 'title', expected: (route) => route.title },
  { kind: 'meta-name', key: 'description', expected: (route) => route.description },
  { kind: 'canonical', key: 'canonical', expected: (route) => route.canonical },
  { kind: 'meta-name', key: 'robots', expected: (route) => route.robots },
  { kind: 'meta-property', key: 'og:title', expected: (route) => route.title },
  {
    kind: 'meta-property',
    key: 'og:description',
    expected: (route) => route.description
  },
  { kind: 'meta-property', key: 'og:type', expected: (route) => route.ogType },
  { kind: 'meta-property', key: 'og:url', expected: (route) => route.canonical },
  { kind: 'meta-property', key: 'og:image', expected: (route) => route.image },
  {
    kind: 'meta-property',
    key: 'og:image:width',
    expected: (route) => route.imageWidth
  },
  {
    kind: 'meta-property',
    key: 'og:image:height',
    expected: (route) => route.imageHeight
  },
  {
    kind: 'meta-property',
    key: 'og:image:type',
    expected: (route) => route.imageType
  },
  {
    kind: 'meta-property',
    key: 'og:image:alt',
    expected: (route) => route.imageAlt
  },
  {
    kind: 'meta-name',
    key: 'twitter:card',
    expected: (route) => route.twitterCard
  },
  { kind: 'meta-name', key: 'twitter:title', expected: (route) => route.title },
  {
    kind: 'meta-name',
    key: 'twitter:description',
    expected: (route) => route.description
  },
  { kind: 'meta-name', key: 'twitter:image', expected: (route) => route.image },
  {
    kind: 'meta-name',
    key: 'twitter:image:alt',
    expected: (route) => route.imageAlt
  }
];
