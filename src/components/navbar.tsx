"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
  { href: "/scenarios", label: "Scenarios" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-foreground"
        >
          <Zap className="h-5 w-5 text-primary" />
          PitchLab
        </Link>
        <div className="flex gap-4 ml-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/scenarios"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start Practicing
          </Link>
        </div>
      </div>
    </nav>
  );
}
