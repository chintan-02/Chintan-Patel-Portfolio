// Fixed left-side social strip — inspired by Linear/Vercel agency portfolios.
// Hidden on mobile (hamburger menu has the links). Visible from lg breakpoint up.
// Pure CSS transitions — no JS, no Framer, no perf cost.
import { Mail } from 'lucide-react';
import { BrandGithub, BrandLinkedin } from '../ui/BrandIcons.jsx';
import { siteMeta } from '../../data/siteMeta.js';
import { externalProps } from '../../lib/utils.js';

const links = [
  { icon: BrandGithub, href: siteMeta.github,              label: 'GitHub',   extra: externalProps('GitHub') },
  { icon: BrandLinkedin, href: siteMeta.linkedin,          label: 'LinkedIn', extra: externalProps('LinkedIn') },
  { icon: Mail,          href: `mailto:${siteMeta.email}`, label: 'Email',    extra: {} }
];

export function SocialStrip() {
  return (
    // fixed, vertically centred, left edge — hidden below lg
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
      {/* top line */}
      <span className="mb-2 block h-16 w-px bg-gradient-to-b from-transparent to-[rgb(var(--accent-rgb)/0.45)]" />

      {links.map(({ icon: Icon, href, label, extra }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...extra}
          className="group relative flex h-9 w-9 items-center justify-center rounded-inset border border-[rgb(var(--ink-rgb)/0.08)] bg-[rgb(var(--surface-rgb)/0.48)] text-ink-muted shadow-card backdrop-blur-sm transition-all duration-200 hover:border-[rgb(var(--accent-rgb)/0.36)] hover:text-accent"
        >
          <Icon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110" />
          {/* tooltip — slides in from left on hover */}
          <span className="pointer-events-none absolute left-10 whitespace-nowrap rounded-md border border-line bg-[rgb(var(--surface-rgb)/0.95)] px-2.5 py-1 text-xs font-semibold text-ink opacity-0 shadow-md backdrop-blur transition-all duration-150 group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}

      {/* bottom line */}
      <span className="mt-2 block h-16 w-px bg-gradient-to-t from-transparent to-[rgb(var(--accent-rgb)/0.45)]" />
    </div>
  );
}
