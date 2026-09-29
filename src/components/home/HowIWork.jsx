import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const principles = [
  {
    title: 'Evidence before confidence',
    text: 'I prefer measurable evaluation, traceable evidence, and explicit uncertainty over impressive-looking output without support.'
  },
  {
    title: 'Ship the whole system',
    text: 'A model matters when the API, interface, persistence, deployment, and operating workflow also work together.'
  },
  {
    title: 'Keep people in consequential decisions',
    text: 'For safety-sensitive or high-impact workflows, automation should support authorized human judgment rather than silently replace it.'
  }
];

export function HowIWork() {
  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8" id="how-i-work">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="How I Work"
          title="I care about what happens after the model works."
          description="My path from web development into applied AI made me especially interested in the engineering around a model: evaluation, APIs, product decisions, deployment, review, and reliability."
        />

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-panel border border-line bg-surface">
              <img
                src="/profile.JPG"
                alt="Chintan Patel"
                width="560"
                height="680"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[56%_18%]"
              />
            </div>
          </Reveal>

          <div className="grid gap-0">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <article className="border-t border-line py-6 first:border-t-0 first:pt-0">
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                        {principle.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-muted">
                        {principle.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
