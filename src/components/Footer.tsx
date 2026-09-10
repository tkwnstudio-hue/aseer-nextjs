import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-wash text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
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
          <h4 className="mb-3 text-sm font-bold text-gold">تجارب</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><Link href="/experiences">مغامرات</Link></li>
            <li><Link href="/experiences">ثقافة</Link></li>
            <li><Link href="/experiences">طبيعة</Link></li>
            <li><Link href="/restaurants">مأكولات</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold text-gold">اكتشف</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><Link href="/#regions">عن عسير</Link></li>
            <li><Link href="/#regions">المناطق</Link></li>
            <li><Link href="/events">الفعاليات</Link></li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-bold">عسير</span>
          <p className="mt-3 text-sm text-white/70">
            منصة اكتشاف عسير — خطط رحلتك، واكتشف التجارب والوجهات بين القمم
            والضباب.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} عسير. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
