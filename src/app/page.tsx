import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-gradient-to-br from-dark via-wash to-black text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8">
          <p className="mb-3 flex items-center gap-2 text-sm text-gold">
            <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
            منصة اكتشاف منطقة عسير
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            عسير
            <span className="mt-2 block text-2xl font-bold md:text-4xl">
              حيث تلامس الجبال السحاب
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-white/85 md:text-lg">
            وجهة واحدة، عوالم متعددة. خطط رحلتك بين القمم والقرى والفعاليات
            والتجارب.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/plan"
              className="rounded-lg bg-gold px-6 py-3 font-bold text-dark transition-transform hover:-translate-y-0.5"
            >
              اصنع رحلتك
            </Link>
            <Link
              href="#regions"
              className="rounded-lg bg-white px-6 py-3 font-bold text-dark transition-transform hover:-translate-y-0.5"
            >
              اكتشف عسير
            </Link>
          </div>
        </div>
      </section>

      <section
        id="regions"
        className="mx-auto -mt-10 max-w-6xl grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-8"
      >
        {[
          { title: "طبيعة ساحرة", desc: "جبال شاهقة وضباب يلامس السماء" },
          { title: "تراث عريق", desc: "قرى تاريخية وبيوت تقليدية أصيلة" },
          { title: "تجارب متنوعة", desc: "مغامرات، استرخاء، وثقافة بمكان واحد" },
          { title: "ضيافة أصيلة", desc: "كرم الضيافة والتقاليد بكل زاوية" },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="mb-1 font-bold text-dark">{f.title}</h3>
            <p className="text-xs text-dark/60">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <h2 className="text-2xl font-bold text-dark">مختارات المناطق</h2>
        <p className="mt-2 text-dark/60">
          هذا القسم بينبني بالمرحلة الجاية — نضيف بيانات المناطق من قاعدة
          البيانات.
        </p>
      </section>
    </>
  );
}
