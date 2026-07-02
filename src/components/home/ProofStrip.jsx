import { motion } from 'framer-motion';
import { proofPoints } from '../../data/siteMeta.js';
import { fadeUp, stagger, viewport } from '../../lib/motion.js';

export function ProofStrip() {
  return (
    <section id="highlights" className="scroll-mt-24 px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="glass-panel mx-auto grid max-w-7xl gap-3 rounded-panel p-3 sm:grid-cols-2 lg:grid-cols-6"
      >
        {proofPoints.map((point) => (
          <motion.div key={point} variants={fadeUp} className="rounded-2xl border border-line bg-[rgb(var(--surface2-rgb)/0.6)] px-4 py-4 text-center text-sm font-bold text-ink-muted">
            {point}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
