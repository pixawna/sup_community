"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "./site-data";
import { SuperplaneMark } from "./superplane-mark";

const navLabel =
  "whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.045em]";

function NavLink({
  item,
  isActive,
  onNavigate,
  disabledClassName,
  activeClassName,
  inactiveClassName,
}: {
  item: (typeof navItems)[number];
  isActive: boolean;
  onNavigate?: () => void;
  disabledClassName: string;
  activeClassName: string;
  inactiveClassName: string;
}) {
  if (item.disabled) {
    return (
      <span aria-disabled="true" className={disabledClassName}>
        {item.label}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={isActive ? activeClassName : inactiveClassName}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in a useEffect) avoids an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-4 z-50">
      <div className="nav-shell flex min-h-[64px] items-center gap-4 rounded-xl px-4 py-2 lg:px-5">
        <Link href="/" className="flex items-center gap-3 text-[var(--cloud)]">
          <SuperplaneMark />
          <span className="text-[1.65rem] font-semibold tracking-[-0.05em] text-[var(--cloud)]">
            superplane
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              isActive={pathname === item.href}
              disabledClassName={`${navLabel} cursor-not-allowed px-2.5 text-[var(--muted)]/55`}
              activeClassName={`${navLabel} px-2.5 text-[var(--cloud)] underline decoration-current underline-offset-[7px]`}
              inactiveClassName={`${navLabel} px-2.5 text-[var(--mist)] transition hover:text-[var(--cloud)] hover:underline hover:decoration-current hover:underline-offset-[7px]`}
            />
          ))}
        </nav>

        <a
          href="https://docs.superplane.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary ml-auto hidden h-10 shrink-0 px-4 font-mono text-[11px] font-medium uppercase tracking-[0.04em] sm:inline-flex"
        >
          Try superplane now
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="site-mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--cloud)] transition hover:border-[var(--mist)] xl:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M5 5L19 19M19 5L5 19" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="site-mobile-nav"
        className={`nav-shell mt-3 flex-col gap-1 rounded-xl p-3 xl:hidden ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            isActive={pathname === item.href}
            onNavigate={() => setIsMenuOpen(false)}
            disabledClassName={`${navLabel} cursor-not-allowed rounded-lg px-4 py-3 text-[var(--muted)]/55`}
            activeClassName={`${navLabel} rounded-lg bg-white/6 px-4 py-3 text-[var(--cloud)]`}
            inactiveClassName={`${navLabel} rounded-lg px-4 py-3 text-[var(--mist)] transition hover:bg-white/6 hover:text-[var(--cloud)]`}
          />
        ))}
        <a
          href="https://docs.superplane.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-2 h-11 shrink-0 px-6 font-mono text-[11px] font-medium uppercase tracking-[0.04em] sm:hidden"
        >
          Try superplane now
        </a>
      </nav>
    </header>
  );
}
