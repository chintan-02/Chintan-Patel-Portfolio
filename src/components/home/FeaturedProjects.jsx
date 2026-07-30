import { CheckCircle2, FileText, RadioTower } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Button } from '../ui/Button.jsx';
import { BrandGithub } from '../ui/BrandIcons.jsx';

const homeOrder = ['triageai', 'resumeiq', 'policygpt'];

const homeProjectProof = {
  triageai: {
    title: 'TriageAI / SympDirect',
    value:
      'Review-first clinical decision-support workflow with evidence-linked NLP extraction, ESI 3/4/5 prediction, transparent safety escalation, clinician review, audit evidence, and backend PDF reporting.',
    metrics: [
      { value: '78.32%', label: 'Test accuracy' },
      { value: '0.68%', label: 'Unsafe ESI 3→5 rate' }
    ],
    evidence: [
      'Reviewed Clinical NLP',
      'Safety-rule escalation',
      'Audit + PDF evidence'
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'LightGBM', 'SQLAlchemy', 'ReportLab'],
    scope: 'Verified local React + FastAPI workflow · clinical decision support only'
  },
  resumeiq: {
    value:
      'Privacy-aware resume intelligence workflow that separates parsing, classification, ATS-style compatibility, semantic matching, skill intelligence, writing quality, and human review.',
    metrics: [
      { value: '3', label: 'Resume formats' },
      { value: 'Human', label: 'Review required' }
    ],
    evidence: [
      'Keyword + semantic matching',
      'Skill-gap intelligence',
      'Privacy-aware batch review'
    ],
    stack: ['Python', 'Streamlit', 'FastAPI', 'scikit-learn', 'TF-IDF', 'Azure App Service'],
    scope: 'Working Azure portfolio demo · not an automated hiring system'
  },
  policygpt: {
    value:
      'Production-style evidence intelligence and policy RAG system that converts policy PDFs into durable, searchable evidence, blocks unsupported generation and exposes page-level citations, confidence diagnostics, benchmark evaluation and operational health through a Next.js console.',
    metrics: [
      { value: 'v0.3.0', label: 'Local release profile' },
      { value: '16', label: 'Benchmark cases' },
      { value: '229', label: 'Backend tests' },
      { value: '112', label: 'Frontend tests' }
    ],
    evidence: [
      'SHA-256 document identity',
      'Evidence gate + citations',
      'Provider-safe fallback'
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'SentenceTransformers', 'Docker Compose'],
    scope: 'Local release profile · Not cloud deployed'
  }
};

function HomeProjectCard({ project, index }) {
  const proof = homeProjectProof[project.slug] ?? {};
  const title = proof.title ?? project.title;
  const metrics = proof.metrics ?? project.metrics.slice(0, 2);
  const stack = proof.stack ?? project.stack.slice(0, 6);

  return (
    <Reveal delay={index * 0.08}>
      <article className="card card-hover h-full p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-card border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
            <FileText className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
            System {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          <span className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-3 py-1 text-[11px] font-semibold text-ink-muted">
            {project.status}
          </span>
        </div>

        <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-stretch">
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-ink">
              {title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-muted">
              {proof.value ?? project.problem}
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {(proof.evidence ?? project.features.slice(0, 3)).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.52)] px-3 py-2.5"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-xs font-semibold leading-5 text-ink-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
              {project.caseStudyUrl && (
                <Button href={project.caseStudyUrl} variant="onDarkAccent">
                  Case Study
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} external icon={false} variant="onDark">
                  <BrandGithub className="h-4 w-4" />
                  GitHub
                </Button>
              )}
              {project.liveUrl && (
                <Button href={project.liveUrl} external icon={false} variant="onDark">
                  <RadioTower className="h-4 w-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <aside className="flex h-full flex-col rounded-panel border border-[rgb(var(--accent-rgb)/0.18)] bg-[rgb(var(--accent-rgb)/0.045)] p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Verified proof
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-4"
                >
                  <p className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-ink-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-auto border-t border-line pt-4 text-xs font-medium leading-6 text-ink-faint">
              {proof.scope ?? project.status}
            </p>
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProjects() {
  const orderedProjects = homeOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Flagship AI systems with verified engineering depth."
          description="Each project shows an end-to-end system: problem framing, architecture, evaluation, safety or responsible-AI boundaries, product workflow, delivery state, and honest limitations."
        />
        <div className="grid gap-8">
          {orderedProjects.map((project, index) => (
            <HomeProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
