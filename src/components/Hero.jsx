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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`
            w-full h-full object-cover
            transition-opacity duration-1000 ease-in-out
            ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/logo.png" // Fallback image
        >
          <source src="/ap-video.mp4" type="video/mp4" />
          <source src="/video.webm" type="video/webm" />
        </video>

        {/* Fallback image */}
        {!isVideoLoaded && (
          <img
            src="/fallback-image.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Content />
    </section>
  );
};

function Content() {
  const spent = useCountUp(5);
  const beneficiaries = useCountUp(1500);
  const years = useCountUp(45);
  const countries = useCountUp(190);

  return (
    <div className="relative z-10 text-white h-full w-[90%] mx-auto">

      <div className="max-w-2xl py-20 md:py-28 pt-22 h-full flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1 variants={item} className="text-4xl md:text-5xl leading-[1.2]">
            شركاء في سعي الإنسانية لأجل عالم متكافئ الفرص
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg md:text-xl text-white/90">
            نبادر ونتعاون مع شركاء محليين وعالميين لصناعة الأثر وتمكين الإنسان أينما كان.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex justify-start gap-3">
            <a href="#impact" className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-white hover:opacity-90">
              استكشف مجالات التأثير <ArrowLeft size={18} />
            </a>
            <a href="#projects" className="inline-flex px-5 py-3 rounded-xl border border-white text-white hover:bg-white/10">
              اطّلع على مشاريعنا
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats stripe */}
      <div className=" absolute bottom-0 mx-auto w-full">
        <div className="border-t border-neutral-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-white">+{years}</div>
            <div className="text-sm text-white mt-1">عامًا من الدعم المتواصل</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-white">+{spent}$</div>
            <div className="text-sm text-white mt-1">مليار إنفاق عالمي</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-white">+{beneficiaries / 10}٠ م</div>
            <div className="text-sm text-white mt-1">مستفيد</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-white">{countries}</div>
            <div className="text-sm text-white mt-1">دولة</div>
          </div>
        </div>
      </div>
    </div>
  );
}