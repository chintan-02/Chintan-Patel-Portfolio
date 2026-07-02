import { ArrowDown, ArrowRight, FileSearch, Image, Layers3 } from 'lucide-react';

const previewConfig = {
  triageai: {
    eyebrow: 'Clinical decision-support workflow',
    title: 'Patient intake → ESI care routing',
    leftTitle: 'Structured intake',
    leftRows: ['Chief complaint', 'Vitals + pain score', 'Arrival mode'],
    mainTitle: 'Prediction result',
    mainValue: 'ESI 3 / 4 / 5',
    mainMeta: 'Safety-rule escalation + clinician review',
    rightTitle: 'Audit + PDF summary',
    rightRows: ['Review status', 'Override reason', 'Decision-support report']
  },
  resumeiq: {
    eyebrow: 'Resume intelligence workflow',
    title: 'Upload → ATS analysis → feedback',
    leftTitle: 'Resume upload',
    leftRows: ['PDF / text input', 'Role target', 'Job description'],
    mainTitle: 'ATS + classification',
    mainValue: 'Skills, match, category',
    mainMeta: 'Separate transparent signals',
    rightTitle: 'Feedback view',
    rightRows: ['Missing terms', 'Sentence quality', 'Improvement suggestions']
  },
  policygpt: {
    eyebrow: 'Evidence-first RAG workflow',
    title: 'Upload → citations → safe fallback',
    leftTitle: 'Document upload',
    leftRows: ['Policy PDF', 'Parse + chunk', 'Embeddings'],
    mainTitle: 'Citation-backed answer',
    mainValue: 'Evidence gate passed',
    mainMeta: 'Confidence + page citations',
    rightTitle: 'Evidence explorer',
    rightRows: ['Retrieved evidence', 'Confidence score', 'Fallback when unsupported']
  }
};

export function ProductPreview({ project, slug, title, className = '' }) {
  const key = slug ?? project?.slug;
  const config = previewConfig[key] ?? previewConfig.policygpt;
  const displayTitle = title ?? config.title;

  if (key === 'policygpt') {
    return (
      <div className={`group overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.88)] shadow-card ${className}`}>
        <div className="flex items-center gap-2 border-b border-line bg-[rgb(var(--surface2-rgb)/0.58)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-rgb)/0.8)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--ink-rgb)/0.22)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--violet-rgb)/0.55)]" />
          <span className="ml-auto rounded-full border border-line bg-[rgb(var(--surface-rgb)/0.7)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Product preview
          </span>
        </div>
        <a
          href="/projects/policygpt/02-citation-backed-answer.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open PolicyGPT citation-backed answer screenshot"
          className="block overflow-hidden"
        >
          <img
            src="/projects/policygpt/02-citation-backed-answer.png"
            alt="PolicyGPT citation-backed answer screen showing grounded response, confidence, and citations."
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full bg-[rgb(var(--surface2-rgb)/0.8)] object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </a>
      </div>
    );
  }

  return (
    <div className={`group overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.88)] shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-[rgb(var(--surface2-rgb)/0.58)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-rgb)/0.8)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--ink-rgb)/0.22)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--violet-rgb)/0.55)]" />
        <span className="ml-auto rounded-full border border-line bg-[rgb(var(--surface-rgb)/0.7)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Product preview
        </span>
      </div>
      <div className="relative min-h-[260px] p-4 sm:p-6">
        <div className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-[1.015]">
          <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-[rgb(var(--accent-rgb)/0.08)] blur-3xl" />
          <div className="absolute bottom-8 right-10 h-28 w-44 rounded-full bg-[rgb(var(--violet-rgb)/0.08)] blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{config.eyebrow}</p>
          <h4 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{displayTitle}</h4>
          <div className="mt-5 rounded-card border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.06)] p-5">
            <div className="rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-inset border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                  <Image className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">Visual walkthrough in progress</p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">{config.mainMeta}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {[config.leftTitle, config.mainTitle, config.rightTitle].map((label) => (
                  <div key={label} className="rounded-inset border border-line bg-[rgb(var(--surface-rgb)/0.5)] px-3 py-2">
                    <p className="text-xs font-semibold leading-5 text-ink-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewPanel({ title, rows = [] }) {
  return (
    <div className="rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">{title}</p>
      <div className="mt-4 space-y-3">
        {rows.map((row, index) => (
          <div key={row} className="flex items-center gap-3 rounded-inset border border-line bg-[rgb(var(--surface-rgb)/0.56)] px-3 py-2.5">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgb(var(--accent-rgb)/0.1)] font-mono text-[10px] font-bold text-accent">
              {index + 1}
            </span>
            <span className="text-sm font-semibold text-ink-muted">{row}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScreenshotSlot({ label, detail = 'Visual walkthrough in progress' }) {
  return (
    <div className="group relative min-h-[150px] overflow-hidden rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.64)] p-4">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-4 right-4 top-4 h-7 rounded-inset border border-[rgb(var(--accent-rgb)/0.16)] bg-[rgb(var(--accent-rgb)/0.08)]" />
        <div className="absolute bottom-4 left-4 right-4 top-14 rounded-inset border border-line bg-[linear-gradient(135deg,rgb(var(--accent-rgb)/0.10),rgb(var(--violet-rgb)/0.08))]" />
        <div className="absolute bottom-8 left-8 h-2 w-2/3 rounded-full bg-[rgb(var(--ink-rgb)/0.13)]" />
        <div className="absolute bottom-13 left-8 h-2 w-1/2 rounded-full bg-[rgb(var(--ink-rgb)/0.10)]" />
      </div>
      <div className="relative z-10 flex h-full min-h-[118px] flex-col justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-inset border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--surface-rgb)/0.76)] text-accent shadow-card">
          <Image className="h-4 w-4" />
        </span>
        <div>
          <p className="font-display text-base font-semibold leading-snug text-ink">{label}</p>
          <p className="mt-1 text-xs font-medium leading-5 text-ink-faint">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export function ScreenshotGallery({ title = 'Product Proof', note, items = [] }) {
  if (!items.length) return null;

  return (
    <div className="my-8 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.78)] p-5 shadow-card backdrop-blur-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</p>
          {note && <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-muted">{note}</p>}
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
          <Layers3 className="h-3.5 w-3.5" />
          Replaceable assets
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ScreenshotSlot key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export function ProductWalkthrough({ title = 'Product Walkthrough', steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="my-10 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.82)] p-5 shadow-card">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</p>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step.title}>
            <div className={`grid gap-4 rounded-card border bg-[rgb(var(--surface2-rgb)/0.58)] p-4 lg:grid-cols-[220px_1fr] ${step.emphasis ? 'border-[rgb(var(--accent-rgb)/0.36)]' : 'border-line'}`}>
              <div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-inset border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] font-mono text-xs font-bold text-accent">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-muted">{step.why}</p>
              </div>
              {step.image ? (
                <ScreenshotFigure image={step.image} title={step.title} alt={step.alt} emphasis={step.emphasis} />
              ) : step.visual === 'evidence' ? (
                <EvidenceExplorerPreview />
              ) : step.visual === 'architecture' ? (
                <VisualFlow title="PolicyGPT Architecture" steps={step.steps ?? []} />
              ) : step.visual === 'api' ? (
                <ApiPreview />
              ) : (
                <ProductPreview slug={step.slug ?? 'policygpt'} title={step.previewTitle ?? step.title} className="min-h-full" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center py-2 text-accent" aria-hidden="true">
                <ArrowDown className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenshotFigure({ image, title, alt, emphasis = false }) {
  return (
    <figure className={`overflow-hidden rounded-panel border bg-[rgb(var(--surface-rgb)/0.88)] shadow-card ${emphasis ? 'border-[rgb(var(--accent-rgb)/0.36)]' : 'border-line'}`}>
      <a href={image} target="_blank" rel="noreferrer" aria-label={`Open ${title} screenshot`} className="block overflow-hidden">
        <img
          src={image}
          alt={alt ?? `${title} screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full bg-[rgb(var(--surface2-rgb)/0.8)] object-contain transition-transform duration-500 hover:scale-[1.01]"
        />
      </a>
      <figcaption className="border-t border-line px-4 py-3 text-xs font-medium leading-5 text-ink-faint">
        {title}
      </figcaption>
    </figure>
  );
}

function EvidenceExplorerPreview() {
  const primary = [
    ['Evidence', '3 retrieved passages'],
    ['Confidence', '0.82 retrieval strength'],
    ['Citations', 'Page-level source cards']
  ];
  const secondary = [
    ['Latency', 'Local MVP'],
    ['Provider', 'OpenAI-compatible'],
    ['Model', 'Llama-3.3-70B'],
    ['Threshold', 'Evidence gate']
  ];

  return (
    <div className="rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.88)] p-5 shadow-card">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Evidence Explorer</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {primary.map(([label, value]) => (
          <div key={label} className="rounded-card border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.08)] p-4">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{label}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.58)] p-4">
        <p className="text-sm font-semibold text-ink">Retrieved policy excerpt</p>
        <p className="mt-2 text-sm leading-7 text-ink-muted">
          The answer is grounded only when retrieved passages clear the confidence threshold and include traceable page citations.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {secondary.map(([label, value]) => (
          <span key={label} className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.62)] px-3 py-1 text-xs font-semibold text-ink-faint">
            {label}: <span className="text-ink-muted">{value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ApiPreview() {
  return (
    <div className="rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.88)] p-5 shadow-card">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">FastAPI Docs</p>
      <div className="mt-4 space-y-3">
        {[
          ['POST', '/documents/upload', 'Ingest PDF and create chunks'],
          ['POST', '/query', 'Run retrieval, evidence gate, and response'],
          ['GET', '/health', 'Readiness check for the service']
        ].map(([method, path, detail]) => (
          <div key={path} className="grid gap-2 rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-3 sm:grid-cols-[72px_1fr]">
            <span className="font-mono text-xs font-bold text-accent">{method}</span>
            <div>
              <p className="font-mono text-sm font-semibold text-ink">{path}</p>
              <p className="mt-1 text-xs leading-5 text-ink-muted">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisualFlow({ title = 'Architecture Flow', steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="my-8 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.85)] p-5 shadow-card backdrop-blur-sm">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</p>
      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-stretch">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex min-h-[84px] w-full items-center gap-3 rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-4 lg:w-[170px]">
              <FileSearch className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-semibold leading-6 text-ink">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center text-accent lg:justify-start" aria-hidden="true">
                <ArrowDown className="h-4 w-4 lg:hidden" />
                <ArrowRight className="hidden h-4 w-4 lg:block" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatusBadges({ built = [], planned = [] }) {
  const groups = [
    { label: 'Built', items: built, tone: 'text-accent border-[rgb(var(--accent-rgb)/0.26)] bg-[rgb(var(--accent-rgb)/0.08)]' },
    { label: 'Planned', items: planned, tone: 'text-ink-muted border-line bg-[rgb(var(--surface2-rgb)/0.64)]' }
  ].filter((group) => group.items.length);

  if (!groups.length) return null;

  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.label} className="rounded-card border border-line bg-[rgb(var(--surface-rgb)/0.72)] p-5 shadow-card">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{group.label}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className={`rounded-full border px-3 py-1 text-xs font-semibold ${group.tone}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
