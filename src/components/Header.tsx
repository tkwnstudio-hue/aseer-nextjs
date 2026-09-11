"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { key: "home", href: "/", label: "الرئيسية" },
  { key: "explore", href: "/#regions", label: "استكشف عسير" },
  { key: "experiences", href: "/experiences", label: "تجارب" },
  { key: "events", href: "/events", label: "فعاليات" },
  { key: "plan", href: "/plan", label: "خطط رحلتك" },
  { key: "restaurants", href: "/restaurants", label: "المطاعم والمقاهي" },
  { key: "stays", href: "/stays", label: "أماكن الإقامة" },
  { key: "contact", href: "/contact", label: "تواصل معنا" },
];

function TriangleLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-7 w-7 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 4 L36 34 L4 34 Z" />
      <path d="M20 16 L28 30 L12 30 Z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <TriangleLogo />
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-bold">عسير</span>
            <span className="text-[10px] tracking-widest text-white/70">
              ASEER
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`border-b-2 pb-1 text-sm transition-colors hover:text-gold ${
                  isActive(item.href)
                    ? "border-gold text-gold"
                    : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-md border border-white/30 px-3 py-1.5 text-xs font-bold"
          >
            English
          </button>
          <button
            type="button"
            aria-label="بحث"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="حسابي"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-dark"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-dark px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 text-sm ${
                    isActive(item.href) ? "text-gold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="mt-2 rounded-md border border-white/30 px-3 py-1.5 text-xs font-bold"
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
