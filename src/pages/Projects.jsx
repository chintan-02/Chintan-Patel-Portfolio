import { projects } from '../data/projects.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';

export function Projects() {
  const flagshipProjects = projects\n    .filter((project) => project.featured)\n    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Projects"
          title="Applied AI systems with verified engineering depth."
          description="A focused portfolio spanning ML, RAG, agentic workflows, full-stack AI products, cloud delivery, evaluation, and operational reliability."
        />
        <div className="grid gap-8">
          {flagshipProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
