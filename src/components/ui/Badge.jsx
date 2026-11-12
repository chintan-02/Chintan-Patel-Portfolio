export function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent sm:text-xs">
      <span className="h-px w-8 bg-[linear-gradient(90deg,var(--color-accent),transparent)]" aria-hidden="true" />
      {children}
    </span>
  );
}
