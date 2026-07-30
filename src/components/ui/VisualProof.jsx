import { useEffect, useRef, useState } from 'react';
import { ArrowDown, FileSearch, Image, Layers3, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const previewConfig = {
  triageai: {
    eyebrow: 'Review-first clinical AI workflow',
    title: 'Clinical note → reviewed intake → ESI care routing',
    leftTitle: 'Evidence-linked intake',
    leftRows: ['Clinical note or structured data', 'Extracted fields + evidence', 'Missing information'],
    mainTitle: 'Reviewed decision support',
    mainValue: 'ESI 3 / 4 / 5',
    mainMeta: 'Clinician confirmation + safety-rule escalation',
    rightTitle: 'Traceability',
    rightRows: ['Clinician decision', 'Audit evidence', 'Backend PDF summary']
  },
  resumeiq: {
    eyebrow: 'Privacy-aware resume intelligence',
    title: 'Multi-format resume → transparent signals → human review',
    leftTitle: 'Parsing and context',
    leftRows: ['PDF / DOCX / TXT', 'Target role', 'Job description'],
    mainTitle: 'Multi-signal analysis',
    mainValue: 'Skills, match, quality',
    mainMeta: 'Classification + keyword + semantic + structure signals',
    rightTitle: 'Human workflow',
    rightRows: ['Improvement guidance', 'Candidate comparison', 'Reviewer responsibility']
  },
  policygpt: {
    eyebrow: 'v0.3.0 evidence intelligence',
    title: 'Documents → Ask → Evaluation → System',
    leftTitle: 'Durable ingestion',
    leftRows: ['SHA-256 identity', 'PostgreSQL lifecycle', 'Chroma evidence'],
    mainTitle: 'Evidence-gated answer',
    mainValue: 'Generate, cite, or refuse',
    mainMeta: 'Calibrated answerability + provider-resilient fallback',
    rightTitle: 'Evaluation and operations',
    rightRows: ['16-case benchmark', 'Readiness contracts', 'Structured logs']
  }
};

export function ProductPreview({ project, slug, title, className = '' }) {
  const key = slug ?? project?.slug;
  const config = previewConfig[key] ?? previewConfig.policygpt;
  const displayTitle = title ?? config.title;

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
          {key === 'triageai' ? (
            <div className="mt-5 overflow-hidden rounded-card border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.06)] p-2 sm:p-3">
              <Link
                to="/case-studies/triageai"
                aria-label="Open the TriageAI case study"
                className="block overflow-hidden rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.62)]"
              >
                <img
                  src="/images/case-studies/triageai/01-command-center.png"
                  alt="TriageAI Command Center showing clinical intake workflow and assessment overview"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain"
                />
              </Link>
            </div>
          ) : key === 'policygpt' ? (
            <div className="mt-5 overflow-hidden rounded-card border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.06)] p-2 sm:p-3">
              <Link
                to="/case-studies/policygpt-enterprise"
                aria-label="Open the PolicyGPT Enterprise case study"
                className="block max-h-[430px] overflow-hidden rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.62)]"
              >
                <img
                  src="/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png"
                  alt="PolicyGPT Enterprise citation-backed remote-work policy answer with confidence and page-level evidence"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain object-top"
                />
              </Link>
            </div>
          ) : (
            <div className="mt-5 rounded-card border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.06)] p-5">
              <div className="rounded-inset border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-inset border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                    <Image className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">Updated screenshots coming next</p>
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
          )}
        </div>
      </div>
    </div>
  );
}

export function ScreenshotSlot({ label, detail = 'Updated screenshots coming next' }) {
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

export function ScreenshotGallery({
  title = 'Product Proof',
  note,
  items = [],
  columns,
  showBadge
}) {
  if (!items.length) return null;
  const hasOnlyImages = items.every((item) => item.image);
  const shouldShowBadge = showBadge ?? !hasOnlyImages;
  const columnCount = columns ?? Math.min(items.length, 3);
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  }[columnCount] ?? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  const gapClass = columnCount === 1 && items.length > 1 ? 'gap-6' : 'gap-4';

  return (
    <div className="my-8 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.78)] p-5 shadow-card backdrop-blur-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</p>
          {note && <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-muted">{note}</p>}
        </div>
        {shouldShowBadge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
            <Layers3 className="h-3.5 w-3.5" />
            {hasOnlyImages ? 'Repository capture' : 'Replaceable assets'}
          </span>
        )}
      </div>
      <div className={`grid ${gapClass} ${gridClass}`}>
        {items.map((item) => (
          item.image
            ? <ScreenshotFigure key={item.label} image={item.image} title={item.label} alt={item.alt} emphasis={item.emphasis} />
            : <ScreenshotSlot key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export function ProductWalkthrough({ title = 'Product Walkthrough', steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="my-10 min-w-0 rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.82)] p-5 shadow-card">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</p>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step.title}>
            <div className={`grid min-w-0 gap-4 rounded-card border bg-[rgb(var(--surface2-rgb)/0.58)] p-4 lg:grid-cols-[220px_minmax(0,1fr)] ${step.emphasis ? 'border-[rgb(var(--accent-rgb)/0.36)]' : 'border-line'}`}>
              <div className="min-w-0">
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

export function ExpandableImage({
  src,
  alt,
  label,
  loading = 'lazy',
  fetchPriority,
  imageClassName = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'Tab') {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus();
    const trigger = triggerRef.current;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={`Expand ${label}`}
        className="group/image relative block w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          className={imageClassName}
        />
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          Expand
        </span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${label} expanded image`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-auto bg-black/90 p-4 backdrop-blur-md sm:p-8"
        >
          <div className="relative w-full max-w-[min(96vw,1600px)]">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/75 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Close
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[calc(100vh-7rem)] w-full rounded-panel bg-white object-contain shadow-2xl"
            />
            <p className="mx-auto mt-3 max-w-4xl text-center text-sm leading-6 text-white/80">
              {label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function ScreenshotFigure({ image, title, alt, emphasis = false }) {
  return (
    <figure className={`min-w-0 overflow-hidden rounded-panel border bg-[rgb(var(--surface-rgb)/0.88)] shadow-card ${emphasis ? 'border-[rgb(var(--accent-rgb)/0.36)]' : 'border-line'}`}>
      <ExpandableImage
        src={image}
        alt={alt ?? `${title} screenshot`}
        label={title}
        imageClassName="h-auto w-full bg-[rgb(var(--surface2-rgb)/0.8)] object-contain transition-transform duration-500 group-hover/image:scale-[1.01]"
      />
      <figcaption className="border-t border-line px-4 py-3.5 text-sm font-medium leading-6 text-ink-muted">
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
    ['Release', 'v0.3.0 local profile'],
    ['Provider', 'Optional generation'],
    ['Embeddings', 'SentenceTransformers'],
    ['Decision', 'Evidence gate']
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
          ['POST', '/api/v1/documents/upload', 'Validate, identify, persist, and index one PDF'],
          ['POST', '/api/v1/documents/ask', 'Run retrieval, answerability, generation, or safe fallback'],
          ['GET', '/api/v1/ready', 'Check PostgreSQL and Chroma readiness']
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

const flowLabelOverrides = new Map([
  [
    'Question embedded (SentenceTransformers, all-MiniLM-L6-v2)',
    { title: 'Embed question', description: 'SentenceTransformers, all-MiniLM-L6-v2' }
  ],
  [
    'Candidate chunks retrieved from ChromaDB',
    { title: 'Retrieve chunks', description: 'ChromaDB candidate evidence' }
  ],
  [
    'Evidence-gate scoring against a confidence threshold',
    { title: 'Score evidence', description: 'Confidence threshold check' }
  ],
  [
    'Below threshold → fallback response, no LLM call relied on',
    { title: 'Fallback if below threshold', description: 'Skip or override unsupported generation' }
  ],
  [
    'Above threshold → LLM answer generation, gated and citation-bound',
    { title: 'Generate cited answer', description: 'LLM output stays evidence-bound' }
  ],
  [
    'Answer returned only with page-level citations attached',
    { title: 'Return citations', description: 'Page-level sources attached' }
  ]
]);

function getFlowStep(step) {
  if (typeof step === 'object' && step !== null) {
    return {
      title: step.title ?? step.label ?? '',
      description: step.description ?? step.detail ?? ''
    };
  }

  const text = String(step);
  return flowLabelOverrides.get(text) ?? { title: text, description: '' };
}

export function VisualFlow({ title = 'Architecture Flow', steps = [] }) {
  if (!steps.length) return null;
  const gridClass = steps.length <= 6
    ? 'sm:grid-cols-2 lg:grid-cols-3'
    : 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="my-10 overflow-hidden rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.86)] p-4 shadow-card backdrop-blur-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-inset border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
            <FileSearch className="h-4 w-4" />
          </span>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {title}
          </p>
        </div>
        <span className="rounded-full border border-line bg-[rgb(var(--surface2-rgb)/0.58)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
          {steps.length} stages
        </span>
      </div>

      <ol className={`mt-5 grid gap-3 ${gridClass}`}>
        {steps.map((step, index) => {
          const display = getFlowStep(step);

          return (
            <li
              key={`${display.title}-${index}`}
              className="group relative min-h-[148px] overflow-hidden rounded-card border border-line bg-[rgb(var(--surface2-rgb)/0.62)] p-4 transition-colors hover:border-[rgb(var(--accent-rgb)/0.3)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/0.38)] to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[rgb(var(--accent-rgb)/0.22)] bg-[rgb(var(--accent-rgb)/0.08)] font-mono text-[11px] font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  Stage
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold leading-6 text-ink [overflow-wrap:anywhere]">
                {display.title}
              </h3>
              {display.description && (
                <p className="mt-2 text-sm font-medium leading-6 text-ink-muted [overflow-wrap:anywhere]">
                  {display.description}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </section>
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
