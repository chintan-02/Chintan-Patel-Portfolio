// Motion tokens (JS side).
// Framer Motion runs in JS and cannot read CSS @theme vars, so durations/easings
// are mirrored here to stay in sync with src/styles/globals.css.
export const DURATION = {
  fast: 0.15,
  base: 0.5,
  slow: 0.65
};

// cubic-bezier arrays (Framer Motion accepts these directly)
export const EASE = {
  out: [0.22, 1, 0.36, 1],     // mirrors --ease-out-soft
  inOut: [0.65, 0, 0.35, 1]    // mirrors --ease-in-out-soft
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE.out }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE.out }
  }
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

// reduced-motion variants: opacity only, no transform (respects user preference)
export const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.fast } }
};

export const viewport = { once: true, margin: '-80px' };
