import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The destination can still be suspended while its route module loads.
    // Watch for the section instead of assuming one animation frame is enough.
    const id = hash.slice(1);
    let observer;
    let timeout;
    const scrollWhenReady = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      observer?.disconnect();
      window.clearTimeout(timeout);
      target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start'
      });
      return true;
    };

    const frame = requestAnimationFrame(() => {
      if (scrollWhenReady()) return;
      observer = new MutationObserver(scrollWhenReady);
      observer.observe(document.body, { childList: true, subtree: true });
      timeout = window.setTimeout(() => observer.disconnect(), 10000);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
}
