import { skillLayers } from '../../data/skills.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const emphasizedSkills = new Set([
  'Python',
  'Pandas',
  'SQL',
  'scikit-learn',
  'LightGBM',
  'XGBoost',
  'NLP',
  'RAG',
  'FastAPI',
  'Streamlit',
  'SQLAlchemy',
  'Azure',
  'GitHub'
]);

export function SkillsSystem() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Technical System"
          title="Skills organized as an AI product stack."
          description="Instead of a generic skills list, the stack is grouped by how real ML applications move from data to model to product."
        />
        <div className="space-y-4">
          {skillLayers.map((layer, index) => (
            <Reveal key={layer.layer} delay={index * 0.06}>
              <div className="card card-hover grid gap-5 p-6 md:grid-cols-[240px_1fr] md:gap-8 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.02em] text-ink">{layer.layer}</h3>
                    <p className="mt-1 text-xs font-semibold text-accent">{layer.label}</p>
                  </div>
                </div>
                <div className="md:border-l md:border-line md:pl-8">
                  <p className="text-sm leading-7 text-ink-muted">{layer.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <TechChip
                        key={skill}
                        className={emphasizedSkills.has(skill) ? 'border-[rgb(var(--accent-rgb)/0.34)] bg-[rgb(var(--accent-rgb)/0.08)] text-ink' : undefined}
                      >
                        {skill}
                      </TechChip>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
