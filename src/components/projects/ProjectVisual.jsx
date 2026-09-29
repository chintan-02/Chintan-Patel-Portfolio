import { CheckCircle2 } from 'lucide-react';

export function ProjectVisual({ visual, title }) {
  if (!visual) return null;

  if (visual.type === 'image') {
    return (
      <figure className="project-window overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.72)] shadow-feature">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--ink-rgb)/0.18)]" />
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--ink-rgb)/0.12)]" />
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent-rgb)/0.45)]" />
          <span className="ml-2 truncate font-mono text-[10px] text-ink-faint">{title}</span>
        </div>
        <div className="bg-[rgb(var(--base-rgb)/0.42)] p-2 sm:p-3">
          <img
            src={visual.src}
            alt={visual.alt}
            loading="lazy"
            decoding="async"
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
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
          {visual.eyebrow}
        </p>
        <h4 className="mt-3 max-w-md font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
          {visual.title}
        </h4>
        <div className="mt-7 space-y-4">
          {visual.items.map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm leading-6 text-ink-muted">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 border-t border-line pt-5 text-xs leading-5 text-ink-faint">
          Fresh sanitized v0.5.0 product captures are still pending; no placeholder screenshot is shown.
        </p>
      </div>
    );
  }

  return null;
}
