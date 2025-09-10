import { X } from "lucide-react"
import "./sidebar.css"

export default function Sidebar({ onClose }) {
  return (
    <div className="lg:hidden inset-0 h-screen w-[90%] absolute flex flex-col gradient-background">
      <button className="my-12" onClick={() => onClose?.()}>
        <X className="text-white size-12" />
      </button>
      <div className="w-full h-full grid gap-4 text-4xl text-white">
        {[
          ["الرئيسية", "#home"],
          ["تقديم طلب جديد", "/form"],
          ["تقديم شكوى", "#impact"],
          ["الأخبار", "#news"],
          ["عن المؤسسة", "#about"],
          ["تواصل معنا", "#footer"],
        ].map(([label, href]) => (
          <div key={href} className="w-full flex items-center border-t border-white">
            <a href={href} onClick={() => onClose?.()} className="py-2">
              {label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
