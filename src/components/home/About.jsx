import { BrainCircuit, Code2, Gauge, Rocket, Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const capabilities = [
  {
    title: 'Build',
    icon: Code2,
    text: 'Data pipelines, feature contracts, model registries, retrieval pipelines, typed APIs, and reviewable product workflows.'
  },
  {
    title: 'Evaluate',
    icon: Gauge,
    text: 'Per-class metrics, threshold and calibration tradeoffs, RAG benchmarks, safety rules, audit evidence, and limitations.'
  },
  {
    title: 'Deliver',
    icon: Rocket,
    text: 'React, Next.js, and Streamlit interfaces, Docker Compose, CI, Azure demos, readiness contracts, and structured logs.'
  }
];

const systemDomains = [
  'Healthcare decision support',
  'Privacy-aware resume intelligence',
  'Evidence-grounded policy RAG',
  'Grounded AI-agent workflows'
];

export function About() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Positioning"
          title="Applied AI engineering from data contracts to reviewable systems."
          description="I connect evaluated ML, NLP, and retrieval pipelines to typed APIs, usable product interfaces, human review, and operational evidence."
        />

        <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal className="card p-6 sm:p-7">
            <p className="text-lg leading-9 text-ink-muted">
              I am a Computer Science and Engineering graduate who completed SAIT’s Post-Diploma Certificate in Integrated Artificial Intelligence in August 2026. My work spans healthcare decision support, privacy-aware resume intelligence, evidence-grounded enterprise RAG, and grounded AI-agent workflows—from preprocessing and evaluation to APIs, persistence, frontend workflows, testing, and release validation.
            </p>
            <p className="mt-5 text-lg leading-9 text-ink-muted">
              I am most interested in systems where model or retrieval output must be explainable, evidence-backed, reviewable, and honest about uncertainty, failure states, and limitations.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="card p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  System focus
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  Four domains, one engineering approach
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {systemDomains.map((domain) => (
                <div
                  key={domain}
                  className="rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.58)] px-3.5 py-3 text-sm font-semibold leading-6 text-ink-muted"
                >
                  {domain}
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-xs font-medium leading-6 text-ink-faint">
                  Target roles: AI/ML Engineering, Data Science, GenAI/RAG, Applied Software, and Junior MLOps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {capabilities.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={0.08 + index * 0.07} className="h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
