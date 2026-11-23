// Curated from the existing case studies; role labels are navigation, not fit scores.
export const roleEvidence = {
  retrieval: {
    projectSlug: 'policygpt', label: 'Grounded retrieval', category: 'Generative AI & RAG',
    title: 'Policy answers grounded in page citations',
    summary: 'PDF extraction, chunking, SentenceTransformer embeddings, and ChromaDB retrieval connect policy questions to page-level evidence.',
    decision: 'Gate evidence before generation. Unsupported questions and provider failures have separate fallback paths, so a fluent answer is not mistaken for a supported one.',
    proof: 'The final local holdout passed 23/24 cases, correctly declined 4/4 unsupported questions, and recorded zero request errors.',
    boundary: 'Verified local Docker Compose release. The 24 cases use a fictional handbook. The only scored miss was an exact-keyword mismatch.',
    stack: ['FastAPI', 'ChromaDB', 'SentenceTransformers', 'Evidence gates'],
    evidenceUrl: 'https://github.com/chintan-02/policygpt-enterprise#evaluation-framework', evidenceLabel: 'View evaluation results'
  },
  hybrid: {
    projectSlug: 'regimpact-ai', label: 'Hybrid search & review', category: 'Retrieval engineering',
    title: 'Hybrid retrieval for regulatory review',
    summary: 'Section-level change detection, obligation analysis, and keyword-plus-vector retrieval support proposed control mappings.',
    decision: 'Keep source lineage attached to proposed impacts and require authorized human review before consequential decisions.',
    proof: 'Inspect the retrieval implementation and how the reviewer workflow preserves source lineage from a changed section to a proposed control.',
    boundary: 'Verified local reviewer workflow with historical Azure staging validation. Analysts review proposed mappings.',
    stack: ['PostgreSQL', 'pgvector', 'Hybrid retrieval', 'Human review'],
    evidenceUrl: 'https://github.com/chintan-02/regimpact-ai/blob/main/apps/api/src/regimpact/retrieval.py', evidenceLabel: 'Inspect retrieval code'
  },
  tools: {
    projectSlug: 'product-finder-ai-agent', label: 'Bounded agent tools', category: 'Agent engineering',
    title: 'Validated tool calls across conversation turns',
    summary: 'Google ADK and Gemini turn follow-up requests into structured filter changes. A React client carries validated filters across turns and FastAPI searches the catalogue.',
    decision: 'Validate filter changes in Python and let the catalogue determine which products match.',
    proof: 'The paced hosted walkthrough passed 5/5 conversations and 25/25 turns. The repository includes the conversation fixtures.',
    boundary: 'Public demo with a 13-item catalogue. Results describe scripted turns with paced requests.',
    stack: ['Google ADK', 'Gemini', 'FastAPI', 'Cloud Run'],
    evidenceUrl: 'https://github.com/chintan-02/product-finder-adk-agent/blob/main/backend/eval/conversations.json', evidenceLabel: 'View conversation fixtures'
  },
  claimChecking: {
    projectSlug: 'resumeiq', label: 'Claim checking', category: 'LLM output validation',
    title: 'Check generated resume claims against their evidence',
    summary: 'ResumeIQ cites exact resume passages for job requirements. Optional Claude drafting uses cited evidence, and an edited draft requires rechecking before approval.',
    decision: 'Use deterministic checks for stronger ownership verbs, new tools, unsupported numbers, and scope changes. Ask users to review the result before approving it.',
    proof: 'The checker blocked 20/20 overstated drafts and incorrectly blocked 3/20 honest drafts on its synthetic holdout.',
    boundary: 'Small synthetic holdout with AI-drafted labels. The live model audit also flagged borderline drafts.',
    stack: ['Next.js', 'FastAPI', 'Claude API', 'Output validation'],
    evidenceUrl: 'https://github.com/chintan-02/resumeiq/blob/main/evals/reports/claimcheck_v3/REPORT.md', evidenceLabel: 'View the claim-check report'
  },
  matching: {
    projectSlug: 'resumeiq', label: 'Evidence matching', category: 'Applied NLP',
    title: 'Measure how well resume evidence supports a requirement',
    summary: 'ResumeIQ combines term matching with evidence-strength rules and returns exact citations for candidate review.',
    decision: 'Assess each named skill against lines that actually mention it so unrelated accomplishments carry less weight.',
    proof: 'Matcher v3 reached 0.77 macro-F1 on 34 synthetic held-out cases. Evidence recall@3 was 0.95.',
    boundary: 'The small holdout uses AI-drafted labels. Some cases still confuse strong verbs with unrelated work.',
    stack: ['Python', 'NLP', 'Evidence ranking', 'Macro-F1'],
    evidenceUrl: 'https://github.com/chintan-02/resumeiq/blob/main/evals/reports/eval_v2/REPORT.md', evidenceLabel: 'View the matcher report'
  },
  interface: {
    projectSlug: 'triageai', label: 'Review-first interfaces', category: 'Full-stack product engineering',
    title: 'A review workflow for clinical intake',
    summary: 'React presents extracted clinical fields for correction, then supports prediction, clinician accept or override, and a backend-generated PDF snapshot.',
    decision: 'Require explicit intake review and keep model output separate from the clinician decision. The backend owns the persisted assessment and review history.',
    proof: 'The case study includes actual captures of extraction, review, sign-off, reports, and the system architecture.',
    boundary: 'Public educational demo. A clinician review workflow is implemented. Clinical validation and credential verification are outside its scope.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL']
  },
  backend: {
    projectSlug: 'regimpact-ai', label: 'APIs & background work', category: 'Python backend engineering',
    title: 'Background jobs for regulatory analysis',
    summary: 'FastAPI connects versioned ingestion, analysis, control mapping, and analyst review. Redis and Dramatiq support asynchronous workloads.',
    decision: 'Use a transactional outbox and Redis/Dramatiq workers to dispatch jobs with retries and preserve traceability across requests and workers.',
    proof: 'Inspect the outbox implementation and review the case study for job execution and release evidence.',
    boundary: 'Verified local reviewer workflow and historical Azure staging validation. Broader recovery and workforce identity are documented production requirements.',
    stack: ['Python', 'FastAPI', 'Redis', 'Dramatiq'],
    evidenceUrl: 'https://github.com/chintan-02/regimpact-ai/blob/main/apps/api/src/regimpact/outbox.py', evidenceLabel: 'Inspect the outbox code'
  },
  access: {
    projectSlug: 'triageai', label: 'Data & access boundaries', category: 'Backend reliability',
    title: 'Owner-scoped access for assessments and reports',
    summary: 'Database-backed sessions and owner-scoped APIs isolate assessments. PostgreSQL stores reviews and audit events; private GCS stores reports.',
    decision: 'Use the authenticated principal for reviewer identity and test cross-workspace access instead of trusting browser-supplied ownership.',
    proof: 'The case study documents owner-scoped API checks, separate database identities, and migration verification.',
    boundary: 'Educational demo with tested owner-scoped API access. Cloud restoration and stronger staging isolation remain future work.',
    stack: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Private storage']
  },
  delivery: {
    projectSlug: 'regimpact-ai', label: 'Cloud delivery & cost', category: 'Deployment engineering',
    title: 'Repeatable Azure staging with teardown',
    summary: 'Azure Container Apps, Bicep, and OIDC-authenticated GitHub Actions support repeatable staging delivery and preserved release evidence.',
    decision: 'Provision, validate, retain evidence, then tear down. Bounded scheduled jobs reduce unnecessary idle infrastructure.',
    proof: 'The engineering walkthrough explains the staging lifecycle and its security and cost tradeoffs.',
    boundary: 'Historical v0.5.0 Azure staging validation. Infrastructure is provisioned for a verification run and can be torn down afterward.',
    stack: ['Azure Container Apps', 'Bicep', 'GitHub Actions', 'Docker'],
    writingUrl: '/engineering#staging-lifecycle', writingLabel: 'Read the staging lifecycle decision'
  },
  evaluation: {
    projectSlug: 'triageai', label: 'Model evaluation', category: 'Applied machine learning',
    title: 'Safety-sensitive evaluation for triage routing',
    summary: 'The final 273-feature LightGBM V2 registry targets ESI 3/4/5. Explicit safety rules handle higher-acuity escalation outside the classifier.',
    decision: 'Evaluate macro F1, ESI 5 performance, unsafe downgrades, and calibration separately. The selected model retained raw scores after calibrated candidates missed class-level guardrails.',
    proof: 'The case study links final registry metrics: 70.37% macro F1, 54.70% ESI 5 F1, and 0.68% true ESI 3 cases predicted as ESI 5.',
    boundary: 'Offline evaluation of the selected model. The demo uses raw model scores and requires a clinical review step.',
    stack: ['LightGBM', 'Feature engineering', 'Error analysis', 'Calibration'],
    writingUrl: '/writing/lightgbm-vs-xgboost', writingLabel: 'Read the model-selection walkthrough'
  }
};

export const portfolioRoles = [
  { id: 'generative-ai', label: 'Generative AI & RAG', description: 'Grounded retrieval, LLM output validation, and tool calling.', evidence: ['retrieval', 'claimChecking', 'tools', 'hybrid'] },
  { id: 'full-stack-ai', label: 'Full-Stack AI', description: 'User review workflows, AI features, and cloud delivery.', evidence: ['interface', 'claimChecking', 'tools', 'delivery'] },
  { id: 'python-backend', label: 'Python Backend', description: 'Asynchronous processing, access boundaries, and reliable delivery.', evidence: ['backend', 'access', 'delivery'] },
  { id: 'applied-ml', label: 'Applied ML', description: 'Model evaluation, evidence matching, and human review.', evidence: ['evaluation', 'matching', 'interface'] }
];
