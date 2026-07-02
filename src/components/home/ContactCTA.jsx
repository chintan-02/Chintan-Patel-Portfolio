import { Mail } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { BrandLinkedin } from '../ui/BrandIcons.jsx';
import { siteMeta } from '../../data/siteMeta.js';

export function ContactCTA() {
  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto max-w-[1100px] overflow-hidden rounded-hero p-8 text-ink sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-accent">Contact</p>
            <h2 className="mt-4 max-w-3xl font-sans text-4xl font-bold tracking-[-0.055em] sm:text-5xl">Let’s build practical AI systems.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">{siteMeta.availability}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={`mailto:${siteMeta.email}`} variant="onDarkAccent"><Mail className="h-4 w-4" />Email Me</Button>
            <Button href={siteMeta.linkedin} external icon={false} variant="onDark"><BrandLinkedin className="h-4 w-4" />LinkedIn</Button>
            <Button href="/contact" variant="onDark">Contact Page</Button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
          <Button href="/case-studies/triageai" variant="onDark" className="px-4 py-2.5" icon={false}>TriageAI</Button>
          <Button href="/projects" variant="onDark" className="px-4 py-2.5" icon={false}>Projects</Button>
          <Button href={siteMeta.resume} download variant="onDark" className="px-4 py-2.5" icon={false}>Resume</Button>
        </div>
      </div>
    </section>
  );
}
