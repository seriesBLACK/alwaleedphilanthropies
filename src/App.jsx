import Header from "./components/Header";
import Hero from "./sections/Hero";
import News from "./sections/News";
import Projects from "./sections/Projects";
import SectionOne from "./sections/SectionOne";
import './index.css'
import Ideas from "./sections/Ideas";


export default function App() {
  return (
    <div dir="rtl" className=" backdrop-blur-3xl">
      <Header />
      <Hero />
      <Projects />
      <News />
      <Ideas />
      <SectionOne />
    </div>

  )
}
