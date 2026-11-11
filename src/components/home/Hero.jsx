import { motion, useReducedMotion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { siteMeta } from '../../data/siteMeta.js';
import { proof } from '../../data/proof.js';
import { EASE } from '../../lib/motion.js';

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.08 } }
  };
  const item = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE.out } } };

  return (
    <section className="relative -mt-20 flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(72% 75% at 24% 52%, rgb(var(--base-rgb)/0.92) 0%, rgb(var(--base-rgb)/0.55) 38%, transparent 68%)' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1200px] text-center md:text-left"
      >
        <motion.p
          variants={item}
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
        >
          {siteMeta.title} · {siteMeta.specialization} · Edmonton, Canada
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 max-w-[1040px] font-display-serif text-[clamp(2.8rem,7vw,5.8rem)] font-normal leading-[1.01] tracking-[-0.035em] text-ink"
        >
          I turn models and data into <span className="italic text-accent">AI products</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-[720px] text-[clamp(1rem,1.65vw,1.25rem)] leading-[1.75] text-ink-muted md:mx-0"
        >
          Clinical triage, regulatory analysis, policy search, and product-finding agents. Built with Python, FastAPI, React, and cloud delivery on Azure and GCP.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-faint md:justify-start"
        >
          {proof.map((p, i) => (
            <span key={p.label} className="inline-flex items-center gap-2">
              {i > 0 && <span className="mr-2 hidden text-ink-faint/40 sm:inline">·</span>}
              <span className="font-semibold text-ink">{p.value}</span>
              <span>{p.label}</span>
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button href="https://triageai-chintan-staging.netlify.app/" external variant="onDarkAccent">Try TriageAI Demo</Button>
          <Button href="/projects" variant="onDark">View Work</Button>
          <Button href={siteMeta.resume} variant="onDark" download icon={false}>
            <FileDown className="h-4 w-4" />
            Download Résumé
          </Button>
        </motion.div>
      </motion.div>

    </section>
  );
}
