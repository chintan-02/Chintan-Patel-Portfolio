import { projects } from '../../data/projects.js';
import { Reveal } from '../ui/Reveal.jsx';

export function EngineeringProof() {
  const proofItems = [...projects]
    .filter((project) => project.proofHighlight)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, 4);

  return (
    <section className="px-6 py-6 sm:px-6 lg:px-8" aria-label="Engineering proof">
      <div className="mx-auto max-w-[1160px] border-y border-line">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {proofItems.map((project, index) => (
              <div
                key={project.slug}
                className={[
                  'py-7 sm:px-6 lg:py-8',
                  index > 0 ? 'border-t border-line sm:border-t-0' : '',
                  index % 2 === 1 ? 'sm:border-l sm:border-line' : '',
                  index >= 2 ? 'sm:border-t sm:border-line lg:border-t-0' : '',
                  index > 0 ? 'lg:border-l lg:border-line' : ''
                ].join(' ')}
              >
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-ink sm:text-3xl">
                  {project.proofHighlight.value}
                </p>
                <p className="mt-1 text-xs font-bold text-accent">
                  {project.proofHighlight.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-ink-faint">
                  {project.proofHighlight.detail}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  {project.title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
