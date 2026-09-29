export const projects = [
  {
    slug: 'regimpact-ai',
    category: 'Regulatory AI · AI Systems Engineering',
    title: 'RegImpact AI',
    subtitle: 'Regulatory Change Impact & Controls Assurance Platform',
    status: 'v0.5.0 · Verified Azure staging release',
    featured: true,
    featuredOrder: 1,
    proofHighlight: {
      value: 'v0.5.0',
      label: 'Azure staging release',
      detail: 'OIDC + Bicep + migration-gated promotion'
    },
    homepage: {
      displayTitle: 'RegImpact AI',
      metrics: [
        { value: 'v0.5.0', label: 'Verified Azure staging release' },
        { value: 'OIDC + Bicep', label: 'Repeatable cloud delivery' }
      ],
      stack: ['FastAPI', 'Next.js', 'PostgreSQL + pgvector', 'Redis', 'Azure Container Apps'],
      scope: 'Verified Azure Canada Central staging release · production remains intentionally unapproved'
    },
    homepageVisual: {
      type: 'evidence',
      eyebrow: 'Verified Azure delivery',
      title: 'From source commit to healthy staging workloads',
      items: [
        'Protected staging environment · Azure Canada Central',
        'OIDC-authenticated GitHub Actions delivery',
        'Migration-gated promotion with API, web, worker, dispatcher, and scheduler healthy',
        'Immutable deployment evidence retained for v0.5.0'
      ]
    },
    description:
      'Evidence-linked regulatory intelligence platform that versions source documents, detects section-level changes, extracts obligation candidates, retrieves relevant controls, and routes uncertain or consequential findings to authorized reviewers.',
    problem:
      'Regulatory change is not just a search problem. Teams need to prove what changed, which obligations were inferred, which controls may be affected, who reviewed the proposal, and why a decision was accepted or rejected.',
    contribution:
      'Engineered the FastAPI and Next.js platform, PostgreSQL and pgvector retrieval layer, asynchronous Redis/Dramatiq workloads, human-review workflow, observability, infrastructure as code, and verified Azure staging delivery.',
    outcome:
      'Released v0.5.0 to a protected Azure Canada Central staging environment with OIDC-based CI/CD, migration-gated promotion, healthy API/web/worker/dispatcher/scheduler workloads, readiness verification, and immutable deployment evidence.',
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
      { value: '5', label: 'Healthy application workloads' },
      { value: 'OIDC', label: 'GitHub-to-Azure delivery' },
      { value: 'Bicep', label: 'Infrastructure as code' }
    ],
    proofStrip: [
      'Azure staging verified',
      'PostgreSQL + pgvector',
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
        'RegImpact AI is an evidence-linked regulatory intelligence platform with hybrid retrieval, human approval, asynchronous processing, observability, infrastructure as code, and a verified Azure staging release.'
    },
    accent: 'from-amber-400 to-cyan-400'
  },
  {
    slug: 'triageai',
    category: 'Healthcare AI',
    title: 'TriageAI',
    subtitle: 'Clinical Intake & ESI Care Routing Assistant',
    status: 'Verified local workflow · clinical NLP complete',
    featured: true,
    featuredOrder: 2,
    proofHighlight: {
      value: '0.68%',
      label: 'Unsafe ESI 3→5 rate',
      detail: 'Safety-sensitive model evaluation'
    },
    homepage: {
      displayTitle: 'TriageAI / SympDirect',
      metrics: [
        { value: '70.37%', label: 'Macro F1' },
        { value: '0.68%', label: 'Unsafe ESI 3→5 rate' }
      ],
      stack: ['React', 'FastAPI', 'LightGBM', 'SQLAlchemy', 'pytest'],
      scope: 'Verified local React + FastAPI workflow · clinical decision support only'
    },
    homepageVisual: {
      type: 'image',
      src: '/images/case-studies/triageai/05-prediction-result.png',
      alt: 'TriageAI prediction result showing LightGBM probabilities, routing recommendation, and safety-aware decision support',
      caption: 'Prediction result with model probabilities, recommendation, and safety-aware routing context.'
    },
    description:
      'Review-first healthcare AI decision-support workflow combining structured intake, evidence-linked clinical NLP, LightGBM ESI 3/4/5 prediction, transparent safety escalation, clinician review, audit evidence, dashboard workflows, and backend-generated PDF summaries.',
    problem:
      'Emergency intake requires more than a model label. Clinical notes and structured data must be reviewable, higher-risk signals need transparent escalation, clinicians must remain the final authority, and every meaningful action should be traceable.',
    contribution:
      'Built the ML inference path, FastAPI services, React workflow, evidence-linked NLP extraction, safety escalation rules, clinician review flow, audit trail, and backend-generated PDF reporting.',
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
      'SQLite',
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
      'PDF Reporting'
    ],
    metrics: [
      { value: '78.32%', label: 'Accuracy' },
      { value: '70.37%', label: 'Macro F1' },
      { value: '54.70%', label: 'ESI 5 F1' },
      { value: '0.68%', label: 'Unsafe ESI 3→5 rate' }
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
    liveUrl: null,
    githubUrl: 'https://github.com/chintan-02/triageai-esi-care-routing',
    caseStudyUrl: '/case-studies/triageai',
    accent: 'from-amber-400 to-orange-500'
  },
  {
    slug: 'policygpt',
    category: 'GenAI · RAG · AI Systems Engineering',
    title: 'PolicyGPT Enterprise',
    subtitle: 'Evidence-Gated Policy RAG System',
    status: 'v0.3.0 · Verified local release · Not cloud deployed',
    featured: true,
    featuredOrder: 3,
    proofHighlight: {
      value: '358',
      label: 'Automated tests',
      detail: '230 backend + 128 frontend'
    },
    homepage: {
      displayTitle: 'PolicyGPT Enterprise',
      metrics: [
        { value: '16', label: 'Controlled benchmark cases' },
        { value: '358', label: 'Automated tests' }
      ],
      stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'Docker Compose'],
      scope: 'v0.3.0 verified local release · not cloud deployed'
    },
    homepageVisual: {
      type: 'image',
      src: '/images/case-studies/policygpt/01-policygpt-citation-backed-answer.png',
      alt: 'PolicyGPT Enterprise citation-backed policy answer with confidence diagnostics and page-level evidence',
      caption: 'Citation-backed answer with calibrated confidence and page-level evidence.'
    },
    description:
      'Production-style evidence intelligence and policy RAG system that converts policy PDFs into durable, searchable evidence, blocks unsupported generation, and exposes page-level citations, confidence diagnostics, benchmark evaluation, and operational health through a Next.js console.',
    problem:
      'Policy answers are consequential. A fluent response without provenance is difficult to review, and raw vector similarity does not prove that retrieved text directly supports a question. PolicyGPT makes identity, evidence, answerability, failure states, and readiness part of the product contract.',
    contribution:
      'Built the ingestion architecture, evidence API, retrieval and evidence-gating logic, answerability diagnostics, Next.js console, PostgreSQL document lifecycle, controlled evaluation workflow, and release-like Docker Compose environment.',
    outcome:
      'Verified a 16-question benchmark covering supported and unsupported requests, page-level evidence, controlled fallback behavior, and operational readiness without presenting the small benchmark as production accuracy.',
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
      '16-Case RAG Evaluation',
      'Request IDs & Structured Logs'
    ],
    metrics: [
      { value: 'Docker Compose', label: 'Verified local release' },
      { value: '16', label: 'Case benchmark' },
      { value: '230', label: 'Backend tests' },
      { value: '128', label: 'Frontend tests' }
    ],
    proofStrip: [
      'Docker Compose',
      '16-case benchmark',
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
      'Grounded product-search agent using Google ADK with deterministic Python filtering for category, price, product name, and availability constraints.',
    problem:
      'Natural-language product search is useful only when the model cannot invent catalogue facts or perform unreliable numeric filtering.',
    contribution:
      'Built a single Google ADK agent for intent interpretation while keeping authoritative category and price filtering in deterministic Python services exposed through FastAPI.',
    outcome:
      'Deployed the containerized backend to Google Cloud Run and the React frontend to Netlify, with the Gemini key stored in Google Secret Manager and verified production frontend-to-backend interaction.',
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
    caseStudyUrl: null,
    accent: 'from-amber-400 to-orange-400'
  },
  {
    slug: 'resumeiq',
    category: 'NLP / Resume Intelligence',
    title: 'ResumeIQ',
    subtitle: 'Privacy-Aware Resume Intelligence Platform',
    status: 'Azure demo · active engineering project',
    featured: true,
    featuredOrder: 5,
    homepage: {
      metrics: [
        { value: '3', label: 'Resume formats supported' },
        { value: 'Human', label: 'Final review required' }
      ],
      stack: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'Azure'],
      scope: 'Azure-hosted portfolio demo · not an automated hiring decision system'
    },
    description:
      'Privacy-aware NLP decision-support platform for multi-format resume parsing, baseline role classification, ATS-style compatibility signals, semantic job-description matching, skill intelligence, writing-quality review, batch comparison, and human recruiter workflows.',
    problem:
      'Candidates and reviewers often receive opaque resume scores without knowing which skills, keywords, structural issues, or writing patterns influenced the result. ResumeIQ separates these signals and presents them for transparent human interpretation.',
    contribution:
      'Built multi-format parsing, NLP preprocessing, baseline classification, job-description matching, skill intelligence, recruiter-review workflows, FastAPI foundations, persistence, Docker/CI foundations, and an Azure-hosted portfolio demonstration.',
    outcome:
      'Created a working multi-signal resume intelligence workflow while explicitly separating implemented capabilities from experimental foundations and avoiding unverified headline model-accuracy claims.',
    stack: [
      'Python',
      'Streamlit',
      'FastAPI',
      'Scikit-learn',
      'TF-IDF',
      'SQLAlchemy',
      'SQLite',
      'Docker Compose',
      'GitHub Actions',
      'Azure'
    ],
    features: [
      'PDF, DOCX & TXT Parsing',
      'Baseline Role Classification',
      'ATS-Style Signals',
      'Semantic JD Matching',
      'Normalized Skill Intelligence',
      'Writing & Structure Review',
      'Batch Resume Comparison',
      'Privacy-Aware Human Review'
    ],
    metrics: [
      { value: '3', label: 'Resume formats supported' },
      { value: 'Multi-signal', label: 'Analysis approach' },
      { value: 'Human', label: 'Review required' },
      { value: 'Azure', label: 'Portfolio demo' }
    ],
    screenshots: [
      {
        label: 'Multi-format resume upload',
        detail: 'Upload PDF, DOCX, or TXT files for text extraction and normalization.'
      },
      {
        label: 'Resume intelligence dashboard',
        detail: 'Review classification, structure, skills, keyword, semantic, and writing-quality signals.'
      },
      {
        label: 'Job-description matching',
        detail: 'Inspect keyword overlap, semantic similarity, role alignment, and missing skills separately.'
      },
      {
        label: 'Writing and structure guidance',
        detail: 'Review generic wording, incomplete sections, placeholders, and targeted rewrite suggestions.'
      },
      {
        label: 'Recruiter review workflow',
        detail: 'Compare candidates, add notes, and preserve human responsibility for final decisions.'
      }
    ],
    pipeline: [
      'Resume Upload',
      'Parse + Normalize',
      'Baseline Classification',
      'Skill Intelligence',
      'Keyword + Semantic JD Matching',
      'Quality Review',
      'Human Review'
    ],
    liveUrl: 'https://resume-classifier-chintan.azurewebsites.net',
    githubUrl: 'https://github.com/chintan-02/smart-resume-classifier',
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
