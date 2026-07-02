import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeUpReduced, viewport } from '../../lib/motion.js';

// Single scroll-reveal primitive. Respects prefers-reduced-motion:
// Framer Motion is JS-driven, so the CSS reduced-motion media query does NOT
// disable it — we must gate it here via useReducedMotion().
export function Reveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();
  const variants = reduce ? fadeUpReduced : fadeUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay: reduce ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
