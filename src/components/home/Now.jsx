import { CloudCog, GraduationCap, RefreshCw, SearchCheck } from 'lucide-react';
import { Badge } from '../ui/Badge.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const focus = [
  {
    icon: SearchCheck,
    tag: 'Building',
    title: 'PolicyGPT Retrieval & Evaluation',
    text: 'Expanding retrieval experiments, provider-enabled answer-quality evaluation, and deployment planning while preserving citations, evidence gating, and unsupported-question controls.'
  },
  {
    icon: RefreshCw,
    tag: 'Improving',
    title: 'TriageAI + ResumeIQ Product Evidence',
    text: 'Completing real screenshots, reliability checks, documentation, and recruiter-facing evidence across the healthcare and resume-intelligence workflows.'
  },
  {
    icon: CloudCog,
    tag: 'Learning',
    title: 'Production ML, RAG & MLOps',
    text: 'Deepening skills in observability, secure data lifecycles, managed cloud services, monitoring, Docker operations, and scalable backend architecture.'
  },
  {
    icon: GraduationCap,
    tag: 'Targeting',
    title: 'AI/ML Co-op, Internship & New-Grad Roles',
    text: 'Preparing for AI/ML Engineering, Data Science, Analytics, Junior MLOps, GenAI/RAG, and Applied Software opportunities across Canada.'
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
              Last updated: July 2026
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
