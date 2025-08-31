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

export default function Ideas() {
  return (
    <Section id="news" title="أخبار ووقائع">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card projectState="أمل القريني" title="بناء الجسور بين الثقافات، وبناء المستقبل: دور الحوار الثقافي في التنمية المستدامة" goal="بناء الجسةر بين الثقافات" img="/ideas/1.jpg" />
        <Card projectState="ماويه طالب" title='استثمار الابتكار لمكافحة تغير المناخ: كيف تعزز منصة "أتلاي 2.0" العمل العالمي' goal="تنمية البيئة المستدامة" img="/ideas/2.jpg" />
        <Card projectState="م. نجلاء الجعيد" title='الوعي القانوني حق للجميع "واعية" تقود التغيير للمرأة السعودية' goal="تمكين المرأة والشباب" img="/ideas/3.jpg" />
      </motion.div>
    </Section>
  )
}
