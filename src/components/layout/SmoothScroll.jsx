import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { scroll } from '../../lib/scrollStore.js';

// Smooth-scroll provider. Drives the shared scroll store that the 3D scene reads.
// Disabled under prefers-reduced-motion (native scroll + no Lenis), so motion-
// sensitive users get instant, untweened scrolling.
export function SmoothScroll({ children }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return; // native scroll for reduced-motion users

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    lenis.on('scroll', ({ progress, velocity }) => {
      scroll.progress = progress ?? 0;
      scroll.velocity = velocity ?? 0;
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      scroll.progress = 0;
      scroll.velocity = 0;
    };
  }, [reduce]);

  return children;
}
