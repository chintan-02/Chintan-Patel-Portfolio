import { technicalExperience } from '../../data/experience.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';

function ExperienceItem({ item }) {
  return (
    <div className="card card-hover p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-extrabold tracking-[-0.02em] text-ink">{item.role}</h3>
          <p className="mt-1 text-sm font-semibold text-accent">{item.org} · {item.location}</p>
        </div>
        <span className="shrink-0 rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-3 py-1 text-xs font-bold text-ink-muted">{item.period}</span>
      </div>

      {item.summary && <p className="mt-4 text-sm leading-7 text-ink-muted">{item.summary}</p>}

      {item.bullets && (
        <ul className="mt-5 space-y-3 text-sm leading-7 text-ink-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {item.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => <TechChip key={tag}>{tag}</TechChip>)}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="experience">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Experience"
          title="Software Engineering Background."
          description="Before specializing in AI, I built client-facing web products, managed delivery, and learned how to turn requirements into usable software — experience that now shapes how I build ML systems."
        />
        <Reveal>
          <div className="grid gap-6">
            {technicalExperience.map((item) => <ExperienceItem key={item.role} item={item} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
