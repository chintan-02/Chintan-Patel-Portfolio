# UI/UX refinement — 11 November 2026

Follow-up to merged PR #22. Keeps the existing hero headline and accurate delivery states.

## Implemented

- Shared 1200px frame/gutters; shorter hero with View Work and Resume; no repeated hero stats.
- Native scroll; remove cursor, fixed social rail and WebGL from the application shell. Existing source modules are retained but not loaded.
- Work, Engineering, Writing, About navigation; Contact and Resume actions, including mobile menu access.
- Consistent main project rows, TriageAI first; compact full-width Product Finder card. Case Study, Live Demo, Code hierarchy.
- Three key project evidence links, explicitly labelled as historical release records or offline evaluation.
- Two homepage engineering notes; small photo and permitted client-delivery summary.
- Inter UI/body, Fraunces major headings, Mono data; no Space Grotesk request. Supporting labels at least 12px and reduced tracking.
- Separate copper text/action tokens; darker light-theme accent text without darkening button fill.
- Responsive AVIF/WebP sources at 640/960/1280px for the two main homepage screenshots and TriageAI dashboard. Original PNGs remain for expanded screenshots and external references. Other case-study captures retain their existing images.

## Deliberately omitted

No view-mode toggle, health ledger, count-up metrics, popover system, rotating hero, chatbot, command palette, false production/deployment claims or GitHub language manipulation.

## External follow-ups

The site and resume current location are Edmonton; historical education/work cities remain intact. GitHub/LinkedIn profile fields and repository pins require authenticated profile controls. Existing TriageAI Netlify hostname is preserved until its replacement and redirect behavior can be verified; renaming alone must not break demo links or CORS. The confirmed duplicate Authorization header is handled in a separate TriageAI README pull request. No hosting or cloud-resource changes are included here.

## Verification

npm run check passes. Reviewed 360/390/768px iframe viewports (345/375/753px content width after scrollbar), both themes, and desktop. The nav/hero/project frame uses the same 1200px container; no canvas is mounted. Desktop first project begins near 730px rather than below a full-screen hero. Browser selects responsive AVIF images with explicit original dimensions and high priority on the first image. Reduced-motion reveals now render immediately in their final state; OS emulation was not available in this preview surface. New source links refer to records, not a claim of current cloud uptime. No new project metric or clinical-performance claim is introduced.
