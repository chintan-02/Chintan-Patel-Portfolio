import { CloudCog, GraduationCap, RefreshCw, SearchCheck } from 'lucide-react';
import { Badge } from '../ui/Badge.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const focus = [
  {
    icon: SearchCheck,
    tag: 'Building',
    title: 'RegImpact AI',
    text: 'Building a regulatory-change intelligence and human-review workflow with scheduled ingestion, document versioning, change detection, control mapping, reviewer approval, and audit evidence.'
  },
  {
    icon: RefreshCw,
    tag: 'Improving',
    title: 'Portfolio Release & Project Evidence',
    text: 'Strengthening deployment evidence, screenshots, evaluation artifacts, documentation, and recruiter-facing summaries across the portfolio.'
  },
  {
    icon: CloudCog,
    tag: 'Learning',
    title: 'Agentic AI, MLOps & Cloud Reliability',
    text: 'Deepening agentic workflows, background processing, RBAC, observability, CI/CD, infrastructure as code, and Azure deployment.'
  },
  {
    icon: GraduationCap,
    tag: 'Targeting',
    title: 'New-Grad & Junior AI/ML Roles',
    text: 'Targeting Applied AI/ML Engineering, Machine Learning Engineering, GenAI/RAG, NLP, AI-focused Software Development, and Junior MLOps opportunities across Canada.'
  }
];

export function Now() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="now">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge>Now</Badge>
            <h2 className="mt-5 font-sans text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
              What I&apos;m focused on right now.
            </h2>
            <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Last updated: August 2026
            </p>
          </div>

          <span className="mb-1 inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Current priorities
          </span>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.tag} delay={index * 0.07} className="h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-display text-[1rem] font-bold leading-snug tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
