import { Link } from 'react-router-dom';
import { FileCode2, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { TechChip } from '../components/ui/TechChip.jsx';

export function CaseStudies() {
  const withCaseStudy = projects
    .filter((project) => project.caseStudyUrl)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Case Studies"
          title="How I engineer AI systems end to end."
          description="Full system breakdowns covering problem framing, architecture, evaluation, deployment, operating boundaries, limitations, and next engineering steps."
        />

        <div className="grid gap-8">
          {withCaseStudy.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <article className="card overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-[rgb(var(--accent-rgb)/0.7)] to-transparent" />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="flex shrink-0 flex-col items-start gap-4 lg:w-56">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                        <FileCode2 className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                          {project.category}
                        </span>
                        <p className="mt-1 text-xs font-semibold text-ink-faint">{project.status}</p>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-accent transition hover:text-accent-strong"
                          >
                            Live demo ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-ink-muted transition hover:text-ink"
                          >
                            GitHub ↗
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-2xl font-bold tracking-[-0.035em] text-ink sm:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
                      <p className="mt-4 text-[1rem] leading-8 text-ink-muted">{project.description}</p>

                      <div className="mt-5 flex flex-wrap items-center gap-1.5">
                        {project.pipeline.map((step, stepIndex) => (
                          <span key={step} className="flex items-center gap-1.5">
                            <span className="rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-ink-muted">
                              {step}
                            </span>
                            {stepIndex < project.pipeline.length - 1 && (
                              <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" aria-hidden="true" />
                            )}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 8).map((stackItem) => (
                          <TechChip key={stackItem}>{stackItem}</TechChip>
                        ))}
                      </div>

                      <Link
                        to={project.caseStudyUrl}
                        className="mt-7 inline-flex items-center gap-2 rounded-md text-sm font-bold text-ink transition-colors hover:text-accent"
                      >
                        Open full breakdown
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
