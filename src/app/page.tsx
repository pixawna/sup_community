"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { SiteFrame } from "@/components/site/site-frame";

const communityStats = [
  { value: "12,400+", label: "Builders learning together" },
  { value: "180+", label: "Workflow templates shipped" },
  { value: "64", label: "Community events hosted" },
  { value: "38", label: "Countries represented" },
] as const;

const upcomingEvents = [
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
] as const;

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function handleReplay() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    void videoRef.current.play();
  }

  function handleToggleMute() {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  return (
    <SiteFrame>
      <section className="flex flex-1 items-center py-10 lg:py-14">
        <div className="hero-shell relative grid w-full gap-0 overflow-hidden rounded-[28px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-16 lg:py-18">
            <p className="eyebrow relative z-10">Welcome home, builder</p>

            <h1 className="relative z-10 mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl xl:text-[5.7rem] xl:leading-[0.95]">
              The Superplane Community, in one place
            </h1>

            <p className="relative z-10 mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              Meet fellow platform engineers, learn hands-on workflow
              patterns, and connect GitHub, CI/CD, incidents, approvals and AI
              agents into one event-driven control plane.
            </p>

            <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/lessons"
                className="btn-primary h-14 px-8 text-base"
              >
                Start Learning
              </Link>
              <Link
                href="https://youtu.be/7GFIB76Oy3Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 px-2 text-base font-semibold text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-6 transition hover:decoration-[var(--orange)]"
              >
                Watch Overview
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 pb-8 pt-2 sm:px-10 lg:min-h-[640px] lg:px-12">
            <div className="hero-card w-full max-w-[640px] rounded-[26px] p-4">
              <div className="overflow-hidden rounded-[22px] border border-[var(--border)]">
                <video
                  ref={videoRef}
                  className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/superplane_review_video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="mt-4 flex items-center gap-6 text-[var(--muted)]">
                <div className="flex items-center gap-6 text-[var(--muted)]">
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-2 text-base transition hover:text-[var(--cloud)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12a8 8 0 1 0 2.34-5.66L4 8.67"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4v4.67h4.67"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Replay</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="inline-flex items-center gap-2 text-base transition hover:text-[var(--cloud)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5 6.5 9H3v6h3.5L11 19V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {isMuted ? (
                        <>
                          <path
                            d="m15 9 6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="m21 9-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            d="M15 9.5a4.5 4.5 0 0 1 0 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M17.8 6.8a8.5 8.5 0 0 1 0 10.4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                    <span>{isMuted ? "Unmute" : "Mute"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="floating-note absolute bottom-2 right-2 flex items-center gap-4 rounded-[22px] px-5 py-4 sm:bottom-4 sm:right-4">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-[var(--border)]">
                <Image
                  src="/minilistic_professional_pic.png"
                  alt="Bhawna Chauhan"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Bhawna Chauhan
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Developer Relation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="surface-card grid gap-6 rounded-[28px] p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-9">
          {communityStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-[var(--muted-foreground)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="surface-card grid w-full gap-8 overflow-hidden rounded-[28px] p-6 lg:grid-cols-[0.92fr_1.08fr] lg:p-9">
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--pitch)]">
            <Image
              src="/overflow_photo.png"
              alt="Workflow gallery preview"
              width={1044}
              height={772}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-2 py-2 lg:px-6">
            <p className="eyebrow">Workflow Gallery</p>
            <h2 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
              Learn by running production-style workflows
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              Start with ready-made Superplane templates for policy-gated
              deployments, human approvals, incident automation, and rollback
              paths.
            </p>
            <Link
              href="/workflows"
              className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-[var(--foreground)] transition hover:gap-4 hover:text-[var(--orange)]"
            >
              <span>Explore Workflows</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="surface-card rounded-[28px] p-6 lg:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Upcoming Events</p>
              <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl">
                Learn together at the next community event
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-3 text-lg font-semibold text-[var(--foreground)] transition hover:gap-4 hover:text-[var(--orange)]"
            >
              <span>See all events</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--pitch)]"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,10,0.06),rgba(8,9,10,0.55))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--cloud)]">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--orange)]">
                      {event.date}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="flex flex-col items-center gap-6 rounded-[28px] border border-[var(--border)] bg-[var(--teal)] p-10 text-center text-[var(--cloud)] lg:p-14">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Join thousands of builders shaping the future of AI-first
            platform engineering
          </h2>
          <p className="max-w-xl text-lg leading-8 text-[var(--sage)]">
            Share your workflows, get feedback from other operators, and stay
            up to date on new lessons and templates.
          </p>
          <Link
            href="/community"
            className="btn-primary h-14 px-8 text-base"
          >
            Explore the Community
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
