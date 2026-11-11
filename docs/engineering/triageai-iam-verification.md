# TriageAI: operator verification of an AI IAM recommendation

Incident date: 16 October 2026. Portfolio evidence audit: 11 November 2026.

## What happened

A dated development conversation records an assistant recommending
`roles/iam.serviceAccountOpenIdTokenCreator` for the operator's impersonation
workflow. Chintan ran the smoke check and returned a `PERMISSION_DENIED` error
identifying `iam.serviceAccounts.getAccessToken`. The assistant then corrected
its recommendation to `roles/iam.serviceAccountTokenCreator`.

This is a paraphrased incident summary, not a verbatim transcript or a newly
executed experiment. Account emails, project identifiers, commands containing
resource identifiers, tokens and private conversation content are omitted.

## Attribution

| Contribution | Attribution |
| --- | --- |
| Initial role recommendation | AI assistant |
| Running the check and reporting the contradicting permission error | Chintan Patel |
| Revised technical diagnosis and role recommendation | AI assistant, informed by the operator's result |
| Final configuration and candidate checks | Operator-verified deployment recorded in the repository |

The example demonstrates that the operator checked and challenged an AI
recommendation with runtime evidence. It does not claim that Chintan
independently discovered the underlying IAM diagnosis, nor that he rejected the
proposal before testing it.

## Public corroboration

The original development exchange is private. The public artifacts below verify
the resulting configuration and release checks; they do not independently prove
who said what in that conversation.

- [Pinned runbook: runtime configuration and IAM](https://github.com/chintan-02/triageai-esi-care-routing/blob/8af95ea72bfe595c4b0789ef352556d84e661bec/docs/deployment/live-demo-runbook.md#runtime-configuration-and-iam): explicitly records that OpenID Token Creator alone was insufficient for this gcloud impersonation flow, and that the operator has Token Creator on the smoke identity only.
- [Pinned release evidence](https://github.com/chintan-02/triageai-esi-care-routing/blob/8af95ea72bfe595c4b0789ef352556d84e661bec/docs/releases/cloud-demo-2026-10-17.md): records successful candidate health, readiness, inference, workspace-isolation and private-PDF checks.
- [Google Cloud role reference](https://docs.cloud.google.com/iam/docs/service-account-permissions): distinguishes token-creation permissions and the role used for gcloud impersonation.

## Boundary and lesson

The narrower role can be appropriate for direct ID-token generation. The lesson
is to test the actual authentication path, rather than assume a role is always
sufficient or always inadequate. Token Creator is a broader role; in this
recorded configuration it was scoped to the smoke service account, not granted
across the project. The example is a historical deployment incident, not an
instruction to change current cloud permissions.

The educational release does not establish clinical validation or production
approval. No cloud resources or IAM policies were changed during the portfolio
evidence audit.
