# TriageAI LinkedIn update — prepared, not posted

## Project entry

TriageAI / SympDirect — Review-first Clinical Intake & ESI Care Routing

Built and evaluated a React/FastAPI/LightGBM ESI 3/4/5 workflow with evidence-linked NLP, explicit safety escalation, clinician review and auditable PDF reporting. Held-out evaluation: 70.37% Macro F1 and 0.68% unsafe ESI 3-to-5 downgrade rate.

Deployed an educational demo using Netlify, a non-root Cloud Run container, Neon PostgreSQL/Alembic, database-backed sessions, server-enforced workflow roles and owner-scoped workspaces. Added private GCS report snapshots, bounded hourly cleanup, uptime/error/job alerts and verified email delivery. Tested tagged candidates before promoting an image pinned by digest. Public release remains operator-driven.

Use synthetic data only. This is decision support, not diagnosis or a clinically validated system.

Live: https://triageai-chintan-staging.netlify.app/
Case study: https://chintan-patel-ai.netlify.app/case-studies/triageai
Code: https://github.com/chintan-02/triageai-esi-care-routing

## Featured

Add the live frontend as “TriageAI — Live ML Decision-Support Demo”. Keep the case study for architecture/evaluation evidence. Do not link recruiters directly to an API health endpoint. After Netlify publishes, refresh the case-study preview if necessary.

## Deployment milestone post

TriageAI now has a live educational demo.

The model was only one part of the work. Taking the existing React/FastAPI/LightGBM workflow into the cloud meant making authentication, persistence, reports and operations work together:

- Netlify frontend and containerized Google Cloud Run API
- PostgreSQL migrations and separate database identities
- Private workspaces and server-enforced workflow permissions
- Authenticated PDF downloads with fresh snapshots after clinician-review changes
- Hourly bounded cleanup of eligible demo data
- Uptime, API-error and cleanup alerts, with email delivery tested

One useful bug surfaced during the live walkthrough: a PDF generated before clinician review was still being downloaded after acceptance. The fix now creates a fresh snapshot when inputs change while preserving older reports. I verified it on private staging before promoting the public revision.

The model evaluation remains unchanged: 70.37% Macro F1 and 0.68% unsafe ESI 3-to-5 downgrade rate for its evaluated scope. Operational monitoring is separate from clinical validation and live model-drift monitoring.

Try it with synthetic data: https://triageai-chintan-staging.netlify.app/
Architecture and limitations: https://chintan-patel-ai.netlify.app/case-studies/triageai

This is an educational decision-support demo, not a diagnostic or clinically validated application.

#AppliedAI #MachineLearning #FastAPI #GoogleCloud #SoftwareEngineering

## ResumeIQ correction

Update any Featured demo link or project description that still advertises the previous Azure site as working. State: “Previous Azure demo currently offline; frontend migration planned. Source and case study available.” Do not claim the planned React/Next.js migration is complete.
