import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { writingItems } from '../../data/writing.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';

const featuredSlugs = ['lightgbm-vs-xgboost', 'evidence-gated-rag', 'model-evaluation'];

export function WritingPreview() {
  const featuredArticles = featuredSlugs
    .map((slug) => writingItems.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="writing-preview">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Technical Thinking"
            title="How I reason about models, systems, and risk."
            description="A compact writing preview for model selection, RAG reliability, and evaluation beyond headline accuracy."
          />
          <Link
            to="/writing"
            className="mb-8 inline-flex items-center gap-2 rounded-card border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.08)] px-4 py-2 text-sm font-bold text-accent transition hover:border-[rgb(var(--accent-rgb)/0.55)] hover:text-accent-strong"
          >
            View all writing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.07}>
              <Link to={article.route} className="group block h-full card card-hover p-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {article.meta ?? 'Published July 2026 · 5 min read'}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-ink">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{article.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => <TechChip key={tag}>{tag}</TechChip>)}
                </div>
                <p className="mt-5 text-sm font-bold text-ink transition-colors group-hover:text-accent">Read article →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
