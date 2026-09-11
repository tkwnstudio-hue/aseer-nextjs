import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "عسير | تجارب",
  description:
    "منصة اكتشاف عسير — خطط رحلتك، واكتشف التجارب والوجهات والإقامة والمطاعم بين القمم والضباب.",
};

const CATEGORIES = ["الكل", "مغامرات", "ثقافة", "طبيعة"];

const EXPERIENCES = [
  {
    title: "تسلق الجبال في السودة",
    category: "مغامرات",
    desc: "مغامرة تسلق بين قمم السودة الضبابية برفقة مرشدين محليين متخصصين.",
  },
  {
    title: "جولة في قرية رجال ألمع",
    category: "ثقافة",
    desc: "استكشف العمارة التراثية والفنون الشعبية في القرية التاريخية العريقة.",
  },
  {
    title: "تخييم تحت النجوم",
    category: "مغامرات",
    desc: "ليلة تخييم هادئة في أحضان الطبيعة بعيدًا عن صخب المدينة.",
  },
  {
    title: "مهرجان عسير الثقافي",
    category: "ثقافة",
    desc: "فعاليات فنية وتراثية متنوعة تعكس هوية المنطقة وتاريخها.",
  },
  {
    title: "مسارات المشي الجبلية",
    category: "طبيعة",
    desc: "مسارات خلابة بين الغابات والوديان الخضراء لعشاق المشي لمسافات طويلة.",
  },
  {
    title: "تجربة الضباب في الحبلة",
    category: "طبيعة",
    desc: "شاهد الضباب يلامس القمم في مشهد ساحر لا يتكرر إلا في عسير.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-gradient-to-br from-dark via-wash to-black text-white md:min-h-[480px]">
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 md:px-8">
          <p className="mb-3 text-sm text-white/70">الرئيسية &nbsp;/&nbsp; تجارب</p>
          <h1 className="text-3xl font-extrabold md:text-5xl">تجارب عسير</h1>
          <p className="mt-4 max-w-xl text-white/85">
            من قمم الجبال إلى القرى التراثية — اختر تجربتك المفضلة وعيشها
            بأسلوبك الخاص.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["مغامرات", "ثقافة", "طبيعة"].map((pill) => (
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
          <div className="mb-8 flex flex-wrap gap-3">
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={
                  i === 0
                    ? "rounded-full bg-gold px-5 py-2 text-sm font-bold text-dark"
                    : "rounded-full bg-white px-5 py-2 text-sm font-bold text-dark/70 ring-1 ring-black/5"
                }
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
              >
                <div className="h-40 bg-gradient-to-br from-dark via-wash to-black" />
                <div className="p-5">
                  <span className="mb-3 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                    {exp.category}
                  </span>
                  <h3 className="mb-1 font-bold text-dark">{exp.title}</h3>
                  <p className="text-sm leading-relaxed text-dark/60">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            جاهز تعيش تجربتك في عسير؟
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            خطط رحلتك الآن واختر من بين عشرات التجارب المميزة بين القمم
            والضباب.
          </p>
          <Link
            href="/plan"
            className="mt-6 inline-block rounded-lg bg-gold px-6 py-3 font-bold text-dark transition-transform hover:-translate-y-0.5"
          >
            اصنع رحلتك
          </Link>
        </div>
      </section>
    </>
  );
}
