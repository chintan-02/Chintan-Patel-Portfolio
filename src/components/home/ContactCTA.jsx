import { Mail } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { BrandLinkedin } from '../ui/BrandIcons.jsx';
import { siteMeta } from '../../data/siteMeta.js';

export function ContactCTA() {
  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px] border-t border-line pt-14 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="eyebrow text-accent">Contact</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.045em] text-ink sm:text-5xl">
              Let&apos;s build useful AI systems.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">
              {siteMeta.availability} Based in {siteMeta.location}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={`mailto:${siteMeta.email}`} variant="onDarkAccent">
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
            <Button href={siteMeta.linkedin} external icon={false} variant="onDark">
              <BrandLinkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button href={siteMeta.resume} download variant="onDark" icon={false}>
              Résumé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
