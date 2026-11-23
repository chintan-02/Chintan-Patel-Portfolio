export const projects = [
  {
    slug: 'regimpact-ai',
    writingUrl: '/writing/regimpact-azure-deployment',
    category: 'Regulatory AI · AI Systems Engineering',
    title: 'RegImpact AI',
    subtitle: 'Regulatory Change Impact & Controls Assurance Platform',
    status: 'Locally verified reviewer workflow · v0.5.0 Azure staging',
    featured: true,
    featuredOrder: 2,
    proofHighlight: {
      value: 'Ephemeral',
      label: 'Azure staging lifecycle',
      detail: 'Provision → validate → preserve evidence → teardown'
    },
    homepage: {
      displayTitle: 'RegImpact AI',
      metrics: [
        { value: 'Hybrid', label: 'Keyword + vector retrieval' },
        { value: 'Human review', label: 'Approval before consequential decisions' }
      ],
      stack: ['FastAPI', 'Next.js', 'PostgreSQL + pgvector', 'Redis', 'Azure Container Apps'],
      scope: 'Reviewer walkthrough verified locally. Azure staging evidence covers the v0.5.0 release.'
    },
    homepageVisual: {
      type: 'evidence',
      eyebrow: 'Verified Azure delivery + FinOps',
      title: 'Production-shaped validation without idle cloud spend',
      items: [
        'Protected staging environment · Azure Canada Central',
        'OIDC-authenticated GitHub Actions + Bicep delivery',
        'Scheduler and dispatcher redesigned as bounded Container Apps Jobs',
        'Default lifecycle: validate, retain evidence, then tear down staging'
      ]
    },
    description:
      'Helps analysts see what changed in a regulation, identify affected obligations, and review the controls that may need updating.',
    problem:
      'Regulatory change is not just a search problem. Teams need to prove what changed, which obligations were inferred, which controls may be affected, who reviewed the proposal, and why a decision was accepted or rejected.',
    contribution:
      'Engineered the FastAPI and Next.js platform, PostgreSQL and pgvector retrieval layer, asynchronous Redis/Dramatiq workloads, human-review workflow, observability, infrastructure as code, verified Azure staging delivery, and the later cost-aware staging redesign.',
    outcome:
      'Released v0.5.0 to protected Azure staging with OIDC-based CI/CD and immutable evidence, then redesigned staging around bounded background jobs, reduced log ingestion, and automatic teardown after validation to eliminate unnecessary idle infrastructure.',
    stack: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'Dramatiq',
      'Azure Container Apps',
      'Bicep',
      'GitHub Actions',
      'Docker'
    ],
    features: [
      'Versioned Regulatory Ingestion',
      'Section-Level Change Detection',
      'Evidence-Linked Obligation Analysis',
      'Hybrid Full-Text + Vector Retrieval',
      'Control Mapping',
      'Policy-Gated Human Review',
      'Tenant-Aware RBAC',
      'Structured Logs, Metrics & Tracing'
    ],
    metrics: [
      { value: 'v0.5.0', label: 'Verified staging release' },
      { value: '3 + 3', label: 'Apps + scheduled jobs in current staging topology' },
      { value: 'OIDC', label: 'GitHub-to-Azure delivery' },
      { value: 'Ephemeral', label: 'Default staging lifecycle' }
    ],
    proofStrip: [
      'Azure staging verified',
      'Ephemeral staging lifecycle',
      'OIDC + Bicep',
      'Human approval gates'
    ],
    pipeline: [
      'Regulatory Sources',
      'Scheduled Ingestion',
      'Immutable Versions',
      'Section Change Detection',
      'Obligation Analysis',
      'Hybrid Retrieval',
      'Control Mapping',
      'Policy Gates',
      'Authorized Review',
      'Audit Trail'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/chintan-02/regimpact-ai',
    releaseUrl: 'https://github.com/chintan-02/regimpact-ai/releases/tag/v0.5.0',
    caseStudyUrl: '/case-studies/regimpact-ai',
    seo: {
      title: 'RegImpact AI | Regulatory Change & Controls Assurance Case Study',
      description:
        'RegImpact AI is an evidence-linked regulatory intelligence platform with hybrid retrieval, human approval, asynchronous processing, infrastructure as code, verified Azure release evidence, and cost-aware ephemeral staging.'
    },
    accent: 'from-amber-400 to-cyan-400'
  },
  {
    slug: 'triageai',
    writingUrl: '/writing/lightgbm-vs-xgboost',
    category: 'Healthcare AI',
    title: 'TriageAI',
    subtitle: 'Clinical Intake & ESI Care Routing Assistant',
    status: 'Live educational demo · Cloud Run + PostgreSQL',
    featured: true,
    featuredOrder: 1,
    proofHighlight: {
      value: '0.68%',
      label: 'ESI 3 → 5 under-triage · lower is better',
      detail: 'Share of true ESI 3 test cases predicted as ESI 5'
    },
    homepage: {
      displayTitle: 'TriageAI / SympDirect',
      metrics: [
        { value: '70.4%', label: 'Macro F1 · ESI 3/4/5 test set' },
        { value: '0.68%', label: 'ESI 3 → 5 under-triage · lower is better' }
      ],
      stack: ['React', 'FastAPI', 'LightGBM', 'PostgreSQL', 'Cloud Run'],
      scope: 'Live Netlify + Cloud Run demo · private workspaces · educational decision support only'
    },
    homepageVisual: {
      type: 'image',
      src: '/images/case-studies/triageai/05-prediction-result.png',
      alt: 'TriageAI prediction result showing LightGBM probabilities, routing recommendation, and safety-aware decision support',
      caption: 'Prediction result with model probabilities, recommendation, and safety-aware routing context.'
    },
    description:
      'An educational intake assistant that turns clinical notes into reviewable fields and care-routing suggestions, with clinicians responsible for the final decision.',
    problem:
      'Emergency intake requires more than a model label. Clinical notes and structured data must be reviewable, higher-risk signals need transparent escalation, clinicians must remain the final authority, and every meaningful action should be traceable.',
    contribution:
      'Built the evaluated ML and review-first React/FastAPI workflow, then deployed authenticated private workspaces on Cloud Run with PostgreSQL migrations, private PDF storage, bounded demo cleanup, and verified operational alerts.',
    outcome:
      'Evaluated the final LightGBM V2 workflow on the ESI 3/4/5 scope with 78.32% accuracy, 70.37% Macro F1, 54.70% ESI 5 F1, and a 0.68% unsafe ESI 3-to-5 downgrade rate.',
    stack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'LightGBM',
      'Scikit-learn',
      'SQLAlchemy',
      'PostgreSQL',
      'Alembic',
      'Google Cloud Run',
      'Google Cloud Storage',
      'Secret Manager',
      'Cloud Monitoring',
      'Docker',
      'ReportLab',
      'pytest'
    ],
    features: [
      'Clinical Intake NLP',
      'Evidence-Linked Extraction',
      'ESI 3/4/5 Prediction',
      'Safety-Rule Escalation',
      'Clinician Review & Override',
      'Reviewed NLP Audit Evidence',
      'Dashboard & Assessment Detail',
      'Fresh PDF Snapshots',
      'Owner-Scoped Authentication',
      'Managed PostgreSQL + Migrations',
      'Private GCS Reports',
      'Scheduled Demo Cleanup',
      'Uptime + Failure Alerts'
    ],
    metrics: [
      { value: '78.32%', label: 'Accuracy' },
      { value: '70.4%', label: 'Macro F1 · ESI 3/4/5 test set' },
      { value: '54.70%', label: 'ESI 5 F1' },
      { value: '0.68%', label: 'ESI 3 → 5 under-triage · lower is better' }
    ],
    screenshots: [
      {
        label: 'Clinical note extraction',
        detail: 'Free-text note converted into reviewable fields, evidence, safety cues, and missing information.'
      },
      {
        label: 'Clinician review before prediction',
        detail: 'Extracted values remain editable and require explicit review confirmation before decision support runs.'
      },
      {
        label: 'Prediction and safety escalation',
        detail: 'LightGBM probabilities, confidence, configured safety rules, and final routing recommendation.'
      },
      {
        label: 'Assessment detail and audit evidence',
        detail: 'Reviewed NLP metadata, clinician actions, and traceability preserved server-side.'
      },
      {
        label: 'PDF decision-support summary',
        detail: 'Backend-generated report with reviewed extraction evidence and safe clinical wording.'
      }
    ],
    pipeline: [
      'Clinical Note or Structured Intake',
      'Evidence-Linked NLP Extraction',
      'Clinician Review & Correction',
      'Feature Builder',
      'LightGBM V2',
      'Safety Rules',
      'Clinician Decision',
      'Audit + PDF'
    ],
    liveUrl: 'https://triageai-chintan-staging.netlify.app/',
    githubUrl: 'https://github.com/chintan-02/triageai-esi-care-routing',
    caseStudyUrl: '/case-studies/triageai',
    seo: {
      title: 'TriageAI | Live Cloud ML Decision-Support Demo',
      description: 'Review-first LightGBM workflow deployed with React, FastAPI, Cloud Run, PostgreSQL, authenticated workspaces, private PDF reports and verified operational alerts.',
      image: '/images/case-studies/triageai/05-prediction-result.png'
    },
    accent: 'from-amber-400 to-orange-500'
  },
  {
    slug: 'policygpt',
    writingUrl: '/writing/rag-evaluation-beyond-demo',
    category: 'GenAI · RAG · AI Systems Engineering',
    title: 'PolicyGPT Enterprise',
    subtitle: 'Policy Answers with Source Citations',
    status: 'Local Docker release · citation-backed policy search',
    featured: true,
    featuredOrder: 3,
    proofHighlight: {
      value: '358',
      label: 'PolicyGPT tests · release snapshot',
      detail: '230 backend + 128 frontend'
    },
    homepage: {
      displayTitle: 'PolicyGPT Enterprise',
      metrics: [
        { value: '23/24', label: 'Final holdout cases passed' },
        { value: '358', label: 'PolicyGPT tests · release snapshot' }
      ],
      stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'Docker Compose'],
      scope: 'Reproducible local Docker release. Benchmark covers one fictional policy handbook.'
    },
    homepageVisual: {
      type: 'image',
      src: '/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png',
      alt: 'PolicyGPT Enterprise citation-backed policy answer with confidence diagnostics and page-level evidence',
      caption: 'Citation-backed answer with calibrated confidence and page-level evidence.'
    },
    description:
      'Answers questions about uploaded policy PDFs with page-level sources, and falls back safely when the documents do not support an answer.',
    problem:
      'Policy answers are consequential. A fluent response without provenance is difficult to review, and raw vector similarity does not prove that retrieved text directly supports a question. PolicyGPT makes identity, evidence, answerability, failure states, and readiness part of the product contract.',
    contribution:
      'Built the ingestion architecture, evidence API, retrieval and evidence-gating logic, answerability diagnostics, Next.js console, PostgreSQL document lifecycle, controlled evaluation workflow, and release-like Docker Compose environment.',
    outcome:
      'Passed 23 of 24 local holdout cases, with 4 of 4 correct refusals and zero request errors.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'ChromaDB',
      'SentenceTransformers',
      'Docker Compose'
    ],
    features: [
      'SHA-256 Duplicate Prevention',
      'Document Lifecycle Metadata',
      'Evidence Gate',
      'Calibrated Answerability',
      'Page-Level Citations',
      'Provider-Resilient Fallback',
      '24-Case Holdout Evaluation',
      'Request IDs & Structured Logs'
    ],
    metrics: [
      { value: 'Docker Compose', label: 'Verified local release' },
      { value: '23/24', label: 'Final holdout cases passed' },
      { value: '230', label: 'Backend tests' },
      { value: '128', label: 'Frontend tests' }
    ],
    proofStrip: [
      'Docker Compose',
      '23/24 holdout cases passed',
      '230 backend tests',
      '128 frontend tests'
    ],
    evaluationMetrics: [
      { value: '100%', label: 'Answer-readiness accuracy' },
      { value: '100%', label: 'Unsupported / fallback accuracy' },
      { value: '100%', label: 'Expected-page retrieval hit rate' },
      { value: '0', label: 'Request errors' }
    ],
    screenshots: [
      {
        label: 'Documents workspace',
        detail: 'PDF upload, registry search, lifecycle state, duplicate handling, and document details.'
      },
      {
        label: 'Evidence-backed Ask',
        detail: 'Supported answer or citation-only fallback with confidence diagnostics and page citations.'
      },
      {
        label: 'Unsupported-question state',
        detail: 'Generation is blocked when indexed documents do not directly support the request.'
      },
      {
        label: 'Evaluation workspace',
        detail: 'Latest validated benchmark artifact, case diagnostics, confidence, and provider reliability.'
      },
      {
        label: 'System readiness',
        detail: 'Separate liveness, dependency readiness, PostgreSQL, Chroma, and provider state.'
      }
    ],
    pipeline: [
      'PDF Validation & Identity',
      'PostgreSQL Lifecycle',
      'Page Extraction & Chunking',
      'SentenceTransformer Embeddings',
      'ChromaDB Retrieval',
      'Evidence Diagnostics',
      'Generation or Safe Fallback',
      'Evaluation & Operations'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/chintan-02/policygpt-enterprise',
    releaseUrl: 'https://github.com/chintan-02/policygpt-enterprise/releases/tag/v0.3.0',
    caseStudyUrl: '/case-studies/policygpt-enterprise',
    seo: {
      title: 'PolicyGPT Enterprise | Evidence-Gated Policy RAG Case Study',
      description:
        'PolicyGPT Enterprise is a production-style policy RAG system with FastAPI, Next.js, ChromaDB, PostgreSQL, citations, confidence scoring, evaluation and Docker Compose.',
      image: '/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png'
    },
    accent: 'from-amber-400 to-violet-400'
  },
  {
    slug: 'product-finder-ai-agent',
    category: 'AI Agents',
    title: 'Product Finder AI Agent',
    subtitle: 'Grounded Product Search with Deterministic Tools',
    status: 'Deployed · Google Cloud Run + Netlify',
    featured: true,
    featuredOrder: 4,
    proofHighlight: {
      value: 'Cloud Run',
      label: 'Verified backend deployment',
      detail: 'Netlify frontend + Secret Manager'
    },
    homepage: {
      metrics: [
        { value: 'Cloud Run', label: 'Backend deployment' },
        { value: 'Netlify', label: 'Frontend deployment' }
      ],
      stack: ['Google ADK', 'Gemini', 'FastAPI', 'React', 'Cloud Run'],
      scope: 'Live portfolio deployment · deterministic Python owns authoritative filtering'
    },
    description:
      'Carries shopping constraints across turns and checks matches against a fixed catalogue.',
    problem:
      'Natural-language product search is useful only when the model cannot invent catalogue facts or perform unreliable numeric filtering.',
    contribution:
      'Built a single Google ADK agent for intent interpretation while keeping authoritative category and price filtering in deterministic Python services exposed through FastAPI.',
    outcome:
      'Deployed the containerized backend to Google Cloud Run and the React frontend to Netlify, with the Gemini key stored in Google Secret Manager and a hosted evaluation that passed 5 of 5 scripted conversations across 25 turns.',
    stack: [
      'Google ADK',
      'Gemini',
      'Python',
      'FastAPI',
      'React',
      'Docker',
      'Google Cloud Run',
      'Google Secret Manager'
    ],
    features: [
      'Single-Agent Tool Orchestration',
      'Deterministic Product Filtering',
      'Structured Tool Results',
      'FastAPI Validation',
      'Non-Root Docker Container',
      'Secret Manager Integration'
    ],
    metrics: [
      { value: 'Cloud Run', label: 'Backend deployment' },
      { value: 'Netlify', label: 'Frontend deployment' }
    ],
    githubUrl: 'https://github.com/chintan-02/product-finder-adk-agent',
    liveUrl: 'https://product-finder-adk-chintan.netlify.app/',
    caseStudyUrl: '/case-studies/product-finder-ai-agent',
    accent: 'from-amber-400 to-orange-400'
  },
  {
    slug: 'resumeiq',
    category: 'NLP / Resume Intelligence',
    title: 'ResumeIQ',
    subtitle: 'Evidence-Grounded Resume Tailoring',
    status: 'Live educational demo',
    featured: true,
    featuredOrder: 3.5,
    homepage: {
      metrics: [
        { value: '0.77', label: 'Matcher macro-F1 · synthetic holdout' },
        { value: '20/20', label: 'Overstated drafts blocked · synthetic holdout' }
      ],
      stack: ['Next.js', 'FastAPI', 'Python', 'Cloud Run', 'Vercel'],
      scope: 'Candidate decision support evaluated on synthetic data.'
    },
    homepageVisual: {
      type: 'image',
      src: '/images/case-studies/resumeiq/demo-v2.webp',
      alt: 'ResumeIQ fit map with highlighted resume evidence',
      caption: 'ResumeIQ explains how strongly the cited resume passage supports each requirement.'
    },
    description: 'Maps job requirements to exact resume passages, grades evidence strength, and checks drafted bullets for unsupported claims.',
    problem: 'Keyword overlap obscures weak evidence, and generated rewrites can exaggerate what a candidate did.',
    contribution: 'Built evidence matching, document parsing, optional Claude drafting, deterministic claim checks, and a Next.js workflow backed by FastAPI.',
    outcome: 'Matcher v3 scored 0.77 macro-F1 on 34 synthetic held-out cases. Checker v3 blocked 20/20 overstated drafts and wrongly blocked 3/20 honest drafts on its holdout.',
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Claude API', 'Cloud Run', 'Vercel', 'GitHub Actions'],
    features: ['PDF, DOCX & TXT parsing', 'Exact source citations', 'Evidence strength', 'Tailor plan', 'Edited-draft rechecks', 'Report export'],
    metrics: [
      { value: '0.77', label: 'Synthetic holdout macro-F1' },
      { value: '20/20', label: 'Overstated drafts blocked on checker holdout' },
      { value: '148 + 20', label: 'API and web tests passed' }
    ],
    liveUrl: 'https://resumeiq-chintan.vercel.app/demo',
    githubUrl: 'https://github.com/chintan-02/resumeiq',
    caseStudyUrl: '/case-studies/resumeiq',
    accent: 'from-amber-400 to-rose-400'
  }
];

export const projectFilters = [
  'All',
  'Regulatory AI · AI Systems Engineering',
  'Healthcare AI',
  'GenAI · RAG · AI Systems Engineering',
  'AI Agents',
  'NLP / Resume Intelligence'
];
