import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  //mopile nav
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-40 backdrop-blur-[5px]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between border-b border-white">

        {/* Logo with heading for SEO */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center" aria-label="العودة إلى الصفحة الرئيسية">
            <img
              className="w-[137px] h-[60px]"
              src="/logo.png"
              alt="شعار المؤسسة"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex gap-6 text-[26px] text-white"
          aria-label="القائمة الرئيسية"
        >
          <ul className="flex gap-6">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/impact">مجالات التأثير</a></li>
            <li><a href="/projects">المشاريع</a></li>
            <li><a href="/news">الأخبار</a></li>
            <li><a href="/about">عن المؤسسة</a></li>
            <li><a href="#footer">تواصل معنا</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="فتح القائمة"
        >
          <Menu className="text-white" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && <Sidebar onClose={() => setOpen(false)} />}
    </header>

  )
}
