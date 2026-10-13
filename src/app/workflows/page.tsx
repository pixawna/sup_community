"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { SiteFrame } from "@/components/site/site-frame";
import { levels, workflows } from "@/components/site/workflows-data";
import {
  filterWorkflows,
  getCategoryOptions,
  type LevelFilter,
} from "@/components/site/workflows-filters";

const levelFilters: LevelFilter[] = ["All", ...levels];

const categories = getCategoryOptions(workflows);

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,142,9,0.18),transparent_28%)]" />
      <div
        className={`relative flex h-24 w-24 items-center justify-center rounded-[24px] border border-[var(--border)] bg-[var(--pitch)]/80 ${accent}`}
      >
        <div
          className={`h-12 w-12 rounded-full border-8 ${
            dark ? "border-[var(--orange)]" : "border-[var(--sage)]"
          }`}
        />
        <div className="absolute h-3 w-12 rounded-full bg-[var(--mist)]/20" />
      </div>
    </div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="surface-card mt-8 flex flex-col items-center gap-4 rounded-[24px] px-8 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal)]">
        <div className="h-8 w-8 rounded-full border-4 border-[var(--sage)]" />
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
        No workflows match your filters
      </h3>
      <p className="max-w-md text-lg leading-7 text-[var(--muted-foreground)]">
        Try a different search term, or reset the level and topic filters to
        see the full workflow library again.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="btn-primary h-12 px-6 text-base"
      >
        Clear filters
      </button>
    </div>
  );
}

export default function WorkflowsPage() {
  const [query, setQuery] = useState("");
  const [activeLevel, setActiveLevel] = useState<LevelFilter>("All");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleWorkflows = useMemo(
    () =>
      filterWorkflows(workflows, {
        query,
        level: activeLevel,
        category: activeCategory,
      }),
    [activeLevel, activeCategory, query],
  );

  function clearFilters() {
    setQuery("");
    setActiveLevel("All");
    setActiveCategory("All");
  }

  return (
    <SiteFrame>
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="surface-card overflow-hidden rounded-[28px] p-7 lg:p-10">
          <p className="eyebrow">Workflow Library</p>

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

          <div className="mt-10 border-b border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-8">
              <button
                type="button"
                className="border-b-2 border-[var(--orange)] pb-4 text-lg font-semibold text-[var(--foreground)]"
              >
                Explore
              </button>
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="workflow-search" className="sr-only">
              Search workflows
            </label>
            <input
              id="workflow-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search workflows by title, tag, category, or maintainer…"
              className="h-14 w-full max-w-xl rounded-full border border-[var(--border)] bg-[var(--pitch)] px-6 text-lg text-[var(--foreground)] placeholder:text-[var(--muted)] transition focus:border-[var(--orange)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)]/35"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {levelFilters.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setActiveLevel(level)}
                aria-pressed={activeLevel === level}
                className={`inline-flex h-14 items-center rounded-full border px-6 text-lg font-medium transition ${
                  activeLevel === level
                    ? "border-[var(--orange)] bg-[var(--orange)] text-[var(--pitch)]"
                    : "border-[var(--border)] bg-transparent text-[var(--muted)] hover:border-[var(--mist)] hover:text-[var(--cloud)]"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-[var(--orange)] bg-[var(--orange)] text-[var(--pitch)]"
                    : "border-[var(--border)] bg-transparent text-[var(--muted)] hover:border-[var(--mist)] hover:text-[var(--cloud)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Workflow Templates
              </h2>
              <span className="pb-1 text-2xl text-[var(--muted)]" aria-live="polite">
                {visibleWorkflows.length}
              </span>
            </div>

            {visibleWorkflows.length === 0 ? (
              <EmptyState onClear={clearFilters} />
            ) : (
              <div className="mt-8 grid gap-6 xl:grid-cols-3 md:grid-cols-2">
                {visibleWorkflows.map((workflow) => (
                  <article
                    key={workflow.slug}
                    className="group overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--pitch)] transition duration-200 hover:-translate-y-1 hover:border-[var(--mist)]"
                  >
                    <WorkflowArt
                      dark={workflow.dark}
                      tone={workflow.artTone}
                      accent={workflow.accentTone}
                    />

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-[var(--sage)]">
                          {workflow.level}
                        </span>
                        <span className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--mist)]">
                          {workflow.category}
                        </span>
                        <span className="inline-flex rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-[var(--muted)]">
                          {workflow.steps} steps
                        </span>
                        <span className="inline-flex rounded-full bg-white/6 px-3 py-1 text-sm font-medium text-[var(--muted)]">
                          {workflow.estimatedTime}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]">
                        {workflow.title}
                      </h3>
                      <p className="mt-3 text-lg leading-7 text-[var(--muted-foreground)]">
                        {workflow.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {workflow.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--graphite)]">
                            <Image
                              src="/minilistic_professional_pic.png"
                              alt={workflow.author}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <p className="text-lg text-[var(--muted)]">
                            Maintained by {workflow.author}
                          </p>
                        </div>

                        <Link
                          href={workflow.href}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary h-11 px-5 text-base group-hover:border-[var(--cloud)] group-hover:bg-[var(--cloud)] group-hover:text-[var(--pitch)]"
                        >
                          View workflow
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
