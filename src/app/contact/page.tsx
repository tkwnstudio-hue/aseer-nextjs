import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عسير | تواصل معنا",
  description:
    "منصة اكتشاف عسير — خطط رحلتك، واكتشف التجارب والوجهات والإقامة والمطاعم بين القمم والضباب.",
};

const CONTACT_INFO = [
  {
    title: "الهاتف",
    lines: ["+966 17 123 4567", "من الأحد إلى الخميس", "8:00 صباحًا - 4:00 مساءً"],
  },
  {
    title: "البريد الإلكتروني",
    lines: ["info@aseer.sa", "نرد على رسائلكم خلال 24 ساعة"],
  },
  {
    title: "الموقع",
    lines: ["أبها، منطقة عسير", "المملكة العربية السعودية"],
  },
  {
    title: "ساعات العمل",
    lines: ["من الأحد إلى الخميس", "8:00 صباحًا - 4:00 مساءً", "بتوقيت السعودية"],
  },
];

const HELP_CARDS = [
  {
    title: "الأسئلة الشائعة",
    desc: "إجابات سريعة حول التخطيط والزيارة والخدمات.",
  },
  {
    title: "الدعم السياحي",
    desc: "مساعدة في اختيار الوجهات والتجارب المناسبة.",
  },
  {
    title: "اقتراحات الزوار",
    desc: "شاركنا ملاحظاتك لتحسين تجربة عسير.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-3 text-sm text-white/60">الرئيسية / تواصل معنا</p>
          <h1 className="text-3xl font-extrabold md:text-5xl">تواصل معنا</h1>
          <p className="mt-4 max-w-xl text-white/85">
            نحن هنا لمساعدتك في التخطيط لرحلتك واستكشاف أجمل ما في عسير.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gold">
            <span>رد سريع</span>
            <span>·</span>
            <span>دعم مباشر</span>
            <span>·</span>
            <span>نخطط معك</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h2 className="mb-6 text-2xl font-bold text-dark">بيانات التواصل</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {CONTACT_INFO.map((c) => (
            <div
              key={c.title}
              className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="mb-2 font-bold text-dark">{c.title}</h3>
              {c.lines.map((line) => (
                <p key={line} className="text-xs leading-relaxed text-dark/60">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5" id="contact-form">
          <form className="md:col-span-3 flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl font-bold text-dark">أرسل لنا رسالة</h2>

            <div>
              <label className="mb-1 block text-sm font-bold text-dark">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                placeholder="اسمك الكامل"
                className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-dark">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-dark">
                نوع الطلب
              </label>
              <select
                name="type"
                defaultValue=""
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
              <label className="mb-1 block text-sm font-bold text-dark">
                رسالتك
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="اكتب رسالتك هنا..."
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

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl bg-dark p-6 text-white">
              <h3 className="mb-2 font-bold text-gold">معلومة إضافية</h3>
              <p className="text-sm text-white/80">
                يمكنك مراسلتنا لأي استفسار متعلق بالوجهات، الفعاليات،
                التجارب، أو التخطيط لرحلتك القادمة في عسير.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <h2 className="mb-6 text-2xl font-bold text-dark">
          كيف يمكننا مساعدتك؟
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {HELP_CARDS.map((h) => (
            <a
              key={h.title}
              href="#contact-form"
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              <h3 className="mb-1 font-bold text-dark">{h.title}</h3>
              <p className="text-sm text-dark/60">{h.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
