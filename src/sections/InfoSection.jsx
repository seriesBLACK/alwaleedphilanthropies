import Section from "@/components/Section";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function InfoSection() {
  return (
    <Section id="info" line={false}>

      <div className="w-full flex flex-col items-center justify-around lg:flex-row z-10">

        <div className="text-center w-full lg:w-1/2 px-6 py-8 lg:py-0 z-10">
          <h2 className="text-2xl z-10 sm:text-3xl md:text-4xl lg:text-[4vw] font-bold text-gray-800 leading-relaxed">
            نبادر وندعم ونتعاون على مشاريع وحملات خيرية <br />
            <span className="text-red-600">في جميع أنحاء العالم</span> لنفيد
            الإنسانية بكل أجناسها وأعراقها وأديانها.
          </h2>
        </div>

        <div className="flex flex-col w-full h-fit lg:w-1/2 lg:h-full justify-center items-center px-4 py-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000, // 3 seconds
                stopOnInteraction: false, // Keep autoplaying after user interaction
              }),
            ]}

            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg lg:rounded-full w-[92%] max-w-[420px] lg:w-[60%] lg:aspect-square bg-white text-center">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 h-auto sm:h-[300px] md:h-[360px] lg:h-[400px] relative">

                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700">+1.5 مليار</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700">مستفيد</p>
                  <p className="text-sm md:text-2xl text-gray-600">حول العالم.</p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  </div>
                </div>

              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 h-auto sm:h-[300px] md:h-[360px] lg:h-[400px] relative">

                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700">190 بلد</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700">بغض النظر عن الجنس او العرق او الدين</p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 h-auto sm:h-[300px] md:h-[360px] lg:h-[400px] relative">
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700">45+ سنة</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700">من الدعم المستمر والعمل الجاد</p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                  </div>
                </div>
              </CarouselItem>

            </CarouselContent>
          </Carousel>
          <p className="text-xs mt-3 text-gray-700">تعرف أكثر على قصتنا</p>
        </div>
        {/* 
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(255, 255, 255)"
        gradientBackgroundEnd="rgb(255, 255, 255)"
        firstColor="102, 16, 242"
        secondColor="67, 126, 218"
        thirdColor="120, 92, 191"
        fourthColor="0, 206, 124"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        blendingValue="screen"
        interactive={true}
      >
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="text-right md:mr-8 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
              نبادر وندعم ونتعاون على مشاريع وحملات خيرية <br />
              <span className="text-red-600">في جميع أنحاء العالم</span> لنفيد
              الإنسانية بكل أجناسها وأعراقها وأديانها.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-full w-56 h-56 bg-white bg-opacity-50 text-center m-4">
            <p className="text-4xl font-bold text-gray-700">+1.5 مليار</p>
            <p className="text-2xl text-gray-700">مستفيد</p>
            <p className="text-gray-600">حول العالم.</p>
            <div className="flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            </div>
            <p className="text-xs mt-3 text-gray-700">تعرف أكثر على قصتنا</p>
          </div>
        </div>
      </BackgroundGradientAnimation> */}
      </div>
    </Section >

  );
}
