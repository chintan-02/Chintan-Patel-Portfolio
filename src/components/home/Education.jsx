import { education } from '../../data/education.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Reveal } from '../ui/Reveal.jsx';

export function Education() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="education">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Education"
          title="AI education supported by computer science fundamentals."
          description="Most relevant AI training first, followed by business/process context and computer science foundation."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal
              key={item.degree}
              delay={index * 0.07}
              className={index === 0
                ? 'rounded-panel border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.06)] p-6'
                : 'card p-5'}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">{item.period}</p>
              <h3 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-ink">{item.degree}</h3>
              <p className="mt-2 text-sm font-semibold text-accent">{item.school}</p>
              {item.note && <p className="mt-4 text-sm leading-7 text-ink-muted">{item.note}</p>}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((h) => <TechChip key={h}>{h}</TechChip>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
