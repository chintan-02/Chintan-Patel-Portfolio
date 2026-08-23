import { Code2, Gauge, Rocket, MapPin, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal.jsx';
import { TechChip } from '../components/ui/TechChip.jsx';
import { Button } from '../components/ui/Button.jsx';
import { siteMeta } from '../data/siteMeta.js';
import { proof } from '../data/proof.js';
import { cn } from '../lib/utils.js';

const ICON_TILE = 'border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent';

const timeline = [
  {
    icon: GraduationCap,
    period: '2013 – 2019',
    title: 'Computer Science foundation, India',
    detail: 'Completed a Bachelor of Engineering in Computer Science and Engineering through Gujarat Technological University at ITM Universe, building a foundation in programming, databases, software engineering, and web development.'
  },
  {
    icon: Briefcase,
    period: '2021 – 2024',
    title: 'Web development in industry',
    detail: 'Worked as a web developer and later delivered client projects through Dreamview Technology, building websites and web applications around real requirements, deadlines, deployment, and post-release support.'
  },
  {
    icon: MapPin,
    period: '2025',
    title: 'Moved to Canada',
    detail: 'Completed a Professional Development Certificate in Supply Chain Management & Logistics through MacEwan University’s School of Continuing Education, strengthening my understanding of operational data, process flows, inventory, analytics, and risk.'
  },
  {
    icon: Rocket,
    period: 'Jan 2026 – Aug 2026',
    title: 'Integrated Artificial Intelligence at SAIT',
    detail: 'Completed SAIT’s Post-Diploma Certificate in Integrated Artificial Intelligence, developing end-to-end experience across machine learning, NLP, computer vision, responsible AI, cloud computing, model evaluation, APIs, deployment, and capstone development.'
  }
];

const values = [
  {
    icon: Code2,
    title: 'Build things that work',
    text: 'I care about the full path from a notebook to a reliable API and usable interface. Not just model accuracy — but are inputs traceable, does the workflow fail safely, can a reviewer understand the output, and is the decision auditable?'
  },
  {
    icon: Gauge,
    title: 'Explainability over black boxes',
    text: 'Explainability changes by system: clinical evidence and human review in TriageAI, decomposed resume signals in ResumeIQ, and answerability diagnostics with citations and safe fallback in PolicyGPT. The common rule is intelligence you can trace, not output you must accept on faith.'
  },
  {
    icon: Rocket,
    title: 'Ship, then improve',
    text: 'ResumeIQ has an Azure portfolio demo, while TriageAI and PolicyGPT have verified local workflows with explicit deployment boundaries. I document what is built, what is tested, what remains local, and what would be required before production use.'
  }
];

const interests = [
  'Healthcare AI', 'Enterprise RAG', 'NLP Applications',
  'Explainable AI', 'Responsible AI', 'MLOps',
  'Data Pipelines', 'API Design'
];

export function About() {
  return (
    <div className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">

        {/* Hero block */}
        <Reveal>
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                About
              </span>
              <h1 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
                CS grad turned AI engineer,<br className="hidden sm:block" /> building in Calgary.
              </h1>
              <div className="mt-6 space-y-4 text-[1rem] leading-8 text-ink-muted">
                <p>
                  My path runs from Computer Science and client-facing web development in India to professional supply-chain training in Canada and SAIT’s Post-Diploma Certificate in Integrated Artificial Intelligence in Calgary.
                </p>
                <p>
                  That mix shapes how I build applied ML systems: software engineering keeps the work usable and maintainable, supply chain gives me a lens on operational data and decision workflows, and AI brings the modeling layer into practical products.
                </p>
                <p>
                  I am looking for Applied AI/ML Engineering, Machine Learning Engineering, GenAI/RAG, NLP, and AI-focused software-development opportunities across Canada — especially where explainable and traceable systems matter.
                </p>
              </div>

              {/* proof row — same real numbers as the hero, so About isn't the
                  only page on the site with zero concrete evidence on it */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6 font-mono text-[13px] text-ink-faint">
                {proof.map((p, i) => (
                  <span key={p.label} className="inline-flex items-center gap-2">
                    {i > 0 && <span className="mr-3 hidden text-ink-faint/50 sm:inline">·</span>}
                    <span className="font-semibold text-accent">{p.value}</span>
                    <span>{p.label}</span>
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${siteMeta.email}`} variant="onDarkAccent">Get in touch</Button>
                <Button href="/projects" variant="onDark">See my projects</Button>
              </div>
            </div>

            {/* sidebar card */}
            <div className="card p-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-4">
                <div className="avatar-frame shrink-0">
                  <div className="avatar-halo" />
                  <div className="avatar-ring" />
                  <div className="relative z-10 h-20 w-20 overflow-hidden rounded-full border border-line bg-surface">
                    <img
                      src="/profile.JPG"
                      alt="Chintan Patel"
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-[56%_18%]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--base-rgb)/0.5)] via-transparent to-[rgb(var(--accent-rgb)/0.1)] mix-blend-overlay" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-ink">Chintan Patel</p>
                  <p className="text-sm text-ink-faint">Applied AI/ML Engineer</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex items-center gap-3 text-ink-muted">
                  <MapPin className="h-4 w-4 shrink-0 text-ink-faint" />
                  Calgary, Alberta · Canada
                </div>
                <div className="flex items-center gap-3 text-ink-muted">
                  <GraduationCap className="h-4 w-4 shrink-0 text-ink-faint" />
                  SAIT Integrated AI · 2026
                </div>
                <div className="flex items-center gap-3 text-ink-muted">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to work · Canada
                </div>
              </div>
              <div className="mt-5 border-t border-line pt-5">
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink-faint">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => <TechChip key={i}>{i}</TechChip>)}
                </div>
              </div>
              <a href={siteMeta.resume} download
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-card border border-accent bg-accent px-4 py-2.5 text-sm font-bold text-[#0A0A0F] transition hover:bg-accent-strong">
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        {/* Timeline — connected nodes rather than stacked boxes, echoing the
            site's "intelligence you can trace" / connected-points visual
            language instead of sitting next to it as a generic stack. */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">The path here</h2>
            <Link to="/#now" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-faint transition-colors hover:text-accent">
              See what I&apos;m building right now <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="relative mb-16">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-[rgb(var(--accent-rgb)/0.45)] via-line to-transparent sm:left-6" aria-hidden="true" />
          <div className="space-y-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="relative flex gap-5 sm:gap-6">
                    <div className="relative z-10 shrink-0">
                      <div className={cn(
                        'grid h-10 w-10 place-items-center rounded-full border sm:h-12 sm:w-12',
                        item.current ? 'border-accent bg-accent text-[#0A0A0F]' : 'border-line bg-surface text-ink-faint'
                      )}>
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      {item.current && (
                        <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent ring-2 ring-[var(--color-base)]" />
                        </span>
                      )}
                    </div>
                    <div className={cn(
                      'card flex-1 p-6',
                      item.current ? 'border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.04)]' : 'card-hover'
                    )}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-ink-faint">{item.period}</span>
                        {item.current && (
                          <span className="rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.1)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-7 text-ink-muted">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <Reveal>
          <h2 className="mb-8 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">How I work</h2>
        </Reveal>
        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {values.map((v, index) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={index * 0.07}>
                <div className="card card-hover h-full p-6">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl ${ICON_TILE}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-bold tracking-[-0.01em] text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA — deliberately a different next step than the hero buttons
            above (résumé as a concrete takeaway) rather than repeating them */}
        <Reveal>
          <div className="glass-panel rounded-panel p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Open to the right opportunity.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-ink-muted">
              Applied AI/ML Engineering, Machine Learning Engineering, GenAI/RAG, NLP, and AI-focused software-development opportunities across Canada. If this looks like a fit, the fastest next step is a quick email or a look at the résumé.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${siteMeta.email}`} variant="onDarkAccent">Email me</Button>
              <Button href={siteMeta.resume} variant="onDark" download icon={false}>Download résumé</Button>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
