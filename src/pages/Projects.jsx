import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';

export function Projects() {
  const flagshipProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          as="h1"
          eyebrow="Work"
          title="Explore the products and the engineering behind them."
          description="A focused portfolio spanning ML, RAG, agentic workflows, full-stack AI products, cloud delivery, evaluation, and operational reliability."
        />
        <div className="grid gap-8">
          {flagshipProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-8"><h2 className="text-xl font-bold text-ink">Earlier work</h2><p className="mt-3 text-sm leading-7 text-ink-muted">ResumeIQ — resume parsing, role classification, and job-description matching. The demo is offline while the frontend upgrade is planned.</p><Link to="/case-studies/resumeiq" className="mt-3 inline-block font-semibold text-accent">Read the ResumeIQ case study →</Link></div>
      </div>
    </section>
  );
}
