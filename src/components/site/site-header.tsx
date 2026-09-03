"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "./site-data";
import { SuperplaneMark } from "./superplane-mark";

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
      <div className="nav-shell flex min-h-[76px] items-center gap-4 rounded-[22px] px-5 py-4 lg:px-7">
        <Link href="/" className="flex items-center gap-3 text-[var(--foreground)]">
          <div className="text-[var(--foreground)]">
            <SuperplaneMark />
          </div>
          <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
            superplane
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-7 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              isActive={pathname === item.href}
              disabledClassName="cursor-not-allowed whitespace-nowrap text-sm font-medium text-black/32"
              activeClassName="whitespace-nowrap text-sm font-semibold text-[var(--foreground)]"
              inactiveClassName="whitespace-nowrap text-sm font-medium text-black/68 transition hover:text-[var(--accent)]"
            />
          ))}
        </nav>

        <a
          href="https://docs.superplane.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden h-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/86 sm:inline-flex"
        >
          Try superplane now
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="site-mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-[var(--foreground)] transition hover:border-black/20 xl:hidden"
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
        className={`nav-shell mt-3 flex-col gap-1 rounded-[22px] p-3 xl:hidden ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            isActive={pathname === item.href}
            onNavigate={() => setIsMenuOpen(false)}
            disabledClassName="cursor-not-allowed rounded-xl px-4 py-3 text-sm font-medium text-black/32"
            activeClassName="rounded-xl bg-black/5 px-4 py-3 text-sm font-semibold text-[var(--foreground)]"
            inactiveClassName="rounded-xl px-4 py-3 text-sm font-medium text-black/68 transition hover:bg-black/5 hover:text-[var(--accent)]"
          />
        ))}
        <a
          href="https://docs.superplane.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/86 sm:hidden"
        >
          Try superplane now
        </a>
      </nav>
    </header>
  );
}
