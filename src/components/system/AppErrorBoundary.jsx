import { Component } from 'react';

export class AppErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Unexpected application render error', error, errorInfo);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="grid min-h-screen place-items-center px-6 py-20 text-center">
        <section
          className="card w-full max-w-xl p-8 sm:p-10"
          role="alert"
          aria-labelledby="application-error-title"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Unexpected error
          </p>
          <h1
            id="application-error-title"
            className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl"
          >
            This page encountered an unexpected rendering problem.
          </h1>
          <p className="mt-4 text-base leading-8 text-ink-muted">
            Reload the page to try again, or return to the portfolio homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-card border border-accent bg-accent px-5 py-3 text-sm font-bold text-[#0A0A0F] shadow-[0_10px_30px_rgb(var(--accent-rgb)/0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            >
              Reload page
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-card border border-[rgb(var(--ink-rgb)/0.35)] bg-transparent px-5 py-3 text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgb(var(--ink-rgb)/0.6)] hover:bg-[rgb(var(--ink-rgb)/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
            >
              Back to homepage
            </a>
          </div>
        </section>
      </main>
    );
  }
}
