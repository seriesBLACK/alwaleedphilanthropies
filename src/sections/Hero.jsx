import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function useCountUp(target = 0, duration = 1400) {
  const [value, set] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      set(Math.floor(p * target));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return value;
}

export default function Hero() {
  return (
    <main className="relative w-full h-screen" role="main">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        >
          <source src="/ap-video.mp4" type="video/mp4" />
          <source src="/video.webm" type="video/webm" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Content />
    </main>
  );
}

function Content() {
  const spent = useCountUp(5);
  const beneficiaries = useCountUp(1500);
  const years = useCountUp(45);
  const countries = useCountUp(190);

  return (
    <div className="relative z-10 text-white h-full w-[90%] mx-auto">
      <secation className="max-w-2xl py-20 md:py-28 pt-22 h-full flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Main heading for SEO */}
          <motion.h1 variants={item} className="text-3xl md:text-5xl lg:text-7xl leading-[1.2] font-bold">
            مؤسسة الوليد للإنسانية
          </motion.h1>
          {/* Subheading with keyword-rich description */}
          <motion.p variants={item} className="mt-4 text-lg md:text-xl text-white/90">
            مؤسسة الوليد للإنسانية تدعم أبناء الوطن العربي وتساهم في المشاريع الخيرية والتنموية محليًا وعالميًا.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="mt-8 flex justify-start gap-3">
            <a
              href="/form"
              className="inline-flex items-center gap-1 px-3 py-3 font-semibold text-white hover:opacity-90"
              aria-label="تقديم طلب مساعدة لمؤسسة الوليد للإنسانية"
            >
              لتقديم طلب مساعدة <ArrowLeft size={18} />
            </a>

            <a
              href="/form"
              className="inline-flex text-lg px-5 py-3 rounded-xl border-2 border-white text-white hover:bg-white/10"
              aria-label="الانتقال إلى نموذج تقديم طلب"
            >
              تقديم طلب
            </a>
          </motion.div>
        </motion.div>
      </secation>

      {/* Stats section */}
      <section
        className="absolute bottom-0 mx-auto w-full"
        aria-label="إحصائيات مؤسسة الوليد للإنسانية"
      >
        <div className="border-t border-neutral-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <article>
            <p className="text-3xl md:text-4xl font-black text-white">+{years}</p>
            <p className="text-sm text-white mt-1">عامًا من الدعم المتواصل</p>
          </article>
          <article>
            <p className="text-3xl md:text-4xl font-black text-white">+{spent}$</p>
            <p className="text-sm text-white mt-1">مليار إنفاق عالمي</p>
          </article>
          <article>
            <p className="text-3xl md:text-4xl font-black text-white">+{beneficiaries / 10}٠ م</p>
            <p className="text-sm text-white mt-1">مستفيد</p>
          </article>
          <article>
            <p className="text-3xl md:text-4xl font-black text-white">{countries}</p>
            <p className="text-sm text-white mt-1">دولة</p>
          </article>
        </div>
      </section>
    </div>
  );
}
