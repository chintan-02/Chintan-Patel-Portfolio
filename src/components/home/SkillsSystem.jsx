import { skillLayers } from '../../data/skills.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const emphasizedSkills = new Set([
  'Python',
  'PostgreSQL',
  'SQLAlchemy',
  'scikit-learn',
  'LightGBM',
  'Clinical NLP',
  'RAG',
  'SentenceTransformers',
  'ChromaDB',
  'Evidence Gating',
  'Google ADK',
  'Agent Tool Calling',
  'Deterministic Validation',
  'Structured Outputs',
  'FastAPI',
  'React',
  'Next.js',
  'TypeScript',
  'Docker Compose',
  'GitHub Actions',
  'Azure App Service',
  'Google Cloud Run',
  'pytest',
  'Structured Logging',
  'Health & Readiness'
]);

export function SkillsSystem() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Technical System"
          title="Skills organized as an end-to-end AI product stack."
          description="The stack reflects technologies and engineering practices demonstrated across TriageAI, ResumeIQ, PolicyGPT, and Product Finder—from data contracts and model evaluation to evidence-grounded product workflows, agent tool use, release checks, and operational reliability."
        />

        <div className="space-y-4">
          {skillLayers.map((layer, index) => (
            <Reveal key={layer.layer} delay={index * 0.06}>
              <article className="card card-hover grid gap-5 p-6 md:grid-cols-[250px_1fr] md:gap-8 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--accent-rgb)/0.08)] font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.02em] text-ink">
                      {layer.layer}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-accent">{layer.label}</p>
                  </div>
                </div>

                <div className="md:border-l md:border-line md:pl-8">
                  <p className="max-w-3xl text-sm leading-7 text-ink-muted">{layer.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <TechChip
                        key={skill}
                        className={
                          emphasizedSkills.has(skill)
                            ? 'border-[rgb(var(--accent-rgb)/0.34)] bg-[rgb(var(--accent-rgb)/0.08)] text-ink'
                            : undefined
                        }
                      >
                        {skill}
                      </TechChip>
                    ))}
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
