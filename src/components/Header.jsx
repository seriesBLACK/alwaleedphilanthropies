import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  //mopile nav
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-40 backdrop-blur-[5px]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between border-b border-white">
        <div className="flex items-center gap-3">
          <img className="w-[137px] h-[60]" src="/logo.png" alt="logo" />
        </div>


        <nav className="hidden lg:flex gap-6 text-[26px] text-white">
          <a href="#home" className="">الرئيسية</a>
          <a href="#impact" className="">مجالات التأثير</a>
          <a href="#projects" className="">المشاريع</a>
          <a href="#news" className="">الأخبار</a>
          <a href="#about" className="">عن المؤسسة</a>
          <a href="#contact" className="">تواصل معنا</a>
        </nav>


        <button className="lg:hidden" onClick={() => setOpen((s) => !s)} aria-label="فتح القائمة">
          <Menu className="text-white" />
        </button>
      </div>


      {/* mobile drawer */}
      {open && (
        <Sidebar onClose={() => setOpen(false)} />
      )}
    </header>
  )
}
