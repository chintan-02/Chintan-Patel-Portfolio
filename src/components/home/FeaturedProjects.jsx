import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.js';
import { projectEvidence } from '../../data/projectEvidence.js';
import { Reveal } from '../ui/Reveal.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { Button } from '../ui/Button.jsx';
import { ProjectVisual } from '../projects/ProjectVisual.jsx';

function ProjectActions({ project }) {
  return <div className="mt-6 flex flex-wrap items-center gap-4">
    {project.caseStudyUrl && <Button href={project.caseStudyUrl} variant="onDarkAccent">Case Study</Button>}
    {project.liveUrl && <Button href={project.liveUrl} external variant={project.caseStudyUrl ? 'onDark' : 'onDarkAccent'}>Live Demo</Button>}
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded text-sm font-semibold text-ink-muted underline decoration-line underline-offset-4 hover:text-accent">Code ↗</a>
  </div>;
}

export function FeaturedProjects() {
  const ordered = projects.filter((project) => project.featured).sort((a, b) => a.featuredOrder - b.featuredOrder);
  return <section id="projects" className="pb-12">
    <div className="site-container">
      <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-5"><h2 className="text-3xl text-ink sm:text-4xl">Selected work</h2><Link to="/projects" className="shrink-0 text-sm font-semibold text-ink-muted hover:text-accent">All work →</Link></div>
      {ordered.slice(0,3).map((project,index) => <Reveal key={project.slug}>
        <article className="grid gap-8 border-b border-line py-10 first:pt-0 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-12">
          <ProjectVisual visual={project.homepageVisual} title={project.title} priority={index===0} />
          <div className="min-w-0">
            <p className="font-mono text-xs leading-6 tracking-[0.05em] text-ink-faint">0{index+1} / {project.status}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-ink">{project.homepage?.displayTitle ?? project.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink-muted">{project.description}</p>
            <div className="mt-5 grid grid-cols-2 gap-5 border-y border-line py-4">{project.homepage.metrics.map((metric) => <div key={metric.label}><p className="font-mono text-2xl font-semibold text-ink">{metric.value}</p><p className="mt-2 text-xs leading-5 text-ink-muted">{metric.label}</p></div>)}</div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{(projectEvidence[project.slug] ?? []).map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="rounded text-xs leading-6 text-accent underline underline-offset-4">{source.label} ↗</a>)}</div>
            <div className="mt-4 flex flex-wrap gap-2">{project.homepage.stack.slice(0,5).map(tech => <TechChip key={tech}>{tech}</TechChip>)}</div>
            <p className="mt-4 text-xs leading-6 text-ink-faint">{project.homepage.scope}</p>
            <ProjectActions project={project} />
            {project.writingUrl && <Link to={project.writingUrl} className="mt-4 inline-block rounded text-sm font-medium text-ink-muted hover:text-accent">Engineering note →</Link>}
          </div>
        </article>
      </Reveal>)}
      {ordered.slice(3).map(project => <Reveal key={project.slug}><article className="mt-8 grid gap-6 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.6)] p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div><p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">Also built / Tool-using agent</p><h3 className="mt-3 text-2xl font-semibold text-ink">{project.title}</h3><p className="mt-3 text-base leading-7 text-ink-muted">An LLM interprets the request; deterministic Python tools own category and price filtering. The model does not supply catalogue facts.</p><p className="mt-3 text-xs leading-6 text-ink-faint">Single ADK agent · fixed 13-product catalogue · Cloud Run + Netlify</p></div>
        <div><div className="flex flex-wrap gap-2">{project.homepage.stack.map(tech=><TechChip key={tech}>{tech}</TechChip>)}</div><ProjectActions project={project} /></div>
      </article></Reveal>)}
    </div>
  </section>;
}
