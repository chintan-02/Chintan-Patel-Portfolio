import { Code2, Gauge, Rocket } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const cards = [
  { title: 'Build', icon: Code2, text: 'Data pipelines, models, retrieval systems, APIs, and reviewable product workflows.' },
  { title: 'Explain', icon: Gauge, text: 'Class-level metrics, safety rules, audit evidence, citations, confidence diagnostics, and limitations.' },
  { title: 'Deliver', icon: Rocket, text: 'Azure demos, Docker Compose release profiles, automated checks, and production-style architecture.' }
];

export function About() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Positioning"
          title="From data to model to API to reviewable product."
          description="The portfolio is built around practical AI engineering: clean inputs, evaluated models and retrieval, typed backend integration, human oversight, operational evidence, and usable interfaces."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="card p-6">
            <p className="text-lg leading-9 text-ink-muted">
              I am a Computer Science graduate studying Integrated Artificial Intelligence at SAIT in Calgary. My work covers healthcare ML, privacy-aware NLP, and enterprise RAG—from preprocessing and evaluation to APIs, persistence, frontend workflows, testing, and deployment.
            </p>
            <p className="mt-5 text-lg leading-9 text-ink-muted">
              I am especially interested in systems where model or retrieval output must be explainable, evidence-backed, reviewable, and honest about uncertainty and limitations.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.08} className="card card-hover p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em] text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{card.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
