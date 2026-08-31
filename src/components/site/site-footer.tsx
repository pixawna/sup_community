import Link from "next/link";

import { footerColumns } from "./site-data";
import { SuperplaneMark } from "./superplane-mark";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 lg:pb-10">
      <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[#0d0f12] px-6 py-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-8 border-b border-white/8 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <SuperplaneMark />
              </div>
              <span className="text-[1.9rem] font-semibold tracking-[-0.05em] text-white">
                Community
              </span>
            </div>
            <p className="mt-5 max-w-lg text-lg leading-8 text-white/68">
              Learn AI-first platform engineering with hands-on workflows,
              templates, and real-world DevOps automation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://superplane.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Run Superplane
            </a>
            <a
              href="https://docs.superplane.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Docs
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[1.15rem] font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[1.05rem] text-white/62 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[1.05rem] text-white/62 transition hover:text-white"
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

        <div className="flex flex-col gap-5 border-t border-white/8 pt-7 text-[0.98rem] text-white/48 lg:flex-row lg:items-end lg:justify-between">
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
      </div>
    </footer>
  );
}
