import { BarChart3, ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import { siteMeta } from '../data/siteMeta.js';

const analyticsDetails = [
  'Pageviews and approximate visitor counts',
  'Frequently visited pages and general traffic sources',
  'Approximate geographic regions',
  'Requests for missing resources'
];

export function Privacy() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Privacy
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-ink">
            A public portfolio with private, aggregate analytics.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            This is Chintan Patel&apos;s public professional website. It does not require a login or
            user account, does not contain advertising, and does not sell visitor data.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <section className="card p-6 sm:p-7">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">Netlify Web Analytics</h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              The site uses Netlify Web Analytics for anonymous, aggregate site metrics. It is
              based on Netlify&apos;s CDN request logs and does not require an analytics cookie or a
              client-side analytics script.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-muted">
              {analyticsDetails.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Analytics numbers are visible privately to the site owner and are not displayed
              publicly.
            </p>
          </section>

          <section className="card p-6 sm:p-7">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
              <ExternalLink className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">External services</h2>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              Links to GitHub, LinkedIn, Azure, and other project services are governed by those
              services&apos; own privacy practices. Following an external link leaves this portfolio.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              The downloadable resume is a static public document. Email links open the
              visitor&apos;s email client; messages visitors choose to send are handled through email.
            </p>
          </section>
        </div>

        <section className="mt-5 rounded-panel border border-[rgb(var(--accent-rgb)/0.24)] bg-[rgb(var(--accent-rgb)/0.06)] p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[rgb(var(--accent-rgb)/0.28)] bg-[rgb(var(--accent-rgb)/0.1)] text-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Privacy questions</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-muted">
                For a privacy-related question about this portfolio, contact Chintan Patel at the
                verified portfolio email address.
              </p>
              <a
                href={`mailto:${siteMeta.email}`}
                className="mt-4 inline-flex items-center gap-2 rounded-card border border-accent bg-accent px-4 py-2.5 text-sm font-bold text-[#0A0A0F] transition-all hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
              >
                <Mail className="h-4 w-4" />
                {siteMeta.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
