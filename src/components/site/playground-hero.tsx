import Link from "next/link";

const experiments = [
  {
    step: "01",
    title: "Prototype agent-assisted flows",
    detail: "Sketch a factory path before it touches a repository.",
    status: "Ready",
  },
  {
    step: "02",
    title: "Test approval sequences",
    detail: "Walk a change through human gates and required checks.",
    status: "Running",
  },
  {
    step: "03",
    title: "Simulate release conditions",
    detail: "See how policy and CI results change the next step.",
    status: "Queued",
  },
  {
    step: "04",
    title: "Practice rollback scenarios",
    detail: "Rehearse the path back when a verification check fails.",
    status: "Queued",
  },
] as const;

function statusClass(status: (typeof experiments)[number]["status"]) {
  if (status === "Running") {
    return "text-[var(--orange)]";
  }

  if (status === "Ready") {
    return "text-[var(--sage)]";
  }

  return "text-[var(--muted)]";
}

export function PlaygroundHero() {
  return (
    <section
      aria-labelledby="playground-hero-title"
      className="flex flex-1 items-center py-10 lg:py-14"
    >
      <div className="hero-shell relative grid w-full gap-0 overflow-hidden rounded-[28px] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-16 lg:py-18">
          <p className="eyebrow relative z-10">Playground</p>

          <h1
            id="playground-hero-title"
            className="relative z-10 mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl xl:text-[5.4rem] xl:leading-[0.95]"
          >
            Experiment with workflow ideas before they reach production
          </h1>

          <p className="relative z-10 mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
            Use the playground to test approval logic, branching conditions,
            escalation paths, and release patterns in a safe learning
            environment.
          </p>

          <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/workflows" className="btn-primary h-14 px-8 text-base">
              Explore workflows
            </Link>
            <Link
              href="https://docs.superplane.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 px-2 text-base font-semibold text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-6 transition hover:decoration-[var(--orange)]"
            >
              Read the docs
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center px-6 pb-8 pt-2 sm:px-10 lg:px-12 lg:py-16">
          <div className="hero-card w-full max-w-[640px] rounded-[26px] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Sandbox run</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  Approval path, simulated
                </p>
              </div>
              <span className="inline-flex rounded-full bg-[var(--teal)] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--sage)]">
                No production writes
              </span>
            </div>

            <ol className="mt-6 divide-y divide-[var(--border)] overflow-hidden rounded-[20px] border border-[var(--border)]">
              {experiments.map((experiment) => (
                <li
                  key={experiment.step}
                  className="flex items-start justify-between gap-4 bg-[var(--pitch)] px-4 py-4 sm:px-5"
                >
                  <div className="flex min-w-0 gap-4">
                    <span className="font-mono text-sm font-medium text-[var(--orange)]">
                      {experiment.step}
                    </span>
                    <div className="min-w-0">
                      <p className="text-base font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-lg">
                        {experiment.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {experiment.detail}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 font-mono text-xs font-medium uppercase tracking-[0.08em] ${statusClass(experiment.status)}`}
                  >
                    {experiment.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
