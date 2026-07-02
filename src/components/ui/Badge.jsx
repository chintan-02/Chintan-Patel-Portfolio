// Section eyebrow — amber-tinted dark pill, mono label (Observatory).
export function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
