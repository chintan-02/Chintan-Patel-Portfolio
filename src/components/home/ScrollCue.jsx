import { ChevronDown } from 'lucide-react';

// Mobile/tablet: compact down-arrow cue.
// Desktop: full premium scroll indicator with label and animated dot.
export function ScrollCue({ target = 'highlights' }) {
  const handleClick = () => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to content"
      className="group flex flex-col items-center justify-center text-ink-faint transition-colors duration-200 hover:text-accent"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-[rgb(var(--surface-rgb)/0.55)] shadow-card backdrop-blur lg:hidden">
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </span>

      <span className="hidden flex-col items-center gap-3 lg:flex">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] transition-colors duration-200 group-hover:text-accent">
          Scroll
        </span>
        <span className="relative h-12 w-3">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[rgb(var(--ink-rgb)/0.3)] via-[rgb(var(--ink-rgb)/0.5)] to-transparent" />
          <span className="scroll-dot absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent-rgb)/0.6)]" />
        </span>
      </span>
    </button>
  );
}
