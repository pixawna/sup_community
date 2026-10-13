import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/site/site-frame";

const achievements = [
  {
    title: "CI/CD Basics Completed",
    subtitle: "Lesson completed",
    xp: "+120 XP",
    icon: "book",
  },
  {
    title: "Human Approval Gates",
    subtitle: "Lesson completed",
    xp: "+80 XP",
    icon: "shield",
  },
  {
    title: "Incident Automation",
    subtitle: "Lesson completed",
    xp: "+60 XP",
    icon: "bolt",
  },
  {
    title: "Lesson Streak Bonus",
    subtitle: "7-day streak",
    xp: "+40 XP",
    icon: "star",
  },
] as const;

function ProfileMetaIcon({ type }: { type: "calendar" | "location" | "link" }) {
  if (type === "calendar") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 14 8 16a3 3 0 1 1-4-4l2-2M14 10l2-2a3 3 0 1 1 4 4l-2 2M9 15l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AchievementIcon({ type }: { type: (typeof achievements)[number]["icon"] }) {
  if (type === "book") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM4 18.5A2.5 2.5 0 0 1 6.5 16H20" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 3 2.8 5.68L21 9.6l-4.5 4.38 1.06 6.2L12 17.2l-5.56 2.98 1.06-6.2L3 9.6l6.2-.92L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProfilePage() {
  return (
    <SiteFrame>
      <section className="pb-8 pt-10 lg:pb-14 lg:pt-14">
        <div className="surface-card rounded-[32px] p-7 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center rounded-[28px] border border-[var(--border)] bg-[var(--pitch)] p-7 lg:p-8">
              <p className="eyebrow">Superplane Community Profile</p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem] lg:leading-[0.95]">
                Track your DevOps learning journey
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--muted-foreground)]">
                Track your lesson progress, XP earned, and level up your skills
                through Superplane lessons.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/lessons"
                  className="btn-primary h-14 px-7 text-base"
                >
                  Continue Learning
                </Link>
                <Link
                  href="/lessons"
                  className="btn-secondary h-14 px-7 text-base"
                >
                  View Lessons
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--pitch)] p-7 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="flex items-start justify-center">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--graphite)]">
                    <Image
                      src="/minilistic_professional_pic.png"
                      alt="Bhawna Chauhan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    Bhawna Chauhan
                  </h2>
                  <p className="mt-2 text-2xl text-[var(--muted-foreground)]">
                    Developer Relations
                  </p>

                  <div className="mt-8 space-y-4 text-[1.05rem] text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-3">
                      <ProfileMetaIcon type="calendar" />
                      <span>Member since May 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ProfileMetaIcon type="location" />
                      <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ProfileMetaIcon type="link" />
                      <span>github.com/bhawna-chauhan</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-secondary mt-8 h-12 w-fit px-7 text-base"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--pitch)] p-7">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.05fr_1.05fr] lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-[var(--border)] bg-[var(--graphite)] text-[var(--cloud)]">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3 5 7v10l7 4 7-4V7l-7-4Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 7l7 4 7-4M12 11v10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted)]">Current Level</p>
                    <p className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                      Level 7
                    </p>
                    <span className="mt-2 inline-flex rounded-full bg-[var(--teal)] px-4 py-2 text-base text-[var(--sage)]">
                      DevOps Builder
                    </span>
                  </div>
                </div>

                <div className="border-t border-[var(--border)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="text-sm text-[var(--muted)]">Total XP</p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    2,480 <span className="text-xl font-medium text-[var(--muted)]">XP</span>
                  </p>
                </div>

                <div className="border-t border-[var(--border)] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="text-sm text-[var(--muted)]">XP to next level</p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    320 <span className="text-lg font-medium text-[var(--muted)]">XP to Level 8</span>
                  </p>
                  <div className="mt-5">
                    <div className="h-4 overflow-hidden rounded-full bg-[var(--border)]">
                      <div className="h-full w-[88%] rounded-full bg-[var(--orange)]" />
                    </div>
                    <p className="mt-3 text-right text-base font-medium text-[var(--muted)]">
                      88%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--pitch)] p-7">
              <div className="flex items-center gap-5">
                <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[var(--teal)] text-[var(--sage)]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3c2.2 2.4 3.5 5.2 3.5 8.2 0 2.5-1 4.3-2.4 5.4 1.8.1 3.9-.7 5.1-2.3 2.2-3 1.3-7.4-2-11.3-.7-.8-1.4-1.4-2.2-2Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M10.5 10.5c-2 1.2-3.5 3.2-3.5 5.5 0 3 2.2 5 5 5s5-2 5-5c0-2.3-1.5-4.3-3.5-5.5.2 2.4-1.1 3.8-3 4.5.3-1.5.1-3-.5-4.5Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    7
                  </p>
                  <p className="mt-1 text-xl font-medium text-[var(--foreground)]">
                    Day streak
                  </p>
                  <p className="mt-2 text-base text-[var(--muted-foreground)]">
                    Keep it going!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--pitch)] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--graphite)] text-[var(--cloud)]">
                    <AchievementIcon type={achievement.icon} />
                  </div>
                  <p className="font-mono text-2xl font-medium tracking-[-0.04em] text-[var(--orange)]">
                    {achievement.xp}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-base text-[var(--muted-foreground)]">
                  {achievement.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
