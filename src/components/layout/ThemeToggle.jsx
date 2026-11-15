import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../lib/themeStore.jsx';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

// Simple line-icon toggle (~20px icon, matches the reference spec). Sits in
// the same icon-button family as the mobile hamburger — same size, same
// border/bg treatment — so it reads as part of the nav, not a bolted-on widget.
export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  // Match static HTML on the hydration pass, then restore the stored theme icon.
  const hydrated = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const isLight = hydrated && theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-[rgb(var(--surface2-rgb)/0.7)] text-ink-muted transition-colors duration-150 hover:border-accent hover:text-accent ${className}`}
    >
      {isLight ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
    </button>
  );
}
