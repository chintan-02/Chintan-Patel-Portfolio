export const projects = [
  {
  slug: 'triageai',
  category: 'Healthcare AI',
  title: 'TriageAI',
  subtitle: 'Clinical Intake & ESI Care Routing Assistant',
  status: 'Active development · React integration in progress',
  description:
    'Healthcare AI clinical decision-support workflow combining structured intake, evidence-linked clinical NLP, LightGBM ESI 3/4/5 prediction, safety-rule escalation, clinician review, audit logging, dashboard views, and PDF reporting. The system supports—not replaces—clinical judgment.',
  problem:
    'Emergency intake decisions need to be fast, consistent, explainable, and safety-aware. A prediction model alone is not enough—the output must be reviewed by clinicians, protected by safety rules, and preserved in an auditable workflow.',
  stack: [
    'Python',
    'FastAPI',
    'React',
    'TypeScript',
    'LightGBM',
    'Scikit-learn',
    'SQLAlchemy',
    'SQLite',
    'Pydantic',
    'pytest'
  ],
  features: [
    'Clinical Intake NLP',
    'ESI 3/4/5 Prediction',
    'Safety-Rule Escalation',
    'Clinician Review',
    'Human Override',
    'Audit Trail',
    'Dashboard',
    'PDF Report'
  ],
  metrics: [
    { value: '78.32%', label: 'Accuracy' },
    { value: '70.37%', label: 'Macro F1' },
    { value: '54.70%', label: 'ESI 5 F1' },
    { value: '0.68%', label: 'Unsafe ESI 3→5 rate' }
  ],
  screenshots: [
    {
      label: 'Structured clinical intake',
      detail: 'Capture structured fields or extract them from clinician free-text notes.'
    },
    {
      label: 'Prediction and safety review',
      detail: 'Review LightGBM output, confidence, safety escalation, and supporting evidence.'
    },
    {
      label: 'Clinician review and audit',
      detail: 'Accept or override the result while preserving the clinical decision trail.'
    }
  ],
  pipeline: [
    'Clinical Intake',
    'NLP Review',
    'Feature Build',
    'LightGBM V2',
    'Safety Rules',
    'Clinician Review',
    'Audit + Report'
  ],
  liveUrl: null,
  githubUrl: 'https://github.com/chintan-02/triageai-esi-care-routing',
  caseStudyUrl: '/case-studies/triageai',
  accent: 'from-amber-400 to-orange-500'
},
  {
    slug: 'policygpt',
    category: 'GenAI / RAG',
    title: 'PolicyGPT Enterprise',
    subtitle: 'Evidence-First RAG for HR & Compliance PDFs',
    status: 'Phase 1 MVP / local, deployment planned',
    description:
      'Phase 1 local RAG assistant for HR and compliance PDFs — FastAPI backend, Streamlit UI, ChromaDB retrieval, citation cards, evidence explorer, and unsupported-question fallback guardrails.',
    problem:
      'Organizations store policy and compliance information in long PDFs. Generic chatbots may answer quickly but without source grounding. PolicyGPT is designed to answer only when retrieved evidence is strong enough.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'SentenceTransformers', 'Groq Llama-3.3-70B', 'PyMuPDF', 'Streamlit', 'Pydantic v2'],
    features: ['Evidence Gate', 'Page Citations', 'Confidence Scoring', 'Fallback Guardrails', 'Evidence Explorer', 'Citation Cards'],
    metrics: [
      { value: '0', label: 'citations on unsupported Q' },
      { value: '0.0000', label: 'confidence on out-of-scope' },
      { value: 'MiniLM', label: 'all-MiniLM-L6-v2 embeddings' },
      { value: 'Swagger', label: 'FastAPI docs' }
    ],
    screenshots: [
      { label: 'Document Upload', detail: 'Upload policy PDFs for parsing, chunking, and embedding.' },
      { label: 'Citation-backed Answer', detail: 'Answer only when retrieved evidence clears the confidence threshold.' },
      { label: 'Unsupported-question Fallback', detail: 'Refuse to answer when evidence is insufficient.' },
      { label: 'Evidence Explorer', detail: 'Inspect evidence, confidence, and citations behind a response.' },
      { label: 'FastAPI Docs', detail: 'Swagger documentation exposes the backend query and upload contracts.' }
    ],
    pipeline: ['PDF Upload', 'Extract + Chunk', 'Embed → ChromaDB', 'Evidence Gate', 'LLM Generation', 'Citation Cards'],
    liveUrl: null,
    githubUrl: 'https://github.com/chintan-02/policygpt-enterprise',
    caseStudyUrl: '/case-studies/policygpt',
    accent: 'from-amber-400 to-violet-400'
  },
  {
  slug: 'resumeiq',
  category: 'NLP / Resume Intelligence',
  title: 'ResumeIQ',
  subtitle: 'Privacy-Aware Resume Intelligence Platform',
  status: 'Live demo · active development',
  description:
    'Privacy-aware NLP decision-support platform for resume parsing, baseline role classification, ATS-style compatibility signals, job-description matching, normalized skill extraction, writing-quality analysis, batch review, and recruiter-supported human decision workflows.',
  problem:
    'Candidates and reviewers often receive unexplained resume scores without knowing which skills, keywords, structural issues, or writing patterns influenced the result. ResumeIQ separates these signals and presents them for transparent human review.',
  stack: [
    'Python',
    'Streamlit',
    'FastAPI',
    'Scikit-learn',
    'TF-IDF',
    'SQLAlchemy',
    'SQLite',
    'Docker',
    'GitHub Actions',
    'Azure'
  ],
  features: [
    'PDF, DOCX & TXT Parsing',
    'Baseline Role Classification',
    'ATS-Style Signals',
    'Semantic JD Matching',
    'Skill-Gap Analysis',
    'Writing-Quality Review',
    'Batch Resume Ranking',
    'Recruiter Review Workflow'
  ],
  metrics: [
    { value: '3', label: 'Resume formats supported' },
    { value: 'Multi-signal', label: 'Analysis approach' },
    { value: 'Human', label: 'Review required' },
    { value: 'Azure', label: 'Portfolio demo' }
  ],
  screenshots: [
    {
      label: 'Resume upload and parsing',
      detail: 'Upload PDF, DOCX, or TXT files for local text extraction and normalization.'
    },
    {
      label: 'Resume intelligence dashboard',
      detail: 'Review classification, structure, skills, keyword, semantic, and writing-quality signals.'
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
    'JD Matching',
    'Quality Review',
    'Human Review'
  ],
  liveUrl: 'https://resume-classifier-chintan.azurewebsites.net',
  githubUrl: 'https://github.com/chintan-02/smart-resume-classifier',
  caseStudyUrl: '/case-studies/resumeiq',
  accent: 'from-amber-400 to-rose-400'
}
];

export const projectFilters = ['All', 'Healthcare AI', 'NLP / Resume Intelligence', 'GenAI / RAG'];
