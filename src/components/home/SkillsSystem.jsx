import { BrainCircuit, DatabaseZap, Layers3, CloudCog } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'AI & ML Systems',
    text: 'Build and evaluate ML workflows with explicit feature contracts, class-level metrics, thresholds, safety rules, and human-review boundaries.',
    evidence: 'TriageAI',
    skills: 'LightGBM · scikit-learn · NLP · evaluation'
  },
  {
    icon: DatabaseZap,
    title: 'Retrieval & GenAI',
    text: 'Design evidence-grounded retrieval systems with document identity, hybrid search, answerability checks, citations, and controlled fallback behavior.',
    evidence: 'PolicyGPT + RegImpact',
    skills: 'RAG · pgvector · ChromaDB · SentenceTransformers'
  },
  {
    icon: Layers3,
    title: 'Full-Stack AI Products',
    text: 'Turn model and retrieval capabilities into usable products with typed APIs, product workflows, persistence, review states, and frontend interfaces.',
    evidence: 'Across flagship systems',
    skills: 'FastAPI · React · Next.js · PostgreSQL'
  },
  {
    icon: CloudCog,
    title: 'Cloud & Reliability',
    text: 'Ship containerized systems with CI/CD, infrastructure as code, health contracts, background processing, observability, and controlled release evidence.',
    evidence: 'RegImpact + Product Finder',
    skills: 'Docker · Azure · GCP · GitHub Actions · Bicep'
  }
];

export function SkillsSystem() {
  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="What I Build"
          title="Four capabilities, proved by working systems."
          description="Instead of a long technology inventory, these are the engineering capabilities that repeat across my strongest projects."
        />

        <div className="grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full bg-surface p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{item.text}</p>

                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-xs font-semibold text-accent">{item.evidence}</p>
                    <p className="mt-2 text-xs leading-6 text-ink-faint">{item.skills}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
