import { Mail, MapPin, FileText, Compass } from 'lucide-react';
import { BrandGithub, BrandLinkedin } from '../components/ui/BrandIcons.jsx';
import { Button } from '../components/ui/Button.jsx';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { siteMeta } from '../data/siteMeta.js';

export function Contact() {
  const items = [
    { label: 'Email', value: siteMeta.email, href: `mailto:${siteMeta.email}`, icon: Mail, ariaLabel: `Email ${siteMeta.name}` },
    { label: 'LinkedIn', value: siteMeta.linkedin.replace('https://www.', '').replace(/\/$/, ''), href: siteMeta.linkedin, icon: BrandLinkedin, ariaLabel: 'Open Chintan Patel LinkedIn profile' },
    { label: 'GitHub', value: 'github.com/chintan-02', href: siteMeta.github, icon: BrandGithub, ariaLabel: 'Open Chintan Patel GitHub profile' }
  ];

  const context = [
    { icon: MapPin, label: 'Based in', value: siteMeta.location },
    { icon: Compass, label: 'Focus', value: 'ML products · RAG · Full-stack AI systems' }
  ];

  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeader
          as="h1"
          eyebrow="Contact"
          title="Let’s build useful AI products."
          description={siteMeta.availability}
          align="center"
        />

        <Reveal>
          <div className="mb-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {context.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-3 bg-surface p-5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">{c.label}</p>
                    <p className="mt-1.5 text-sm font-semibold leading-6 text-ink">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="card card-hover h-full p-5 transition-colors duration-200 group-hover:border-[rgb(var(--accent-rgb)/0.38)] group-hover:bg-[rgb(var(--surface2-rgb)/0.72)] group-focus-visible:border-accent">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent transition-colors duration-200 group-hover:border-[rgb(var(--accent-rgb)/0.36)] group-hover:bg-[rgb(var(--accent-rgb)/0.13)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">{item.label}</p>
                <p className="mt-2 break-words text-[1rem] font-bold text-ink">{item.value}</p>
              </div>
            );
            return item.href ? (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={item.ariaLabel}
                className="group block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
              >
                {content}
              </a>
            ) : <div key={item.label}>{content}</div>;
          })}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={siteMeta.resume} download variant="onDarkAccent"><FileText className="h-4 w-4" />Download Resume</Button>
          <Button href="/projects" variant="onDark">View Projects</Button>
        </div>
      </div>
    </section>
  );
}
