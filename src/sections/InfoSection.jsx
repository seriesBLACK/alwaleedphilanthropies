import Section from "@/components/Section";

export default function InfoSection() {

  return (
    <Section id="info" line={false}>
      <div className="w-full h-fit lg:h-screen flex flex-col items-center justify-around lg:flex-row z-10">

        <div className="text-right w-full flex-1 lg:w-1/2 px-6 py-4 lg:py-0 z-10">
          <h2 className="text-2xl z-10 md:text-4xl lg:text-[4vw] font-bold text-gray-800 leading-relaxed">
            نبادر وندعم ونتعاون على مشاريع وحملات خيرية <br />
            <span className="text-red-600">في جميع أنحاء العالم</span> لنفيد
            الإنسانية بكل أجناسها وأعراقها وأديانها.
          </h2>
        </div>

        <div className="flex flex-col w-full h-[50%] lg:w-1/2 justify-center items-center p-2">
          <div className="w-[300px] lg:w-[500px] aspect-square rounded-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center py-8 sm:py-12 h-auto sm:h-[300px] md:h-[360px] lg:h-[400px] relative">
              <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-700">مليار مستفيد +1.5 </p>
              <p className="text-lg md:text-2xl text-gray-600">حول العالم</p>
            </div>
          </div>
          <p className="text-xs mt-3 text-gray-700">تعرف أكثر على قصتنا</p>
        </div>

      </div>
    </Section >
  );
}