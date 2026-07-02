import { Mail } from 'lucide-react';
import { BrandGithub, BrandLinkedin } from '../ui/BrandIcons.jsx';
import { siteMeta } from '../../data/siteMeta.js';
import { externalProps } from '../../lib/utils.js';

export function Footer() {
  return (
    <footer className="border-t border-line bg-[rgb(var(--base-rgb)/0.6)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-bold tracking-[-0.04em] text-ink">Chintan Patel</p>
          <p className="mt-1 text-sm text-ink-faint">Applied AI/ML Engineer · Data Science · Production ML Systems</p>
        </div>
        <div className="flex items-center gap-3 text-ink-muted">
          <a href={`mailto:${siteMeta.email}`} className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] p-3 transition hover:border-[rgb(var(--accent-rgb)/0.4)] hover:text-ink" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href={siteMeta.github} className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] p-3 transition hover:border-[rgb(var(--accent-rgb)/0.4)] hover:text-ink" {...externalProps('GitHub')}>
            <BrandGithub className="h-5 w-5" />
          </a>
          <a href={siteMeta.linkedin} className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.7)] p-3 transition hover:border-[rgb(var(--accent-rgb)/0.4)] hover:text-ink" {...externalProps('LinkedIn')}>
            <BrandLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
