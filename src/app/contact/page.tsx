import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عسير | تواصل معنا",
  description:
    "منصة اكتشاف عسير — خطط رحلتك، واكتشف التجارب والوجهات والإقامة والمطاعم بين القمم والضباب.",
};

const CONTACT_INFO = [
  {
    title: "الهاتف",
    value: "+966 17 123 4567",
    ltr: true,
    note: "من الأحد إلى الخميس\n8:00 صباحًا - 4:00 مساءً",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.7 2 2 0 0 1 6.5 4.5Z" />
      </svg>
    ),
  },
  {
    title: "البريد الإلكتروني",
    value: "info@aseer.sa",
    ltr: true,
    note: "نرد على رسائلكم خلال 24 ساعة",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
      </svg>
    ),
  },
  {
    title: "الموقع",
    value: "أبها، منطقة عسير",
    ltr: false,
    note: "المملكة العربية السعودية",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z" />
        <circle cx="12" cy="10.8" r="2.2" />
      </svg>
    ),
  },
  {
    title: "ساعات العمل",
    value: "من الأحد إلى الخميس",
    ltr: false,
    note: "8:00 صباحًا - 4:00 مساءً\nبتوقيت السعودية",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3.2 2" />
      </svg>
    ),
  },
];

const HELP_CARDS = [
  {
    title: "الأسئلة الشائعة",
    desc: "إجابات سريعة حول التخطيط والزيارة والخدمات.",
    icon: "؟",
  },
  {
    title: "الدعم السياحي",
    desc: "مساعدة في اختيار الوجهات والتجارب المناسبة.",
    icon: "◎",
  },
  {
    title: "اقتراحات الزوار",
    desc: "شاركنا ملاحظاتك لتحسين تجربة عسير.",
    icon: "✦",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-gradient-to-br from-dark via-wash to-black text-white md:min-h-[480px]">
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 md:px-8">
          <p className="mb-3 text-sm text-white/70">الرئيسية &nbsp;/&nbsp; تواصل معنا</p>
          <h1 className="text-3xl font-extrabold md:text-5xl">تواصل معنا</h1>
          <p className="mt-4 max-w-xl text-white/85">
            نحن هنا لمساعدتك في التخطيط لرحلتك واستكشاف أجمل ما في عسير.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["رد سريع", "دعم مباشر", "نخطط معك"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-5" id="contact-form">
            <div className="md:col-span-2 md:order-1">
              <h2 className="mb-6 text-2xl font-bold text-dark">بيانات التواصل</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT_INFO.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                  >
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                      {c.icon}
                    </span>
                    <h3 className="mb-1 font-bold text-dark">{c.title}</h3>
                    <p className="text-sm text-dark/80" dir={c.ltr ? "ltr" : undefined}>
                      {c.value}
                    </p>
                    {c.note.split("\n").map((line) => (
                      <p key={line} className="mt-1 text-xs leading-relaxed text-dark/60">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 md:order-2">
              <h2 className="mb-6 text-2xl font-bold text-dark">أرسل لنا رسالة</h2>
              <form className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    الاسم
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="الاسم"
                    className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="البريد الإلكتروني"
                    className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="contact-type" className="sr-only">
                    نوع الطلب
                  </label>
                  <select
                    id="contact-type"
                    name="type"
                    defaultValue=""
                    aria-label="نوع الطلب"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      نوع الطلب
                    </option>
                    <option value="general">استفسار عام</option>
                    <option value="trip">تخطيط رحلة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    رسالتك
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="رسالتك"
                    className="w-full resize-none rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 self-start rounded-lg bg-gold px-6 py-3 font-bold text-dark transition-transform hover:-translate-y-0.5"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="contact-help">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="mb-6 text-2xl font-bold text-dark">كيف يمكننا مساعدتك؟</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {HELP_CARDS.map((h) => (
              <a
                key={h.title}
                href="#contact-form"
                className="rounded-xl bg-sage p-6 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-lg font-bold text-gold">
                  {h.icon}
                </span>
                <h3 className="mb-1 font-bold text-dark">{h.title}</h3>
                <p className="text-sm text-dark/60">{h.desc}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-xl bg-dark p-6 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-lg text-gold">
              ⓘ
            </span>
            <div>
              <h3 className="mb-2 font-bold text-gold">معلومة إضافية</h3>
              <p className="text-sm text-white/80">
                يمكنك مراسلتنا لأي استفسار متعلق بالوجهات، الفعاليات،
                التجارب، أو التخطيط لرحلتك القادمة في عسير.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
