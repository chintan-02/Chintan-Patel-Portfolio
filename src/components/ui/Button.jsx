import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn, externalProps } from '../../lib/utils.js';

const variants = {
  // primary action — accent fill; hover darkens + grows shadow + lifts
  primary: 'bg-accent text-white border border-accent shadow-[0_10px_26px_rgba(15,111,159,0.25)] hover:bg-accent-strong hover:border-accent-strong hover:shadow-[0_16px_34px_rgba(15,111,159,0.33)] hover:-translate-y-0.5',
  // secondary on LIGHT bg — white fill; hover tints text + border accent
  secondary: 'bg-white text-ink border border-slate-200 shadow-[0_8px_22px_rgba(15,23,42,0.06)] hover:border-accent hover:text-accent hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)] hover:-translate-y-0.5',
  // ghost on LIGHT bg
  ghost: 'bg-white/60 text-ink border border-transparent hover:bg-white hover:border-slate-200 hover:-translate-y-0.5',
  // dark button on LIGHT bg (Hero "Download Resume") — hover LIGHTENS for clear feedback
  dark: 'bg-ink-deep text-white border border-ink-deep shadow-[0_12px_28px_rgba(17,24,39,0.22)] hover:bg-slate-800 hover:border-slate-800 hover:shadow-[0_18px_40px_rgba(17,24,39,0.32)] hover:-translate-y-0.5',
  // SOLID light button for DARK backgrounds (Contact CTA primary action)
  onDarkSolid: 'bg-white text-ink border border-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-sky-50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5',
  // OUTLINE button that sits directly on the page background (Contact CTA
  // secondary action, Résumé button, etc.) — uses ink/line tokens rather than
  // literal white so it stays correctly visible in both the dark and light themes.
  onDark: 'bg-transparent text-ink border border-[rgb(var(--ink-rgb)/0.35)] hover:bg-[rgb(var(--ink-rgb)/0.1)] hover:border-[rgb(var(--ink-rgb)/0.6)] hover:-translate-y-0.5',
  // AMBER primary for DARK backgrounds — dark text on amber (brand, high-contrast)
  onDarkAccent: 'bg-accent text-[#0A0A0F] border border-accent shadow-[0_10px_30px_rgb(var(--accent-rgb)/0.2)] hover:bg-accent-strong hover:border-accent-strong hover:-translate-y-0.5'
};

export function Button({ href, children, variant = 'primary', className, external = false, icon = true, download = false, ...props }) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-bold transition-all duration-200 ease-out-soft',
    variants[variant],
    className
  );

  const content = <>{children}{icon && <ArrowUpRight className="h-4 w-4" />}</>;

  if (!href) return <button className={styles} {...props}>{content}</button>;

  if (external || download || href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf')) {
    const linkProps = external || href.startsWith('http') || href.startsWith('mailto:') ? externalProps('Open link') : {};
    return <a href={href} className={styles} download={download || undefined} {...linkProps} {...props}>{content}</a>;
  }

  return <Link to={href} className={styles} {...props}>{content}</Link>;
}
