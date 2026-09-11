"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const REGIONS = [
  {
    title: "القمم",
    items: ["أبها", "السودة", "تنومة", "النماص", "بللسمر"],
  },
  {
    title: "تراث",
    items: ["رجال ألمع", "المجاردة", "بارق", "محايل عسير"],
  },
  {
    title: "الساحل",
    items: ["البرك", "القحمة"],
  },
  {
    title: "الصحراء والواحات",
    items: ["بيشة", "سراة عبيدة", "ظهران الجنوب"],
  },
];

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-md object-contain"
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-[84px] border-b border-gold bg-dark text-sage">
      <nav className="mx-auto flex h-full max-w-[1240px] items-center justify-between gap-6 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <LogoMark />
          <span className="flex flex-col items-center leading-none">
            <span className="text-[21px] font-semibold text-white">عسير</span>
            <span className="mt-1 text-[9px] font-semibold tracking-[.22em] text-sage/70">
              ASEER
            </span>
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          <li key="home">
            <Link
              href="/"
              className={`border-b-2 pb-2 text-sm font-semibold transition-colors hover:text-white ${
                isActive("/") ? "border-gold text-white" : "border-transparent text-sage/80"
              }`}
            >
              الرئيسية
            </Link>
          </li>
          <li
            key="explore"
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setExploreOpen((v) => !v)}
              className="border-b-2 border-transparent pb-2 text-sm font-semibold text-sage/80 transition-colors hover:text-white"
            >
              استكشف عسير
            </button>
            {exploreOpen && (
              <div className="absolute top-full start-1/2 z-20 mt-4 w-[560px] -translate-x-1/2 rounded-xl bg-dark p-6 shadow-2xl">
                <div className="grid grid-cols-4 gap-4">
                  {REGIONS.map((region) => (
                    <div key={region.title}>
                      <h3 className="mb-2 border-b border-white/15 pb-2 text-sm font-bold text-gold">
                        {region.title}
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {region.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="/#regions"
                              className="text-xs text-sage/80 hover:text-white"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/#regions"
                        className="mt-2 inline-block text-xs font-bold text-gold hover:underline"
                      >
                        المزيد ...
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          {NAV.filter((i) => i.key !== "home").map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`border-b-2 pb-2 text-sm font-semibold transition-colors hover:text-white ${
                  isActive(item.href)
                    ? "border-gold text-white"
                    : "border-transparent text-sage/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-lg border border-sage/35 px-3.5 py-2 text-xs font-bold text-sage transition-colors hover:bg-sage/10 hover:border-sage/60"
          >
            English
          </button>
          <button
            type="button"
            aria-label="بحث"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage text-dark transition-colors hover:bg-gold hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.2-3.2" />
            </svg>
          </button>
          <Link
            href="#"
            aria-label="حسابي"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage text-dark transition-colors hover:bg-gold hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="3.4" />
              <path d="M5 19c0-3.6 3-5.8 7-5.8s7 2.2 7 5.8" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white md:hidden"
        >
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-dark px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 text-sm ${
                    isActive(item.href) ? "text-white" : "text-sage/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#regions" onClick={() => setMenuOpen(false)} className="block py-1 text-sm text-sage/80">
                استكشف عسير
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="mt-2 rounded-lg border border-sage/35 px-3 py-1.5 text-xs font-bold"
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
