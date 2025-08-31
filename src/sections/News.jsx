import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function PlaceholderImg({ ratio = "pt-[56.25%]", label = "صورة" }) {
  return (
    <div className={`relative bg-neutral-100 ${ratio} w-full`}>
      <div className="absolute inset-0 grid place-items-center text-neutral-400">{label}</div>
    </div>
  );
}

export default function News() {
  return (
    <Section id="news" title="أخبار ووقائع">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card projectState="" title="اتفاقية تعاون تجمع مؤسسة الوليد للإنسانية مع صندوق الشهداء والمصابين والأسرى والمفقودين" goal="تنمية المجتمعات" img="/news/1.JPG" />
        <Card projectState="" title="مؤسسة الوليد للإنسانية تسهم في دعم مشاركة الكشافة النسائية السعودية في الملتقى..." goal="2025-8-04" img="/news/2.jpg" />
        <Card projectState="" title='مؤسسة الوليد للإنسانية "العالمية" ومؤسسة الجبل الفيروزي تجددان التزامهما بالتعاون عبر مبادرة...' goal="2025-8-01" img="/news/3.jpg" />
        <Card title="قصص وحضارات: منصة رقمية توثق الروابط الثقافية عبر معاني الهوية والأثر" goal="بناء الجسور بين الثقافات" img="/news/4.jpg" />
        <Card title='في إطار التعاون البنّاء والمشترك بين مؤسسة الوليد للإنسانية "العالمية" ومؤسسة مصر...' goal="تنمية المجتمعات" img="/news/5.jpg" />
        <Card title="بالشراكة مع مؤسسة الوليد للإنسانية وجمعية الكشافة العربية السعودية، اختُتمت النسخة الثانية..." goal="2025-5-22" img="/news/6.jpg" />
      </motion.div>
    </Section>
  )
}
