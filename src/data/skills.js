export const skillLayers = [
  {
    layer: 'Data & Persistence',
    label: 'Prepare inputs, preserve identity',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'SQL',
      'PostgreSQL',
      'SQLite',
      'SQLAlchemy',
      'Alembic',
      'PyMuPDF',
      'Feature Engineering'
    ],
    note:
      'Reliable AI systems begin with clean inputs, reproducible transformations, explicit document or assessment identity, and durable state ownership.'
  },
  {
    layer: 'ML & Evaluation',
    label: 'Train, compare, calibrate',
    skills: [
      'scikit-learn',
      'LightGBM',
      'XGBoost',
      'Random Forest',
      'Classification',
      'Class Imbalance',
      'Threshold Tuning',
      'Calibration',
      'Feature Importance',
      'Model Evaluation'
    ],
    note:
      'Model selection is driven by per-class behaviour, risk-sensitive errors, calibration tradeoffs, reproducibility, and deployment fit—not one accuracy number.'
  },
  {
    layer: 'NLP, Retrieval & RAG',
    label: 'Extract, retrieve, ground',
    skills: [
      'Clinical NLP',
      'TF-IDF',
      'Semantic Matching',
      'RAG',
      'Embeddings',
      'SentenceTransformers',
      'ChromaDB',
      'Evidence Gating',
      'Citation Grounding',
      'RAG Evaluation'
    ],
    note:
      'Language systems emphasize reviewable extraction, retrieval support, answerability, citations, unsupported-question handling, privacy boundaries, and human review.'
  },
  {
    layer: 'APIs & Product',
    label: 'Turn intelligence into workflows',
    skills: [
      'FastAPI',
      'Pydantic v2',
      'REST APIs',
      'React',
      'TypeScript',
      'Next.js',
      'Streamlit',
      'Tailwind CSS',
      'ReportLab',
      'Server-Side BFF'
    ],
    note:
      'Models and retrieval pipelines are delivered through typed APIs, review-first interfaces, dashboards, reports, and visible loading, error, and fallback states.'
  },
  {
    layer: 'Delivery & Reliability',
    label: 'Test, release, observe',
    skills: [
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'Azure App Service',
      'pytest',
      'Vitest',
      'ESLint',
      'Structured Logging',
      'Request IDs',
      'Health & Readiness'
    ],
    note:
      'Projects use reproducible environments, automated checks, migration and readiness gates, structured operational evidence, and honest local-versus-cloud boundaries.'
  }
];
