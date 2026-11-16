import { Link } from 'react-router-dom';
import { Button } from '../ui/Button.jsx';
import { TechChip } from '../ui/TechChip.jsx';
import {
  ExpandableImage,
  ProductPreview,
  ProductWalkthrough,
  ScreenshotGallery,
  StatusBadges,
  VisualFlow
} from '../ui/VisualProof.jsx';

export {
  ExpandableImage,
  ProductPreview,
  ProductWalkthrough,
  ScreenshotGallery,
  StatusBadges,
  VisualFlow
};

export function MetricCard({ label, value, note }) {
  return (
    <div className="my-7 rounded-panel border border-[rgb(var(--accent-rgb)/0.18)] bg-[rgb(var(--accent-rgb)/0.06)] p-5 shadow-card backdrop-blur-sm sm:p-6">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-ink sm:text-3xl">{value}</p>
      {note && <p className="mt-3 text-sm leading-7 text-ink-muted">{note}</p>}
    </div>
  );
}

export function TechStackBlock({ items = [] }) {
  return (
    <div className="my-7 flex flex-wrap gap-2">
      {items.map((item) => <TechChip key={item}>{item}</TechChip>)}
    </div>
  );
}

export function ArchitectureBlock({ steps = [] }) {
  return <VisualFlow steps={steps} />;
}

export function EvaluationScorecard({ items = [], note }) {
  return (
    <section className="my-8 overflow-hidden rounded-panel border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--surface-rgb)/0.82)] shadow-card" aria-label="Evaluation scorecard">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`p-5 sm:p-6 ${index > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''} ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">{item.label}</p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">{item.value}</p>
            {item.detail && <p className="mt-2 text-xs leading-5 text-ink-muted">{item.detail}</p>}
          </div>
        ))}
      </div>
      {note && <p className="border-t border-line bg-[rgb(var(--accent-rgb)/0.05)] px-5 py-4 text-sm leading-6 text-ink-muted sm:px-6">{note}</p>}
    </section>
  );
}

export function ClaimBoundary({ verified = [], notClaimed = [] }) {
  return (
    <section className="my-8 grid overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.82)] shadow-card md:grid-cols-2" aria-label="Evaluation claim boundary">
      <div className="p-5 sm:p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">Verified by this evaluation</p>
        <ul className="mt-4 space-y-3">
          {verified.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-ink-muted"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>)}
        </ul>
      </div>
      <div className="border-t border-line bg-[rgb(var(--surface2-rgb)/0.56)] p-5 sm:p-6 md:border-l md:border-t-0">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">Not authorized or claimed</p>
        <ul className="mt-4 space-y-3">
          {notClaimed.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-ink-muted"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full border border-ink-faint" />{item}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function ResponsiveTable({ children, ...props }) {
  return (
    <div
      className="mdx-table-shell"
      role="region"
      aria-label="Scrollable data table"
      tabIndex={0}
    >
      <table {...props}>{children}</table>
    </div>
  );
}

export function CaseStudyHero({
  label,
  title,
  description,
  meta,
  badges = [],
  links = [],
  image,
  imageAlt,
  imageCaption
}) {
  return (
    <div className="glass-panel mb-12 rounded-hero p-6 sm:p-8 lg:p-10">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm">
        {label}
      </p>
      {meta && (
        <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint sm:text-xs sm:tracking-[0.18em]">
          {meta}
        </p>
      )}
      {badges.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Project release and status">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-accent sm:text-[11px]"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.25rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
        {description}
      </p>
      {links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              external={link.external}
              variant="onDarkAccent"
            >
              {link.label}
            </Button>
          ))}
        </div>
      )}
      {image && (
        <figure className="mt-8 overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.86)] shadow-card">
          <ExpandableImage
            src={image}
            alt={imageAlt}
            label={imageCaption ?? `${title} product screenshot`}
            loading="eager"
            fetchPriority="high"
            imageClassName="h-auto max-h-[680px] w-full bg-[rgb(var(--surface2-rgb)/0.8)] object-contain object-top"
          />
          {imageCaption && (
            <figcaption className="border-t border-line px-4 py-3.5 text-left text-sm font-medium leading-6 text-ink-muted">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}
    </div>
  );
}

export const mdxComponents = {
  a: (props) => {
    const isInternal = props.href?.startsWith('/');
    return isInternal ? (
      <Link
        className="font-semibold text-accent underline decoration-[rgb(var(--accent-rgb)/0.3)] underline-offset-4"
        to={props.href}
      >
        {props.children}
      </Link>
    ) : (
      <a
        className="font-semibold text-accent underline decoration-[rgb(var(--accent-rgb)/0.3)] underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  table: ResponsiveTable,
  MetricCard,
  EvaluationScorecard,
  ClaimBoundary,
  TechStackBlock,
  ArchitectureBlock,
  CaseStudyHero,
  ProductPreview,
  ProductWalkthrough,
  ScreenshotGallery,
  StatusBadges,
  VisualFlow
};
