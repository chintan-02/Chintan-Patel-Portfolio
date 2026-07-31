# Portfolio security hardening

## Response headers

Netlify applies the following headers to all portfolio routes:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security: max-age=31536000`
- `Cross-Origin-Opener-Policy: same-origin-allow-popups`
- `Permissions-Policy` disables camera, microphone, geolocation, payment, USB, and browsing topics
- `Content-Security-Policy-Report-Only` records policy violations without blocking resources

Fingerprint-named Vite files under `/assets/*` receive
`Cache-Control: public, max-age=31536000, immutable`. The SPA document is not
given immutable caching.

## Report-only Content Security Policy

The CSP starts in report-only mode because the portfolio uses React, Framer
Motion, Google Fonts, MDX, and a conditionally loaded Three.js canvas. Reporting
first allows the production site to be exercised across themes, routes, motion
preferences, WebGL availability, and external navigation before a blocking
policy is deployed.

Allowed sources are deliberately narrow:

- `'self'` supplies the Vite scripts, CSS, images, resume, theme bootstrap,
  same-origin navigation, and any same-origin runtime connection.
- `https://fonts.googleapis.com` supplies the current Google Fonts stylesheet
  and is allowed for its preconnect request.
- `https://fonts.gstatic.com` supplies the font files referenced by that
  stylesheet and is allowed for its preconnect request.
- `'unsafe-inline'` is limited to `style-src` for React and animation-library
  style attributes. It is not allowed for scripts.

The policy does not allow wildcard script origins, `unsafe-eval`, inline
executable scripts, object embeds, third-party connections, `data:` images, or
`blob:` workers. Route JSON-LD remains a non-executable
`application/ld+json` data block. Netlify Web Analytics needs no CSP origin
because it uses CDN request logs rather than a browser analytics request.

## Manual checks before CSP enforcement

On a Netlify deploy preview and the production domain:

1. Confirm `theme-init.js` loads before the module application script and that
   a saved light theme appears without an incorrect-theme flash.
2. Navigate directly to every public route, refresh it, and follow internal
   links between routes.
3. Exercise the desktop and mobile navigation, theme toggle, resume download,
   mail link, GitHub, LinkedIn, Azure demo, repository, and release links.
4. Verify writing and case-study previous/next cards plus their bottom back links.
5. Test the skip link with the keyboard and confirm focus moves to `#main-content`.
6. Check desktop WebGL rendering, reduced-motion fallback, mobile static poster,
   and a browser without WebGL.
7. Expand representative MDX images and inspect case-study screenshot galleries.
8. Confirm page title, description, canonical, robots, Open Graph, Twitter, and
   JSON-LD values change after client-side navigation.
9. Confirm `/privacy`, `/.well-known/security.txt`, `/robots.txt`, and
   `/sitemap.xml` return the expected static resources.
10. Check DevTools Console and Network for CSP reports, failed resources,
    unexpected cross-origin connections, mixed content, and application errors.

Browsers log report-only CSP violations in DevTools Console. In Network, inspect
the document response to confirm the exact
`Content-Security-Policy-Report-Only` value. If a reporting endpoint is added
later, configure `report-to` or `report-uri` only after the endpoint and its data
handling have been reviewed.

After representative production testing shows no required source is blocked,
rename the Netlify response header from
`Content-Security-Policy-Report-Only` to `Content-Security-Policy`, deploy to a
preview first, repeat the checklist, and then promote the enforced policy.

## SPA crawler and status-code limitation

The Netlify fallback serves `index.html` with status `200` for client-side
routes. The React not-found view therefore remains a soft 404 at the HTTP layer,
even though it sets `noindex, nofollow`. This pass does not add an Edge Function
or routing migration. Enable and verify Netlify prerendering for crawler-visible
route metadata, and treat true route-specific HTTP status responses as a later,
separately tested deployment change.
