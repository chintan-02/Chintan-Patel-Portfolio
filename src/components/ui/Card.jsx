import { cn } from '../../lib/utils.js';

// Canonical card primitive — uses the shared .card / .card-hover system
// (token-driven radius, border, elevation, hover lift).
export function Card({ children, className, hover = false }) {
  return (
    <div className={cn('card p-6', hover && 'card-hover', className)}>
      {children}
    </div>
  );
}
