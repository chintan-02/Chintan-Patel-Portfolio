import { motion, useReducedMotion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { ScrollCue } from './ScrollCue.jsx';
import { siteMeta } from '../../data/siteMeta.js';
import { proof } from '../../data/proof.js';
import { EASE } from '../../lib/motion.js';

/* Cinematic hero. No opaque background — the fixed 3D scene shows through, with a
   soft scrim behind the text so it always stays legible over the point cloud.
   Funnel: availability → hook headline → concrete positioning → what I build →
   real proof → actions. Built to convert a recruiter in five seconds. */
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
      {/* legibility scrim — darkens behind the text column, fades out over the cloud */}
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
        {/* availability — the single most important signal for a job search */}
        <motion.div variants={item} className="flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.08)] px-4 py-2 font-mono text-[11px] font-medium tracking-[0.06em] text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for Fall 2026 co-op / internship · AI/ML Engineering, Data Science, Analytics, and Applied Software roles · Canada
          </span>
        </motion.div>

        {/* hook headline — the one cinematic serif line */}
        <motion.h1
          variants={item}
          className="mt-6 font-display-serif text-[clamp(2.5rem,6.5vw,5.2rem)] font-normal leading-[1.03] tracking-[-0.02em] text-ink"
        >
          Intelligence you can <span className="italic text-accent">trace</span>.
        </motion.h1>

        {/* concrete positioning — what I am, in plain language */}
        <motion.p
          variants={item}
          className="mt-5 font-display text-[clamp(1.1rem,2vw,1.45rem)] font-semibold tracking-[-0.01em] text-ink"
        >
          Applied AI/ML Engineer building evaluated, explainable, deployed AI systems across healthcare, NLP, and enterprise RAG.
        </motion.p>

        {/* what I build */}
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-[620px] text-[1rem] leading-[1.7] text-ink-muted md:mx-0"
        >
          I build practical AI products with Python, FastAPI, Streamlit, SQL, vector search, evaluation pipelines, and cloud deployment.
        </motion.p>

        {/* proof anchor row — real numbers in the first screen */}
        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[13px] text-ink-faint md:justify-start"
        >
          {proof.map((p, i) => (
            <span key={p.label} className="inline-flex items-center gap-2">
              {i > 0 && <span className="mr-3 hidden text-ink-faint/50 sm:inline">·</span>}
              <span className="font-semibold text-accent">{p.value}</span>
              <span>{p.label}</span>
            </span>
          ))}
        </motion.div>

        {/* actions */}
        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button href="/projects" variant="onDark">View Projects</Button>
          <Button href={siteMeta.resume} variant="onDarkAccent" download icon={false}>
            <FileDown className="h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>

        {/* surfaced social — recruiters often click GitHub first */}
        <motion.div variants={item} className="mt-6 flex justify-center gap-5 font-mono text-[12px] tracking-[0.04em] text-ink-faint md:justify-start">
          <a href={siteMeta.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">GitHub ↗</a>
          <span className="text-ink-faint/40">·</span>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">LinkedIn ↗</a>
        </motion.div>
      </motion.div>

      {/* scroll cue — pinned bottom-center of the hero (cinematic anchor) */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollCue target="about" />
      </div>
    </section>
  );
}
