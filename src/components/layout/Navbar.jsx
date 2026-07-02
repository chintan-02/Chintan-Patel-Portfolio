import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FileDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/navLinks.js';
import { siteMeta } from '../../data/siteMeta.js';
import { cn } from '../../lib/utils.js';
import { ThemeToggle } from './ThemeToggle.jsx';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function handleLogoClick() {
    setOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[rgb(var(--base-rgb)/0.72)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1100px] items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={handleLogoClick}>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--surface-rgb)/0.85)] font-mono text-sm font-bold text-accent">
            CP
          </span>
          <span className="grid">
            <span className="text-sm font-extrabold leading-none text-ink">Chintan Patel</span>
            <span className="mt-1 text-[11px] font-semibold text-ink-faint">Applied AI/ML Engineer</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) => cn(
                'relative rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-all duration-150',
                'after:absolute after:bottom-1.5 after:left-3 after:right-3 after:h-[2px] after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-200',
                isActive
                  ? 'bg-[rgb(var(--accent-rgb)/0.1)] text-ink ring-1 ring-[rgb(var(--accent-rgb)/0.22)] after:scale-x-100'
                  : 'text-ink-muted hover:bg-[rgb(var(--ink-rgb)/0.05)] hover:text-ink after:scale-x-0 hover:after:scale-x-100'
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Global resume access: smaller than the hero CTA, always available. */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={siteMeta.resume}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--accent-rgb)/0.55)] bg-[rgb(var(--accent-rgb)/0.92)] px-3.5 py-2 text-xs font-bold text-[#0A0A0F] shadow-[0_6px_16px_rgb(var(--accent-rgb)/0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_10px_24px_rgb(var(--accent-rgb)/0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
          >
            <FileDown className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-[rgb(var(--surface2-rgb)/0.7)] text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="border-t border-line bg-[rgb(var(--base-rgb)/0.96)] px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-[1100px] gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => cn(
                    'rounded-xl px-4 py-3 text-sm font-semibold',
                    isActive
                      ? 'bg-[rgb(var(--accent-rgb)/0.1)] text-ink ring-1 ring-[rgb(var(--accent-rgb)/0.22)]'
                      : 'text-ink-muted ring-1 ring-line hover:bg-[rgb(var(--ink-rgb)/0.05)]'
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2 border-t border-line pt-3">
                <a href={siteMeta.github} target="_blank" rel="noreferrer"
                  className="flex-1 rounded-xl py-2.5 text-center text-xs font-bold text-ink-muted ring-1 ring-line hover:text-ink">GitHub</a>
                <a href={siteMeta.linkedin} target="_blank" rel="noreferrer"
                  className="flex-1 rounded-xl py-2.5 text-center text-xs font-bold text-ink-muted ring-1 ring-line hover:text-ink">LinkedIn</a>
                <a href={`mailto:${siteMeta.email}`}
                  className="flex-1 rounded-xl py-2.5 text-center text-xs font-bold text-ink-muted ring-1 ring-line hover:text-ink">Email</a>
              </div>
              <a href={siteMeta.resume} download
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-bold text-[#0A0A0F]">
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
