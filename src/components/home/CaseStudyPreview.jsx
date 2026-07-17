import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, CheckCircle2 } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const caseStudyOrder = ['triageai', 'resumeiq', 'policygpt'];

const caseStudyFocus = {
  triageai: {
    summary:
      'How safety-tuned model selection, review-first clinical NLP, transparent escalation, clinician decisions, and audit evidence form one bounded workflow.',
    topics: ['Safety-tuned ML', 'Clinical NLP review', 'Audit + PDF evidence'],
    proof: '78.32% accuracy · 0.68% unsafe ESI 3→5'
  },
  resumeiq: {
    summary:
      'Why resume intelligence should separate parsing, classification, keyword and semantic evidence, skill gaps, privacy, and recruiter responsibility.',
    topics: ['Multi-signal NLP', 'Privacy boundaries', 'Human review'],
    proof: 'PDF · DOCX · TXT supported'
  },
  policygpt: {
    summary:
      'How document identity, evidence gating, calibrated answerability, provider resilience, evaluation, and local release engineering work together.',
    topics: ['Evidence architecture', '16-case evaluation', 'Release reliability'],
    proof: '229 backend · 112 frontend tests'
  }
};

export function CaseStudyPreview() {
  const caseStudies = caseStudyOrder
    .map((slug) => projects.find((project) => project.slug === slug && project.caseStudyUrl))
    .filter(Boolean);

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Case Studies"
          title="Deep dives into the decisions behind each system."
          description="These are not repeated project summaries. Each case study explains the architecture, tradeoffs, evaluation evidence, safety or responsible-AI boundaries, deployment state, limitations, and next engineering decisions."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project, index) => {
            const focus = caseStudyFocus[project.slug];

            return (
              <Reveal key={project.slug} delay={index * 0.07}>
                <Link
                  to={project.caseStudyUrl}
                  className="group flex h-full flex-col card card-hover p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                      <BookOpenCheck className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
                      Case study {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="mt-5 w-fit rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.03em] text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-accent">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-ink-muted">{focus.summary}</p>

                  <div className="mt-5 space-y-2">
                    {focus.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-xs font-semibold text-ink-muted">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.58)] px-3 py-2.5">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
                        Evidence
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-ink">{focus.proof}</p>
                    </div>

                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors group-hover:text-accent">
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-6 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-accent-strong"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
