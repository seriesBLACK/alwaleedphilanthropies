export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-right">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="text-sm text-neutral-500">© 2025 جميع الحقوق محفوظة</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:underline">سياسة الخصوصية</a>
            <a href="#" className="hover:underline">الشروط والأحكام</a>
            <a href="#" className="hover:underline">الأسئلة الشائعة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
