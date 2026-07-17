import { FileText, RadioTower } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Button } from '../ui/Button.jsx';
import { BrandGithub } from '../ui/BrandIcons.jsx';

const homeOrder = ['triageai', 'resumeiq', 'policygpt'];

const homeProjectCopy = {
  triageai: {
    title: 'TriageAI / SympDirect',
    value:
      'Review-first clinical decision-support workflow with evidence-linked NLP extraction, ESI 3/4/5 prediction, safety escalation, clinician review, audit evidence, and PDF reporting.'
  },
  resumeiq: {
    value:
      'Privacy-aware resume intelligence workflow that separates classification, ATS-style signals, semantic matching, skill intelligence, writing quality, and human review.'
  },
  policygpt: {
    value:
      'Production-style policy RAG system with durable document identity, calibrated answerability, page citations, provider-resilient fallback, evaluation, and release-like local deployment.'
  }
};

function HomeProjectCard({ project, index }) {
  const copy = homeProjectCopy[project.slug] ?? {};
  const title = copy.title ?? project.title;
  const metrics = project.metrics.slice(0, 2).map((metric) => `${metric.value} ${metric.label}`);

  return (
    <Reveal delay={index * 0.08}>
      <article className="card card-hover h-full p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-card border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
            <FileText className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          <span className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-3 py-1 text-[11px] font-semibold text-ink-muted">
            {project.status}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-ink">
          {title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-7 text-ink-muted">{copy.value ?? project.problem}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric} className="rounded-inset border border-[rgb(var(--accent-rgb)/0.16)] bg-[rgb(var(--accent-rgb)/0.05)] px-4 py-3">
              <p className="font-mono text-sm font-bold leading-5 text-accent">{metric}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
          {project.caseStudyUrl && <Button href={project.caseStudyUrl} variant="onDarkAccent">Case Study</Button>}
          {project.githubUrl && <Button href={project.githubUrl} external icon={false} variant="onDark"><BrandGithub className="h-4 w-4" />GitHub</Button>}
          {project.liveUrl && <Button href={project.liveUrl} external icon={false} variant="onDark"><RadioTower className="h-4 w-4" />Live Demo</Button>}
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProjects() {
  const orderedProjects = homeOrder.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Flagship AI products with architecture thinking."
          description="Each project is presented as a real system: problem, workflow, evaluation, safety or responsible-AI boundaries, stack, deployment status, and honest limitations."
        />
        <div className="grid gap-8">
          {orderedProjects.map((project, index) => <HomeProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
