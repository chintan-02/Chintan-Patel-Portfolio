import { ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const milestones = [
  {
    icon: GraduationCap,
    period: '2026',
    title: 'Integrated Artificial Intelligence',
    meta: 'SAIT · Calgary, Alberta',
    text: 'Completed the Post-Diploma Certificate in Integrated Artificial Intelligence, with applied work across ML, NLP, responsible AI, cloud computing, evaluation, APIs, and capstone development.'
  },
  {
    icon: Briefcase,
    period: '2021–2024',
    title: 'Web & Product Engineering',
    meta: 'Divyaraj Design + Dreamview Technology · India',
    text: 'Built client-facing web products and managed delivery from requirements through implementation and release—software-engineering experience that now shapes how I build AI products.'
  },
  {
    icon: GraduationCap,
    period: 'Foundation',
    title: 'Computer Science Engineering',
    meta: 'Gujarat, India',
    text: 'Built the programming, database, software-engineering, and web-development foundation behind my current applied AI work.'
  }
];

export function CareerSnapshot() {
  return (
    <section className="px-6 py-20 sm:px-6 lg:px-8" id="journey">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="Career Snapshot"
          title="Software engineering foundation, now focused on applied AI."
          description="The homepage keeps the story short; the full timeline and education details remain on the About page and résumé."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.07} className="h-full">
                <article className="h-full border-t border-line pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-ink-faint">{item.period}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.025em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-accent">{item.meta}</p>
                  <p className="mt-4 text-sm leading-7 text-ink-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-accent"
          >
            See full background <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
