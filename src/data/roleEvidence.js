// Curated from the existing case studies; role labels are navigation, not fit scores.
export const roleEvidence = {
  retrieval: {
    projectSlug: 'policygpt', label: 'Grounded retrieval', category: 'Generative AI & RAG',
    title: 'Make the evidence boundary part of the answer.',
    summary: 'PDF extraction, chunking, SentenceTransformer embeddings, and ChromaDB retrieval connect policy questions to page-level evidence.',
    decision: 'Gate evidence before generation. Unsupported questions and provider failures have separate fallback paths, so a fluent answer is not mistaken for a supported one.',
    proof: 'The case study documents a 16-question controlled benchmark, including supported and unsupported requests.',
    boundary: 'Verified local Docker release. The small fictional-handbook benchmark does not establish live-provider answer quality or production accuracy.',
    stack: ['FastAPI', 'ChromaDB', 'SentenceTransformers', 'Evidence gates'],
    writingUrl: '/writing/rag-evaluation-beyond-demo', writingLabel: 'Read the RAG evaluation walkthrough'
  },
  hybrid: {
    projectSlug: 'regimpact-ai', label: 'Hybrid search & review', category: 'Retrieval engineering',
    title: 'Connect regulatory changes to reviewable evidence.',
    summary: 'Section-level change detection, obligation analysis, and keyword-plus-vector retrieval support proposed control mappings.',
    decision: 'Keep source lineage attached to proposed impacts and require authorized human review before consequential decisions.',
    proof: 'The case study separates retrieval, review gates, audit history, and the verified Azure staging release.',
    boundary: 'Human-reviewed regulatory analysis. The future classifier and companion agent are not presented as trained or deployed production capabilities.',
    stack: ['PostgreSQL', 'pgvector', 'Hybrid retrieval', 'Human review']
  },
  tools: {
    projectSlug: 'product-finder-ai-agent', label: 'Bounded agent tools', category: 'Agent engineering',
    title: 'Let the model converse. Let tools enforce the filters.',
    summary: 'Product Finder uses Google ADK and Gemini to search a fixed catalogue through a FastAPI application with a React interface.',
    decision: 'Python tools enforce category and price constraints. The model handles conversation without becoming the authority for catalogue facts.',
    proof: 'Try the public demo and inspect the source for the tool-backed search over a 13-item catalogue.',
    boundary: 'A bounded catalogue demonstration, not a general shopping agent or evidence of large-scale production usage.',
    stack: ['Google ADK', 'Gemini', 'FastAPI', 'Cloud Run']
  },
  interface: {
    projectSlug: 'triageai', label: 'Review-first interfaces', category: 'Full-stack product engineering',
    title: 'Design the review step, not just the prediction screen.',
    summary: 'React presents extracted clinical fields for correction, then supports prediction, clinician accept or override, and a backend-generated PDF snapshot.',
    decision: 'Require explicit intake review and keep model output separate from the clinician decision. The backend owns the persisted assessment and review history.',
    proof: 'The case study includes actual captures of extraction, review, sign-off, reports, and the system architecture.',
    boundary: 'Educational decision support, not clinical validation. The demo role does not verify professional credentials.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL']
  },
  backend: {
    projectSlug: 'regimpact-ai', label: 'APIs & background work', category: 'Python backend engineering',
    title: 'Give long-running analysis its own execution path.',
    summary: 'FastAPI connects versioned ingestion, analysis, control mapping, and analyst review. Redis and Dramatiq support asynchronous workloads.',
    decision: 'Separate request handling from background processing while preserving source lineage and authorization through the workflow.',
    proof: 'Inspect the architecture and security sections alongside the documented release audit and source code.',
    boundary: 'Verified staging engineering; broader recovery validation and workforce identity remain documented production requirements.',
    stack: ['Python', 'FastAPI', 'Redis', 'Dramatiq']
  },
  access: {
    projectSlug: 'triageai', label: 'Data & access boundaries', category: 'Backend reliability',
    title: 'Keep each demo workspace behind a server-side boundary.',
    summary: 'Database-backed sessions and owner-scoped APIs isolate assessments. PostgreSQL stores reviews and audit events; private GCS stores reports.',
    decision: 'Use the authenticated principal for reviewer identity and test cross-workspace access instead of trusting browser-supplied ownership.',
    proof: 'The case study documents owner-scoped API checks, separate database identities, and migration verification.',
    boundary: 'No compliance certification or uptime SLA is claimed. Staging isolation and tested cloud restoration remain future work.',
    stack: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Private storage']
  },
  delivery: {
    projectSlug: 'regimpact-ai', label: 'Cloud delivery & cost', category: 'Deployment engineering',
    title: 'Validate the release without leaving staging running.',
    summary: 'Azure Container Apps, Bicep, and OIDC-authenticated GitHub Actions support repeatable staging delivery and preserved release evidence.',
    decision: 'Provision, validate, retain evidence, then tear down. Bounded scheduled jobs reduce unnecessary idle infrastructure.',
    proof: 'The engineering walkthrough explains the staging lifecycle and its security and cost tradeoffs.',
    boundary: 'Ephemeral staging, not an always-on production service. Kubernetes runtime validation is not claimed.',
    stack: ['Azure Container Apps', 'Bicep', 'GitHub Actions', 'Docker'],
    writingUrl: '/engineering#staging-lifecycle', writingLabel: 'Read the staging lifecycle decision'
  },
  evaluation: {
    projectSlug: 'triageai', label: 'Model evaluation', category: 'Applied machine learning',
    title: 'Inspect class-level errors, not just overall accuracy.',
    summary: 'The final 273-feature LightGBM V2 registry targets ESI 3/4/5. Explicit safety rules handle higher-acuity escalation outside the classifier.',
    decision: 'Evaluate macro F1, ESI 5 performance, unsafe downgrades, and calibration separately. Calibration candidates were rejected when class performance was not preserved.',
    proof: 'The case study links final registry metrics: 70.37% macro F1, 54.70% ESI 5 F1, and 0.68% true ESI 3 cases predicted as ESI 5.',
    boundary: 'Offline project results, not clinical validation. Raw model probabilities are not calibrated clinical confidence.',
    stack: ['LightGBM', 'Feature engineering', 'Error analysis', 'Calibration'],
    writingUrl: '/writing/lightgbm-vs-xgboost', writingLabel: 'Read the model-selection walkthrough'
  }
};

export const portfolioRoles = [
  { id: 'generative-ai', label: 'Generative AI & RAG', description: 'Retrieval, evidence gates, and bounded tool use.', evidence: ['retrieval', 'hybrid', 'tools'] },
  { id: 'full-stack-ai', label: 'Full-Stack AI', description: 'User workflows connected to APIs, data, and cloud delivery.', evidence: ['interface', 'backend', 'delivery'] },
  { id: 'python-backend', label: 'Python Backend', description: 'Asynchronous processing, access boundaries, and reliable delivery.', evidence: ['backend', 'access', 'delivery'] },
  { id: 'applied-ml', label: 'Applied ML', description: 'Feature pipelines, class-level evaluation, and reviewed predictions.', evidence: ['evaluation', 'interface', 'access'] }
];
