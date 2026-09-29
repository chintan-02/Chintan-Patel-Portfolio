import { ArrowUpRight, RadioTower } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Button } from '../ui/Button.jsx';
import { BrandGithub } from '../ui/BrandIcons.jsx';

const homeOrder = ['regimpact-ai', 'triageai', 'policygpt'];
const supportingOrder = ['product-finder-ai-agent', 'resumeiq'];

const homeProjectProof = {
  'regimpact-ai': {
    metrics: [
      { value: 'v0.5.0', label: 'Verified Azure staging release' },
      { value: 'OIDC + Bicep', label: 'Repeatable cloud delivery' }
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL + pgvector', 'Redis', 'Azure Container Apps'],
    scope: 'Verified Azure Canada Central staging release · production remains intentionally unapproved'
  },
  triageai: {
    title: 'TriageAI / SympDirect',
    metrics: [
      { value: '70.37%', label: 'Macro F1' },
      { value: '0.68%', label: 'Unsafe ESI 3→5 rate' }
    ],
    stack: ['React', 'FastAPI', 'LightGBM', 'SQLAlchemy', 'pytest'],
    scope: 'Verified local React + FastAPI workflow · clinical decision support only'
  },
  policygpt: {
    metrics: [
      { value: '16', label: 'Controlled benchmark cases' },
      { value: '358', label: 'Automated tests' }
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'Docker Compose'],
    scope: 'v0.3.0 verified local release · not cloud deployed'
  }
};

function HomeProjectCard({ project, index }) {
  const proof = homeProjectProof[project.slug] ?? {};
  const title = proof.title ?? project.title;
  const metrics = proof.metrics ?? project.metrics?.slice(0, 2) ?? [];
  const stack = proof.stack ?? project.stack?.slice(0, 5) ?? [];

  return (
    <Reveal delay={index * 0.08}>
      <article className="border-t border-line py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Selected work {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold text-ink-faint">{project.status}</span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
              {title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>

            <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-ink-muted">
              {project.problem}
            </p>

            <div className="mt-6 max-w-3xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">My contribution</p>
              <p className="mt-2 text-sm leading-7 text-ink-muted">{project.contribution}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.caseStudyUrl ? (
                <Button href={project.caseStudyUrl} variant="onDarkAccent">View Case Study</Button>
              ) : (
                <Button href={project.githubUrl} external icon={false} variant="onDarkAccent">
                  <BrandGithub className="h-4 w-4" />
                  View Project
                </Button>
              )}

              {project.releaseUrl && (
                <Button href={project.releaseUrl} external variant="onDark">
                  Release Evidence
                </Button>
              )}

              {project.caseStudyUrl && project.githubUrl && (
                <Button href={project.githubUrl} external icon={false} variant="onDark">
                  <BrandGithub className="h-4 w-4" />
                  GitHub
                </Button>
              )}
            </div>
          </div>

          <aside className="lg:border-l lg:border-line lg:pl-8">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
              Verified proof
            </p>
            <div className="mt-5 space-y-6">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`}>
                  <p className="font-display text-3xl font-bold tracking-[-0.04em] text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-ink-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-line pt-5 text-xs font-medium leading-6 text-ink-faint">
              {proof.scope ?? project.status}
            </p>
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

function SupportingProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="card card-hover h-full p-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
          More engineering work
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.025em] text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-7 text-ink-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
          <Button href={project.githubUrl} external icon={false} variant="onDark">
            <BrandGithub className="h-4 w-4" />
            GitHub
          </Button>
          {project.liveUrl && (
            <Button href={project.liveUrl} external icon={false} variant="onDarkAccent">
              <RadioTower className="h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button href={project.caseStudyUrl} variant="onDark" icon={false}>
              Case Study <ArrowUpRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProjects() {
  const orderedProjects = homeOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
  const supportingProjects = supportingOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Selected Work"
          title="Three systems that show how I engineer AI end to end."
          description="Regulatory intelligence, safety-sensitive machine learning, and evidence-gated RAG—each presented with verified delivery state, measurable proof, and explicit system boundaries."
        />

        <div>
          {orderedProjects.map((project, index) => (
            <HomeProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <SupportingProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
