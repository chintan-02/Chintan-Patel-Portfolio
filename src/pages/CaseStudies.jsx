import { Link } from 'react-router-dom';
import { FileCode2, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { TechChip } from '../components/ui/TechChip.jsx';

export function CaseStudies() {
  const withCaseStudy = projects.filter((p) => p.caseStudyUrl);
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Case Studies"
          title="How I think through ML problems end to end."
          description="Full system breakdowns covering problem framing, data pipeline, model decisions, evaluation, deployment architecture, limitations, and what comes next."
        />

        <div className="grid gap-8">
          {withCaseStudy.map((p, index) => (
            <Reveal key={p.slug} delay={index * 0.08}>
              <Link to={p.caseStudyUrl} className="group block card card-hover overflow-hidden">
                {/* unified amber accent bar (was per-project rainbow) */}
                <div className="h-1 w-full bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.7)] to-transparent" />

                <div className="p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    {/* left: icon + meta — sticky so it follows the long breakdown */}
                    <div className="flex shrink-0 flex-col items-start gap-4 lg:w-56 lg:sticky lg:top-24 lg:self-start">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                        <FileCode2 className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{p.category}</span>
                        <p className="mt-1 text-xs font-semibold text-ink-faint">{p.status}</p>
                      </div>
                      <div className="hidden lg:flex lg:flex-col lg:gap-2">
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-bold text-accent transition hover:text-accent-strong">
                            Live demo ↗
                          </a>
                        )}
                        {p.githubUrl && (
                          <a href={p.githubUrl} target="_blank" rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-bold text-ink-muted transition hover:text-ink">
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* right: content */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-ink transition-colors group-hover:text-accent">
                        {p.title}
                        <span className="ml-2 text-[1rem] font-semibold text-ink-muted">— {p.subtitle}</span>
                      </h2>
                      <p className="mt-3 text-[1rem] leading-8 text-ink-muted">{p.description}</p>

                      {/* pipeline */}
                      <div className="mt-5 flex flex-wrap items-center gap-1.5">
                        {p.pipeline.map((step, i) => (
                          <span key={step} className="flex items-center gap-1.5">
                            <span className="rounded-md border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-2.5 py-1 text-xs font-semibold text-ink-muted">{step}</span>
                            {i < p.pipeline.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" />}
                          </span>
                        ))}
                      </div>

                      {/* stack chips */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => <TechChip key={s}>{s}</TechChip>)}
                      </div>

                      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink transition-colors group-hover:text-accent">
                        Open full breakdown <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
