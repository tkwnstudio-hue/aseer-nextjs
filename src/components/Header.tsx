"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { key: "home", href: "/", label: "الرئيسية" },
  { key: "experiences", href: "/experiences", label: "تجارب" },
  { key: "events", href: "/events", label: "فعاليات" },
  { key: "plan", href: "/plan", label: "خطط رحلتك" },
  { key: "restaurants", href: "/restaurants", label: "المطاعم والمقاهي" },
  { key: "stays", href: "/stays", label: "أماكن الإقامة" },
  { key: "contact", href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-bold">عسير</span>
            <span className="text-[10px] tracking-widest text-gold">ASEER</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="text-sm transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-md border border-white/30 px-3 py-1.5 text-xs font-bold md:inline-block"
          >
            English
          </button>
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
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-dark px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
