"use client";

import Image from "next/image";
import { useState } from "react";

import { SiteFrame } from "@/components/site/site-frame";

const socialBlocks = [
  {
    label: "X",
    href: "https://x.com/superplanehq",
    tone: "bg-black text-white",
  },
  {
    label: "in",
    href: "https://www.linkedin.com/company/superplane/",
    tone: "bg-[#1f1f1f] text-white",
  },
  {
    label: "Discord",
    href: "https://discord.com/invite/KC78eCNsnw",
    tone: "bg-[#2c2c2c] text-white",
  },
  {
    label: "GitHub",
    href: "https://github.com/superplanehq/superplane",
    tone: "bg-[#3a3a3a] text-white",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@superplanehq",
    tone: "bg-[#FF0000] text-white",
  },
] as const;

const builderPosts = [
  {
    handle: "@BhawnaBuilds",
    copy:
      "Just shipped my second approval-aware deployment workflow using Superplane. Love how easy it is to explain rollback logic visually.",
  },
  {
    handle: "@MadhurOps",
    copy:
      "Attended today’s builder session and took detailed notes. Still learning, still growing, and already prototyping a release flow right after.",
  },
  {
    handle: "@DishantBuilds",
    copy:
      "Joined the Superplane Community this week and started building workflow lessons around CI/CD safety checks and human approvals.",
  },
  {
    handle: "@AditiLaunches",
    copy:
      "Opening session was exactly what I needed. Clear overview, practical examples, and a strong builder network to learn alongside.",
  },
];

const featuredSlides = [
  {
    src: "/superplane_1.jpeg",
    title: "Superplane Team",
  },
  {
    src: "/superplane_2.jpeg",
    title: "Agents Unconf",
  },
] as const;

function SocialIcon({ label }: { label: string }) {
  if (label === "X") {
    return <span className="text-3xl font-semibold">X</span>;
  }

  if (label === "in") {
    return <span className="text-3xl font-semibold">in</span>;
  }

  if (label === "GitHub") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.51.99.11-.76.42-1.29.76-1.58-2.67-.3-5.47-1.32-5.47-5.87 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.13 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6.01 0c2.29-1.54 3.29-1.22 3.29-1.22.65 1.63.24 2.83.12 3.13.77.84 1.23 1.9 1.23 3.2 0 4.57-2.81 5.56-5.49 5.86.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.32 4.37A16.8 16.8 0 0 0 15.7 2.9l-.23.46c1.69.42 3.11 1.03 4.27 1.83a14.47 14.47 0 0 0-4.15-1.61 14.72 14.72 0 0 0-7.18 0A14.39 14.39 0 0 0 4.25 5.2 14.22 14.22 0 0 1 8.52 3.36l-.22-.46a16.64 16.64 0 0 0-4.62 1.47C1.22 8.02.56 11.54.89 15.01a16.96 16.96 0 0 0 5.03 2.54l1.08-1.73c-.59-.2-1.15-.44-1.68-.73l.41-.3c3.24 1.49 6.76 1.49 9.96 0l.42.3c-.53.29-1.09.53-1.68.73l1.08 1.73a16.86 16.86 0 0 0 5.03-2.54c.39-4.03-.67-7.52-2.22-10.64ZM8.02 12.9c-.97 0-1.76-.88-1.76-1.96s.78-1.96 1.76-1.96c.98 0 1.77.89 1.76 1.96 0 1.08-.78 1.96-1.76 1.96Zm7.96 0c-.97 0-1.76-.88-1.76-1.96s.78-1.96 1.76-1.96 1.77.89 1.76 1.96c0 1.08-.78 1.96-1.76 1.96Z" />
    </svg>
  );
}

export default function CommunityPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = featuredSlides[activeSlide];

  function handleToggleSlide() {
    setActiveSlide((current) => (current === 0 ? 1 : 0));
  }

  return (
    <SiteFrame>
      <section className="pb-8 pt-10 lg:pb-12 lg:pt-14">
        <div className="grid gap-10 rounded-[32px] border border-black/8 bg-[rgba(255,255,255,0.84)] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <div className="mt-2">
              <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem] lg:leading-[0.96]">
                <span className="block">Join the</span>
                <span className="mt-4 inline-block whitespace-nowrap rounded-[1.6rem] bg-black px-6 py-3 text-[0.88em] text-white shadow-[0_16px_34px_rgba(0,0,0,0.14)]">
                  Superplane Community
                </span>
              </h1>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-[var(--muted-foreground)]">
                Connect with developers, join workflow jams, and build the
                future of AI-first platform engineering with{" "}
                <span className="font-semibold text-[var(--foreground)] underline decoration-black decoration-4 underline-offset-6">
                  thousands of creators
                </span>{" "}
                worldwide.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              {socialBlocks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`flex h-22 w-22 items-center justify-center rounded-none shadow-[0_16px_30px_rgba(0,0,0,0.08)] transition hover:scale-[1.03] ${item.tone}`}
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[640px]">
              <div className="absolute inset-x-6 bottom-[-18px] h-16 rounded-[1.8rem] bg-black/12 blur-sm" />
              <button
                type="button"
                onClick={handleToggleSlide}
                className="relative block w-full overflow-hidden rounded-[2rem] border-[3px] border-black bg-black text-left shadow-[0_28px_80px_rgba(0,0,0,0.14)]"
              >
                <div className="relative h-[520px]">
                  <Image
                    src={currentSlide.src}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.02),rgba(12,12,12,0.42))]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                      {currentSlide.title}
                    </h2>
                    <p className="mt-2 text-xl text-white/78">
                      Click to see more →
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {featuredSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-4 w-4 rounded-full border-2 ${
                    index === activeSlide
                      ? "border-black bg-black"
                      : "border-black/64 bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="rounded-[32px] border border-black/8 bg-[rgba(255,255,255,0.9)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)] lg:p-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-[5rem] lg:leading-[0.95]">
              Meet Our <span className="text-black/72">Builders</span>
              <br />
              Shipping{" "}
              <span className="inline-block rotate-[-3deg] rounded-[1.5rem] bg-black px-6 py-3 text-white shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                Real Products
              </span>
            </h2>
            <p className="mt-8 text-2xl leading-10 text-[var(--muted-foreground)]">
              Every day, our community ships incredible projects.
              <br />
              From learning to build amazing projects and share them as proof of
              work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {builderPosts.map((post, index) => (
              <article
                key={post.handle}
                className={`overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] ${
                  index === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="flex items-start justify-between px-6 pb-4 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-black/8 bg-white">
                      <Image
                        src="/minilistic_professional_pic.png"
                        alt={post.handle}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-[1.05rem] font-semibold text-[var(--foreground)]">
                      {post.handle}
                    </p>
                  </div>
                  <span className="text-4xl leading-none text-black/28">X</span>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-[1.05rem] leading-9 text-[var(--muted-foreground)]">
                    {post.copy}
                  </p>
                </div>

                {index === 1 || index === 3 ? (
                  <div className="relative h-[240px] border-t border-black/8">
                    <Image
                      src={
                        index === 1
                          ? "/superplane_1.jpeg"
                          : "/superplane_2.jpeg"
                      }
                      alt="Community proof of work"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex items-center justify-between border-t border-black/8 px-6 py-4 text-black/30">
                  <span>♡</span>
                  <span>◌</span>
                  <span>↻</span>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
