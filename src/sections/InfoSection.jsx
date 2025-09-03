import Section from "@/components/Section";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function InfoSection() {
  return (
    <Section id="info" line={false}>

      <div className="h-full w-full flex sm:flex-col lg:flex-row z-10">

        <div className="text-center w-[50%]">
          <h2 className="text-[4vw] font-bold text-gray-800">
            نبادر وندعم ونتعاون على مشاريع وحملات خيرية <br />
            <span className="text-red-600">في جميع أنحاء العالم</span> لنفيد
            الإنسانية بكل أجناسها وأعراقها وأديانها.
          </h2>
        </div>

        <div className="flex flex-col w-[50%] h-full justify-center items-center">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000, // 3 seconds
                stopOnInteraction: false, // Keep autoplaying after user interaction
              }),
            ]}

            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-full w-[60%] aspect-square bg-white text-center">
            <CarouselContent>
              <CarouselItem >
                <div className="flex flex-col h-[400px] items-center justify-center">

                  <p className="text-8xl font-bold text-gray-700">+1.5 مليار</p>
                  <p className="text-5xl text-gray-700">مستفيد</p>
                  <p className="text-gray-600 text-2xl">حول العالم.</p>
                  <div className="flex gap-2 absolute bottom-0 justify-center">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  </div>
                </div>

              </CarouselItem>
              <CarouselItem >
                <div className="flex flex-col h-[400px] items-center justify-center">

                  <p className="text-8xl font-bold text-gray-700">190 بلد </p>
                  <p className="text-5xl text-gray-700">بغض النظر عن الجنس او العرق او الدين</p>
                  <div className="flex gap-2 absolute bottom-0 justify-center">
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col h-[400px] items-center justify-center">
                  <p className="text-8xl font-bold text-gray-700">45+ سنة</p>
                  <p className="text-5xl text-gray-700">من الدعم المستمر والعمل الجاد</p>
                  <div className="flex gap-2 absolute bottom-0 justify-center">
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
