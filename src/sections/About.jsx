
export default function About() {
  return (

    <div className="relative h-screen w-full bg-[#2a2a2a] lg:bg-transparent">
      {/* background image positioned to cover the container (hidden on small screens) */}
      <img src="/about/bg.jpg" className="absolute inset-0 w-full h-full object-cover hidden lg:block" alt="" />

      {/* text container sits above the image and overlay */}
      <div className="relative z-10 w-full font-medium lg:w-[60%] text-xl sm:text-base md:text-lg lg:text-[2vw] h-full px-8 py-15 lg:mr-12 flex items-center">
        <p dir="rtl" className="text-white leading-relaxed">
          عندما بدأت مؤسسة الوليد للإنسانية في 01/01/1980، كان ذلك بقناعة تامة أن العمل الإنساني غير الربحي هو متمم للعمل التجاري الربحي.<br />

          ومن هذا المنطلق، استطعنا بنهاية العام الأربعين من تأسيس الوليد للإنسانية وبداية العمل الإنساني وصلنا إلى أكثر من مليار مستفيد في جميع أنحاء العالم.<br />

          هذا النجاح وليد المئات من الشراكات، وعلى رأسه 10 سيدات سعوديات بقيادة الأمين العام لمؤسسة الوليد للإنسانية الأميرة لمياء بنت ماجد آل سعود.<br />

          نحن ننظر بتفائل كبير للمستقبل ونسعى لخوضه بنشاط وفعالية بهدف خدمة الإنسانية وتوفير كل ما هو ضروري سواءً كان ذلك محلياً أو إقليمياً، في العالم العربي أو عالمياً.<br />
        </p>
      </div>
    </div>

  )
}
