import { Button } from '../components/ui/Button.jsx';

export function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-[-0.06em] text-ink">Page not found.</h1>
        <p className="mt-4 text-lg leading-8 text-ink-muted">The page may have moved or the route does not exist.</p>
        <div className="mt-8">
          <Button href="/" variant="onDarkAccent">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
