import Header from "./components/Header";
import Hero from "./sections/Hero";
import News from "./sections/News";
import Projects from "./sections/Projects";
import './index.css'
import Ideas from "./sections/Ideas";
import InfoSection from "./sections/InfoSection";
import { BackgroundGradientAnimation } from "./components/ui/shadcn-io/background-gradient-animation";
import FocusAreasSection from "./sections/FocusAreasSection";
import About from "./sections/About";


export default function App() {
  return (


    <div dir="rtl" className="">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(200, 200, 200)"
        gradientBackgroundEnd="rgb(200, 200, 190)"
        firstColor="102, 16, 242"
        secondColor="67, 126, 218"
        thirdColor="120, 92, 191"
        fourthColor="0, 206, 124"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        blendingValue="screen"
        interactive={true}
      />
      <Header />
      <Hero />
      <Projects />
      <News />
      <Ideas />
      <InfoSection />
      <FocusAreasSection />
      <About />
    </div>


  )
}
