import { CheckCircle2 } from 'lucide-react';
import { ResponsiveImage } from '../ui/ResponsiveImage.jsx';

export function ProjectVisual({ visual, title, priority = false }) {
  if (!visual) return null;

  if (visual.type === 'image') {
    return (
      <figure aria-label={title} className="project-window overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.72)] shadow-feature">
        <div className="bg-[rgb(var(--base-rgb)/0.42)] p-2 sm:p-3">
          <ResponsiveImage
            src={visual.src}
            alt={visual.alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            className="aspect-[16/9] w-full rounded-inset bg-[rgb(var(--surface2-rgb)/0.5)] object-contain object-top"
          />
        </div>
        {visual.caption && (
          <figcaption className="border-t border-line px-4 py-3 text-xs leading-5 text-ink-faint">
            {visual.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (visual.type === 'evidence') {
    return (
      <div className="project-window rounded-panel border border-[rgb(var(--accent-rgb)/0.22)] bg-[linear-gradient(145deg,rgb(var(--accent-rgb)/0.07),rgb(var(--surface-rgb)/0.78))] p-6 shadow-feature sm:p-7">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-accent">
          System workflow
        </p>
        <h4 className="mt-3 max-w-md font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
          Regulation changes → analyst decisions
        </h4>
        <div className="mt-7 space-y-4">
          {['Compare document versions and changed sections', 'Extract obligations and retrieve related controls', 'Route proposed changes to authorized reviewers', 'Retain the sources and review history'].map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm leading-6 text-ink-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
