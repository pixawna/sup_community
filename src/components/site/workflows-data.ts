export const levels = ["Beginner", "Intermediate", "Advanced"] as const;

export type Level = (typeof levels)[number];

export type Workflow = {
  slug: string;
  title: string;
  category: string;
  level: Level;
  description: string;
  author: string;
  artTone: string;
  accentTone: string;
  /** Drives the dark art treatment; lives on the data instead of list position. */
  dark: boolean;
  tags: string[];
  steps: number;
  estimatedTime: string;
  href: string;
};

export const workflows: Workflow[] = [
  {
    slug: "policy-gated-deploy",
    title: "Policy-Gated Deploy",
    category: "Deployments",
    level: "Beginner",
    description:
      "Ship changes only after automated policy checks pass, so every release respects your compliance and security guardrails.",
    author: "Platform Team",
    artTone: "bg-[#f7f7f4]",
    accentTone: "bg-[#e9f0e6]",
    dark: false,
    tags: ["policy", "compliance", "ci/cd"],
    steps: 5,
    estimatedTime: "~8 min",
    href: "https://docs.superplane.com/workflows/policy-gated-deploy",
  },
  {
    slug: "human-approval-gate",
    title: "Human Approval Gate",
    category: "Approvals",
    level: "Beginner",
    description:
      "Pause a workflow at a critical step and route it to the right reviewer, keeping people in the loop for high-stakes decisions.",
    author: "Bhawna Chauhan",
    artTone: "bg-[#eef1ea]",
    accentTone: "bg-[#ffffff]",
    dark: false,
    tags: ["approvals", "review", "governance"],
    steps: 4,
    estimatedTime: "~6 min",
    href: "https://docs.superplane.com/workflows/human-approval-gate",
  },
  {
    slug: "automated-rollback-path",
    title: "Automated Rollback Path",
    category: "Reliability",
    level: "Intermediate",
    description:
      "Detect regressions from live signals and automatically revert to the last known-good release without waking anyone up.",
    author: "Release Studio",
    artTone: "bg-[#111214]",
    accentTone: "bg-[#f0f0eb]",
    dark: true,
    tags: ["reliability", "rollback", "monitoring"],
    steps: 6,
    estimatedTime: "~10 min",
    href: "https://docs.superplane.com/workflows/automated-rollback-path",
  },
  {
    slug: "incident-response-orchestration",
    title: "Incident Response Orchestration",
    category: "Operations",
    level: "Intermediate",
    description:
      "Coordinate paging, mitigation steps, and stakeholder updates in a single workflow when production incidents happen.",
    author: "Ops Guild",
    artTone: "bg-[#edf4de]",
    accentTone: "bg-[#f7f7f3]",
    dark: false,
    tags: ["incidents", "paging", "operations"],
    steps: 7,
    estimatedTime: "~12 min",
    href: "https://docs.superplane.com/workflows/incident-response-orchestration",
  },
  {
    slug: "multi-repo-release",
    title: "Multi-Repo Release",
    category: "Deployments",
    level: "Advanced",
    description:
      "Sequence coordinated releases across several repositories, tracking dependencies so nothing ships out of order.",
    author: "Release Studio",
    artTone: "bg-[#f7f7f4]",
    accentTone: "bg-[#e9f0e6]",
    dark: false,
    tags: ["deployments", "multi-repo", "sequencing"],
    steps: 8,
    estimatedTime: "~15 min",
    href: "https://docs.superplane.com/workflows/multi-repo-release",
  },
  {
    slug: "agent-assisted-canary",
    title: "Agent-Assisted Canary",
    category: "Reliability",
    level: "Advanced",
    description:
      "Let an agent watch canary metrics and widen or halt the rollout automatically, with a human able to step in at any time.",
    author: "Platform Team",
    artTone: "bg-[#111214]",
    accentTone: "bg-[#f0f0eb]",
    dark: true,
    tags: ["reliability", "agents", "canary"],
    steps: 6,
    estimatedTime: "~10 min",
    href: "https://docs.superplane.com/workflows/agent-assisted-canary",
  },
];
