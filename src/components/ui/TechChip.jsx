import { cn } from '../../lib/utils.js';

export function TechChip({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex min-h-7 items-center rounded-md border border-line bg-transparent px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.01em] text-ink-faint transition-colors hover:border-[rgb(var(--accent-rgb)/0.36)] hover:text-ink-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
