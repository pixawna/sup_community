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

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 rounded-[24px] border border-black/8 bg-white/60 px-8 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f3d0]">
        <div className="h-8 w-8 rounded-full border-4 border-[#27684f]" />
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
        className="inline-flex h-12 items-center rounded-full border border-black bg-black px-6 text-base font-semibold text-white transition hover:opacity-90"
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
              className="h-14 w-full max-w-xl rounded-full border border-black/8 bg-white/70 px-6 text-lg text-[var(--foreground)] placeholder:text-black/40 transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
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
                    ? "border-black bg-black text-white"
                    : "border-black/8 bg-white/70 text-black/68 hover:bg-white"
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
                    ? "border-black bg-[#d8f57a] text-black"
                    : "border-black/8 bg-white/60 text-black/58 hover:bg-white"
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
              <span className="pb-1 text-2xl text-black/44" aria-live="polite">
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
                    className="group overflow-hidden rounded-[24px] border border-black/8 bg-[#fcfcfa] shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]"
                  >
                    <WorkflowArt
                      dark={workflow.dark}
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
                        <span className="inline-flex rounded-full bg-black/4 px-3 py-1 text-sm font-medium text-black/46">
                          {workflow.steps} steps
                        </span>
                        <span className="inline-flex rounded-full bg-black/4 px-3 py-1 text-sm font-medium text-black/46">
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
                            className="rounded-full border border-black/8 px-3 py-1 text-sm text-black/54"
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
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

                        <Link
                          href={workflow.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center rounded-full border border-black px-5 text-base font-semibold text-[var(--foreground)] transition group-hover:bg-black group-hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
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
