import { Badge } from './Badge.jsx';
import { Reveal } from './Reveal.jsx';

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center';

  return (
    <Reveal className={centered ? 'mx-auto mb-14 max-w-3xl text-center' : 'mb-12 max-w-3xl'}>
      {eyebrow && (
        <div className={centered ? 'flex justify-center' : undefined}>
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="mt-5 text-balance font-display text-[clamp(2rem,4vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.045em] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink-muted sm:text-[1.075rem]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
