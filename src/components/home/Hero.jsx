import { FileDown } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { siteMeta } from '../../data/siteMeta.js';

export function Hero() {
  return <section className="hero-refined">
    <div className="site-container">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">{siteMeta.title} · {siteMeta.specialization}</p>
      <h1 className="mt-5 font-display-serif text-[clamp(2.8rem,6.4vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.035em] text-ink">I turn models and data into <span className="italic text-accent">AI products</span>.</h1>
      <p className="mt-6 max-w-[680px] text-lg leading-8 text-ink-muted">Clinical triage, regulatory analysis, policy search, and product-finding agents. Built with Python, FastAPI, React, and cloud delivery on Azure and GCP.</p>
      <p className="mt-5 text-sm text-ink-faint">Edmonton, Canada · Open to AI engineering opportunities across Canada</p>
      <div className="mt-8 flex flex-wrap gap-3"><Button href="/projects" variant="onDarkAccent">View Work</Button><Button href={siteMeta.resume} download icon={false} variant="onDark"><FileDown size={16} />Résumé</Button></div>
    </div>
  </section>;
}
