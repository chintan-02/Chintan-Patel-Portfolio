import { Mail, MapPin, FileText, Compass, Clock } from 'lucide-react';
import { BrandGithub, BrandLinkedin } from '../components/ui/BrandIcons.jsx';
import { Button } from '../components/ui/Button.jsx';
import { SectionHeader } from '../components/ui/SectionHeader.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { siteMeta } from '../data/siteMeta.js';

export function Contact() {
  const items = [
    { label: 'Email', value: siteMeta.email, href: `mailto:${siteMeta.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'linkedin.com/in/chintan-patel-987765129', href: siteMeta.linkedin, icon: BrandLinkedin },
    { label: 'GitHub', value: 'github.com/chintan-02', href: siteMeta.github, icon: BrandGithub },
    { label: 'Location', value: siteMeta.location, href: null, icon: MapPin }
  ];

  const context = [
    { icon: MapPin, label: 'Based in', value: 'Calgary, Alberta · Canada' },
    { icon: Compass, label: 'Open to', value: 'AI/ML Engineering, Data Science, Analytics, and Applied Software roles · Canada' },
    { icon: Clock, label: 'Response time', value: 'Usually within 24 hours' }
  ];

  return (
    <section className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Contact"
          title="Open to AI/ML Engineering, Data Science, Analytics, and Applied Software roles."
          description="Best fit: roles where machine learning, data workflows, APIs, dashboards, and production-minded software come together."
          align="center"
        />

        {/* context row — sets expectations before the contact methods themselves */}
        <Reveal>
          <div className="mb-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
            {context.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-3 bg-surface p-5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">{c.label}</p>
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
              <div className="card card-hover p-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-[rgb(var(--accent-rgb)/0.08)] text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">{item.label}</p>
                <p className="mt-2 break-words text-[1rem] font-bold text-ink">{item.value}</p>
              </div>
            );
            return item.href ? <a href={item.href} key={item.label} target="_blank" rel="noreferrer">{content}</a> : <div key={item.label}>{content}</div>;
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
