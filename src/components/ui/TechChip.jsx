import { cn } from '../../lib/utils.js';

// Tech/skill chip — dark inset on Observatory; amber-tinted hover.
export function TechChip({ children, className }) {
  return (
    <span className={cn('inline-flex min-h-8 items-center rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-3.5 py-1 text-xs font-semibold tracking-[0.02em] text-ink-muted transition-colors hover:border-[rgb(var(--accent-rgb)/0.4)] hover:text-ink', className)}>
      {children}
    </span>
  );
}
