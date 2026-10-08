"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home, Library, Search } from "lucide-react";

const TABS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/library", label: "Library", icon: Library },
  { href: "/liked", label: "Liked", icon: Heart }
];

/** Bottom tab bar shown below 820px. */
export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav" aria-label="Sections">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link key={tab.href} href={tab.href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
            <Icon size={19} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
