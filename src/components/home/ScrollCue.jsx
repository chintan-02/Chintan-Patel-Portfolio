// Minimal, premium scroll indicator: a thin line with a glowing dot that travels
// down it. Clicking smooth-scrolls to the next section. The dot animation is pure
// CSS (.scroll-dot) so the global prefers-reduced-motion rule disables it; when
// disabled the dot renders static (still visible) instead of mid-animation.
export function ScrollCue({ target = 'highlights' }) {
  const handleClick = () => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to content"
      className="group hidden flex-col items-center gap-3 sm:flex"
    >
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-faint transition-colors duration-200 group-hover:text-accent">
        Scroll
      </span>
      <span className="relative h-12 w-3">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[rgb(var(--ink-rgb)/0.3)] via-[rgb(var(--ink-rgb)/0.5)] to-transparent" />
        <span className="scroll-dot absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent-rgb)/0.6)]" />
      </span>
    </button>
  );
}
