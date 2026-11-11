# Portfolio audit implementation — 11 November 2026

## Scope and evidence standard

Reviewed the supplied nine-page Portfolio Audit against the portfolio and all five personal project repositories. Read implementations, tests, deployment configuration, evaluation definitions and committed numerical artifacts, rather than relying only on READMEs. This change updates portfolio presentation, not project runtimes. Historical test counts remain historical release snapshots; project suites were not rerun as part of this content change.

## Repository snapshots

| Repository | Inspected default-branch commit |
|---|---|
| policygpt-enterprise | `248f59e178a31515a63e617409aebedc02ba30f9` |
| product-finder-adk-agent | `09acbcd4bb6e1a9424efa8624c1c42f39f6f9907` |
| regimpact-ai | `448f5980423649ac923555ef892b19075b186a93` |
| smart-resume-classifier | `6f5852cdf0ec7ea5a0db4263984d8bbf9d6d0976` |
| triageai-esi-care-routing | `8af95ea72bfe595c4b0789ef352556d84e661bec` |

## Project checks that informed the changes

- **TriageAI:** final registry test JSON confirms 78.3238% accuracy, 70.3702% macro F1, 54.6966% ESI 5 F1, and 215 ESI 3→5 errors (0.6806% of true ESI 3). Read `tests/backend/test_auth_ownership.py`, clinical-review/safety contracts, release records and runbook. Calibration CSVs already exist: added a reliability chart from the raw ESI 5 curve. The calibration decision rejects Platt/isotonic alternatives on validation class-performance criteria. An archived comparison uses different LightGBM results; do not invent a final-registry baseline uplift.
- **RegImpact:** inspected `apps/api/src/regimpact/agent_workflow.py`, `agent_evaluation.py`, adjudication/evidence modules and tests, Azure workflow and Bicep. Controlled deterministic agent proposals and evaluations already exist, without autonomous execution. Separate MCP integration remains planned. Human-label packaging/adjudication tooling exists; completion of independent Human B review is not claimed. No cloud resources were provisioned for this audit.
- **PolicyGPT:** inspected retrieval confidence/evidence gating, evaluation scoring/runner, 16 dataset records (11 supported, five unsupported), and frontend evaluation API/domain code/tests. Release documentation records 230 backend and 128 frontend tests. Readiness, expected-page hits and fallback correctness do not measure generated-answer quality. The existing provider-disabled benchmark caveat stays visible in the case study; no new citation-accuracy or production-quality percentage was invented.
- **Product Finder:** inspected `backend/app/agent.py`, deterministic `product_service.py`, product validation and tests. Exactly one ADK agent and a fixed 13-product catalogue. Numeric filtering is Python-owned. Prompt instructions to call once are not themselves a guarantee of runtime compliance or an end-to-end agent evaluation harness.
- **ResumeIQ:** inspected prediction, parsing/scoring/workflow modules and tests. Existing NLP project, with its offline demo clearly labelled in Earlier work; no unverified accuracy claim. No tutorial feature or runtime rewrite was needed for this portfolio pass.

## Audit disposition

| Audit request | Implementation / decision |
|---|---|
| Conflicting current locations | Edmonton used in About, Contact, structured data and downloadable resume header. Calgary remains where it describes SAIT or historical work. LinkedIn is external and was not edited. |
| Placeholder previews, wrong PolicyGPT preview on RegImpact | Removed generic fallback entirely. Only real TriageAI/PolicyGPT captures render. RegImpact homepage has a clearly labelled workflow summary, not a fake screenshot. |
| Homepage demo access | TriageAI hero and project card now have direct demo links. Product Finder demo remains accessible. |
| Homepage disclosure overload | Shorter summaries and delivery labels; detailed operational limitations retained in case studies. Local release and educational scope remain clear. |
| Sponsorship signal | Deferred: exact current authorization and expiry are not established by repository evidence. Do not infer “no sponsorship required” from education or PGWP plans. Open-to-work signal is visible. |
| Generic hero / version stats | Concrete project domains and two public demos; cloud delivery, not an unsupported four-deployed-systems count or universal cloud CI/CD claim. |
| Weakest visual first | TriageAI now first on homepage and Work index. Fresh RegImpact screenshots still pending. |
| Metric readability | ESI 3→5 under-triage explained with denominator and counts. Macro F1 rounded on cards; exact figures remain in case study. PolicyGPT evaluation scope and named test counts retained. |
| ML baseline / calibration | Calibration curve and selection tradeoff added from committed data. Consistent final-registry baseline comparison remains pending. |
| Dreamview timeline / delivery | Kept documented India employment dates; added separate current client-delivery section. No invented 2021 founding date, present-day India employment, revenue or customer-impact metrics. |
| Jargon | Plain-English lead sentences on project cards; detailed architecture belongs in case studies. |
| Staging demo hostname | Working URL preserved; changing hosting DNS/name would need hosting access and coordinated redirects/CORS checks. |
| TriageAI 17-section story | Rewritten into eight sections; demo, screenshot and contextual metrics first; three-step walkthrough, calibration, architecture, cloud and validation. Related AI incident moved below project body. |
| AI-assisted engineering identity | Reframed as Engineering decisions, surfaced from Writing. Existing /engineering URL and anchors preserved. Removed homepage process pitch. |
| Navigation / duplicate indexes | Work · Writing · About · Contact. Case Studies index redirects to Work; individual case-study routes remain. |
| Test count ambiguity | Explicit PolicyGPT release-snapshot labels; TriageAI release tests named in its own case study. No summed cross-project count. |
| Duplicate proof / capability blocks | Removed homepage repeated strips/capability grid and About proof repetition. Removed SCROLL cue and website-description filler. |
| ResumeIQ prominence | Earlier work link on Work page; detailed case study remains reachable. |
| Contact duplication | One location, one availability statement, no response-time promise. |
| Move-to-Canada milestone | Retitled with MacEwan credential. |
| Keywords tag | Removed. |
| Muted-text contrast | Faint text tokens adjusted for normal-size text contrast on base and surface backgrounds in both themes; translucent gradients still require visual judgment. External buttons now retain their visible accessible name rather than generic “Open link”. |
| Mobile / reduced-motion canvas | Already implemented by Scene.jsx; preserved, not claimed as a new fix. |
| Oversized OG image | Added 1200×630 JPEG (~78 KB versus ~629 KB PNG); share metadata updated. Original PNG retained for old external links. |
| 404 | NotFound and noindex already exist. SPA fallback still returns HTTP 200; no false claim that a client route changes HTTP status. True server-side 404 handling remains a separate hosting decision. |
| Route-level splitting / metadata | Existing lazy routing and per-case metadata retained, build validation run. |
| Custom domain | Deferred; purchase and DNS are not necessary to validate this implementation. |
| Project writing links | Added contextual engineering-article links from the three main homepage projects. |

## Pending work, in priority order

1. **RegImpact Companion Phase 0:** audit API/auth/RBAC/retrieval/citation contracts before implementing a separate read-only MCP adapter and bounded multi-step runtime. Evaluate tool selection, denied actions, unsupported requests, citation support, latency and cost. Existing deterministic RegImpact evaluation is useful groundwork, not proof this companion is built.
2. **PolicyGPT hosted readiness and answer evaluation:** implement auth/tenant boundaries before public uploads; managed persistence/backups, secrets, quotas and deployment. Run a provider-enabled benchmark with supported/unsupported questions, claim-level support checks, adjudication, provider errors, prompt/model versions and latency/cost. Keep the one-handbook evaluation limitation visible.
3. **RegImpact independent human evidence:** obtain Human B labels, execute adjudication, package agreement/disagreement evidence. Complete training/promotion gates only when authorized. Capture sanitized product screenshots from a working environment; do not publish stale or mocked captures as current.
4. **TriageAI final-registry baseline:** reproduce baseline and champion on the same split, preprocessing, feature contract and threshold protocol. Reconcile archive differences. Add prospective subgroup/clinical evaluation only with appropriate governance; existing offline subgroup/calibration reports are not absent. Isolate staging and test database restoration.
5. **Agent observability:** add versioned prompts, tool traces, per-request latency and model cost to the companion/agent runtime, with redaction and retention. No need to bolt a tracing tool onto a static portfolio.
6. **Product Finder evaluation:** scripted end-to-end cases for tool-use correctness, strict price boundaries, empty results, unsupported prompts and provider failure; current deterministic unit tests do not prove whole-agent behavior.
7. **ResumeIQ:** frontend migration, reliable hosted demo and measured parser/matching evaluation before promoting to featured work again.
8. **Public profile consistency:** user confirms current work authorization and any date-limited condition before adding sponsorship wording. Update LinkedIn city and the master resume source; the repository PDF header is corrected here. Current field-work/employment dates in the resume also merit a separate confirmed employment review.
9. **Hosting polish:** optional custom domain, coordinated TriageAI hostname change with redirects and CORS/API checks; true HTTP 404 strategy if needed. Keep existing working links until replacements are verified.
10. **Client outcomes:** publish permitted delivery evidence and measured business outcomes when available. Client websites show practical delivery; do not invent conversion/revenue improvements or present client work as personal AI-system evaluation.

## Additional judgment

The audit's reviewer timings, scores, superiority claims and custom-domain credibility claims are opinions, not measurements. Its four-deployed-systems and no-sponsorship wording should not be pasted unchanged. AWS is an optional job-targeted extension, not a prerequisite to finish the planned Azure/GCP systems. Prioritize a complete evaluated companion and hosted RAG system over adding another cloud or framework solely for keywords. No need to build a new design system or duplicate the project case studies.

## Validation

Portfolio lint, production build and generated metadata validation are required for this change. Validate desktop/mobile layouts, light/dark themes, links, redirected index, existing engineering hash navigation and unknown-route noindex on the deployment preview. The supplied audit did not test mobile. Desktop 1363px and a 375px iframe viewport were visually reviewed in light/dark themes. Mobile content width was 360px after its scrollbar, without horizontal overflow; no mobile canvas rendered. TriageAI has eight sections and no broken image at initial inspection. Engineering hash navigation settled at 112px below the fixed header; unknown route rendered NotFound with noindex; the old case-study index reached /projects. Visual and live-check outcomes are also recorded in the PR; source review alone does not certify production uptime, clinical safety or current cloud configuration.
