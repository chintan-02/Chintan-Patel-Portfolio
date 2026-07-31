import { lazy, Suspense } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects.js';
import { NotFound } from './NotFound.jsx';

const studies = {
  triageai: lazy(() => import('../content/case-studies/triageai.mdx')),
  resumeiq: lazy(() => import('../content/case-studies/resumeiq.mdx')),
  'policygpt-enterprise': lazy(() => import('../content/case-studies/policygpt.mdx'))
};

function ContentFallback() {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Loading case study</p>;
}

export function CaseStudy() {
  const { slug } = useParams();
  const canonicalSlug = slug === 'policygpt' ? 'policygpt-enterprise' : slug;
  const project = projects.find((item) => item.caseStudyUrl === `/case-studies/${canonicalSlug}`);
  const caseStudyProjects = projects.filter((item) => item.caseStudyUrl);
  const currentIndex = project
    ? caseStudyProjects.findIndex((item) => item.caseStudyUrl === project.caseStudyUrl)
    : -1;
  const previousCaseStudy = currentIndex > 0 ? caseStudyProjects[currentIndex - 1] : null;
  const nextCaseStudy =
    currentIndex >= 0 && currentIndex < caseStudyProjects.length - 1
      ? caseStudyProjects[currentIndex + 1]
      : null;
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

        {(previousCaseStudy || nextCaseStudy) && (
          <>
            <nav
              className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
              aria-label="Case study navigation"
            >
              {previousCaseStudy ? (
                <Link
                  to={previousCaseStudy.caseStudyUrl}
                  className="group card card-hover flex min-h-[138px] flex-col justify-between p-5 sm:p-6"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                    Previous case study
                  </span>
                  <div className="mt-5">
                    <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                      {previousCaseStudy.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {previousCaseStudy.subtitle}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-accent">
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      View previous
                    </span>
                  </div>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}

              {nextCaseStudy ? (
                <Link
                  to={nextCaseStudy.caseStudyUrl}
                  className="group card card-hover flex min-h-[138px] flex-col justify-between p-5 text-left sm:p-6 sm:text-right"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                    Next case study
                  </span>
                  <div className="mt-5">
                    <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                      {nextCaseStudy.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">
                      {nextCaseStudy.subtitle}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-accent sm:justify-end">
                      View next
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}
            </nav>

            <div className="mt-6 flex justify-center">
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 rounded-lg border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back to all case studies
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
