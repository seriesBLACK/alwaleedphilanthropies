import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png"

export default function Header() {
  //mopile nav
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-[137px] h-[36]" src={logo} alt="" />
          {/* <div className="hidden md:block text-sm text-neutral-500">ISO 9001:2015</div> */}
        </div>


        <nav className="hidden lg:flex gap-6 text-sm">
          <a href="#home" className="hover:text-neutral-700">الرئيسية</a>
          <a href="#impact" className="hover:text-neutral-700">مجالات التأثير</a>
          <a href="#impact" className="hover:text-neutral-700">الحملات</a>
          <a href="#projects" className="hover:text-neutral-700">المشاريع</a>
          <a href="#news" className="hover:text-neutral-700">الأخبار</a>
          <a href="#about" className="hover:text-neutral-700">عن المؤسسة</a>
          <a href="#contact" className="hover:text-neutral-700">تواصل معنا</a>
        </nav>


        <button className="lg:hidden" onClick={() => setOpen((s) => !s)} aria-label="فتح القائمة">
          {open ? <X /> : <Menu />}
        </button>
      </div>


      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-4 text-sm">
            {[
              ["الرئيسية", "#home"],
              ["مجالات التأثير", "#impact"],
              ["المشاريع", "#projects"],
              ["الأخبار", "#news"],
              ["عن المؤسسة", "#about"],
              ["تواصل معنا", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-2">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
