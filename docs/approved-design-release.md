# Approved portfolio migration

Base: f9ce13e5ba3f0bd52070434a32c4848dee782b41.

## Implemented

Approved editorial homepage and compact shared navigation; three rotating captions and reduced-motion support; 14px desktop / 16px mobile navigation; supplied jumping-figure landscape with a transparent background and responsive desktop/mobile framing; CP favicon; new portrait on homepage and About; historical India-only Dreamview experience.

## Preserved

Netlify configuration, legacy redirects, SPA fallback, security headers, report-only CSP, cache settings, CI, package lock and dependencies. Official canonical URLs, SEO components, robots/sitemap, project and engineering data, case studies, privacy/analytics disclosure, resume PDF and existing theme storage key (`theme`). Preview-specific URLs, noindex behavior and Sites hosting settings were excluded. Account-level Netlify settings were not modified or verified from the repository.

## Evidence checked before migration

TriageAI e6bf93c model registry: Macro F1 0.703701847 and ESI 3-to-5 rate 0.006805736 support displayed 70.4% and 0.68%. PolicyGPT 248f59e has 16 questions in eval/questions.jsonl and compose evaluation scripts; 358 tests is the existing historical release snapshot, not a current suite run. RegImpact 448f598 deploy/destroy workflows share concurrency, use a confirmation environment variable and capture inventory before deletion. This does not claim current staging availability or completed deletion.

## Validation

Lint/build and generated SEO checks; whitespace and preserved-file comparisons. Browser checks at 360, 390, 768 and 1280 widths, including image framing, mobile menu/Escape, theme persistence, navigation, official canonical/indexing and new About portrait. Final Netlify deploy-preview checks and post-merge production verification remain release steps.

## Pending project work

- RegImpact independent Human B annotation/adjudication and separate Companion/MCP implementation.
- PolicyGPT broader live-provider generated-answer quality evaluation.
- Product Finder agent/tool-use evaluation beyond its bounded catalogue.
- New current test-count claims require freshly executed project suites.

The supplied hero image had an opaque background. Background extraction produced a transparent asset; an optimized WebP is used with theme-specific CSS brightness and edge blending. The prior conceptual diagram and its animated connections are removed. Headline, subtitle, buttons and all other sections stay unchanged.

Final refinement: desktop image area reduced from 40vw to 32vw (capped at 480px), with top anchoring to preserve the figure and cliff edges. Dark mode removes the warm glow and substantially desaturates the blue; mobile framing remains unchanged.
