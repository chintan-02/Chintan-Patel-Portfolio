import { Link } from 'react-router-dom';
import { ArrowRight, GitPullRequest, ShieldCheck } from 'lucide-react';
import { engineeringExample } from '../../data/engineering.js';
import { Reveal } from '../ui/Reveal.jsx';

export function HowIWork() {
  return (
    <section className="engineering-teaser px-6 py-16 lg:px-8" id="how-i-work" aria-labelledby="engineering-preview-title">
      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="engineering-eyebrow">How I engineer</p>
          <h2 id="engineering-preview-title" className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">AI-assisted work.<br /><span className="text-accent">Engineering accountability.</span></h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-ink-muted">I use AI to explore, build and review software. The decisions, verification and responsibility stay with me.</p>
          <Link className="engineering-link mt-6" to="/engineering">Explore my engineering approach <ArrowRight size={17} aria-hidden="true" /></Link>
        </Reveal>
        <Reveal>
          <Link to="/engineering" className="engineering-preview-card group block rounded-panel border border-line p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 text-accent"><span className="engineering-eyebrow">A decision, open for review</span><GitPullRequest size={21} aria-hidden="true" /></div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">{engineeringExample.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-muted">Three automated review findings. Two engineering decisions. A safer staging lifecycle.</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5"><span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-muted"><ShieldCheck size={16} className="text-accent" aria-hidden="true" />RegImpact · Merged PR #26</span><span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Read the decisions <ArrowRight size={16} aria-hidden="true" /></span></div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
