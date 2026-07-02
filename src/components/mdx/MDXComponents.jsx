import { Link } from 'react-router-dom';
import { Button } from '../ui/Button.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import { ProductPreview, ProductWalkthrough, ScreenshotGallery, StatusBadges, VisualFlow } from '../ui/VisualProof.jsx';

export { ProductPreview, ProductWalkthrough, ScreenshotGallery, StatusBadges, VisualFlow };

// All MDX building blocks are dark-glass (Observatory) — these render inside
// case-study .mdx files via src/pages/CaseStudy.jsx, so they must match the
// rest of the site exactly (previously still on the old light-mode skin:
// white/76 panels, slate text, sky-blue accents — washed-out near-invisible
// text, since prose-ai's light ink color was sitting on a near-white panel).

export function MetricCard({ label, value, note }) {
  return (
    <div className="my-6 rounded-panel border border-[rgb(var(--accent-rgb)/0.18)] bg-[rgb(var(--accent-rgb)/0.06)] p-6 shadow-card backdrop-blur-sm">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">{label}</p>
      <p className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-ink">{value}</p>
      {note && <p className="mt-2 text-sm leading-7 text-ink-muted">{note}</p>}
    </div>
  );
}

export function TechStackBlock({ items = [] }) {
  return (
    <div className="my-6 flex flex-wrap gap-2">
      {items.map((item) => <TechChip key={item}>{item}</TechChip>)}
    </div>
  );
}

export function ArchitectureBlock({ steps = [] }) {
  return <VisualFlow steps={steps} />;
}

export function CaseStudyHero({ label, title, description, meta, links = [] }) {
  return (
    <div className="glass-panel mb-12 rounded-hero p-8">
      <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-accent">{label}</p>
      {meta && <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">{meta}</p>}
      <h1>{title}</h1>
      <p className="max-w-3xl">{description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => <Button key={link.href} href={link.href} external={link.external} variant="onDarkAccent">{link.label}</Button>)}
      </div>
    </div>
  );
}

export const mdxComponents = {
  a: (props) => {
    const isInternal = props.href?.startsWith('/');
    return isInternal ? <Link className="font-semibold text-accent underline decoration-[rgb(var(--accent-rgb)/0.3)] underline-offset-4" to={props.href}>{props.children}</Link> : <a className="font-semibold text-accent underline decoration-[rgb(var(--accent-rgb)/0.3)] underline-offset-4" target="_blank" rel="noreferrer" {...props} />;
  },
  MetricCard,
  TechStackBlock,
  ArchitectureBlock,
  CaseStudyHero,
  ProductPreview,
  ProductWalkthrough,
  ScreenshotGallery,
  StatusBadges,
  VisualFlow
};
