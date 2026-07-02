import { Badge } from './Badge.jsx';
import { Reveal } from './Reveal.jsx';

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="mt-5 font-sans text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-[1rem] leading-8 text-ink-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
