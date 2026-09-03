import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { writingItems } from '../../data/writing.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';

const featuredArticles = [
  { slug: 'regimpact-azure-deployment', project: 'RegImpact AI', focus: 'Azure delivery' },
  { slug: 'lightgbm-vs-xgboost', project: 'TriageAI', focus: 'Safety-tuned ML' },
  { slug: 'rag-evaluation-beyond-demo', project: 'PolicyGPT', focus: 'RAG evaluation' },
  { slug: 'resume-intelligence-multi-signal', project: 'ResumeIQ', focus: 'Responsible NLP' }
];

export function WritingPreview() {
  const articles = featuredArticles
    .map((featured) => {
      const article = writingItems.find((item) => item.slug === featured.slug);
      return article ? { ...article, ...featured } : null;
    })
    .filter(Boolean);

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="writing-preview">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Technical Thinking"
            title="One engineering decision from each flagship system."
            description="The homepage writing selection now spans four systems: reliable Azure delivery in RegImpact AI, safety-sensitive model selection in TriageAI, inspectable RAG evaluation in PolicyGPT, and multi-signal responsible design in ResumeIQ."
          />
          <Link
            to="/writing"
            className="mb-8 inline-flex items-center gap-2 rounded-card border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.08)] px-4 py-2 text-sm font-bold text-accent transition hover:border-[rgb(var(--accent-rgb)/0.55)] hover:text-accent-strong"
          >
            View all writing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.07}>
              <Link
                to={article.route}
                className="group flex h-full flex-col card card-hover p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    {article.project}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                    {article.focus}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {article.meta ?? 'Published July 2026 · 5 min read'}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-ink">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{article.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <TechChip key={tag}>{tag}</TechChip>
                  ))}
                </div>

                <p className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-ink transition-colors group-hover:text-accent">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
