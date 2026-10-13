import Image from "next/image";

import { SiteFrame } from "@/components/site/site-frame";

const filters = [
  "Topic",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Hide Completed",
  "Most Popular",
];

const lessons = [
  {
    title: "Keeping Deployments Safe with Policy Gates",
    author: "Bhawna Chauhan",
    level: "Beginner",
    artTone: "bg-[var(--teal)]",
    accentTone: "bg-[var(--graphite)]",
  },
  {
    title: "Approvals That Fit Modern CI/CD Releases",
    author: "Platform Team",
    level: "Beginner",
    artTone: "bg-[var(--graphite)]",
    accentTone: "bg-[var(--nav)]",
  },
  {
    title: "Shaping Resilient Incident Response Workflows",
    author: "Ops Guild",
    level: "Intermediate",
    artTone: "bg-[#111212]",
    accentTone: "bg-[var(--teal)]",
  },
  {
    title: "Finding the Right Rollback Path Automatically",
    author: "Release Studio",
    level: "Beginner",
    artTone: "bg-[#1b1e1d]",
    accentTone: "bg-[var(--pitch)]",
  },
];

function LessonArt({
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
      className={`relative flex h-[260px] items-center justify-center overflow-hidden rounded-t-[24px] ${tone}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,142,9,0.18),transparent_28%)]" />
      <div
        className={`relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-[var(--border)] bg-[var(--pitch)]/80 ${accent}`}
      >
        <div
          className={`h-14 w-14 rounded-full border-8 ${
            dark ? "border-[var(--orange)]" : "border-[var(--sage)]"
          }`}
        />
        <div className="absolute h-3.5 w-14 rounded-full bg-[var(--mist)]/20" />
      </div>
    </div>
  );
}

export default function LessonsPage() {
  return (
    <SiteFrame>
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="surface-card overflow-hidden rounded-[28px] p-7 lg:p-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl">
              Lessons
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[var(--muted-foreground)]">
              Learn AI-first platform engineering through interactive lessons
              on workflows, approvals, incidents, and production-safe
              automation.
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
              <button
                type="button"
                className="pb-4 text-lg font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Campaigns
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {filters.map((filter, index) => (
              <div key={filter} className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex h-14 items-center rounded-full border border-[var(--border)] bg-transparent px-6 text-lg font-medium text-[var(--mist)] transition hover:border-[var(--mist)] hover:text-[var(--cloud)]"
                >
                  {filter}
                  {index === 0 || index === filters.length - 1 ? (
                    <span className="ml-3 text-sm">⌄</span>
                  ) : null}
                </button>
                {index === 0 || index === 2 || index === 4 ? (
                  <span className="hidden h-8 w-px bg-[var(--border)] lg:block" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Product Lessons
              </h2>
              <span className="pb-1 text-2xl text-[var(--muted)]">14</span>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-4 md:grid-cols-2">
              {lessons.map((lesson, index) => {
                const dark = index === 2;
                return (
                  <article
                    key={lesson.title}
                    className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--pitch)]"
                  >
                    <LessonArt
                      dark={dark}
                      tone={lesson.artTone}
                      accent={lesson.accentTone}
                    />

                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-[var(--sage)]">
                        {lesson.level}
                      </span>
                      <h3 className="mt-5 text-[2rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[var(--foreground)]">
                        {lesson.title}
                      </h3>

                      <div className="mt-7 flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--graphite)]">
                          <Image
                            src="/minilistic_professional_pic.png"
                            alt={lesson.author}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-lg text-[var(--muted)]">
                          Written by {lesson.author}
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
