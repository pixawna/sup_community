import Image from "next/image";

import { SiteFrame } from "@/components/site/site-frame";

const filters = [
  "This Month",
  "Next Month",
  "Diversity Focused",
  "Region",
] as const;

const eventCards = [
  {
    title: "Superplane Builder Sprint",
    date: "June 6-7, 2026",
    image: "/superplane_1.jpeg",
  },
  {
    title: "Agent Workflow Jam",
    date: "June 14-18, 2026",
    image: "/superplane_2.jpeg",
  },
  {
    title: "Release Patterns Summit",
    date: "July 10, 2026",
    image: "/overflow_photo.png",
  },
  {
    title: "Operators Meetup",
    date: "July 24, 2026",
    image: "/minilistic_professional_pic.png",
  },
] as const;

function FilterIcon({ index }: { index: number }) {
  if (index === 0 || index === 1) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M3 19a6 6 0 0 1 12 0M12 19a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.3 4 5.5 4 9s-1.5 6.7-4 9c-2.5-2.3-4-5.5-4-9s1.5-6.7 4-9Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <SiteFrame>
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="surface-card overflow-hidden rounded-[30px]">
          <div className="bg-[var(--teal)] px-8 py-18 text-center text-[var(--cloud)] lg:px-12 lg:py-22">
            <h1 className="mx-auto max-w-6xl text-5xl font-semibold tracking-[-0.07em] sm:text-6xl lg:text-[5.2rem] lg:leading-[0.95]">
              Join <span className="text-[var(--sage)]">Hackathons </span> &
              Events
            </h1>
            <div className="mx-auto mt-4 h-1 w-52 rounded-full bg-[linear-gradient(90deg,var(--orange),rgba(237,142,9,0.08))]" />
            <p className="mx-auto mt-10 max-w-5xl text-2xl leading-10 text-[var(--mist)]">
              Participate in exciting events, hackathons, and workshops to
              connect with{" "}
              <span className="font-semibold text-[var(--cloud)]">
                fellow developers
              </span>{" "}
              building the future of AI
            </p>
          </div>

          <div className="px-8 py-12 lg:px-12 lg:py-16">
            <div className="flex flex-wrap items-center justify-center gap-4 text-[var(--foreground)]">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  type="button"
                  className="inline-flex h-14 items-center gap-3 rounded-full border border-[var(--border)] bg-transparent px-6 text-lg font-medium text-[var(--mist)] transition hover:border-[var(--mist)] hover:text-[var(--cloud)]"
                >
                  <FilterIcon index={index} />
                  <span>{filter}</span>
                  {filter === "Region" ? <span className="ml-1 text-sm">⌄</span> : null}
                </button>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
                Upcoming Events
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.12em] text-[var(--orange)]">2026</p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {eventCards.map((event) => (
                  <article
                    key={event.title}
                    className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--pitch)]"
                  >
                    <div className="relative h-[280px] bg-[var(--graphite)]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,10,0.06),rgba(8,9,10,0.5))]" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--cloud)]">
                        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--orange)]">
                          {event.date}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="rounded-full bg-[var(--orange)] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--pitch)]">
                        Community Event
                      </span>
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-transparent text-lg text-[var(--mist)] transition hover:border-[var(--cloud)] hover:text-[var(--cloud)]"
                      >
                        →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
