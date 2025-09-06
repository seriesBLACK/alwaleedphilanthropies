export default function Footer() {
  return (
    <section className="h-screen w-full flex flex-col z-10">
      <div className="flex flex-col gap-5 w-full px-4 sm:pt-10 lg:flex-row lg:px-25 flex-1 overflow-auto">

        <div className="w-full h-[50%] z-10 lg:w-[55%] lg:h-full">

          <div className="">
            <h3 className="lg:text-5xl text-xl">اشترك في النشرة الإخبارية</h3>
            <input placeholder="سجل" type="email" className="w-full border-2 border-black h-10 my-5 lg:h-14 lg:my-7" />
          </div>

          <div className="flex justify-between flex-col lg:flex-row text-xl">
            <div className="flex flex-col">
              <div className="">
                <a className="text-[#00833d]" href="https://alwaleedphilanthropies.org/ar/projects">أعمالنا</a>
                <p className="hidden lg:block">المشاريع</p>
                <p className="hidden lg:block">الحملات</p>
              </div>
              <div className="my-2 lg:my-5">
                <a className="text-[#00833d]" href="https://alwaleedphilanthropies.org/ar/who-we-are">عن المؤسسة</a>
                <p className="hidden lg:block">من نحن</p>
                <p className="hidden lg:block my-2">سياسة الجودة</p>
                <p className="hidden lg:block">التقارير السنوية</p>
              </div>
              <a className="text-[#00833d]" href="https://alwaleedphilanthropies.org/ar/what-we-do">كيف نساعد</a>
              <a className="text-[#00833d] mt-2" href="https://alwaleedphilanthropies.org/ar/how-we-think">افكارنا</a>
            </div>

            <div className=" flex flex-col gap-2">
              <a className="text-[#00833d] mt-5" href="https://alwaleedphilanthropies.org/ar/areas-of-impact">مجالات التأثير</a>
              <p className="hidden lg:block">تنمية المجتمعات</p>
              <p className="hidden lg:block">تمكين المرأة والشباب</p>
              <p className="hidden lg:block">بناء الجسور بين الثقافات</p>
              <p className="hidden lg:block">مد يد العون عند وقوع الكوارث</p>
              <p className="hidden lg:block">تنمية البيئة المستدامه</p>
            </div>
          </div>

        </div>

        <div className="z-10 w-full h-fit lg:w-[35%] lg:h-full text-xl lg:pt-15 lg:pr-25">
          <div className="flex flex-col gap-3 text-right">
            <p>تواصل معنا</p>
            <p dir="ltr">+966-590-858-707</p>
            <p>alkhyrytm108@gmail.com</p>
          </div>
          <div className="flex items-end mt-6">
            <img src="/iso.png" alt="" className="h-[120px]" />
            <p className="text-sm text-[#00833d]">Quality Management System <br />
              ISO 9001:2015</p>
          </div>
        </div>

      </div>

      <footer className="w-full h-16 flex-shrink-0">
        <div className="w-full h-full flex items-center justify-around">
          <p className="text-xs text-gray-400 hidden lg:block">
            جميع الحقوق محفوظة @ 2025
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/channel/UCcbnorgWmKB5sM1himuZlvQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-black hover:text-red-600">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img">
                <rect x="2" y="5" width="20" height="14" rx="4" ry="4" />
                <path d="M10 8l6 4-6 4V8z" fill="#fff" />
              </svg>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100031854531628" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-black hover:text-blue-700">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
              </svg>
            </a>

            <a href="https://x.com/rym553276209" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-black hover:text-slate-700">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>

            <a href="https://www.instagram.com/lmyrhryml388" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:text-pink-500">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
              </svg>
            </a>

            <a href="mailto:alkhyrytm108@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="text-black hover:text-red-600">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 7.5l8.5 6L20 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="https://wa.me/966590858707" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-black hover:text-green-600">
              <svg className="h-8 w-8 lg:h-12 lg:w-12" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
            </a>
          </div>

        </div>

      </footer>

    </section>
  )
}
