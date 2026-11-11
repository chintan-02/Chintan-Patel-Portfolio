export const engineeringExample = {
  id: 'staging-lifecycle',
  project: 'RegImpact AI',
  title: 'Making staging temporary. Keeping verification real.',
  summary: 'An AI-assisted review exposed three ways a cost-control change could compromise security or leave background processing idle. The final design changed the lifecycle, not just the replica count.',
  problem: 'A validated Azure staging environment kept running between demonstrations. Simply scaling every workload to zero looked economical, but the background processes had no trigger to wake them.',
  contribution: 'Codex reviewed the proposed changes and identified unsafe shell interpolation, a deployment–teardown race, and background workers that could remain at zero replicas.',
  decision: 'I addressed the findings by passing confirmation through an environment variable, sharing the staging concurrency group, and keeping workloads functional during validation before requesting teardown.',
  verification: 'The merged diff and public review replies show the corrections. The change preserves smoke checks, deployment-evidence capture and a resource inventory before deletion is requested.',
  limitation: 'This is evidence of a merged implementation and automated review, not a new cloud deployment, a completed deletion check or measured cost savings. Azure was disabled at the time of the PR.',
  url: 'https://github.com/chintan-02/regimpact-ai/pull/26',
  caseStudy: '/case-studies/regimpact-ai',
  caseStudySlug: 'regimpact-ai',
  date: '29 September 2026',
  decisions: [
    {
      id: 'shell-boundary',
      title: 'A confirmation field is still untrusted input.',
      category: 'Security',
      before: 'A workflow input was interpolated directly into shell source.',
      finding: 'Automated review identified a script-injection path in a workflow with Azure OIDC access.',
      after: 'Pass the input through an environment variable and compare the quoted value in the shell.',
      evidence: 'https://github.com/chintan-02/regimpact-ai/pull/26#discussion_r4138810077',
      findingUrl: 'https://github.com/chintan-02/regimpact-ai/pull/26#discussion_r4138725589'
    },
    {
      id: 'lifecycle-boundary',
      title: 'Cost control must preserve a working system.',
      category: 'Reliability',
      before: 'Zero replicas were applied to background processes without wake-up scaling rules.',
      finding: 'HTTP checks could pass while ingestion and source-monitoring work remained queued.',
      after: 'Keep staging functional for validation, retain evidence, then request teardown. Serialize deployment and deletion with a shared concurrency group.',
      evidence: 'https://github.com/chintan-02/regimpact-ai/pull/26#discussion_r4138810545',
      findingUrl: 'https://github.com/chintan-02/regimpact-ai/pull/26#discussion_r4138725601'
    }
  ]
};

export const engineeringPractices = [
  { title: 'Scope before generation', text: 'Inspect the existing system, define the behavior and keep changes bounded.' },
  { title: 'Review beyond the diff', text: 'Question assumptions about permissions, data, dependencies and runtime behavior.' },
  { title: 'Verify the claim', text: 'Use relevant tests and operational evidence. A passing build alone is not the result.' }
];

export const engineeringBoundaries = [
  ['Ownership', 'AI can propose and review. I remain responsible for understanding the implementation and its tradeoffs.'],
  ['Attribution', 'Automated findings are labelled as automated review. Public PRs show the changes; they do not establish who drafted every line.'],
  ['Security', 'Public examples link to sanitized repository evidence rather than private prompts, credentials or client information.'],
  ['Evidence', 'A merged change, a tested release and a production deployment are different claims. Limitations stay visible.']
];
