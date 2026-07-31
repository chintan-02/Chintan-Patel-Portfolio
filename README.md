# Chintan Patel — Applied AI/ML Engineering Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/Content-MDX-1B1F24?style=flat-square&logo=mdx&logoColor=white)
![Three.js](https://img.shields.io/badge/3D-React_Three_Fiber-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployment-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

**A recruiter-focused portfolio for applied AI/ML engineering, data science, NLP, RAG, and responsible AI product work.**

[Live Portfolio](https://chintan-patel-ai.netlify.app/) ·
[GitHub Profile](https://github.com/chintan-02) ·
[LinkedIn](https://www.linkedin.com/in/chintan-patel-987765129/)

</div>

---

## Overview

This repository contains my personal AI/ML engineering portfolio.

The site is designed to show more than project titles or screenshots. It connects each flagship project to:

- the problem being solved
- the architecture and data flow
- model and system design decisions
- evaluation evidence
- safety and responsible AI boundaries
- implementation details
- deployment status
- current limitations
- next engineering steps

The portfolio combines a modern React interface with structured project data, MDX case studies, technical writing, interactive 3D visuals, responsive themes, and Netlify deployment.

---

## Portfolio Goals

The site is built to help technical recruiters, hiring managers, engineers, and collaborators quickly understand:

- what I have built
- which parts are working today
- how the systems are architected
- how I evaluate models beyond accuracy
- where human review and safety controls are used
- which capabilities are completed, experimental, or planned
- how I communicate technical work clearly

The portfolio targets opportunities in:

- Applied AI/ML Engineering
- Machine Learning Engineering
- Data Science
- NLP and RAG Engineering
- MLOps
- AI-focused Software Development

---

## Live Site

| Resource | Link |
|---|---|
| Portfolio | [chintan-patel-ai.netlify.app](https://chintan-patel-ai.netlify.app/) |
| GitHub | [github.com/chintan-02](https://github.com/chintan-02) |
| LinkedIn | [linkedin.com/in/chintan-patel-987765129](https://www.linkedin.com/in/chintan-patel-987765129/) |

The site is deployed through Netlify as a client-side React application.

---

## Portfolio operations

- Production deployment uses Netlify, with private Netlify Web Analytics based
  on aggregate CDN request logs; no client-side analytics library is added.
- Netlify prerendering should remain enabled and verified so SPA route metadata
  is visible to crawlers.
- Netlify supplies production security headers and a report-only CSP while
  browser compatibility is validated before enforcement.
- `/privacy` explains analytics, external links, email, and public downloads.
- A keyboard skip link targets the main page content, and a root error boundary
  provides safe reload and homepage recovery actions.
- GitHub Actions runs install, lint, build, and whitespace checks. Dependabot
  checks npm and GitHub Actions dependencies weekly without automatic merging.
- Run the complete local validation with `npm run check`.

---

## Flagship Projects

### TriageAI / SympDirect

**ESI Clinical Intake & Care Routing Assistant**

A healthcare AI clinical decision-support workflow for structured intake and ESI care routing.

The project combines:

- React and TypeScript clinical workflow
- FastAPI backend
- LightGBM V2 ESI 3/4/5 inference
- evidence-linked Clinical Intake NLP Safety Layer
- editable clinician review before prediction
- transparent safety-rule escalation
- clinician accept and override review
- SQLAlchemy persistence
- reviewed NLP evidence in the audit trail
- assessment detail and dashboard workflows
- prediction latency tracking
- backend-generated PDF summaries with reviewed NLP evidence

Verified model evidence:

| Metric | Value |
|---|---:|
| Accuracy | **78.32%** |
| Macro F1 | **70.37%** |
| Weighted F1 | **78.88%** |
| ESI 5 F1 | **54.70%** |
| Unsafe ESI 3→5 downgrade rate | **0.68%** |
| Model features | **273** |

> TriageAI is positioned as clinical decision support, not diagnosis or autonomous medical decision-making.

[Case Study](https://chintan-patel-ai.netlify.app/case-studies/triageai) ·
[Repository](https://github.com/chintan-02/triageai-esi-care-routing)

---

### PolicyGPT Enterprise

**Production-Style Evidence Intelligence for Policy Documents**

PolicyGPT Enterprise v0.3.0 is a production-style policy RAG system that makes document identity, provenance, answerability, controlled failure, evaluation, and release-like local deployment part of the product contract.

The project includes:

- Next.js Documents, Ask, Evaluation, and System workspaces
- server-side BFF and FastAPI evidence API
- PostgreSQL document identity and lifecycle metadata
- SHA-256 duplicate prevention and atomic source storage
- page-aware PyMuPDF extraction and metadata-rich chunking
- local SentenceTransformer embeddings
- persistent ChromaDB evidence retrieval
- calibrated answerability and evidence gating
- page-level citations
- generated-answer, citation-only, and unsupported states
- versioned 16-case RAG evaluation
- request IDs, structured logs, liveness, and readiness
- Alembic migrations and a four-service Docker Compose release profile

Verified v0.3.0 evidence:

| Metric | Value |
|---|---:|
| Controlled benchmark cases | **16** |
| Answer-readiness accuracy | **100%** |
| Expected-page retrieval hit rate | **100%** |
| Backend tests | **229** |
| Frontend tests | **112** |

> The benchmark values describe one controlled local provider-disabled run. Supported cases returned citation-only evidence, so generated-answer quality was not evaluated. This is not a cloud-production or real-company deployment claim.

[Case Study](https://chintan-patel-ai.netlify.app/case-studies/policygpt-enterprise) ·
[Repository](https://github.com/chintan-02/policygpt-enterprise)

---

### ResumeIQ

**Privacy-Aware Resume Intelligence Platform**

An NLP decision-support system for resume analysis, job-description matching, skill intelligence, and structured reviewer workflows.

The project includes:

- PDF, DOCX, and TXT parsing
- TF-IDF role classification
- ATS-style compatibility signals
- keyword matching
- semantic similarity
- skill normalization
- skill-gap analysis
- generic-sentence detection
- rewrite guidance
- batch ranking foundations
- recruiter notes and shortlist workflows
- privacy-safe display mode
- FastAPI foundation
- SQLAlchemy persistence
- Docker Compose
- GitHub Actions
- Azure demonstration deployment

ResumeIQ avoids presenting its baseline model as production-validated until leakage, split quality, class balance, calibration, and independent evaluation are completed.

[Live Demo](https://resume-classifier-chintan.azurewebsites.net/) ·
[Case Study](https://chintan-patel-ai.netlify.app/case-studies/resumeiq) ·
[Repository](https://github.com/chintan-02/smart-resume-classifier)

---

## Case Study System

Project case studies are authored in MDX and rendered through reusable React components.

Current case studies:

- TriageAI
- PolicyGPT Enterprise
- ResumeIQ

Each case study can present:

- project context
- problem statement
- architecture
- data flow
- model or retrieval pipeline
- evaluation metrics
- safety constraints
- technical stack
- design decisions
- limitations
- roadmap
- repository and demo links

Reusable MDX components include:

```jsx
<CaseStudyHero />
<ArchitectureBlock />
<MetricCard />
<TechStackBlock />
```

This approach keeps long-form technical content separate from page-layout code while preserving a consistent visual system.

---

## Technical Writing

The portfolio includes an MDX-based technical writing section tied directly to project decisions.

Current topics include:

- LightGBM versus XGBoost
- evidence-gated RAG
- explainable AI in practice
- model evaluation beyond accuracy
- data drift and production monitoring

The writing section is intended to demonstrate:

- technical reasoning
- model-selection judgment
- system-design understanding
- responsible AI awareness
- ability to explain complex ideas clearly

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | React 19 | Component-driven user interface |
| Build system | Vite 8 | Development server and production bundling |
| Styling | Tailwind CSS v4 | Utility styling and CSS-first design tokens |
| Routing | React Router DOM 7 | Client-side route handling |
| Content | MDX | Case studies and technical articles |
| Animation | Framer Motion | Page and scroll transitions |
| 3D rendering | React Three Fiber and Three.js | Interactive point-cloud background |
| Smooth scrolling | Lenis | Controlled page scrolling |
| Icons | Lucide React | Consistent icon system |
| Hosting | Netlify | Static deployment and SPA routing |
| Code quality | ESLint | JavaScript and React linting |

---

## Application Architecture

```text
Browser
  │
  ▼
React SPA
  │
  ├── Global Page Shell
  │     ├── Navbar
  │     ├── Footer
  │     ├── Social Links
  │     ├── Smooth Scrolling
  │     ├── Theme Provider
  │     └── Optional 3D Scene
  │
  ├── Route Pages
  │     ├── Home
  │     ├── Projects
  │     ├── Case Studies
  │     ├── Writing
  │     ├── About
  │     ├── Contact
  │     └── Not Found
  │
  ├── Structured Data
  │     ├── Projects
  │     ├── Skills
  │     ├── Experience
  │     ├── Education
  │     ├── Writing Metadata
  │     └── Site Metadata
  │
  └── MDX Content
        ├── Project Case Studies
        └── Technical Articles
```

### Content flow

```text
src/data/*.js
      ↓
Page and reusable UI components
      ↓
Rendered portfolio content
```

```text
src/content/*.mdx
      ↓
Vite MDX loader
      ↓
CaseStudy and Article routes
      ↓
Rendered long-form content
```

---

## Pages and Routes

| Route | Purpose |
|---|---|
| `/` | Main portfolio landing page |
| `/projects` | Flagship project overview |
| `/case-studies` | Case-study index |
| `/case-studies/triageai` | TriageAI case study |
| `/case-studies/policygpt-enterprise` | PolicyGPT Enterprise case study |
| `/case-studies/resumeiq` | ResumeIQ case study |
| `/writing` | Technical writing index |
| `/writing/:slug` | Individual technical article |
| `/about` | Professional background and current focus |
| `/contact` | Contact methods and opportunity context |
| `/privacy` | Privacy and aggregate analytics disclosure |
| `*` | Custom not-found page |

---

## Design System

The site uses a custom visual system called **Observatory**.

### Dark theme

The default theme uses:

- deep-space background surfaces
- warm amber accents
- violet depth highlights
- cinematic display typography
- transparent layered panels
- restrained motion
- technical mono labels

### Light theme

The optional light theme remaps the same design tokens to:

- warm cream backgrounds
- charcoal text
- bronze accents
- deeper plum highlights

Theme state is stored in the browser and applied before the first React paint to reduce incorrect-theme flashing.

### Typography

| Role | Typeface |
|---|---|
| Primary UI | Inter |
| Display headings | Space Grotesk |
| Cinematic accent heading | Fraunces |
| Code and technical labels | JetBrains Mono |

### Reusable visual primitives

The interface uses shared components for:

- buttons
- badges
- cards
- project cards
- technology chips
- section headers
- scroll reveals
- layout shells
- MDX case-study blocks

---

## Interactive 3D Background

The portfolio includes a code-generated point-cloud scene built with React Three Fiber and Three.js.

The scene:

- uses multiple Gaussian point clusters
- responds subtly to scroll position
- supports pointer parallax
- uses theme-specific particle palettes
- changes blending behavior between dark and light themes
- is lazy-loaded as a separate bundle
- uses fewer particles on mobile and touch devices
- falls back to a static visual when WebGL is unavailable
- respects reduced-motion preferences

```text
Scene Gate
  ├── WebGL available and motion allowed
  │      ↓
  │   Lazy-load React Three Fiber canvas
  │      ↓
  │   Render interactive point cloud
  │
  └── WebGL unavailable or reduced motion requested
         ↓
      Render static CSS fallback
```

The 3D scene is decorative. It is kept behind readable content and is not required for navigation or understanding the site.

---

## Theme and Motion Accessibility

The site includes several accessibility-oriented behaviors:

- `prefers-reduced-motion` support
- static fallback when animated 3D should not run
- motion-aware custom cursor behavior
- cursor disabled for touch or coarse-pointer devices
- keyboard-accessible links and buttons
- semantic page structure
- high-contrast dark and light themes
- visible focus states
- descriptive image alternative text
- route-level scroll reset
- theme persistence without relying only on operating-system defaults

Accessibility is treated as an ongoing engineering responsibility rather than a completed certification claim.

---

## Performance Approach

The portfolio uses several strategies to reduce unnecessary runtime work:

- route-oriented component structure
- lazy loading for the Three.js scene
- static fallback for unsupported WebGL environments
- reduced particle count on mobile devices
- MDX content compiled at build time
- static data modules for portfolio content
- optimized Netlify static deployment
- production build through Vite
- reusable components to avoid duplicated page logic

Exact bundle sizes can change as content and dependencies evolve, so the README does not treat a single local build measurement as a permanent performance guarantee.

---

## Project Structure

```text
Chintan-Patel-Portfolio/
├── public/
│   ├── Chintan_Patel_Resume.pdf
│   ├── profile.JPG
│   ├── favicon.svg
│   ├── og-image.svg
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── mdx/
│   │   ├── projects/
│   │   ├── three/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── case-studies/
│   │   │   ├── triageai.mdx
│   │   │   ├── policygpt.mdx
│   │   │   └── resumeiq.mdx
│   │   └── writing/
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── writing.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   ├── proof.js
│   │   ├── navLinks.js
│   │   └── siteMeta.js
│   │
│   ├── lib/
│   │   ├── themeStore.jsx
│   │   ├── scrollStore.js
│   │   ├── motion.js
│   │   └── utils.js
│   │
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
└── README.md
```

---

## Local Development

### Requirements

- Node.js 18 or newer
- npm

### Clone the repository

```bash
git clone https://github.com/chintan-02/Chintan-Patel-Portfolio.git
cd Chintan-Patel-Portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

### Run lint checks

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Content Management

### Update personal metadata

Edit:

```text
src/data/siteMeta.js
```

This file contains:

- name
- professional title
- location
- email
- GitHub URL
- LinkedIn URL
- portfolio URL
- resume path
- availability statement

### Update projects

Edit:

```text
src/data/projects.js
```

Project data controls:

- title and category
- status
- description
- technology stack
- feature list
- metric cards
- pipeline steps
- repository link
- demo link
- case-study route

### Add a case study

1. Create an MDX file:

```text
src/content/case-studies/your-project.mdx
```

2. Register the file in the case-study route map.

3. Add the matching `caseStudyUrl` to `src/data/projects.js`.

### Add a technical article

1. Create an MDX file:

```text
src/content/writing/your-article.mdx
```

2. Add its metadata to `src/data/writing.js`.

3. Register it in the article route map.

### Update the resume

Replace:

```text
public/Chintan_Patel_Resume.pdf
```

The site’s resume buttons reference this file.

---

## Deployment

The portfolio is deployed on Netlify.

The repository includes SPA redirect configuration so React Router can handle direct visits to nested routes.

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Netlify workflow

```text
Push to main
   ↓
Netlify build
   ↓
npm run build
   ↓
Publish dist/
   ↓
Live portfolio updated
```

For another static host:

```bash
npm run build
```

Upload the generated `dist/` directory according to the hosting provider’s static-site instructions.

---

## Engineering Decisions

### Structured data instead of repeated page text

Project, skill, education, and experience content is stored in centralized data modules. This reduces duplicated content across pages and makes updates easier to manage.

### MDX for long-form technical work

Case studies and writing articles use MDX because they need both readable content and reusable interactive React components.

### Decorative 3D kept separate from core navigation

The WebGL scene is lazy-loaded and has a static fallback. The portfolio remains usable without Three.js, animation, or WebGL.

### One theme system for CSS and 3D

A shared theme state keeps the React interface and Three.js visuals synchronized when users switch between dark and light modes.

### Evidence-focused project communication

Project content emphasizes:

- verified metrics
- architecture
- responsible AI boundaries
- human-review workflows
- limitations
- deployment status
- planned work

This avoids presenting prototypes as production systems or future features as completed experience.

---

## Current Limitations

- the portfolio is a client-side application without a content-management backend
- project content must be updated manually in data and MDX files
- the 3D scene increases optional JavaScript bundle size
- accessibility testing is ongoing and is not presented as formal certification
- there is no automated visual-regression suite yet
- there is no end-to-end browser test suite yet
- analytics and privacy controls depend on future implementation choices
- live project availability may depend on third-party hosting status
- project details must be kept synchronized with their source repositories

---

## Planned Improvements

- add automated component and route testing
- add end-to-end browser tests
- add automated accessibility checks
- add performance-budget checks
- add visual-regression testing
- add project screenshots and architecture diagrams where useful
- improve Open Graph previews for case studies
- add structured metadata for search engines
- keep project metrics and statuses synchronized with repository evidence
- continue refining mobile and reduced-motion experiences

---

## Accuracy and Honesty

This portfolio separates:

- completed project functionality
- experimental foundations
- deployment demonstrations
- future roadmap work

Project metrics should match their source repositories and saved evaluation artifacts.

The site does not claim that portfolio projects are production clinical, legal, compliance, or hiring systems. Each case study documents its decision-support boundaries and limitations.

The portfolio itself is a deployed frontend application and project communication system. It is not represented as a full multi-user SaaS platform.

---

## Author

**Chintan Patel**

Applied AI/ML Engineer based in Calgary, Alberta, Canada.

- [Portfolio](https://chintan-patel-ai.netlify.app/)
- [LinkedIn](https://www.linkedin.com/in/chintan-patel-987765129/)
- [GitHub](https://github.com/chintan-02)
- [Email](mailto:patel.chintan380@gmail.com)

---

## License and Use

This repository contains personal portfolio content, project descriptions, visual design, and technical writing created for Chintan Patel’s professional portfolio.

The source code may be reviewed for learning and reference. Personal information, project narratives, written articles, and visual branding should not be redistributed or presented as another person’s work.
