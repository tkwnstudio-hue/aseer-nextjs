import Link from "next/link";

function TriangleLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 4 L36 34 L4 34 Z" />
      <path d="M20 16 L28 30 L12 30 Z" />
    </svg>
  );
}

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-dark"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 bg-wash text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-5 md:px-8">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <TriangleLogo />
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-bold">عسير</span>
              <span className="text-[10px] tracking-widest text-white/70">
                ASEER
              </span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-white/70">
            وجهة جبلية فاخرة تجمع بين جمال الطبيعة والثقافة الأصيلة والضيافة
            الراقية.
          </p>
          <div className="mt-4 flex gap-2">
            <SocialIcon
              label="Instagram"
              path="M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.85.23 2.5.48.68.27 1.26.62 1.83 1.19.57.57.92 1.15 1.19 1.83.25.65.43 1.4.48 2.5.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.23 1.85-.48 2.5a4.9 4.9 0 01-1.19 1.83 4.9 4.9 0 01-1.83 1.19c-.65.25-1.4.43-2.5.48-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.85-.23-2.5-.48a4.9 4.9 0 01-1.83-1.19 4.9 4.9 0 01-1.19-1.83c-.25-.65-.43-1.4-.48-2.5C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.23-1.85.48-2.5.27-.68.62-1.26 1.19-1.83A4.9 4.9 0 015.56 2.38c.65-.25 1.4-.43 2.5-.48C9.16 2.01 9.5 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.33 1.17 1.17 0 000 2.33z"
            />
            <SocialIcon
              label="X"
              path="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-6.7L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.1L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z"
            />
            <SocialIcon
              label="YouTube"
              path="M23 12s0-3.6-.5-5.3c-.3-1-1-1.7-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.7c-1 .3-1.7 1-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1 1.7 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.7c1-.3 1.7-1 2-2 .5-1.7.5-5.3.5-5.3zM9.8 15.5V8.5L15.8 12l-6 3.5z"
            />
            <SocialIcon
              label="TikTok"
              path="M16.6 2h-3.2v13.7a2.9 2.9 0 11-2.9-2.9c.3 0 .6 0 .9.1V9.6a6.1 6.1 0 106.1 6.1V8.3c1.2.9 2.7 1.4 4.3 1.4V6.6c-1.9 0-3.5-1.5-3.6-3.4L16.6 2z"
            />
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-gold">اكتشف عسير</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><Link href="/#regions">عن عسير</Link></li>
            <li><Link href="/#regions">المناطق</Link></li>
            <li><Link href="/events">الفعاليات</Link></li>
            <li><Link href="#">المدونة</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-gold">تجارب عسير</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><Link href="/experiences">المغامرات</Link></li>
            <li><Link href="/experiences">الثقافة</Link></li>
            <li><Link href="/experiences">الطبيعة</Link></li>
            <li><Link href="/restaurants">المأكولات</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-gold">معلومات</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><Link href="#">الأسئلة الشائعة</Link></li>
            <li><Link href="#">الشروط والأحكام</Link></li>
            <li><Link href="#">سياسة الخصوصية</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-gold">النشرة البريدية</h4>
          <p className="mb-3 text-sm text-white/80">
            اشترك للحصول على آخر الأخبار والعروض الحصرية.
          </p>
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="mb-3 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-gold"
          />
          <button
            type="button"
            className="w-full rounded-lg bg-gold px-4 py-2 text-sm font-bold text-dark transition-transform hover:-translate-y-0.5"
          >
            اشترك
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/60 md:flex-row">
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} عسير</span>
          <span>تصميم وتطوير استوديو تكوين</span>
          <span>صنع في المملكة العربية السعودية</span>
        </div>
      </div>
    </footer>
  );
}
