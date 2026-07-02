import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// three.js + fiber are isolated in SceneCanvas and code-split here, so they are
// only fetched when the canvas will actually render (WebGL + motion allowed).
const SceneCanvas = lazy(() => import('./SceneCanvas.jsx'));

function hasWebGL() {
  if (typeof window === 'undefined') return false;
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

function useMobileStaticPoster() {
  const [mobilePoster, setMobilePoster] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;
  });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px), (pointer: coarse)');
    const onChange = () => setMobilePoster(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return mobilePoster;
}

/* Ambient 3D backdrop for the whole site: one fixed, full-viewport canvas behind
   all routed content (pointer-events: none). Content scrolls on top. Falls back to
   a static poster under prefers-reduced-motion or when WebGL is unavailable — so
   the page never depends on the canvas to look intentional, and motion-sensitive
   or low-power clients never download three.js. */
export function Scene() {
  const reduce = useReducedMotion();
  const webgl = useMemo(hasWebGL, []);
  const mobilePoster = useMobileStaticPoster();

  if (reduce || mobilePoster || !webgl) {
    return <div className="hero-poster" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="hero-poster" aria-hidden="true" />}>
      <SceneCanvas />
    </Suspense>
  );
}
