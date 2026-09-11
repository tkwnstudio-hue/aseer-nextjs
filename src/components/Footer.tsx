import Link from "next/link";

function LogoMark() {
  return (
    <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-md bg-gold/15">
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="currentColor">
        <path d="M12 3 L21 20 H3 Z" />
      </svg>
    </span>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      {children}
    </a>
  );
}

const INFO_LINKS = [
  { label: "الأسئلة الشائعة", href: "#" },
  { label: "الشروط والأحكام", href: "#" },
  { label: "سياسة الخصوصية", href: "#" },
  { label: "تواصل معنا", href: "/contact" },
];

const EXPERIENCE_LINKS = [
  { label: "المغامرات", href: "/experiences" },
  { label: "الثقافة", href: "/experiences" },
  { label: "الطبيعة", href: "/experiences" },
  { label: "المأكولات", href: "/restaurants" },
];

const DISCOVER_LINKS = [
  { label: "عن عسير", href: "/#regions" },
  { label: "المناطق", href: "/#regions" },
  { label: "الفعاليات", href: "/events" },
  { label: "المدونة", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-wash text-sage">
      <div className="bg-dark/[.83]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-start justify-center gap-10 px-6 py-10 md:flex-nowrap md:gap-[72px]">
          {/* النشرة البريدية — أقصى اليمين */}
          <div className="w-full md:w-[267px] md:shrink-0">
            <h4 className="mb-4 text-sm font-bold opacity-90">النشرة البريدية</h4>
            <p className="mb-3.5 text-sm opacity-70">
              اشترك للحصول على آخر الأخبار والعروض الحصرية.
            </p>
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="mb-2.5 h-12 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-sage/50 outline-none focus:border-gold"
            />
            <button
              type="button"
              className="h-12 w-full rounded-lg bg-gold text-sm font-bold text-dark transition-opacity hover:opacity-90"
            >
              اشترك
            </button>
          </div>

          <div className="flex w-full flex-wrap items-start gap-8 md:w-auto md:flex-nowrap">
            <div className="w-[139px]">
              <h4 className="mb-4 text-sm font-bold opacity-90">معلومات</h4>
              <ul className="flex flex-col gap-2.5">
                {INFO_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm opacity-70 hover:opacity-100">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[139px]">
              <h4 className="mb-4 text-sm font-bold opacity-90">تجارب عسير</h4>
              <ul className="flex flex-col gap-2.5">
                {EXPERIENCE_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm opacity-70 hover:opacity-100">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[139px]">
              <h4 className="mb-4 text-sm font-bold opacity-90">اكتشف عسير</h4>
              <ul className="flex flex-col gap-2.5">
                {DISCOVER_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm opacity-70 hover:opacity-100">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* الشعار — أقصى اليسار */}
          <div className="w-full md:w-[221px] md:shrink-0">
            <Link href="/" className="flex items-center gap-3 text-white">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <b className="text-[30px] font-semibold">عسير</b>
                <small className="mt-1 text-[11px] tracking-[.22em] opacity-70">
                  ASEER
                </small>
              </span>
            </Link>
            <p className="mt-3.5 max-w-[32ch] text-sm opacity-70">
              وجهة جبلية فاخرة تجمع بين جمال الطبيعة والثقافة الأصيلة والضيافة
              الراقية.
            </p>
            <div className="mt-4.5 flex gap-2.5">
              <SocialIcon label="TikTok">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M16.6 5.82c-.9-.78-1.46-1.9-1.6-3.14h-3.03v13.44c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.27 0 .53.03.78.1V10.2a5.9 5.9 0 0 0-.78-.05A5.93 5.93 0 0 0 3.14 16.1 5.93 5.93 0 0 0 9.07 22 5.93 5.93 0 0 0 15 16.1V9.05a8.16 8.16 0 0 0 4.86 1.58V7.6a4.85 4.85 0 0 1-3.26-1.78Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
                  <path d="M10.5 9.3v5.4l4.7-2.7-4.7-2.7Z" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="X">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M13.85 10.6 21 3h-2.2l-6.2 6.6L7.3 3H2l7.5 10.8L2.3 21h2.2l6.6-7 5.6 7H22l-8.15-10.4Zm-2.3 2.45-.77-1.06L4.9 4.5h2.05l4.9 6.8.77 1.06 6.5 9.03h-2.05l-5.32-7.34Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[.18] px-6 py-4">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2 text-xs opacity-60">
            <span>صنع في المملكة العربية السعودية</span>
            <span>تصميم وتطوير استوديو تكوين</span>
            <span>جميع الحقوق محفوظة © 2026 عسير</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
