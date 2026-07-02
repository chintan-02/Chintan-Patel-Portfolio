import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NotFound } from './NotFound.jsx';

const articles = {
  'model-evaluation': lazy(() => import('../content/writing/model-evaluation.mdx')),
  'data-drift': lazy(() => import('../content/writing/data-drift.mdx')),
  'lightgbm-vs-xgboost': lazy(() => import('../content/writing/lightgbm-vs-xgboost.mdx')),
  'evidence-gated-rag': lazy(() => import('../content/writing/evidence-gated-rag.mdx')),
  'explainable-ai-in-practice': lazy(() => import('../content/writing/explainable-ai-in-practice.mdx'))
};

function ContentFallback() {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Loading article</p>;
}

export function Article() {
  const { slug } = useParams();
  const ArticleComponent = articles[slug];

  if (!ArticleComponent) return <NotFound />;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* back nav */}
        <Link
          to="/writing"
          className="group mb-10 inline-flex items-center gap-2 rounded-lg border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Writing
        </Link>
        <div className="prose-ai">
          <Suspense fallback={<ContentFallback />}>
            <ArticleComponent />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
