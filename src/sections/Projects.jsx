import { motion } from "framer-motion";
import '../index.css'
import Card from "../components/Card";
import Section from "../components/Section";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function Projects() {

  return (
    <Section id="projects" title="أعمالنا الأخيرة">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-3 md:col-span-2 flex bg-amber-400">
          <img src="/projects/project1.jpg" alt="" className="w-full" />

          <div className="w-[80%] pr-5 h-full flex flex-col justify-around">
            <span className="text-lg text-neutral-100">مكتمل</span>
            <h2 className="text-[4.5vw] text-white">
              إغاثة زلزال ألبانيا
            </h2>
            <p className="text-lg text-neutral-100">مدّ يد العون عند وقوع الكوارث</p>
          </div>
        </div>

        <Card projectState="مكتمل" title="أطلقت مؤسسة الوليد..." goal="تنمية البيئة المستدامة" img="/projects/project2.jpg" className="bg-[#6868c9]" />
        <Card projectState="الحمله" title="بيت العرب: تمكين الحرفيات" goal="تمكين المرأة والشباب" img="/projects/project3.jpg" className="bg-[#18a55b]" />
        <Card projectState="الحمله" title="تمكين المرأة السعودية: مبادرة..." goal="تمكين المرأة والشباب" img="/projects/project4.jpg" className="bg-[#6868c9]" />
      </motion.div>
    </Section>
  )
}
