import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { NotFound } from './NotFound.jsx';
import { writingItems } from '../data/writing.js';

const articleModules = import.meta.glob('../content/writing/*.mdx');

const articles = Object.fromEntries(
  Object.entries(articleModules).map(([path, loader]) => {
    const slug = path.split('/').pop().replace(/\.mdx$/, '');
    return [slug, lazy(loader)];
  })
);

function ContentFallback() {
  return (
    <div className="rounded-card border border-line bg-[rgb(var(--surface-rgb)/0.72)] p-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
        Loading article
      </p>
    </div>
  );
}

export function Article() {
  const { slug } = useParams();
  const ArticleComponent = articles[slug];
  const currentIndex = writingItems.findIndex((item) => item.slug === slug);
  const previousArticle = currentIndex > 0 ? writingItems[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < writingItems.length - 1
      ? writingItems[currentIndex + 1]
      : null;

  if (!ArticleComponent) return <NotFound />;

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[1040px]">
        <Link
          to="/writing"
          className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-line bg-[rgb(var(--surface2-rgb)/0.72)] px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent sm:mb-10"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Writing
        </Link>

        <article className="prose-ai">
          <Suspense fallback={<ContentFallback />}>
            <ArticleComponent />
          </Suspense>
        </article>

        {(previousArticle || nextArticle) && (
          <nav
            className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
            aria-label="Article navigation"
          >
            {previousArticle ? (
              <Link
                to={previousArticle.route}
                className="group card card-hover flex min-h-[138px] flex-col justify-between p-5 sm:p-6"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                  Previous article
                </span>
                <div className="mt-5">
                  <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                    {previousArticle.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Read previous
                  </span>
                </div>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}

            {nextArticle && (
              <Link
                to={nextArticle.route}
                className="group card card-hover flex min-h-[138px] flex-col justify-between p-5 text-left sm:p-6 sm:text-right"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                  Next article
                </span>
                <div className="mt-5">
                  <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                    {nextArticle.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-accent sm:flex-row-reverse">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Read next
                  </span>
                </div>
              </Link>
            )}
          </nav>
        )}

        <div className="mt-6 flex justify-center">
          <Link
            to="/writing"
            className="group inline-flex items-center gap-2 rounded-lg border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to all writing
          </Link>
        </div>
      </div>
    </section>
  );
}
