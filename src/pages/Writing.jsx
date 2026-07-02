import { Link } from 'react-router-dom';
import { writingItems } from '../data/writing.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { TechChip } from '../components/ui/TechChip.jsx';

export function Writing() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Writing"
          title="Technical notes that show how I think."
          description="Short articles for explaining ML concepts, project decisions, model evaluation, and production concerns."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {writingItems.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.07}>
              <Link to={item.route} className="group block h-full card card-hover p-7">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.meta}</p>
                <h3 className="font-sans text-2xl font-bold tracking-[-0.04em] text-ink">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-8 text-ink-muted">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <TechChip key={tag}>{tag}</TechChip>)}
                </div>
                <p className="mt-6 text-sm font-bold text-ink transition-colors group-hover:text-accent">Read article →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
