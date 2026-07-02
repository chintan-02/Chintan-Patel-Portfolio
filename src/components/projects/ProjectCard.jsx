import { FileText, RadioTower } from 'lucide-react';
import { BrandGithub } from '../ui/BrandIcons.jsx';
import { Button } from '../ui/Button.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { ProductPreview } from '../ui/VisualProof.jsx';

// Dark-glass project card (Observatory). Metrics row pulls from project.metrics;
// action buttons render only when the corresponding URL exists (PolicyGPT has no
// live demo / case study yet).
export function ProjectCard({ project }) {
  const topMetrics = project.metrics?.slice(0, 2) ?? [];

  return (
    <article className="group relative overflow-hidden card card-hover p-4 sm:p-5">
      <ProductPreview project={project} />

      <div className="grid gap-5 p-2 pt-6 sm:p-3 sm:pt-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-card border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                <FileText className="h-4 w-4" />
              </div>
              <span className="rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.1)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {project.category}
              </span>
              <span className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] px-3 py-1 text-[11px] font-semibold text-ink-muted">
                {project.status}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
          </div>
        </div>

        <p className="max-w-[78ch] text-[0.95rem] leading-7 text-ink-muted">{project.description}</p>

        {topMetrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 lg:max-w-xl">
            {topMetrics.map((m) => (
              <div key={m.label} className="rounded-inset border border-[rgb(var(--accent-rgb)/0.16)] bg-[rgb(var(--accent-rgb)/0.05)] px-4 py-3">
                <p style={{ color: 'var(--color-accent-strong)' }} className="font-mono text-base font-bold leading-none">{m.value}</p>
                <p className="mt-2 text-[11px] leading-tight text-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((t) => <TechChip key={t}>{t}</TechChip>)}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-line pt-5">
          {project.caseStudyUrl && (
            <Button href={project.caseStudyUrl} variant="onDarkAccent">Case Study</Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} external icon={false} variant="onDark"><BrandGithub className="h-4 w-4" />GitHub</Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} external icon={false} variant="onDark"><RadioTower className="h-4 w-4" />Live Demo</Button>
          )}
        </div>
      </div>
    </article>
  );
}
