import { lazy, Suspense, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects.js';
import { siteMeta } from '../data/siteMeta.js';
import { NotFound } from './NotFound.jsx';

const studies = {
  triageai: lazy(() => import('../content/case-studies/triageai.mdx')),
  resumeiq: lazy(() => import('../content/case-studies/resumeiq.mdx')),
  'policygpt-enterprise': lazy(() => import('../content/case-studies/policygpt.mdx'))
};

function ContentFallback() {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Loading case study</p>;
}

function setMetaContent(selector, content) {
  const element = document.head.querySelector(selector);
  if (!element) return null;

  const previous = element.getAttribute('content');
  element.setAttribute('content', content);
  return () => element.setAttribute('content', previous ?? '');
}

function useCaseStudyMetadata(project) {
  useEffect(() => {
    if (!project?.seo) return undefined;

    const baseUrl = siteMeta.portfolio.replace(/\/$/, '');
    const canonicalUrl = `${baseUrl}${project.caseStudyUrl}`;
    const imageUrl = project.seo.image?.startsWith('http')
      ? project.seo.image
      : `${baseUrl}${project.seo.image}`;
    const previousTitle = document.title;
    const canonical = document.head.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href');
    const restorers = [
      setMetaContent('meta[name="description"]', project.seo.description),
      setMetaContent('meta[property="og:title"]', project.seo.title),
      setMetaContent('meta[property="og:description"]', project.seo.description),
      setMetaContent('meta[property="og:type"]', 'article'),
      setMetaContent('meta[property="og:url"]', canonicalUrl),
      setMetaContent('meta[property="og:image"]', imageUrl),
      setMetaContent('meta[name="twitter:title"]', project.seo.title),
      setMetaContent('meta[name="twitter:description"]', project.seo.description),
      setMetaContent('meta[name="twitter:image"]', imageUrl)
    ].filter(Boolean);

    document.title = project.seo.title;
    canonical?.setAttribute('href', canonicalUrl);

    return () => {
      document.title = previousTitle;
      if (canonical && previousCanonical) canonical.setAttribute('href', previousCanonical);
      restorers.forEach((restore) => restore());
    };
  }, [project]);
}

export function CaseStudy() {
  const { slug } = useParams();
  const canonicalSlug = slug === 'policygpt' ? 'policygpt-enterprise' : slug;
  const project = projects.find((item) => item.caseStudyUrl === `/case-studies/${canonicalSlug}`);
  useCaseStudyMetadata(project);

  if (slug === 'policygpt') {
    return <Navigate to="/case-studies/policygpt-enterprise" replace />;
  }

  const Study = studies[slug];

  if (!Study) return <NotFound />;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* back nav */}
        <Link
          to="/case-studies"
          className="group mb-10 inline-flex items-center gap-2 rounded-lg border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Case Studies
        </Link>
        <div className="prose-ai">
          <Suspense fallback={<ContentFallback />}>
            <Study />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
