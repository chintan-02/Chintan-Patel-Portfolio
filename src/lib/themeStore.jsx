import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Mutable, non-reactive mirror of the current theme — read directly inside
// the R3F render loop / Three.js setup (same pattern as lib/scrollStore.js).
// React state re-renders components; this lets non-React code (materials,
// fog, canvas clear colour) check the theme without subscribing to context.
export const themeState = { current: 'dark' };

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage unavailable (private mode, etc.) — fall through to default */
  }
  // Deliberately does NOT follow prefers-color-scheme: the dark "Observatory"
  // look is the primary, designed-for experience; light is an opt-in
  // alternative, not something we want to silently default to per OS setting.
  return 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    themeState.current = theme;
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
    if (!document.documentElement.dataset.theme) {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore — non-critical */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#F6F1E9' : '#0A0A0F');
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
