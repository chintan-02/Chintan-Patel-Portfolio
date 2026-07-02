import { projects } from '../data/projects.js';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';

export function Projects() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Projects"
          title="AI projects presented as product systems."
          description="A focused portfolio of AI/ML applications with production-minded architecture, model workflow, APIs, explainability, and deployment."
        />
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
