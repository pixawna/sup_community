"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { SiteFrame } from "@/components/site/site-frame";

const filters = ["Topic", "Beginner", "Intermediate", "Advanced"] as const;

type Level = (typeof filters)[number];

type Workflow = {
  title: string;
  category: string;
  level: Exclude<Level, "Topic">;
  description: string;
  author: string;
  artTone: string;
  accentTone: string;
};

const workflows: Workflow[] = [
  {
    title: "Policy-Gated Deploy",
    category: "Deployments",
    level: "Beginner",
    description:
      "Ship changes only after automated policy checks pass, so every release respects your compliance and security guardrails.",
    author: "Platform Team",
    artTone: "bg-[#f7f7f4]",
    accentTone: "bg-[#e9f0e6]",
  },
  {
    title: "Human Approval Gate",
    category: "Approvals",
    level: "Beginner",
    description:
      "Pause a workflow at a critical step and route it to the right reviewer, keeping people in the loop for high-stakes decisions.",
    author: "Bhawna Chauhan",
    artTone: "bg-[#eef1ea]",
    accentTone: "bg-[#ffffff]",
  },
  {
    title: "Automated Rollback Path",
    category: "Reliability",
    level: "Intermediate",
    description:
      "Detect regressions from live signals and automatically revert to the last known-good release without waking anyone up.",
    author: "Release Studio",
    artTone: "bg-[#111214]",
    accentTone: "bg-[#f0f0eb]",
  },
  {
    title: "Incident Response Orchestration",
    category: "Operations",
    level: "Intermediate",
    description:
      "Coordinate paging, mitigation steps, and stakeholder updates in a single workflow when production incidents happen.",
    author: "Ops Guild",
    artTone: "bg-[#edf4de]",
    accentTone: "bg-[#f7f7f3]",
  },
  {
    title: "Multi-Repo Release",
    category: "Deployments",
    level: "Advanced",
    description:
      "Sequence coordinated releases across several repositories, tracking dependencies so nothing ships out of order.",
    author: "Release Studio",
    artTone: "bg-[#f7f7f4]",
    accentTone: "bg-[#e9f0e6]",
  },
  {
    title: "Agent-Assisted Canary",
    category: "Reliability",
    level: "Advanced",
    description:
      "Let an agent watch canary metrics and widen or halt the rollout automatically, with a human able to step in at any time.",
    author: "Platform Team",
    artTone: "bg-[#111214]",
    accentTone: "bg-[#f0f0eb]",
  },
];

function WorkflowArt({
  dark,
  tone,
  accent,
}: {
  dark?: boolean;
  tone: string;
  accent: string;
}) {
  return (
    <div
      className={`relative flex h-[220px] items-center justify-center overflow-hidden rounded-t-[24px] ${tone}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_24%)]" />
      <div
        className={`relative flex h-24 w-24 items-center justify-center rounded-[24px] border ${
          dark ? "border-white/10 bg-white/6" : "border-black/8 bg-white/70"
        } ${accent}`}
      >
        <div
          className={`h-12 w-12 rounded-full border-8 ${
            dark ? "border-[#d8f57a]" : "border-[#d6ef82]"
          }`}
        />
        <div
          className={`absolute h-3 w-12 rounded-full ${
            dark ? "bg-white/10" : "bg-black/10"
          }`}
        />
      </div>
    </div>
  );
}

export default function WorkflowsPage() {
  const [activeFilter, setActiveFilter] = useState<Level>("Topic");

  const visibleWorkflows = useMemo(() => {
    if (activeFilter === "Topic") {
      return workflows;
    }

    return workflows.filter((workflow) => workflow.level === activeFilter);
  }, [activeFilter]);

  return (
    <SiteFrame>
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.82)] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.08)] lg:p-10">
          <p className="inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Workflow Library
          </p>

          <div className="mt-7 max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl">
              Run platform workflows that mirror production reality
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[var(--muted-foreground)]">
              Explore policy-gated deploys, rollback paths, approval steps,
              and incident response flows designed to teach how Superplane
              connects engineers and agents in real operations.
            </p>
          </div>

          <div className="mt-10 border-b border-black/8">
            <div className="flex flex-wrap items-center gap-8">
              <button
                type="button"
                className="border-b-2 border-black pb-4 text-lg font-semibold text-[var(--foreground)]"
              >
                Explore
              </button>
              <button
                type="button"
                className="pb-4 text-lg font-medium text-black/46 transition hover:text-[var(--foreground)]"
              >
                Campaigns
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`inline-flex h-14 items-center rounded-full border px-6 text-lg font-medium transition ${
                  activeFilter === filter
                    ? "border-black bg-black text-white"
                    : "border-black/8 bg-white/70 text-black/68 hover:bg-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Workflow Templates
              </h2>
              <span className="pb-1 text-2xl text-black/44">
                {visibleWorkflows.length}
              </span>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3 md:grid-cols-2">
              {visibleWorkflows.map((workflow, index) => {
                const dark = index === 2 || index === 5;
                return (
                  <article
                    key={workflow.title}
                    className="overflow-hidden rounded-[24px] border border-black/8 bg-[#fcfcfa] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <WorkflowArt
                      dark={dark}
                      tone={workflow.artTone}
                      accent={workflow.accentTone}
                    />

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex rounded-full bg-[#e6f3d0] px-4 py-2 text-sm font-semibold text-[#27684f]">
                          {workflow.level}
                        </span>
                        <span className="inline-flex rounded-full border border-black/8 px-4 py-2 text-sm font-medium text-black/58">
                          {workflow.category}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]">
                        {workflow.title}
                      </h3>
                      <p className="mt-3 text-lg leading-7 text-[var(--muted-foreground)]">
                        {workflow.description}
                      </p>

                      <div className="mt-7 flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-black/8 bg-white">
                          <Image
                            src="/minilistic_professional_pic.png"
                            alt={workflow.author}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-lg text-black/58">
                          Maintained by {workflow.author}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
