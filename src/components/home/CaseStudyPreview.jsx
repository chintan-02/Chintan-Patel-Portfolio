import { Link } from 'react-router-dom';
import { FileCode2 } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const caseStudyOrder = ['triageai', 'resumeiq', 'policygpt'];

export function CaseStudyPreview() {
  const withCaseStudy = caseStudyOrder.map((slug) => projects.find((p) => p.slug === slug && p.caseStudyUrl)).filter(Boolean);
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Case Studies"
          title="Deep dives into how the systems were built."
          description="Short paths into architecture, evaluation, safety and explainability, deployment thinking, limitations, and roadmap decisions."
        />
        {/* 3-column on desktop — all three case studies sit equally side-by-side instead
            of the awkward 2+1 orphan layout the 2-column grid produced after PolicyGPT
            got its own case study and became the third entry with a caseStudyUrl. */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {withCaseStudy.map((p, index) => (
            <Reveal key={p.slug} delay={index * 0.07}>
              <Link to={p.caseStudyUrl} className="group block h-full card card-hover p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                    <FileCode2 className="h-5 w-5" />
                  </div>
                  <span className="mt-1 rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {p.category}
                  </span>
                </div>
                {/* real title + subtitle from projects.js — not the old hardcoded "{p.title} System Design" */}
                <h3 className="mt-5 text-lg font-extrabold tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-0.5 text-xs font-semibold text-accent">{p.subtitle}</p>
                {/* p.description is richer than p.problem for a home preview teaser */}
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-ink-muted">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((s) => (
                    <span key={s} className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-2.5 py-0.5 text-xs font-semibold text-ink-muted">{s}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm font-bold text-ink transition-colors group-hover:text-accent">
                  Read case study →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-6 text-center">
            <Link to="/case-studies" className="text-sm font-bold text-accent transition hover:text-accent-strong">
              View all case studies →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
