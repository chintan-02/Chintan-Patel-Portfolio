export const projects = [
  {
    slug: 'triageai',
    category: 'Healthcare AI',
    title: 'TriageAI',
    subtitle: 'Clinical Intake & ESI Care Routing Assistant',
    status: 'Verified local workflow · clinical NLP complete',
    description:
      'Review-first healthcare AI decision-support workflow combining structured intake, evidence-linked clinical NLP, LightGBM ESI 3/4/5 prediction, transparent safety escalation, clinician review, audit evidence, dashboard workflows, and backend-generated PDF summaries.',
    problem:
      'Emergency intake requires more than a model label. Clinical notes and structured data must be reviewable, higher-risk signals need transparent escalation, clinicians must remain the final authority, and every meaningful action should be traceable.',
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
      'Backend PDF Summary'
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
    subtitle: 'Building an Evidence-Gated Policy RAG System',
    status: 'Local release profile · Not cloud deployed',
    description:
      'Production-style evidence intelligence and policy RAG system that converts policy PDFs into durable, searchable evidence, blocks unsupported generation and exposes page-level citations, confidence diagnostics, benchmark evaluation and operational health through a Next.js console.',
    problem:
      'Policy answers are consequential. A fluent response without provenance is difficult to review, and raw vector similarity does not prove that retrieved text directly supports a question. PolicyGPT makes identity, evidence, answerability, failure states, and readiness part of the product contract.',
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
      { value: 'v0.3.0', label: 'Verified local release' },
      { value: '16', label: 'Case benchmark' },
      { value: '230', label: 'Backend tests' },
      { value: '128', label: 'Frontend tests' }
    ],
    proofStrip: [
      'v0.3.0',
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
    slug: 'resumeiq',
    category: 'NLP / Resume Intelligence',
    title: 'ResumeIQ',
    subtitle: 'Privacy-Aware Resume Intelligence Platform',
    status: 'Azure demo · active engineering project',
    description:
      'Privacy-aware NLP decision-support platform for multi-format resume parsing, baseline role classification, ATS-style compatibility signals, semantic job-description matching, skill intelligence, writing-quality review, batch comparison, and human recruiter workflows.',
    problem:
      'Candidates and reviewers often receive opaque resume scores without knowing which skills, keywords, structural issues, or writing patterns influenced the result. ResumeIQ separates these signals and presents them for transparent human interpretation.',
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
  'Healthcare AI',
  'NLP / Resume Intelligence',
  'GenAI · RAG · AI Systems Engineering'
];
