export const skillLayers = [
  {
    layer: 'Data Layer',
    label: 'Clean inputs and durable state',
    skills: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Data Cleaning', 'Feature Engineering'],
    note: 'Reliable systems start with clean inputs, explicit data ownership, traceable preprocessing, and durable lifecycle state.'
  },
  {
    layer: 'Model Layer',
    label: 'Train, evaluate, explain',
    skills: ['scikit-learn', 'LightGBM', 'XGBoost', 'Classification', 'Model Evaluation', 'Threshold Tuning', 'Calibration', 'SHAP'],
    note: 'Model work is framed around per-class performance, risk-weighted errors, confidence, and explainability rather than one headline score.'
  },
  {
    layer: 'NLP & GenAI Layer',
    label: 'Language and evidence intelligence',
    skills: ['NLP', 'RAG', 'TF-IDF', 'Embeddings', 'SentenceTransformers', 'ChromaDB', 'Evidence Gating', 'RAG Evaluation'],
    note: 'Text systems focus on extraction quality, retrieval support, citations, safe fallback, privacy boundaries, and human review.'
  },
  {
    layer: 'API & Product Layer',
    label: 'Turn intelligence into workflows',
    skills: ['FastAPI', 'React', 'Next.js', 'TypeScript', 'Streamlit', 'REST APIs', 'Pydantic', 'PDF Reports'],
    note: 'Models and retrieval pipelines are wrapped in typed APIs, review flows, dashboards, reports, and explicit failure states.'
  },
  {
    layer: 'Delivery & Operations',
    label: 'Ship, validate, observe',
    skills: ['Docker', 'Docker Compose', 'Azure', 'GitHub Actions', 'pytest', 'Vitest', 'Structured Logging', 'Monitoring'],
    note: 'Projects use reproducible environments, automated checks, readiness contracts, operational logs, and honest deployment boundaries.'
  }
];
