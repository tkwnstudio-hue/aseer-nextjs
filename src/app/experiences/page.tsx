"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore, type ReactNode } from "react";

// Keep the original assets and destinations until their pages are migrated.
const legacy = "https://aseer.tkwn-studio.workers.dev/";
const asset = (name: string) => `${legacy}assets/${name}`;
const container = "mx-auto w-full max-w-[1240px] px-6";
const section = "mt-16 py-14 md:mt-[104px]";
const goldButton = "inline-flex min-h-11 items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-bold text-dark transition hover:brightness-110";
const filters = ["الكل", "القمم", "الطبيعة", "الثقافة", "المطاعم", "المسارات", "الجلسات", "العوائل", "المواسم"];
const seasons = [
  { title: "الربيع", sub: "ازدهار الطبيعة", description: "زهور الربيع، الأجواء المعتدلة، المغامرات والرحلات.", image: "spring" },
  { title: "الصيف", sub: "ظلال الجبل والأنشطة", description: "أجواء باردة، فعاليات صيفية، وأنشطة عائلية.", image: "summer" },
  { title: "الخريف", sub: "ألوان ومواسم", description: "أجواء لطيفة، مهرجانات، ووجوه تراثية.", image: "autumn" },
  { title: "الشتاء", sub: "أجواء الضباب والبرد", description: "جلسات دافئة، ضباب كثيف، وتجارب فريدة.", image: "winter" },
];
const moods = [
  { title: "تصوير", sub: "لقطات ملهمة", filter: "تصوير", tags: "تصوير القمم", image: "photography", icon: "photo" },
  { title: "عائلة", sub: "لحظات تجمعنا", filter: "العوائل", tags: "العوائل عائلة", image: "family", icon: "family" },
  { title: "مذاق", sub: "نكهات محلية", filter: "المطاعم", tags: "المطاعم مذاق", image: "taste", icon: "taste" },
  { title: "تراث", sub: "ثقافة وهوية", filter: "الثقافة", tags: "الثقافة تراث", image: "heritage", icon: "heritage" },
  { title: "هدوء", sub: "استرخاء وتجدد", filter: "الجلسات", tags: "الجلسات هدوء", image: "calm", icon: "calm" },
  { title: "مغامرة", sub: "نشاط وحماس", filter: "المسارات", tags: "المسارات القمم مغامرة", image: "adventure", icon: "adventure" },
];
const experiences = [
  { id: "sunrise", title: "جولة شروق الشمس", place: "السودة", tag: "تصوير", meta: "متوسط · 3 ساعات", tags: "تصوير القمم الربيع", image: "sunrise" },
  { id: "dinner", title: "تجربة العشاء الجبلي", place: "أبها", tag: "مذاق", meta: "سهل · ساعتان", tags: "المطاعم مذاق الخريف", image: "dinner" },
  { id: "viewpoint", title: "جلسة المطل", place: "أبها", tag: "جلسات", meta: "سهل · ساعتان", tags: "الجلسات هدوء الصيف", image: "viewpoint" },
  { id: "waterfalls", title: "شلالات الدهناء", place: "تنومة", tag: "طبيعة", meta: "سهل · 3 ساعات", tags: "الطبيعة الربيع", image: "waterfalls" },
  { id: "heritage", title: "قرية رجال ألمع التراثية", place: "رجال ألمع", tag: "ثقافة", meta: "سهل · ساعتان", tags: "الثقافة تراث الخريف", image: "heritage-village" },
  { id: "trail", title: "مسار رجال ألمع الجبلي", place: "رجال ألمع", tag: "مغامرة", meta: "سهل · 4 ساعات", tags: "المسارات القمم مغامرة الصيف", image: "mountain-trail" },
];
const regions = [
  { title: "السودة", count: "22 تجربة", image: "soudah", href: "soudah.html" },
  { title: "أبها", count: "72 تجربة", image: "abha", href: "abha.html" },
  { title: "تنومة", count: "46 تجربة", image: "tanomah", href: "tanomah.html" },
  { title: "النماص", count: "9 تجارب", image: "alnamas", href: "al-namas.html" },
  { title: "رجال ألمع", count: "29 تجربة", image: "rijalalmaa", href: "rijal-alma.html" },
  { title: "بللسمر", count: "28 تجربة", image: "balasmer", href: "ballasmar.html" },
  { title: "بللحمر", count: "22 تجربة", image: "balhamer", href: "ballahmar.html" },
];
const routes = [
  { id: "cloud", title: "يوم فوق الغيم", description: "رحلة يوم واحد في السودة مع جلسة ومناظر لا تنسى.", meta: "يوم واحد · سهل", tags: "القمم الجلسات الطبيعة الشتاء", image: "cloud" },
  { id: "peaks3", title: "٣ أيام بين القمم", description: "اكتشف القرى التراثية والمسارات والجلسات في قمم عسير.", meta: "٣ أيام · متوسط", tags: "القمم المسارات الثقافة", image: "3days" },
  { id: "family", title: "عطلة عائلية", description: "أنشطة هادئة، جلسات، حدائق، طبيعة ومطاعم محلية.", meta: "يومان · سهل", tags: "العوائل الجلسات المطاعم الصيف", image: "family" },
];

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("storage", callback);
  window.addEventListener("aseer-experiences-change", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("aseer-experiences-change", callback);
  };
}
const notify = () => window.dispatchEvent(new Event("aseer-experiences-change"));
const emptySnapshot = () => "";
const searchSnapshot = () => window.location.search;
function savedSnapshot() {
  try { return localStorage.getItem("aseer_saved") || "[]"; } catch { return "[]"; }
}
function readSaved(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw || "[]");
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === "string") : [];
  } catch { return []; }
}
function SaveButton({ id, title, featured = false }: { id: string; title: string; featured?: boolean }) {
  const raw = useSyncExternalStore(subscribe, savedSnapshot, emptySnapshot);
  const saved = readSaved(raw).includes(`exp:${id}`);
  return <button type="button" aria-label={`${saved ? "إلغاء حفظ" : "حفظ"} ${title}`} aria-pressed={saved}
    className={`relative z-20 flex size-11 shrink-0 items-center justify-center rounded-lg ${featured ? "border border-dark bg-white text-dark" : "bg-wash/60 text-white"} ${saved ? "ring-2 ring-gold" : ""}`}
    onClick={() => {
      const ids = readSaved(savedSnapshot());
      const next = ids.includes(`exp:${id}`) ? ids.filter(value => value !== `exp:${id}`) : [...ids, `exp:${id}`];
      try { localStorage.setItem("aseer_saved", JSON.stringify(next)); notify(); } catch { /* Storage may be disabled by the browser. */ }
    }}>
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /></svg>
  </button>;
}
function Photo({ name, alt = "", eager = false, sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" }: { name: string; alt?: string; eager?: boolean; sizes?: string }) {
  return <Image src={asset(`img/${name}.png`)} alt={alt} fill unoptimized sizes={sizes} loading={eager ? "eager" : "lazy"} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />;
}
function Heading({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return <div className="mb-8 flex flex-wrap items-center justify-between gap-5"><h2 className="text-2xl font-bold leading-tight after:mt-3 after:block after:h-0.5 after:w-16 after:bg-gold md:text-[30px]">{children}</h2>{action}</div>;
}
function RegionCard({ region, featured = false }: { region: typeof regions[number]; featured?: boolean }) {
  return <a href={`${legacy}${region.href}`} className={`group relative flex items-end overflow-hidden rounded-2xl bg-wash p-5 text-white ${featured ? "min-h-64 lg:min-h-full" : "aspect-[166/112]"}`}>
    <Photo name={`exp-region-${region.image}`} />
    <span className="absolute inset-0 bg-gradient-to-t from-wash/95 to-wash/10" />
    <span className="relative flex flex-col gap-2"><b className={featured ? "text-3xl" : "text-xl"}>{region.title}</b><span className="text-xs">{region.count}</span></span>
  </a>;
}

export default function ExperiencesPage() {
  const search = useSyncExternalStore(subscribe, searchSnapshot, emptySnapshot);
  const params = new URLSearchParams(search);
  const filter = params.get("filter") || "all";
  const query = params.get("q") || "";
  const matches = (tags: string, text: string) => (filter === "all" || tags.split(" ").includes(filter) || (filter === "المواسم" && seasons.some(s => tags.includes(s.title)))) && text.includes(query.trim());
  const featuredVisible = matches("الجلسات العوائل الطبيعة القمم الشتاء", "جلسة فوق السحاب السودة منتزه السودة طبيعة جبلية مناسب للعائلة جلسات خارجية استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.");
  const visibleMoods = moods.filter(m => matches(m.tags, `${m.title} ${m.sub}`));
  const visibleExperiences = experiences.filter(e => matches(e.tags, `${e.title} ${e.place} ${e.tag} ${e.meta}`));
  const visibleRoutes = routes.filter(r => matches(r.tags, `${r.title} ${r.description} ${r.meta}`));
  const visibleSeasons = seasons.filter(s => matches(`المواسم ${s.title}`, `${s.title} ${s.sub} ${s.description}`));
  const empty = !featuredVisible && !visibleMoods.length && !visibleExperiences.length && !visibleRoutes.length && !visibleSeasons.length;

  function setFilter(value: string, q = query, anchor?: string) {
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("filter"); else url.searchParams.set("filter", value);
    if (q.trim()) url.searchParams.set("q", q.trim()); else url.searchParams.delete("q");
    url.hash = anchor || "";
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
    notify();
    if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ block: "start" }));
  }
  const filterLink = (value: string, label: string, className: string) => <a className={className} href={`/experiences?filter=${encodeURIComponent(value)}#exp-selected`} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); setFilter(value, "", "exp-selected"); }}>{label}</a>;

  return <div dir="rtl" className="bg-white text-dark [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-gold [&_button]:cursor-pointer [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-gold">
    <title>تجارب عسير | عسير</title>
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-wash text-sage md:min-h-[670px]">
      <Photo name="exp-hero-bg" eager sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-wash via-wash/40 to-wash/15" />
      <div className={`${container} relative flex flex-col items-start gap-6 py-24`}>
        <p className="text-sm"><span className="me-2 text-gold" aria-hidden="true">◆</span><Link href="/">الرئيسية</Link> / تجارب عسير</p>
        <h1 className="text-[38px] font-extrabold leading-[1.35] md:text-[76px]">تجارب عسير</h1>
        <p className="max-w-[52ch] text-lg font-medium leading-relaxed md:text-[26px]">اكتشف الجبل والثقافة والطبيعة واللحظات المحلية في رحلة واحدة</p>
        <div className="flex flex-wrap gap-4 text-sm font-bold">{["مغامرة جبلية", "ثقافة أصيلة", "طبيعة خلابة"].map(t => <span key={t}><span aria-hidden="true" className="me-2 text-gold">◆</span>{t}</span>)}</div>
      </div>
    </section>

    <div className={`${container} relative z-10 -mt-10`}>
      <div className="mx-auto flex max-w-[1144px] flex-col gap-6 rounded-2xl border border-sage bg-white p-5 shadow-lg md:px-8">
        <form role="search" className="flex flex-wrap items-center justify-between gap-4" action="/experiences" onSubmit={event => { event.preventDefault(); setFilter(filter, String(new FormData(event.currentTarget).get("q") || "")); }}>
          <input type="hidden" name="filter" value={filter} />
          <input key={query} type="search" name="q" defaultValue={query} aria-label="ابحث عن تجربة أو مكان أو نشاط" placeholder="ابحث عن تجربة أو مكان أو نشاط..." className="min-w-0 flex-1 rounded-lg bg-sage px-4 py-4 text-sm outline-gold sm:max-w-[400px]" />
          <button type="submit" className={goldButton}>تصفية</button>
        </form>
        <div aria-label="تصنيفات التجارب" className="flex flex-wrap gap-3">{filters.map((label, index) => <button key={label} type="button" aria-pressed={filter === (index ? label : "all")} onClick={() => setFilter(index ? label : "all")} className={`min-h-11 rounded-full px-5 py-2 text-[13px] font-bold ${filter === (index ? label : "all") ? "bg-dark text-white" : "bg-sage text-dark hover:bg-dark/10"}`}>{label}</button>)}</div>
      </div>
    </div>
    <div className={`${container} pt-4`} role="status" aria-live="polite">{empty ? <p className="py-6">لا توجد تجارب مطابقة. جرّب تصفية أخرى. <button className="underline" onClick={() => setFilter("all", "")}>عرض كل التجارب</button></p> : (filter !== "all" || query) && <p className="text-sm">نتائج {query && `البحث عن «${query}»`} {filter !== "all" && `ضمن ${filter}`}</p>}</div>

    {featuredVisible && <section className={`${container} py-14`} aria-labelledby="featured-heading">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-7 px-3.5 py-[18px] md:max-w-[426px]">
          <p className="flex items-center gap-2 text-gold"><Image src={asset("icons/exp-badge-star.svg")} alt="" width={28} height={28} unoptimized />تجربة مختارة</p>
          <div><h2 id="featured-heading" className="text-[30px] font-bold leading-snug md:text-[38px]">جلسة فوق السحاب</h2><p className="mt-4 text-sm text-dark/70">السودة - منتزه السودة</p><p className="mt-2 text-sm text-gold">★ 4.9 (326 تقييم)</p></div>
          <div className="flex justify-between gap-4">{[["mountain", "طبيعة جبلية"], ["family", "مناسب للعائلة"], ["outdoor", "جلسات خارجية"]].map(([icon, label]) => <div key={icon} className="flex flex-col items-center gap-2 text-center text-xs text-dark/70"><Image src={asset(`icons/exp-feat-${icon}.svg`)} alt="" width={28} height={28} unoptimized />{label}</div>)}</div>
          <div><p className="leading-relaxed text-dark/70">استمتع بجلسة هادئة على ارتفاع فوق الغيم، مع مشروب دافئ وإطلالة تمنحك إحساس عسير الحقيقي.</p><div className="mt-3 flex items-center gap-4"><SaveButton id="clouds" title="جلسة فوق السحاب" featured /><a className={`${goldButton} flex-1`} href={`${legacy}experience-details.html?id=clouds`}>احجز تجربتك الآن</a></div></div>
        </div>
        <div className="group relative aspect-[760/456] min-w-0 flex-[1_1_500px] overflow-hidden rounded-2xl bg-sage"><Photo name="exp-featured" alt="جلسة فوق السحاب" eager sizes="(max-width: 1024px) 100vw, 760px" /><span className="absolute inset-0 bg-wash/15" /></div>
      </div>
    </section>}

    {visibleMoods.length > 0 && <section className={`${section} bg-sage`}><div className={container}><Heading>اختر تجربتك حسب المزاج</Heading><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleMoods.map(m => <div key={m.title} className="group relative flex aspect-[192/154] flex-col justify-end overflow-hidden rounded-2xl bg-wash p-7 text-white">
      <Photo name={`exp-mood-${m.image}`} /><span className="absolute inset-0 bg-gradient-to-t from-wash/95 via-wash/40 to-wash/40" /><div className="relative"><Image src={asset(`icons/exp-mood-${m.icon}.svg`)} alt="" width={24} height={24} unoptimized className="mb-6" /><h3 className="text-2xl font-bold">{filterLink(m.filter, m.title, "after:absolute after:inset-0")}</h3><p className="mt-1 text-[13px]">{m.sub}</p></div>
    </div>)}</div></div></section>}

    <section id="exp-selected" className={`${container} ${section} scroll-mt-24`}>
      <Heading action={<a href="/experiences#exp-selected" className="text-sm font-bold text-gold" onClick={e => { e.preventDefault(); setFilter("all", "", "exp-selected"); }}>عرض كل التجارب ←</a>}>تجارب مختارة</Heading>
      {visibleExperiences.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleExperiences.map(e => <article key={e.id} className="group relative aspect-[202/260] overflow-hidden rounded-2xl bg-sage text-white shadow-lg">
        <Photo name={`exp-card-${e.image}`} /><span className="absolute inset-0 bg-gradient-to-t from-wash via-wash/15 to-wash/15" /><span className="absolute start-3.5 top-3.5 rounded-lg bg-gold px-3.5 py-1.5 text-xs font-bold text-dark">{e.tag}</span>
        <div className="absolute inset-x-4 bottom-16"><h3 className="text-[15px] font-bold"><a className="after:absolute after:inset-0" href={`${legacy}experience-details.html?id=${e.id}`}>{e.title}</a></h3><p className="mt-1.5 text-xs text-white/80">{e.place}</p></div>
        <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-2"><span className="text-xs">{e.meta}</span><SaveButton id={e.id} title={e.title} /></div>
      </article>)}</div> : <p className="text-dark/70">لا توجد تجارب مختارة مطابقة. جرّب تصفية أخرى.</p>}
    </section>

    <section className={`${section} bg-sage`}><div className={container}><Heading action={<a className="text-sm font-bold text-gold" href={`${legacy}peaks.html`}>عرض كل المناطق ←</a>}>ابدأ من المنطقة أو القمة</Heading><div className="grid gap-5 lg:grid-cols-[1fr_1.65fr]"><RegionCard region={regions[0]} featured /><div className="grid grid-cols-2 gap-5 sm:grid-cols-3">{regions.slice(1).map(r => <RegionCard key={r.title} region={r} />)}</div></div></div></section>

    {visibleRoutes.length > 0 && <section id="exp-routes" className={`${container} ${section} scroll-mt-24`}><Heading action={<a href="#exp-routes" className="text-sm font-bold text-gold" onClick={e => { e.preventDefault(); setFilter("all", "", "exp-routes"); }}>عرض كل المسارات ←</a>}>مسارات جاهزة</Heading><div className="grid gap-6 lg:grid-cols-3">{visibleRoutes.map(r => <a href={`${legacy}route-details.html?id=${r.id}`} key={r.id} className="group flex min-w-0 items-center gap-3 rounded-2xl transition hover:shadow-lg"><div className="relative size-32 shrink-0 overflow-hidden rounded-2xl bg-sage xl:size-[166px]"><Photo name={`exp-route-${r.image}`} sizes="166px" /><span className="absolute inset-0 bg-wash/15" /></div><div className="flex min-w-0 flex-col gap-3 py-3 pe-2"><h3 className="text-xl font-bold">{r.title}</h3><p className="text-[13px] leading-relaxed text-dark/70">{r.description}</p><p className="text-xs text-dark/70">{r.meta}</p></div></a>)}</div></section>}

    {visibleSeasons.length > 0 && <section id="exp-season" className={`${section} bg-sage`}><div className={container}><Heading>حسب الموسم</Heading><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{visibleSeasons.map(s => <article key={s.title} className="group relative flex min-h-[244px] flex-col justify-end gap-4 overflow-hidden rounded-2xl bg-wash p-5 text-white"><Photo name={`exp-season-${s.image}`} /><span className="absolute inset-0 bg-gradient-to-t from-wash/95 to-wash/30" /><div className="relative flex flex-col gap-2.5"><h3 className="text-[28px] font-bold">{s.title}</h3><p>{s.sub}</p><hr className="my-1 border-white/30" /><p className="text-[13px] leading-relaxed text-sage">{s.description}</p></div>{filterLink(s.title, `استكشف تجارب ${s.title}`, `${goldButton} relative self-start px-2`)}</article>)}</div></div></section>}

    <section className={`${container} ${section}`}><div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl bg-dark px-6 text-white"><Photo name="exp-cta-photo" sizes="(max-width: 1240px) 100vw, 1240px" /><span className="absolute inset-0 bg-dark/85" /><div className="relative flex max-w-[640px] flex-col items-center gap-5 py-14 text-center"><h2 className="text-3xl font-bold md:text-4xl">حان وقت المغامرة</h2><p className="text-[17px] leading-relaxed">خطط رحلتك إلى عسير واكتشف تجارب لا تنسى بين الجبال والطبيعة والثقافة المحلية.</p><a className={goldButton} href={`${legacy}plan.html`}>خطط رحلتك الآن</a></div></div></section>
  </div>;
}
