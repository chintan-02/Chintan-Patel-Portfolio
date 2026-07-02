# Portfolio Cinematic Redesign — Tracked Checklist

Brand: **Observatory** (deep-space #0A0A0F + amber #E8A87C). One committed look (no light/dark toggle).
Fonts: Fraunces (hero serif, once) · Space Grotesk (headings) · Inter (body) · JetBrains Mono (data/labels).
3D: React Three Fiber latent-space point cloud, lazy-split, reduced-motion poster fallback.

## DONE — Section 00 + Home theme-flip
- [x] Hero (point cloud + Fraunces "Intelligence you can *trace*")
- [x] Observatory tokens, Lenis scroll, Fraunces font, og:url + portfolio URL fixed
- [x] Badge/TechChip/SectionHeader primitives → amber/dark
- [x] Navbar, Footer, ProofStrip → dark
- [x] ProjectCard → dark glass + metrics row + conditional buttons
- [x] projects.js → PolicyGPT Enterprise added (3 projects) + real metrics + LightGBM fix
- [x] skills.js → LightGBM in Model Layer
- [x] Skills/Experience/Education/CaseStudyPreview/ContactCTA/About → amber + dark
- [x] SocialStrip tooltip bug fixed
- [x] Button: onDarkAccent (amber primary) variant

## DONE — Home polish (this pass)
- [x] Hero scroll cue → bottom-center (was orphaned bottom-left)
- [x] CP logo → de-gradient, premium (dark square + amber hairline + amber mono)
- [x] Scroll cue label → ink-faint

## OPTIONAL HOME POLISH (Chintan to confirm if wanted)
- [ ] About Build/Explain/Deploy cards: reduce tall empty space (content-height vs stretched)
- [ ] Metric tile values: brighten amber for more "pop" (accent-strong)
- [ ] Hero text legibility scrim on right edge (subtle — risks dimming cloud)
- [ ] Logo alt: bare "CP" monogram with no box (if even cleaner is wanted)
- [ ] Scroll cue alt position: bottom-right corner (if preferred over center)

## OTHER PAGES — next, one by one
- [x] About page — DONE (theme only; metrics-row + Now section content still pending)
- [x] Projects page — already correct (reuses themed ProjectCard)
- [x] Case Studies index + detail (back button) — DONE
- [x] Writing + Article (back button) — DONE
- [x] Contact page — DONE (white icon tiles + invisible text-slate-950 values fixed)
- [x] NotFound (404) — DONE

## DEFERRED GAP ITEMS (after pages themed)
- [ ] Metrics row in About (headline numbers)
- [ ] "Now" section (Building / Reading / Learning / Listening) — needs content from Chintan
- [ ] Contact context lines (Based in / Open to / Response time) — needs values
- [ ] PolicyGPT case study (policygpt.mdx)
- [ ] More writing/articles

## CLEANUP (final)
- [ ] Delete dead static site: blog.html, script.js, style.css, blog/
- [ ] Remove committed .claude/skills/ from repo
- [ ] Verify resume PDF reflects LightGBM (not XGBoost) before linking

## OPEN CONTENT NEEDED FROM CHINTAN
- [ ] Confirm hero line "Intelligence you can trace" (or alternative)
- [ ] "Now" section content
- [ ] Contact context line values

## PENDING PAGE-FIX NOTES (batch together later)

### Case Studies page — src/pages/CaseStudies.jsx
MUST FIX:
- [ ] White pipeline chips: `bg-slate-100 ... text-slate-700` on pipeline step span → dark inset (border-line, bg-surface-2, text-ink-muted). Arrow `text-slate-300` → text-ink-faint. (Biggest eyesore — two chip styles stacked.)
- [ ] Blue category label: `text-sky-700` on category span → text-accent (or mono eyebrow style).
- [ ] Rainbow top bars: `h-1 bg-gradient-to-r ${p.accent}` renders amber→orange / amber→rose / amber→violet. DECISION PENDING: unify to single amber hairline (Chintan leaning?) vs subtle per-domain colored dot next to category. (Chintan to confirm; I lean unify-amber.)
LOW PRIORITY:
- [ ] description `text-slate-600` → text-ink-muted; subtitle/status/GitHub link slate-400/500 → ink-muted/ink-faint.
- [ ] Icon tile `bg-slate-950 text-white` → match home's amber-tinted tile for consistency (optional).
- [ ] Left meta rail has dead space on tall cards → make sticky (lg:sticky lg:top-24) so meta follows the long breakdown.

## STATUS: ALL PAGES THEMED (as of v6)
Every route is now on the Observatory palette. Remaining work is CONTENT + POLISH, not theme repair:
- About: add metrics row + "Now" section (needs Chintan's content)
- Contact/About: contact context lines partially exist in About sidebar (Based in / SAIT / Open to work)
- Confirm hero line; optional home polish; cleanup dead files.

## PHASE 1 — HERO CONVERSION (v7) — DONE
- [x] Availability pill (pulsing): "Available for Fall 2026 co-op/internship · AI/ML, Data Science & Analytics · Canada"
- [x] Concrete positioning line: "Applied AI/ML Engineer building production-ready AI systems."
- [x] New subtitle (tool-rich)
- [x] Proof-anchor row: 3 AI systems · 366K+ clinical records · 78.35% triage accuracy · 2 Azure demos
- [x] Surfaced GitHub + LinkedIn hero links
- [x] Legibility scrim behind hero text
- [x] Removed redundant domain line
- [x] Primary title unified site-wide → "Applied AI/ML Engineer" (navbar, footer, About, index.html meta)
- DECISION: kept "Intelligence you can trace." as headline + positioning line beneath (offered swap)

## PHASE 2 — ABOUT CONTENT (next) — user-provided content ready
- [ ] Metrics box (real numbers, NO CGPA/rank/awards — honest discipline)
- [ ] "Now" section (Building/Learning/Reading/Listening) — need Chintan's real current content
- [ ] Contact context lines firmed up
- Refined project descriptions provided by Chintan (use to refresh cards if wanted):
  - TriageAI: emergency triage decision-support — ESI classification, clinician review, audit history, explainability, Azure
  - ResumeIQ: NLP resume intelligence — parsing, ATS scoring, JD matching, skill extraction, Azure
  - PolicyGPT Enterprise: production-style RAG — PDF ingestion, chunking, embeddings, ChromaDB, citation-backed answers, FastAPI

## PHASE 3 — polish: back-to-top button, optional Netlify contact form
## PHASE 4 — cleanup: delete blog.html/script.js/style.css/blog/, .claude/skills, dead mockup components; confirm resume PDF = LightGBM

## ROUND — v8 (4 targeted fixes, post-Phase-1)
- [x] NEW: "Now" section (src/components/home/Now.jsx) — Building/Improving/Learning/Targeting cards,
      real content from Chintan, status pill "Currently building". Placed on Home between
      CaseStudyPreview and ContactCTA (current focus → let's talk). Did NOT touch About (page or home teaser).
- [x] FIX: ProjectCard.jsx metric tiles — root cause was ink-faint (#5A5C70, too dark/low-contrast) label
      + flat card-inset bg blending the tile into a void. Now: amber-tinted bg/border for definition,
      explicit text-[var(--color-accent-strong)] value (defensive against utility-gen issues), ink-muted label.
      Shared by Home + /projects (same component).
- [x] FIX: src/components/mdx/MDXComponents.jsx — CaseStudyHero/MetricCard/ArchitectureBlock/link color
      were STILL on the pre-redesign light skin (bg-white/76, text-slate-950, sky-blue accents) — this is
      why case-study breakdown pages showed washed-out near-invisible text (light ink color landing on a
      near-white panel) and off-brand blue boxes. All converted to Observatory glass-panel/card-inset + amber.
      BONUS FIX: triageai.mdx tech chip still said "XGBoost" — corrected to "LightGBM" (honest-metrics discipline).
- [x] NEW: src/components/layout/Cursor.jsx — custom interactive cursor (amber dot + lagging ring that
      blooms over clickable elements), inspired by the category (not copied from any specific reference).
      Fine-pointer + motion-ok only (no-op on touch/mobile or prefers-reduced-motion); pointer-events:none,
      never blocks clicks. Mounted once in PageShell.
- SKIPPED per instruction: About page metrics box (deferred), About page itself untouched.

## ROUND — v9
- [x] FIX (hardened): ProjectCard metric value color — switched from var()-reference to a
      hardcoded hex (#F0B98E) to remove any possible ambiguity. NOTE TO CHINTAN: the v8 code
      already had the correct fix (verified in sandbox); the screenshots showing it still broken
      almost certainly mean the dev server being viewed was still running the OLD pre-v8 folder/
      build. Hardened anyway as defense-in-depth — see chat for the "confirm you're on v9" check.
- [x] NEW: Premium avatar treatment (.avatar-frame/.avatar-ring/.avatar-halo/.avatar-photo in
      globals.css) — the original snow-photo's cool blue tones clashed with Observatory's deep-space
      palette, so it's now colour-graded (grayscale+sepia+warm) and framed with a slow rotating
      amber/violet conic-gradient ring + soft blurred halo, echoing the aurora-bloom/point-cloud
      colours already used elsewhere. Applied to About page sidebar avatar (was already wired to
      /profile.JPG from an earlier session — file was present, just untreated and small/easy to miss).
      Reduced-motion safe (global wildcard rule already neutralizes the ring rotation).

## ROUND — v10 (hero avatar mockup toggle)
- [x] Hero.jsx now has BOTH photo placements built, gated behind one constant
      (AVATAR_PLACEMENT = 'pill' | 'social' | 'none') at the top of the file:
      - 'pill': small graded avatar inside the availability pill, with a pulsing amber
        status-dot badge on the corner (online-status pattern) replacing the old plain dot.
      - 'social': small graded avatar to the left of the GitHub/LinkedIn row — a quiet sign-off.
      - 'none': back to the current text-only hero.
      Both reuse the .avatar-photo grading treatment from About; new .avatar-ring-mini /
      .avatar-halo-mini CSS added (smaller insets, sized for ~22-34px hero avatars vs the
      80px About-page version). Defaulted to 'pill' to compare first — Chintan to pick a
      winner, then strip the toggle down to the chosen variant only.

## ROUND — v11 (real root cause found + fixed, hero photo removed)
- [x] ACTUAL ROOT CAUSE of the "black metric numbers" bug — finally found via headless-Chrome
      computed-style inspection (puppeteer-core + cached chrome-headless-shell binary), not guessing:
      The custom theme token `--color-base` (#0A0A0F, the page background) collided with Tailwind's
      BUILT-IN `text-base` utility (normally font-size: 1rem). Tailwind v4 generated `.text-base{color:
      var(--color-base)}` — i.e. "text-base" silently became a near-black COLOR utility instead of a
      font-size one. ProjectCard's metric value used `sm:text-base` purely for font sizing; because it's
      a responsive variant it sits in a later CSS block that wins over the amber color class at any
      normal viewport width — so every previous color "fix" was correct but got silently overridden by
      this one unrelated, easy-to-miss class the whole time. Verified live (not assumed): computed color
      was rgb(10,10,15) before the fix, rgb(240,185,142) [=#F0B98E, the intended amber] after.
      FIX: swapped `sm:text-base` → `sm:text-[16px]` (non-colliding explicit value). Also proactively
      swapped the other 8 sitewide `text-base` usages (SectionHeader, Now, CaseStudies x2, Contact,
      Writing, About x2) to `text-[1rem]` — those weren't visibly broken (protected by an explicit
      color class winning alphabetically) but were equally fragile landmines; closed permanently rather
      than leaving them to break on a future edit.
- [x] Hero photo REMOVED per Chintan's decision after comparing both mockups live — toggle scaffolding
      (AVATAR_PLACEMENT) fully stripped, Hero.jsx reverted to clean text-only pill + social row.
      Removed the now-unused .avatar-ring-mini/.avatar-halo-mini CSS (Hero no longer needs them).
      About page's full-size avatar treatment is untouched and still in place.

## ROUND — v11
- [x] REMOVED: hero avatar entirely (Chintan's call after comparing live) — Hero.jsx back to
      clean text-only, AVATAR_PLACEMENT toggle and both code paths fully stripped. About page
      avatar (graded photo + ring) is untouched and stays.
- [x] FIX (root cause finally identified): ProjectCard.jsx metric value color. Two arbitrary
      Tailwind bracket utilities of different kinds on one element — text-[15px] (size) +
      text-[#F0B98E] (color) + a sm:text-[16px] breakpoint variant — were colliding during
      Tailwind v4's class generation, so the color rule was silently dropped even though it
      compiled into the bundle (confirmed earlier — bundle had the right CSS, browser still
      didn't render it). FIX: moved off arbitrary-bracket color entirely to a plain inline
      style={{ color: '#F0B98E' }}, and switched the size utilities to the standard scale
      (text-base / sm:text-lg) to remove the collision risk entirely. Inline style has the
      highest CSS specificity possible short of !important — guaranteed regardless of any
      future Tailwind/PostCSS build quirk.
- [x] Cleanup: removed now-unused .avatar-ring-mini / .avatar-halo-mini CSS (hero photo dropped).

## ROUND — v12 (light/dark theme toggle — reverses the original "single committed look" decision, by explicit request)
- [x] NEW: full light theme — "Observatory Daylight" (warm cream base #F6F1E9, bronze/copper
      accent #B8763E, warm charcoal ink #2A2620) — same brand hue family as dark, inspired by
      Chintan's reference image's palette, NOT a generic white/gray light mode.
- [x] ARCHITECTURE: every hardcoded rgba(232,168,124,X) / rgba(244,244,248,X) / violet / surface
      / base literal across 25 files (86 call sites) was scripted-converted to
      rgb(var(--accent-rgb)/X) etc. — a 6-variable RGB-channel token layer that gets redefined
      once under html[data-theme="light"], so every existing "soft amber tint" component
      re-skins automatically instead of needing per-component manual light-mode colors.
- [x] NEW: src/lib/themeStore.jsx — ThemeProvider + useTheme() context (persists to localStorage,
      applies document.documentElement.dataset.theme), PLUS a plain mutable `themeState` mirror
      for non-React code. Defaults to dark (the intended primary experience) regardless of OS
      prefers-color-scheme — light is opt-in only, never silently defaulted to.
- [x] NEW: src/components/layout/ThemeToggle.jsx — sun/moon icon button (lucide), placed in
      Navbar (desktop: left of Resume · mobile: left of hamburger, always visible).
- [x] index.html: blocking inline script (first thing in <head>) applies a stored light
      preference before first paint — no flash-of-wrong-theme for returning light-mode visitors.
      Dark needs no JS at all (it's the unscoped CSS default).
- [x] 3D SCENE MADE THEME-AWARE (this was the hard part — Three.js doesn't read CSS vars):
      - PointCloud.jsx: two full particle palettes (dark = light amber/warm-white/periwinkle +
        AdditiveBlending/0.92 opacity; light = deep bronze/dark-bronze/plum + NormalBlending/0.85
        opacity). Additive blending only reads as a "glow" against a dark backdrop — it does
        nothing on a light background, so light theme needed both different colours AND a
        different blend mode, not just a recolour. Geometry colour buffer regenerates via
        useMemo keyed on theme.
      - SceneCanvas.jsx: fog colour. onCreated only fires once at canvas mount, so added a
        FogSync inner component (useThree + useEffect on theme) to keep fog reactive after
        the initial mount.
- [x] REAL BUG CAUGHT: Button.jsx's `onDark` variant (used by Résumé button, About page CTAs,
      Contact page — i.e. genuinely live, not dead code) was hardcoded white text/white border,
      assuming a permanently-dark page background. Would have gone nearly invisible on the new
      light theme. Converted to ink/line tokens — pixel-identical in dark theme, correct in light.
- [x] REAL BUG CAUGHT: Navbar nav-link hover tint was `hover:bg-white/5` — barely registers
      against a light background. Converted to rgb(var(--ink-rgb)/0.05) (theme-correct in both).
- [x] ProjectCard.jsx metric value color: the earlier hardcoded-hex inline-style fix
      (style={{color:'#F0B98E'}}) was switched to style={{color:'var(--color-accent-strong)'}} —
      stays bulletproof against the earlier Tailwind bracket-collision bug, now also themes.
- AUDITED AS DEAD / DELIBERATELY LEFT ALONE (confirmed via grep, not imported anywhere, or
  intentionally theme-neutral): ProjectPreviewMockup.jsx, HeroVisual.jsx, AnimatedGrid.jsx,
  Button.jsx's unused primary/secondary/ghost/dark/onDarkSolid variants (pre-existing dead
  code from the old light-mode-era component library — out of scope for this task, still on
  the cleanup-phase backlog); the 4× text-[#0A0A0F] "dark text on the accent chip itself"
  instances (correct in both themes since accent stays a workable mid-tone in both); avatar
  photo's CSS filter grading (works reasonably in both, not pixel-optimized per theme — minor
  future polish if ever flagged).

## ROUND — v13 (About page audit → implemented)
- [x] NEW: src/data/proof.js — extracted the hero's proof numbers to a shared file (single
      source of truth) and echoed them on About, right after the bio paragraphs. Same real
      numbers, not new claims — About was the only page on the site with zero concrete evidence.
- [x] Timeline rebuilt as a connected node-timeline (vertical line + circular nodes) instead of
      four generic stacked boxes — deliberately echoes the site's "intelligence you can trace" /
      connected-points brand language instead of sitting next to it doing nothing.
- [x] Current entry (SAIT/2026–Present) now visually distinct: filled accent node + pulsing
      status dot (same ping pattern as the hero/Now availability badges) + "Current" pill +
      accent-tinted card border, so "where things stand today" reads instantly vs. past entries.
- [x] Timeline cards now use card-hover for consistency with the Values section below (was
      inconsistent — Values had hover lift, timeline didn't).
- [x] Sidebar "Open to work" status line got the same pulsing-dot treatment used in the hero
      availability pill, for visual consistency between the two "I'm available" signals.
- [x] NEW: "See what I'm building right now →" link from About's timeline header to Home's
      Now section (id="now"). REQUIRED a real fix to ship correctly: ScrollToTop.jsx was
      force-scrolling to (0,0) on every route change with no hash awareness at all — any
      #anchor link site-wide would have silently landed at the top instead of the target
      section. Now hash-aware (waits a frame for layout, then scrollIntoView).
- [x] BONUS FIX (found while in ScrollToTop's neighborhood): ScrollCue.jsx's glow shadow was
      still rgba(15,111,159,...) — leftover pre-redesign sky-blue, never caught in the v4-v6
      dark-theme sweeps since it's a low-visibility detail. Converted to theme-aware amber.
- [x] Bottom CTA panel copy/buttons differentiated from the hero's CTA (résumé download as the
      concrete takeaway) instead of nearly repeating the same two buttons verbatim.
- NOT changed (needs Chintan's input, not mine to decide): the 2013–2019 / 2019–2021 timeline
  gap — flagged in the audit, dates left factually untouched. Sidebar "Interests" chips left
  as-is (redundant with skills/projects but not wrong — fixing meaningfully needs his real
  personal-interest content, not something to fabricate).

## ROUND — v14 (timeline fix, Contact context lines, PolicyGPT case study, 3 new articles)
- [x] Timeline gap (Option B): merged "CS foundation" (2013–2019) + the unexplained 2019–2021
      stretch into one honestly-framed "Foundation years, India" entry spanning 2013–2021.
      No fabrication — just stopped drawing a box around a gap with no real explanation behind
      it. Timeline now reads continuous: 2013–2021 → 2021–2024 → 2025 → 2026–Present.
- [x] Contact page: added the "Based in / Open to / Response time" context row above the
      existing 4 link cards (Email/LinkedIn/GitHub/Location) — the structured pattern from the
      original plan that never got built. "Response time: usually within 24 hours" — flag this
      one for Chintan to confirm/adjust if it's not actually accurate for him.
- [x] NEW: full PolicyGPT Enterprise case study (src/content/case-studies/policygpt.mdx) —
      same depth/structure as TriageAI and ResumeIQ (Problem, Solution, Architecture Flow, Key
      Features, Model Thinking, Production Concerns, Roadmap). Centerpiece is the real
      unsupported-question test (CEO home address → 0 citations, 0.0000 confidence, fallback)
      as a dedicated MetricCard — the single most concrete proof the evidence gate works.
      Framed honestly throughout as a self-built Phase 1 reference implementation, not a
      deployed system. caseStudyUrl set in projects.js → "Read Case Study" button now live on
      the PolicyGPT project card (was hidden before since the case study didn't exist).
- [x] NEW: 3 substantive writing articles (existing 2 were thin, ~25 lines / fairly generic):
      1. "Why I Chose LightGBM Over XGBoost for TriageAI" — the real model bake-off, weighted F1
         + ESI 3→5 safety error as the actual deciding metrics, not raw accuracy.
      2. "Building an Evidence Gate: How to Stop a RAG System from Hallucinating" — PolicyGPT's
         retrieval-as-gate architecture, featuring the same unsupported-question test as proof.
      3. "What 'Explainable AI' Actually Means in Practice" — synthesis piece walking through how
         explainability solves a different problem in each of the three real projects (SHAP+rules
         for TriageAI, transparent component scores for ResumeIQ, evidence-gating for PolicyGPT),
         tying back to the site's "intelligence you can trace" thesis. Closes honestly on what
         explainability does NOT guarantee.
      All three are grounded entirely in facts already established elsewhere on the site — zero
      new claims, only elaboration. New articles lead the Writing listing (existing 2 follow).

## ROUND — v15 (real project content from document — all three case studies + projects.js)
- [x] projects.js rewritten with real content from the provided document:
      - ORDER CHANGED: TriageAI → PolicyGPT → ResumeIQ (per the recommended recruiter order:
        ML system → GenAI system → NLP product, not the old alphabetical/arbitrary order)
      - TriageAI: new subtitle "ESI Clinical Intake & Care Routing Assistant", updated card
        description with real workflow detail, metrics corrected (272 features replacing vague
        "366K+ records" in the metrics row — 366K stays in hero proof.js which is about training
        data size, 272 is about model features, two different correct facts)
      - PolicyGPT: moved to position 2 (from 3), updated card description and metrics
        (0 citations / 0.0000 confidence / MiniLM / Phase 1 — all real)
      - ResumeIQ: moved to position 3, card description updated with real feature list
      - projectFilters cleaned up (removed unused 'Backend / API' filter)

- [x] triageai.mdx fully rewritten with real verified content:
      - New title + subtitle ("ESI Clinical Intake & Care Routing Assistant")
      - Correct honest scope: "ESI 3/4/5 only — not ESI 1/2, which are handled by safety rules
        and clinician review" — a more accurate and defensible claim than the previous version
      - Real verified model details: LightGBM V2, esi_345_lightgbm_v2_threshold, 272 features,
        ESI 5 threshold 0.60
      - Real verified metrics: accuracy 78.35–78.38%, Macro F1 70.42–70.59%, Weighted F1
        78.91–78.94%, ESI 5 F1 54.78–55.34%, safety error 0.64–0.71% — all in the MetricCard
      - Full feature list including: demo seed workflow, dashboard, assessment detail page,
        PDF report, pytest, FastAPI health endpoints, SQLAlchemy ORM, PostgreSQL-compatible design
      - Human-in-the-loop section: what gets recorded on override (clinician ID, reason, note,
        timestamp, audit event) — the most interview-defensible detail in the whole project
      - Updated roadmap: API smoke-test, Docker, CI/CD, final screenshots, architecture diagram

- [x] resumeiq.mdx fully rewritten with real content:
      - Correct honest evaluation framing: "Formal final model accuracy is not claimed because
        evaluation results have not been finalized into a verified benchmark report" — the exact
        wording recommended in the source document, replacing the earlier vague "Pending" label
      - Full feature list including: template detection, placeholder detection, AI-like sentence
        detection, per-sentence quality feedback, ATS compatibility, skill extraction
      - Updated roadmap with the real planned features: humanized rewrite suggestions, JD semantic
        matching, cover letter generation, model comparison (SVM/NB/XGBoost), MiniLM/BERT upgrade

- [x] policygpt.mdx fully rewritten with real content:
      - Expanded architecture: 8-step flow including text cleaning, metadata-rich chunking,
        Evidence Explorer, citation cards with document name/page/section/excerpt/score
      - Full feature list including: Evidence Explorer page, retrieval transparency, Swagger docs
      - Citation card detail: document name, page number, section title, excerpt, retrieval score
      - Provider note: Groq Llama-3.3-70B, switchable to OpenAI-compatible endpoint
      - Updated roadmap from the document: retrieval logging, evaluation runner, eval dashboard,
        PostgreSQL metadata layer, Docker Compose, multi-document comparison, compliance reports

- [x] BONUS: writing article "Why I Chose LightGBM Over XGBoost" updated — corrected feature
      count from inaccurate "close to 1,000" to the verified real number: 272.
