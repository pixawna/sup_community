import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="site-canvas relative min-h-screen text-[var(--cloud)]">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
