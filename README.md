# Chintan Patel — Applied AI/ML Engineer Portfolio

> **Live site:** [chintan-patel-ai.netlify.app](https://chintan-patel-ai.netlify.app)

A production-grade personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, React Three Fiber, and MDX. Features a cinematic dark-space design ("Observatory"), a real-time 3D WebGL point cloud, light/dark theme toggle, full case study system, technical writing section, and a complete project showcase — purpose-built as a job-search conversion surface for AI/ML, Data Science, and Software roles in Canada.

---

## Table of Contents

- [Live Site](#live-site)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Pages & Routes](#pages--routes)
- [Key Features](#key-features)
- [3D Scene — Latent-Space Point Cloud](#3d-scene--latent-space-point-cloud)
- [Theme System](#theme-system)
- [Content System — MDX](#content-system--mdx)
- [Projects Showcased](#projects-showcased)
- [Performance & Accessibility](#performance--accessibility)
- [Running Locally](#running-locally)
- [Adding Content](#adding-content)
- [Deployment](#deployment)
- [License](#license)

---

## Live Site

| URL | Status |
|-----|--------|
| [chintan-patel-ai.netlify.app](https://chintan-patel-ai.netlify.app) | Production (Netlify, auto-deploys from `main`) |

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React | 19 | UI component model |
| **Build tool** | Vite | 8 | Dev server + production bundler |
| **Styling** | Tailwind CSS | v4 (CSS-first) | Utility classes + design tokens via `@theme` |
| **Animation** | Framer Motion | 12 | Page reveals, hero entrance, scroll animations |
| **3D / WebGL** | React Three Fiber | 9.6.1 | R3F declarative wrapper for Three.js |
| **3D engine** | Three.js | 0.185.0 | Point cloud geometry, materials, fog |
| **Smooth scroll** | Lenis | 1.3.25 | Native-feel momentum scrolling |
| **Routing** | React Router DOM | 7 | Client-side SPA routing |
| **Content** | MDX (`@mdx-js/rollup`) | — | Case studies + articles as `.mdx` files |
| **Icons** | Lucide React | — | Consistent line-icon set |
| **Fonts** | Fraunces · Space Grotesk · Inter · JetBrains Mono | — | Cinematic serif + clean sans + mono |
| **Hosting** | Netlify | — | Static hosting + SPA redirect rules |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                              │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  React SPA (Vite + React Router v7)                  │  │
│  │                                                      │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌───────────┐  │  │
│  │  │  PageShell   │  │  ThemeStore  │  │  Lenis    │  │  │
│  │  │  (layout)    │  │  (context)   │  │  (scroll) │  │  │
│  │  └──────┬───────┘  └──────┬───────┘  └─────┬─────┘  │  │
│  │         │                 │                  │        │  │
│  │  ┌──────▼──────────────────▼──────────────────▼────┐ │  │
│  │  │              Route Pages                        │ │  │
│  │  │  Home · Projects · Case Studies · Writing       │ │  │
│  │  │  About · Contact · Article · NotFound           │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                      │  │
│  │  ┌──────────────────────────────────────────────┐   │  │
│  │  │  Fixed 3D Background (z-index: -1)           │   │  │
│  │  │  Scene.jsx → lazy SceneCanvas → PointCloud   │   │  │
│  │  │  (only loads when WebGL + motion available)  │   │  │
│  │  └──────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

Data flow:
src/data/*.js  ──►  Pages / Components  ──►  Rendered UI
src/content/*.mdx ──►  MDX loader  ──►  CaseStudy / Article pages
ThemeProvider ──►  CSS [data-theme="light"] override  ──►  All tokens re-map
themeState (mutable) ──►  Three.js PointCloud  ──►  Dual particle palettes
```

---

## Project Structure

```
chintan-patel-portfolio/
│
├── public/                          # Static assets (served as-is)
│   ├── Chintan_Patel_Resume.pdf     # Downloadable résumé
│   ├── profile.JPG                  # Identity photo (About page)
│   ├── favicon.svg
│   ├── og-image.svg                 # Open Graph card
│   └── _redirects                   # Netlify SPA redirect rules
│
├── src/
│   ├── App.jsx                      # Root: ThemeProvider + BrowserRouter
│   ├── main.jsx                     # React DOM entry point
│   │
│   ├── components/
│   │   ├── home/                    # Home page section components
│   │   │   ├── Hero.jsx             # Availability pill, headline, proof row, CTAs
│   │   │   ├── ScrollCue.jsx        # Animated scroll indicator
│   │   │   ├── ProofStrip.jsx       # Proof-point strip below hero
│   │   │   ├── About.jsx            # Home teaser (not the full About page)
│   │   │   ├── FeaturedProjects.jsx # Project card grid
│   │   │   ├── SkillsSystem.jsx     # Vertical skills pipeline
│   │   │   ├── Experience.jsx       # Work history
│   │   │   ├── Education.jsx        # Education timeline
│   │   │   ├── CaseStudyPreview.jsx # 3-column case study teasers
│   │   │   ├── Now.jsx              # "Now" section: Building/Improving/Learning/Targeting
│   │   │   └── ContactCTA.jsx       # Bottom home CTA
│   │   │
│   │   ├── layout/                  # Site-wide layout primitives
│   │   │   ├── PageShell.jsx        # Mounts Scene, Cursor, Navbar, Footer, SocialStrip
│   │   │   ├── Navbar.jsx           # Sticky nav + ThemeToggle + Resume button
│   │   │   ├── Footer.jsx           # Site footer
│   │   │   ├── SocialStrip.jsx      # Fixed left-edge GitHub/LinkedIn/Email strip
│   │   │   ├── ThemeToggle.jsx      # Sun/moon icon toggle button
│   │   │   ├── Cursor.jsx           # Custom amber dot + lagging ring cursor
│   │   │   ├── SmoothScroll.jsx     # Lenis smooth scroll wrapper
│   │   │   └── ScrollToTop.jsx      # Hash-aware scroll-to-top on route change
│   │   │
│   │   ├── three/                   # WebGL / 3D scene components
│   │   │   ├── Scene.jsx            # Gate: WebGL detect → lazy load SceneCanvas
│   │   │   ├── SceneCanvas.jsx      # R3F Canvas + fog + FogSync (theme-reactive)
│   │   │   └── PointCloud.jsx       # Gaussian cluster geometry + dual palettes
│   │   │
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx      # Full project card with metrics, stack, CTAs
│   │   │
│   │   ├── mdx/
│   │   │   └── MDXComponents.jsx    # CaseStudyHero, MetricCard, ArchitectureBlock, TechStackBlock
│   │   │
│   │   └── ui/                      # Shared primitives
│   │       ├── Button.jsx           # onDark / onDarkAccent variants
│   │       ├── Badge.jsx            # Amber eyebrow badge
│   │       ├── TechChip.jsx         # Stack chip
│   │       ├── Reveal.jsx           # Scroll-reveal wrapper (Framer Motion)
│   │       ├── SectionHeader.jsx    # Eyebrow + heading + description block
│   │       ├── Card.jsx             # Base card primitive
│   │       └── BrandIcons.jsx       # GitHub / LinkedIn SVG icons
│   │
│   ├── content/
│   │   ├── case-studies/
│   │   │   ├── triageai.mdx         # TriageAI full breakdown
│   │   │   ├── resumeiq.mdx         # ResumeIQ full breakdown
│   │   │   └── policygpt.mdx        # PolicyGPT Enterprise full breakdown
│   │   │
│   │   └── writing/
│   │       ├── lightgbm-vs-xgboost.mdx       # Model selection write-up (TriageAI)
│   │       ├── evidence-gated-rag.mdx         # RAG evidence gate architecture
│   │       ├── explainable-ai-in-practice.mdx # XAI synthesis across all 3 projects
│   │       ├── model-evaluation.mdx           # ML evaluation beyond accuracy
│   │       └── data-drift.mdx                 # Production data drift explained
│   │
│   ├── data/                        # All site content as plain JS
│   │   ├── projects.js              # 3 projects: TriageAI, PolicyGPT, ResumeIQ
│   │   ├── proof.js                 # Shared hero + About proof-anchor stats
│   │   ├── writing.js               # Writing article metadata + slugs
│   │   ├── skills.js                # Skills by category
│   │   ├── experience.js            # Work history
│   │   ├── education.js             # Education entries
│   │   ├── navLinks.js              # Navigation link definitions
│   │   └── siteMeta.js              # Name, email, GitHub, LinkedIn, availability
│   │
│   ├── lib/
│   │   ├── themeStore.jsx           # ThemeProvider, useTheme(), themeState mirror
│   │   ├── scrollStore.js           # Mutable scroll state (non-React, for R3F useFrame)
│   │   ├── motion.js                # Framer Motion duration/easing tokens
│   │   └── utils.js                 # cn() classname utility
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CaseStudy.jsx            # MDX slug router
│   │   ├── Writing.jsx
│   │   ├── Article.jsx              # MDX slug router
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx            # All route definitions
│   │
│   └── styles/
│       └── globals.css              # @theme tokens, dark/light themes, component classes
│
├── index.html                       # Entry HTML + no-flash theme script
├── vite.config.js                   # Vite + MDX plugin config
├── netlify.toml                     # SPA redirect: /* → /index.html
└── package.json
```

---

## Design System

The entire visual language is defined in `src/styles/globals.css` using **Tailwind v4's CSS-first `@theme` block** — no `tailwind.config.js` file. One token definition generates both Tailwind utility classes and CSS custom properties simultaneously.

### Observatory — Dark Theme (default)

```css
@theme {
  /* Typography */
  --font-sans:          "Inter", ui-sans-serif, system-ui;
  --font-display:       "Space Grotesk", "Inter", ui-sans-serif;
  --font-display-serif: "Fraunces", Georgia, serif;       /* cinematic headline, used once */
  --font-mono:          "JetBrains Mono", ui-monospace;

  /* Color palette — deep-space Observatory */
  --color-base:         #0A0A0F;   /* deep-space page base */
  --color-surface:      #14151F;   /* raised surface / card */
  --color-surface-2:    #1C1E2B;   /* glass panel / inset */
  --color-ink:          #F4F4F8;   /* primary text */
  --color-ink-muted:    #9A9CB0;   /* secondary text */
  --color-ink-faint:    #5A5C70;   /* captions / labels */
  --color-accent:       #E8A87C;   /* amber accent */
  --color-accent-strong:#F0B98E;   /* amber hover */
  --color-accent-deep:  #C98A5E;   /* amber pressed */
  --color-violet:       #8B7FE8;   /* point-cloud depth accent */

  /* Radius scale */
  --radius-inset:  0.625rem;  /* 10px — chips, tags */
  --radius-card:   1rem;      /* 16px — cards */
  --radius-panel:  1.5rem;    /* 24px — large panels */
  --radius-hero:   2rem;      /* 32px — hero panels */

  /* RGB channel vars — enables rgb(var(--accent-rgb)/0.08) soft tints */
  --accent-rgb:    232 168 124;
  --ink-rgb:       244 244 248;
  --violet-rgb:    139 127 232;
  --surface-rgb:   20 21 31;
  --surface2-rgb:  28 30 43;
  --base-rgb:      10 10 15;
}
```

### Observatory Daylight — Light Theme

Activated by `html[data-theme="light"]` — same structure, warm cream palette:

```css
html[data-theme="light"] {
  --color-base:      #F6F1E9;  /* warm cream */
  --color-ink:       #2A2620;  /* warm charcoal */
  --color-accent:    #B8763E;  /* bronze/copper */
  --color-violet:    #6B5BC4;  /* deeper plum */
  /* ...all 6 RGB channel vars also re-map */
}
```

### Component Classes

```css
/* Glass card — main surface for project/case-study cards */
.glass-panel { background: rgba(20,21,31,0.72); backdrop-filter: blur(16px); }

/* Base card */
.card { border-radius: var(--radius-card); border: 1px solid var(--color-line); background: var(--color-surface); }

/* Hover lift */
.card-hover { transition: transform 0.25s, box-shadow 0.25s; }
.card-hover:hover { transform: translateY(-2px); box-shadow: var(--shadow-card-hover); }

/* Premium avatar — colour-graded photo + rotating amber/violet ring */
.avatar-ring { animation: avatarSpin 16s linear infinite; }
.avatar-photo { filter: grayscale(0.48) sepia(0.22) saturate(1.4) brightness(0.86); }
```

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Full hero conversion funnel: availability → headline → proof → Now → CTAs |
| `/projects` | `Projects` | All 3 project cards with metrics, pipeline, stack chips, live/GitHub/case-study CTAs |
| `/case-studies` | `CaseStudies` | Index of all case studies with pipeline visualization and full stack |
| `/case-studies/triageai` | `CaseStudy` | TriageAI full MDX breakdown |
| `/case-studies/resumeiq` | `CaseStudy` | ResumeIQ full MDX breakdown |
| `/case-studies/policygpt` | `CaseStudy` | PolicyGPT Enterprise full MDX breakdown |
| `/writing` | `Writing` | 5 technical articles |
| `/writing/:slug` | `Article` | Individual MDX article |
| `/about` | `About` | Connected-node timeline, values, proof row, Now cross-link |
| `/contact` | `Contact` | Based in / Open to / Response time context + Email, LinkedIn, GitHub, Location cards |
| `*` | `NotFound` | 404 page |

---

## Key Features

### Hero Section
- **Availability pill** with pulsing amber status dot — the most important signal for a job search
- **Cinematic headline** — "Intelligence you can *trace*." (Fraunces serif, used exactly once)
- **Concrete positioning line** — "Applied AI/ML Engineer building production-ready AI systems."
- **Tool-rich subtitle** covering all three project domains
- **Proof-anchor row** — `3 AI systems · 366K+ clinical records · 78.35% triage accuracy · 2 Azure demos` in amber
- **Surfaced social links** — GitHub and LinkedIn visible in the hero (not buried in a rail)
- **Legibility scrim** — radial gradient behind text so the point cloud never obscures readability

### Now Section
Four cards on the home page signalling active momentum — **Building / Improving / Learning / Targeting** — with a "Currently building" status badge. Honest, real content.

### Custom Interactive Cursor
Amber dot + lagging ring that blooms over clickable elements. Fine-pointer + motion-ok devices only. `pointer-events: none` — never blocks clicks. Respects `prefers-reduced-motion`.

### Case Study System
Three full MDX case studies with custom components:
- **`<CaseStudyHero>`** — label, title, description, action buttons
- **`<ArchitectureBlock>`** — numbered pipeline steps
- **`<MetricCard>`** — highlighted label + value + note
- **`<TechStackBlock>`** — tech chip row

### Writing System
Five technical articles tied directly to real project decisions — not generic ML content. Each article references actual engineering choices made in TriageAI, PolicyGPT, or ResumeIQ.

### Contact Page
"Based in / Open to / Response time" context row above the link cards — sets recruiter expectations before they even open an email.

### About Page
- **Connected node timeline** — not generic stacked boxes. Echoes the "intelligence you can trace" connected-points motif with a highlighted "Current" node
- **Proof row** — same real numbers as the hero, so About isn't the only page without evidence
- **Cross-link** to the Now section (`/#now`)
- **Premium avatar** — colour-graded photo (`grayscale + sepia + warm`) with a rotating amber/violet conic-gradient ring and blurred halo

---

## 3D Scene — Latent-Space Point Cloud

The signature visual: three loosely-overlapping Gaussian clusters that read as one diffuse amber manifold. Built entirely in code — no textures, no external assets.

### How it works

```
Scene.jsx
  └── checks: WebGL available? prefers-reduced-motion: no?
       ├── YES → lazy-import SceneCanvas (code-split, ~235KB gzip)
       └── NO  → static CSS poster (no bundle cost)
            └── SceneCanvas.jsx
                  ├── R3F Canvas (dpr 1–1.75, powerPreference: high-performance)
                  ├── FogSync component (re-applies fog on theme change)
                  └── PointCloud.jsx
                        ├── 3,200 points (1,400 on mobile/touch)
                        ├── 3 Gaussian clusters (Box-Muller sampling)
                        ├── Per-point colour: amber core → warm-white edge, 8% violet depth
                        ├── Dark theme:  AdditiveBlending, opacity 0.92
                        ├── Light theme: NormalBlending, deeper bronze, opacity 0.85
                        ├── Scroll-reactive drift (reads scrollStore.js in useFrame)
                        └── Pointer parallax (mouse position from window events)
```

### Why two blending modes for light/dark?
`AdditiveBlending` makes light-coloured particles glow against a dark background — it's effectively invisible on a light (cream) background because the math adds light values that are already near-white. Light theme uses `NormalBlending` with deeper bronze/plum tones so particles read as visible dust rather than disappearing into the page.

### Bundle strategy
Three.js is code-split via `React.lazy` into a separate `SceneCanvas` chunk (~235KB gzip). The main app bundle stays at ~141KB gzip. Users who can't run WebGL (or prefer reduced motion) never download the Three.js chunk.

---

## Theme System

### Architecture

```
index.html
  └── blocking script (first in <head>)
       └── reads localStorage → sets data-theme="light" before first paint
            └── prevents flash-of-wrong-theme for returning light-mode users

ThemeProvider (src/lib/themeStore.jsx)
  ├── React context: theme, toggleTheme()
  ├── Sets document.documentElement.dataset.theme
  ├── Persists to localStorage
  ├── Updates meta[name="theme-color"] for mobile browser chrome
  └── Updates themeState.current (mutable mirror for non-React code)

ThemeToggle (Navbar)
  └── Sun/moon icon button → calls toggleTheme()

CSS
  └── html[data-theme="light"] { ...all 6 RGB channel vars re-map... }
       └── ~90 rgb(var(--accent-rgb)/X) calls across all components re-skin automatically

Three.js (non-React)
  └── reads themeState.current (mutable, synchronous)
       ├── PointCloud: useMemo keyed on theme → regenerates geometry + palette
       └── FogSync: useEffect on theme → updates scene.fog colour
```

### Why not `prefers-color-scheme`?
The dark "Observatory" look is the primary, designed-for experience. Light is an opt-in alternative. Defaulting to the OS preference would silently serve the light theme to dark-mode users who haven't visited before — the wrong default for a portfolio with a strong dark-first visual identity.

---

## Content System — MDX

Case studies and articles are authored in `.mdx` files and processed via `@mdx-js/rollup`. Each file imports custom MDX components from `src/components/mdx/MDXComponents.jsx`.

### Adding a case study

1. Create `src/content/case-studies/your-slug.mdx`
2. Import and register in `src/pages/CaseStudy.jsx`:
   ```js
   import YourProject from '../content/case-studies/your-slug.mdx';
   const studies = { ..., 'your-slug': YourProject };
   ```
3. Add a `caseStudyUrl: '/case-studies/your-slug'` entry in `src/data/projects.js`

### Adding a writing article

1. Create `src/content/writing/your-slug.mdx`
2. Add to `src/data/writing.js`:
   ```js
   { slug: 'your-slug', title: '...', description: '...', tags: [...], route: '/writing/your-slug' }
   ```
3. Import and register in `src/pages/Article.jsx`

### Available MDX components

```jsx
<CaseStudyHero label="..." title="..." description="..." links={[...]} />
<ArchitectureBlock steps={["Step 1", "Step 2", ...]} />
<MetricCard label="..." value="..." note="..." />
<TechStackBlock items={["Python", "FastAPI", ...]} />
```

---

## Projects Showcased

### TriageAI — ESI Clinical Intake & Care Routing Assistant
Healthcare AI decision-support workflow: FastAPI backend, real LightGBM ESI 3/4/5 model inference (272 features, 78.4% accuracy, 0.71% safety-critical error), safety-rule escalation, clinician accept/override with audit trail, PDF reports, dashboard views. Live on Azure.

### PolicyGPT Enterprise — Evidence-First RAG for HR & Compliance PDFs
Production-pattern RAG assistant: PyMuPDF extraction, SentenceTransformers embeddings, ChromaDB vector storage, evidence-gate scoring (retrieval confidence must clear a threshold before LLM generation is allowed), page-level citation cards, fallback guardrails. Verified: out-of-scope questions return 0 citations, 0.0000 confidence. Phase 1 MVP, local.

### ResumeIQ — AI Resume Intelligence & ATS Analysis Platform
NLP resume analysis: TF-IDF + Logistic Regression classifier, skill extraction, ATS compatibility scoring, template/placeholder detection, AI-like sentence quality checks, modular architecture for JD matching extension. Live on Azure.

---

## Performance & Accessibility

| Metric | Value |
|--------|-------|
| Main JS bundle (gzip) | ~141 KB |
| Three.js chunk (gzip) | ~235 KB (lazy, only when WebGL + motion available) |
| CSS (gzip) | ~12 KB |
| `prefers-reduced-motion` | Respected — 3D scene replaced by static poster; all Framer Motion animations disabled |
| Custom cursor | Fine-pointer + motion-ok devices only; `pointer-events: none` |
| Theme flash | Blocking inline script in `<head>` prevents flash-of-wrong-theme |
| Avatar ring animation | Disabled by global reduced-motion wildcard rule |
| Scroll animations | `useReducedMotion()` hook wired into all Framer Motion `Reveal` components |

---

## Running Locally

```bash
# clone
git clone https://github.com/chintan-02/Chintan-Patel-Portfolio.git
cd Chintan-Patel-Portfolio

# install
npm install

# dev server (hot reload)
npm run dev
# → http://localhost:5173

# production build
npm run build

# preview production build locally
npm run preview
```

> **Node requirement:** Node.js 18+ recommended (Vite 8 requirement).

---

## Adding Content

### Update personal info
Edit `src/data/siteMeta.js` — name, email, GitHub, LinkedIn, portfolio URL, resume path, availability text.

### Add a new project
Add an entry to `src/data/projects.js`. It auto-appears on `/projects` and in the case-study preview grid on the home page. The card renders conditionally — buttons for Live Demo, GitHub, and Read Case Study only appear if the URL fields are set.

### Add a new case study
1. Author `src/content/case-studies/your-slug.mdx`
2. Register in `src/pages/CaseStudy.jsx`
3. Set `caseStudyUrl: '/case-studies/your-slug'` in `src/data/projects.js`

### Add a new article
1. Author `src/content/writing/your-slug.mdx`
2. Add metadata to `src/data/writing.js`
3. Register in `src/pages/Article.jsx`

### Update the résumé
Replace `public/Chintan_Patel_Resume.pdf` — all "Download Resume" buttons across the site point to `/Chintan_Patel_Resume.pdf`.

### Update the proof-anchor numbers
Edit `src/data/proof.js` — this is the single source of truth used by both the Hero and the About page proof row. Change in one place, updates both.

---

## Deployment

Netlify auto-deploys on every push to `main`. The `netlify.toml` sets an SPA redirect rule (`/* → /index.html 200`) so React Router handles all client-side navigation.

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy manually to any static host:
```bash
npm run build
# upload the contents of dist/ to your host
```

---

## License

Personal portfolio — all content, project descriptions, personal information, and written articles belong to **Chintan Patel** and are not for redistribution. The React/Vite/Tailwind scaffolding is open for reference.
