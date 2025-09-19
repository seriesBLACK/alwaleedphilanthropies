import Card from "@/components/Card";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl">
      <header className="absolute w-full top-0 backdrop-blur-[5px]">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between border-b border-black">
          {/* Logo with heading for SEO */}
          <div className="flex items-center gap-3 bg-green-600">
            <a href="/" className="flex items-center" aria-label="العودة إلى الصفحة الرئيسية">
              <img
                className="w-[137px] h-[60px]"
                src="/logo.png"
                alt="شعار المؤسسة"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex gap-6 text-[26px]"
            aria-label="القائمة الرئيسية"
          >
            <ul className="flex gap-6">
              <li><a href="/">الرئيسية</a></li>
              <li><a href="#impact">مجالات التأثير</a></li>
              <li><a href="#projects">المشاريع</a></li>
              <li><a href="#news">الأخبار</a></li>
              <li><a href="#about">عن المؤسسة</a></li>
              <li><a href="#footer">تواصل معنا</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="فتح القائمة"
          >
            <Menu className="text-black" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && <Sidebar onClose={() => setOpen(false)} />}
      </header>

      <main className="w-full mx-auto mt-22 px-3 lg:px-29 lg:py-12 py-1 z-10 bg-white/900">
        <div className=" w-full lg:w-[50%]">
          <h1 className="text-3xl md:text-5xl leading-[1.2]">مشاريعنا</h1>
          <p className="mt-4 text-lg md:text-xl">جميع مشاريعنا التي نعمل عليها أو ندعمها هي بهدف ترك أثر إيجابي على صعيد عالمي يخدم البشرية ككل. سوياً مع شركائنا، عملنا على مشاريع عدة لامست أكثر من مليار شخص في 189 دولة.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-5">
          <Card projectState="مستمر" title="دعم الحرف الفلسطينية: من أجل مستقبل مستدام" goal="تمكين المرأة والشباب" img="/projects/7.jpg" />
          <Card projectState="مستمر" title="مراكز الوليد بن طلال الاكاديمية" goal="بناء الجسةر بين الثقافات" img="/projects/5.jpg" />
          <Card projectState="مستمر" title="تعزيز التنمية المجتمعية المرتكزة على الثقافة من خلال التدريب المهني والتقني وفرص..." goal="تنمية المجتمعات" img="/projects/5.jpg" />
          <Card projectState="أمل القريني" title="بناء الجسور بين الثقافات، وبناء المستقبل: دور الحوار الثقافي في التنمية المستدامة" goal="بناء الجسةر بين الثقافات" img="/ideas/1.jpg" />
          <Card projectState="ماويه طالب" title='استثمار الابتكار لمكافحة تغير المناخ: كيف تعزز منصة "أتلاي 2.0" العمل العالمي' goal="تنمية البيئة المستدامة" img="/ideas/2.jpg" />
          <Card projectState="م. نجلاء الجعيد" title='الوعي القانوني حق للجميع "واعية" تقود التغيير للمرأة السعودية' goal="تمكين المرأة والشباب" img="/ideas/3.jpg" />
          <Card projectState="مكتمل" title="أطلقت مؤسسة الوليد..." goal="تنمية البيئة المستدامة" img="/projects/project2.jpg" />
          <Card projectState="الحمله" title="بيت العرب: تمكين الحرفيات" goal="تمكين المرأة والشباب" img="/projects/project3.jpg" />
          <Card projectState="الحمله" title="تمكين المرأة السعودية: مبادرة..." goal="تمكين المرأة والشباب" img="/projects/project4.jpg" />
        </div>
      </main>
    </div>
  )
}
