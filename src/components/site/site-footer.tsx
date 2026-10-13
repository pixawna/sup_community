import Link from "next/link";

import { footerColumns } from "./site-data";
import { SuperplaneMark } from "./superplane-mark";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 border-t border-[var(--border)] pt-14 pb-6 lg:pb-10">
      <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 text-[var(--cloud)]">
            <SuperplaneMark />
            <span className="text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--cloud)]">
              Community
            </span>
          </div>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--muted)]">
            Learn AI-first platform engineering with hands-on workflows,
            templates, and real-world DevOps automation.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://superplane.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary h-11 px-6 text-sm"
          >
            Run Superplane
          </a>
          <a
            href="https://docs.superplane.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary h-11 px-6 text-sm"
          >
            View Docs
          </a>
        </div>
      </div>

      <div className="grid gap-10 py-2 sm:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="font-mono text-sm font-medium uppercase tracking-[0.04em] text-[var(--cloud)]">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.95rem] text-[var(--muted)] transition hover:text-[var(--cloud)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-[var(--muted)] transition hover:text-[var(--cloud)]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] pt-7 text-sm text-[var(--muted)] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p>
            © {currentYear} Superplane Community. Built for learning
            AI-first platform engineering.
          </p>
          <p className="mt-2">
            Superplane Community is for educational purposes and workflow
            experimentation.
          </p>
        </div>

        <p className="max-w-lg text-left lg:text-right">
          Learn how engineers and agents run operations together using
          Superplane.
        </p>
      </div>
    </footer>
  );
}
