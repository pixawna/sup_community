import { describe, expect, it } from "vitest";

import type { Workflow } from "./workflows-data";
import { filterWorkflows, getCategoryOptions } from "./workflows-filters";

const sample: Workflow[] = [
  {
    slug: "policy-gated-deploy",
    title: "Policy-Gated Deploy",
    category: "Deployments",
    level: "Beginner",
    description: "Ship changes only after automated policy checks pass.",
    author: "Platform Team",
    artTone: "bg-white",
    accentTone: "bg-white",
    dark: false,
    tags: ["policy", "compliance"],
    steps: 5,
    estimatedTime: "~8 min",
    href: "https://docs.superplane.com/workflows/policy-gated-deploy",
  },
  {
    slug: "automated-rollback-path",
    title: "Automated Rollback Path",
    category: "Reliability",
    level: "Intermediate",
    description: "Detect regressions and automatically revert.",
    author: "Release Studio",
    artTone: "bg-black",
    accentTone: "bg-black",
    dark: true,
    tags: ["reliability", "rollback"],
    steps: 6,
    estimatedTime: "~10 min",
    href: "https://docs.superplane.com/workflows/automated-rollback-path",
  },
  {
    slug: "agent-assisted-canary",
    title: "Agent-Assisted Canary",
    category: "Reliability",
    level: "Advanced",
    description: "Let an agent watch canary metrics.",
    author: "Platform Team",
    artTone: "bg-black",
    accentTone: "bg-black",
    dark: true,
    tags: ["reliability", "agents", "canary"],
    steps: 6,
    estimatedTime: "~10 min",
    href: "https://docs.superplane.com/workflows/agent-assisted-canary",
  },
];

describe("getCategoryOptions", () => {
  it("prefixes the unique categories with an All option", () => {
    expect(getCategoryOptions(sample)).toEqual([
      "All",
      "Deployments",
      "Reliability",
    ]);
  });

  it("does not duplicate categories shared by multiple workflows", () => {
    const options = getCategoryOptions(sample);
    expect(options.filter((c) => c === "Reliability")).toHaveLength(1);
  });
});

describe("filterWorkflows", () => {
  it("returns every workflow when all filters are set to All and query is empty", () => {
    const result = filterWorkflows(sample, {
      query: "",
      level: "All",
      category: "All",
    });
    expect(result).toHaveLength(3);
  });

  it("filters by level", () => {
    const result = filterWorkflows(sample, {
      query: "",
      level: "Advanced",
      category: "All",
    });
    expect(result.map((w) => w.slug)).toEqual(["agent-assisted-canary"]);
  });

  it("filters by category", () => {
    const result = filterWorkflows(sample, {
      query: "",
      level: "All",
      category: "Reliability",
    });
    expect(result.map((w) => w.slug)).toEqual([
      "automated-rollback-path",
      "agent-assisted-canary",
    ]);
  });

  it("combines level and category filters with AND semantics", () => {
    const result = filterWorkflows(sample, {
      query: "",
      level: "Intermediate",
      category: "Reliability",
    });
    expect(result.map((w) => w.slug)).toEqual(["automated-rollback-path"]);
  });

  it("matches search query case-insensitively across title, description, category, author, and tags", () => {
    expect(
      filterWorkflows(sample, { query: "COMPLIANCE", level: "All", category: "All" }),
    ).toHaveLength(1);
    expect(
      filterWorkflows(sample, { query: "release studio", level: "All", category: "All" }),
    ).toHaveLength(1);
    expect(
      filterWorkflows(sample, { query: "canary", level: "All", category: "All" }),
    ).toHaveLength(1);
  });

  it("returns an empty list when nothing matches", () => {
    const result = filterWorkflows(sample, {
      query: "nonexistent-term",
      level: "All",
      category: "All",
    });
    expect(result).toHaveLength(0);
  });

  it("treats whitespace-only queries as empty", () => {
    const result = filterWorkflows(sample, {
      query: "   ",
      level: "All",
      category: "All",
    });
    expect(result).toHaveLength(3);
  });
});
