import Section from "@/components/Section";


/*
تنمية المجتمعات
تمكين المرأة والشباب
بناء الجسور بين الثقافات
مدّ يد العون عند وقوع الكوارث
تنمية البيئة المستدامة
*/
export default function FocusAreasSection() {
  return (
    <Section id="FocusAreasSection" title="نغير العالم عبر">
      <div className="h-screen w-full flex justify-between items-center">
        <div className="flex flex-col justify-around items-start text-[4vw] w-fit h-full font-bold">
          <h4 className="focus-area-hover">تنمية المجتمعات</h4>
          <h4 className="focus-area-hover">تمكين المرأة والشباب</h4>
          <h4 className="focus-area-hover">بناء الجسور بين الثقافات</h4>
          <h4 className="focus-area-hover">مدّ يد العون عند وقوع الكوارث</h4>
          <h4 className="focus-area-hover">تنمية البيئة المستدامة</h4>
        </div>
        <p className="">اعرف المزيد</p>
      </div>
    </Section>
  )
}
