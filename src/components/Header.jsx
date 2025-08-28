import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  //mopile nav
  const [open, setOpen] = useState(false);


  return (
    <header className="absolute w-full top-0 z-40 backdrop-blur-[5px]">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between border-b border-white">
        <div className="flex items-center gap-3">
          <img className="w-[137px] h-[36]" src="/logo.png" alt="" />
          {/* <div className="hidden md:block text-sm text-neutral-500">ISO 9001:2015</div> */}
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
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
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
