import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NotFound } from './NotFound.jsx';

const studies = {
  triageai: lazy(() => import('../content/case-studies/triageai.mdx')),
  resumeiq: lazy(() => import('../content/case-studies/resumeiq.mdx')),
  policygpt: lazy(() => import('../content/case-studies/policygpt.mdx'))
};

function ContentFallback() {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Loading case study</p>;
}

export function CaseStudy() {
  const { slug } = useParams();
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
