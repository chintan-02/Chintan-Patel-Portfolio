import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, GitPullRequest, ShieldCheck } from 'lucide-react';
import { engineeringExample as example, engineeringPractices, engineeringBoundaries } from '../data/engineering.js';

function EvidenceLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="engineering-link">{children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export function Engineering() {
  const stages = [
    ['The problem', example.problem],
    ['What AI contributed', example.contribution],
    ['My engineering decision', example.decision],
    ['What the record verifies', example.verification]
  ];
  return (
    <div className="engineering-page">
      <header className="engineering-hero px-6 pb-14 pt-14 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="engineering-eyebrow">Working approach / Applied AI engineering</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div><h1 className="max-w-3xl font-display-serif text-[clamp(2.8rem,6vw,5rem)] font-normal leading-[1.06] tracking-[-0.035em] text-ink">Built with AI.<br /><span className="italic text-accent">Backed by judgment.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">How I turn AI assistance into reviewed, verifiable software—from architecture and implementation to security and delivery.</p></div>
            <div className="engineering-ownership border-l-2 border-accent pl-5"><p className="text-sm font-semibold text-ink">The tool helps. The responsibility stays.</p><p className="mt-3 text-sm leading-7 text-ink-muted">I use ChatGPT and Codex for investigation, implementation support and review. This page shows a documented example of automated review and the decisions that followed.</p></div>
          </div>
          <nav aria-label="On this page" className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-5"><a className="engineering-link" href="#staging-lifecycle">The walkthrough <ArrowDown size={15} aria-hidden="true" /></a><a className="engineering-link" href="#review-decisions">Review decisions</a><a className="engineering-link" href="#boundaries">Working boundaries</a></nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-6 lg:px-0">
        <section aria-label="Working principles" className="engineering-practices grid gap-6 border-y border-line py-7 md:grid-cols-3">
          {engineeringPractices.map((p, i) => <div key={p.title} className="flex gap-4"><span className="shrink-0 whitespace-nowrap font-mono text-xs text-accent pt-1">0{i + 1}</span><div><h2 className="text-sm font-semibold text-ink">{p.title}</h2><p className="mt-2 text-sm leading-6 text-ink-muted">{p.text}</p></div></div>)}
        </section>

        <article id={example.id} className="engineering-anchor py-16 sm:py-20" aria-labelledby="walkthrough-title">
          <div className="flex flex-wrap items-center justify-between gap-3"><p className="engineering-eyebrow">01 / Featured walkthrough</p><span className="text-xs text-ink-muted">{example.project} · {example.date}</span></div>
          <h2 id="walkthrough-title" className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">{example.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink-muted">{example.summary}</p>

          <div className="engineering-lifecycle my-9 rounded-panel border border-line p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-ink"><GitPullRequest size={18} className="text-accent" aria-hidden="true" />The final lifecycle</div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Run functional staging', 'Validate the system', 'Preserve evidence', 'Request teardown'].map((step, i) => <li key={step} className="flex items-center gap-3 rounded-xl border border-line bg-[rgb(var(--base-rgb)/0.55)] p-4"><span className="font-mono text-xs text-accent">0{i+1}</span><span className="text-sm font-semibold leading-6 text-ink">{step}</span></li>)}</ol>
            <p className="mt-5 text-xs leading-6 text-ink-muted">Deletion is asynchronous. Requesting teardown does not prove every resource has been removed.</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>{stages.map(([title, text], i) => <section key={title} className="grid gap-3 border-t border-line py-6 sm:grid-cols-[165px_1fr]"><h3 className="text-sm font-semibold text-ink"><span className="mr-2 font-mono text-xs text-accent">0{i+1}</span>{title}</h3><p className="text-sm leading-7 text-ink-muted">{text}</p></section>)}</div>
            <aside className="self-start rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.72)] p-6"><p className="engineering-eyebrow">Inspect the evidence</p><div className="mt-5 space-y-4"><EvidenceLink href={example.url}>Merged pull request #26</EvidenceLink><EvidenceLink href={`${example.url}/files`}>Implementation diff</EvidenceLink><Link className="engineering-link" to={example.caseStudy}>Full system case study <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="mt-6 border-t border-line pt-5"><p className="flex items-center gap-2 text-sm font-semibold text-ink"><Check size={16} className="text-accent" aria-hidden="true" />Public review record</p><p className="mt-3 text-xs leading-6 text-ink-muted">The findings are attributed to Codex. The responses and merged changes document how they were addressed.</p></div></aside>
          </div>
          <div className="mt-6 border-l-2 border-accent bg-[rgb(var(--accent-rgb)/0.045)] px-5 py-4"><h3 className="text-sm font-semibold text-ink">What this does—and does not—prove</h3><p className="mt-2 text-sm leading-7 text-ink-muted">{example.limitation}</p></div>
        </article>

        <section id="review-decisions" className="engineering-anchor border-t border-line py-16" aria-labelledby="decisions-title"><p className="engineering-eyebrow">02 / Review decisions</p><h2 id="decisions-title" className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">The important part is the response.</h2><p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">Three findings from the same change, resolved through two engineering decisions. Each links the review feedback to a concrete correction.</p><div className="mt-8 grid gap-5 md:grid-cols-2">{example.decisions.map((d, i) => <article key={d.id} className="rounded-panel border border-line bg-[rgb(var(--surface-rgb)/0.65)] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="engineering-eyebrow">{d.category}</span><span className="font-mono text-xs text-ink-faint">0{i+1}</span></div><h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">{d.title}</h3><dl className="mt-6 space-y-5">{[['Initial approach',d.before],['What review exposed',d.finding],['Decision',d.after]].map(([label,value]) => <div key={label}><dt className="text-xs font-semibold text-accent">{label}</dt><dd className="mt-2 text-sm leading-7 text-ink-muted">{value}</dd></div>)}</dl><details className="engineering-details mt-6 border-t border-line pt-4"><summary className="text-sm font-semibold text-ink">Inspect review and response</summary><div className="mt-4 flex flex-col items-start gap-4"><EvidenceLink href={d.findingUrl}>Automated finding</EvidenceLink><EvidenceLink href={d.evidence}>Recorded correction</EvidenceLink></div></details></article>)}</div></section>

        <section id="boundaries" className="engineering-anchor border-t border-line py-16" aria-labelledby="boundaries-title"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><ShieldCheck size={25} className="text-accent" aria-hidden="true" /><p className="engineering-eyebrow mt-5">03 / Working boundaries</p><h2 id="boundaries-title" className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">Assistance is useful.<br />Accountability is essential.</h2></div><dl>{engineeringBoundaries.map(([title,text]) => <div key={title} className="border-b border-line py-5 first:pt-0"><dt className="text-sm font-semibold text-ink">{title}</dt><dd className="mt-2 text-sm leading-7 text-ink-muted">{text}</dd></div>)}</dl></div></section>
        <footer className="mb-16 flex flex-col justify-between gap-5 rounded-panel border border-line p-6 sm:flex-row sm:items-center sm:p-8"><div><h2 className="text-xl font-semibold text-ink">See the systems behind the decisions.</h2><p className="mt-2 text-sm leading-7 text-ink-muted">Architecture, evaluation and delivery evidence across my personal projects.</p></div><Link className="engineering-link shrink-0" to="/projects">Explore projects <ArrowRight size={17} aria-hidden="true" /></Link></footer>
      </div>
    </div>
  );
}
