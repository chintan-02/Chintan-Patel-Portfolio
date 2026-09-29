import { ArrowUpRight, RadioTower } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Button } from '../ui/Button.jsx';
import { BrandGithub } from '../ui/BrandIcons.jsx';
import { ProjectVisual } from '../projects/ProjectVisual.jsx';

function HomeProjectCard({ project, index }) {
  const homepage = project.homepage ?? {};
  const title = homepage.displayTitle ?? project.title;
  const metrics = homepage.metrics ?? project.metrics?.slice(0, 2) ?? [];
  const stack = homepage.stack ?? project.stack?.slice(0, 5) ?? [];
  const reverse = index % 2 === 1;

  return (
    <Reveal delay={index * 0.08}>
      <article className="border-t border-line py-14 sm:py-18 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
          <div className={reverse ? 'lg:order-2' : undefined}>
            <ProjectVisual visual={project.homepageVisual} title={project.title} />
          </div>

          <div className={reverse ? 'lg:order-1' : undefined}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Selected work {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold text-ink-faint">{project.status}</span>
            </div>

            <h3 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
              {title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>

            <p className="mt-6 text-[1rem] leading-8 text-ink-muted">{project.problem}</p>

            <div className="mt-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
                My contribution
              </p>
              <p className="mt-2 text-sm leading-7 text-ink-muted">{project.contribution}</p>
            </div>

            {metrics.length > 0 && (
              <div className="mt-7 grid grid-cols-2 gap-5 border-y border-line py-5">
                {metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`}>
                    <p className="font-display text-2xl font-bold tracking-[-0.04em] text-ink sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-ink-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
            </div>

            <p className="mt-5 text-xs font-medium leading-6 text-ink-faint">
              {homepage.scope ?? project.status}
            </p>

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
        </div>
      </article>
    </Reveal>
  );
}

function SupportingProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group h-full border-t border-line py-7">
        <div className="flex h-full flex-col">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            More engineering work
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-7 text-ink-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
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
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProjects() {
  const ordered = [...projects]
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
  const flagshipProjects = ordered.slice(0, 3);
  const supportingProjects = ordered.slice(3);

  return (
    <section className="px-6 py-24 sm:px-6 lg:px-8" id="projects">
      <div className="mx-auto max-w-[1160px]">
        <SectionHeader
          eyebrow="Selected Work"
          title="Three systems that show how I engineer AI end to end."
          description="Regulatory intelligence, safety-sensitive machine learning, and evidence-gated RAG—each presented with verified delivery state, measurable proof, and explicit system boundaries."
        />

        <div>
          {flagshipProjects.map((project, index) => (
            <HomeProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {supportingProjects.length > 0 && (
          <div className="mt-12">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                Additional systems
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {supportingProjects.map((project, index) => (
                <SupportingProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
