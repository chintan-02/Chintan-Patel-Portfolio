# Visual Upgrade — Checkpoint 1 (Phases 1 & 2)

Foundation + cards + background. Motion/transition/scroll phases are **not** in
this checkpoint (see "Next" below).

## Phase 1 — Design foundation
- **Tokens centralized** into Tailwind v4 `@theme` (src/styles/globals.css):
  color (`--color-ink/accent/accent2/...`), radius (`--radius-card/panel/hero/inset`),
  elevation (`--shadow-card/card-hover/feature`), easing (`--ease-out-soft/in-out-soft`).
  These generate utilities (`bg-accent`, `text-ink`, `rounded-card`, `shadow-card`,
  `ease-out-soft`) **and** real CSS custom properties. `:root` keeps the old var names
  as aliases → one source of truth, nothing downstream breaks.
- **44 scattered hex values + ad-hoc radii migrated** to token utilities across ~15 files.
- **Motion tokens (JS):** src/lib/motion.js now exports `DURATION` + `EASE`; variants
  carry their transitions. Framer can't read CSS vars, so these mirror the CSS values.
- **Reduced-motion fixed (real bug):** Framer Motion is JS-driven, so the CSS
  `prefers-reduced-motion` media query did **not** disable scroll reveals or the hero
  entrance. Now gated via `useReducedMotion()` in `Reveal` and `Hero`.
- **DRY:** `SectionHeader` now reuses `Reveal` (was duplicating motion props).

## Phase 2 — Cards & background
- **Card system:** `.card` / `.card-hover` / `.card-inset` in `@layer components`
  (so utilities can override them — featured-card accent border, gradients, padding).
  Consistent radius + elevation; hover = `translateY(-4px)` + shadow + accent-tinted
  border (transform/opacity only). All 8 inline card surfaces unified through `.card`.
- **Background:** layered aurora gradient + a subtle, masked **dot-grid** (one static
  fixed layer, no animation — negligible cost). Previously the grid was `display:none`.
- **Focus:** global `:focus-visible` outline (accent, offset) — every focusable element
  gets a consistent keyboard-only indicator. Removed the redundant per-button ring.

## Bundle delta (production build)
- CSS: 44.48 kB → 48.08 kB (gzip 8.62 → 9.36 kB)  [+token/card/background utilities]
- JS:  413.95 kB → 413.13 kB (gzip ~130 kB, flat)
- **No new dependencies.**

## Verify
    npm install
    npm run dev      # check cards, hover lift, dot-grid background
    npm run build    # confirms green
- Toggle OS "Reduce motion" → hero + scroll reveals should fade only (no slide).
- Tab through the page → visible accent focus outline on links/buttons.

## Rollback
Each change is isolated to the files above; revert any single file independently.
`globals.css` + `lib/motion.js` are the only foundational files.

## Next (not yet done — needs your go-ahead)
- **Phase 3** scroll-reveal polish (consistent stagger on grids) + micro-interactions.
- **Phase 4** page transitions (`AnimatePresence`, key `Routes` on pathname) +
  smooth-scroll. **Recommendation: do NOT add Lenis** — the site already has CSS
  `scroll-behavior: smooth` and no scroll-linked effects that need it; Lenis adds a dep
  and a Framer `useScroll` desync risk for no real gain here. One real bug to fix in
  this phase: `ScrollToTop` + global smooth-scroll makes route changes *animate* to top;
  it should jump instantly.
- **Phase 5** route-level code splitting (the 413 kB JS is one chunk) + a11y/perf audit.

---

# Checkpoint 2 — Content + UI polish (this round)

1. **Fonts swapped site-wide** — Inter (UI/body) + Space Grotesk (display/hero) + JetBrains Mono (code), loaded in `index.html`, set in the `@theme` tokens. One-line revert if you want the Instrument Serif hero back.
2. **CSS cascade fix** — base element resets moved into `@layer base`. An unlayered `a { color: inherit }` was overriding text-color utilities on link-buttons, which is what made the hero "Download Resume" text dark and the Contact CTA buttons wash out.
3. **Buttons reworked** (`src/components/ui/Button.jsx`) — all variants now have visible hovers (color shift + shadow growth + lift). Added `onDarkSolid` and `onDark` variants for dark sections; the Contact CTA now uses them instead of light-bg variants with conflicting overrides.
4. **Skills section redesigned** (`SkillsSystem.jsx`) — was 5 cramped columns; now a vertical stack of horizontal rows (meta left, skills flow right) that matches the "AI product stack" pipeline and gives chips room.
5. **Education** — CS degree year (2013–2019) replaced with "Undergraduate" (school line still shows India).
6. **Proof strip spacing** — added top padding so it separates from the hero.

No new dependencies. Build green. CSS ~51.8 kB (gzip 9.68 kB), JS ~412.8 kB.

---

# Checkpoint 3 — this round

1. **Experience** — added **Dreamview Technology** (Web Application Developer, Jan 2023–Dec 2024) as a regular role: dropped "& Founder" from the title and reworded the summary to remove founder framing ("Founded and led a studio" → client-work framing). Listed first (most recent). Two roles total.
2. **Hero headline** — was oversized after the font switch (Space Grotesk at 4.2rem wrapped to two huge lines). Reduced to `clamp(2rem, 4vw, 3.25rem)` with looser line-height and a min-height that reserves two lines (no layout shift as the typewriter cycles). Reads balanced/premium, closer to the old proportions while keeping the modern font.
3. **Scroll cue** (`src/components/home/ScrollCue.jsx`) — replaced the old filled down-arrow concept with a minimal animated cue: a thin line with a glowing accent dot traveling down it + a "Scroll" label. Click smooth-scrolls to the next section (`#highlights` on the proof strip, offset for the fixed navbar). Pure-CSS animation so reduced-motion disables it (dot stays static, still visible). Hidden on mobile.

No new dependencies. Build green. CSS ~53 kB (gzip 9.89 kB), JS ~414 kB.

---

# Checkpoint 4 — hero UI/UX polish (this round)

Content unchanged; layout/spacing only.
- **Fixed scroll-cue overlap** — hero is now a flex column: content sits in a centered `flex-1` region and the scroll cue is in normal flow at the bottom, so it can never collide with the chips (was absolutely positioned over the content).
- **Balanced the headline** — typewriter text is vertically centered in its reserved (two-line) height, so short phrases no longer leave a lopsided gap, and there's still zero layout shift as it cycles.
- **Lighter composition** — smaller profile photo (165→150px), narrower intro paragraph (cleaner measure under the headline), and more even vertical rhythm between blocks.
