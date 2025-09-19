import Header from "./components/Header";
import Hero from "./sections/Hero";
import News from "./sections/News";
import LastWork from "./components/LastWork";
import './index.css'
import Ideas from "./sections/Ideas";
import InfoSection from "./sections/InfoSection";
import FocusAreasSection from "./sections/FocusAreasSection";
import About from "./sections/About";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import ComplaintsForm from "./pages/ComplaintsForm";
import PasswordGate from "./components/Private";
import Projects from "./pages/Projects";
import Impact from "./pages/Impact";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div dir="rtl" className="">
            <Header />
            <Hero />
            <LastWork />
            <News />
            <Ideas />
            <InfoSection />
            <FocusAreasSection />
            <About />
            <Footer />
          </div>
        }
      />
      <Route path="/form" element={<Form />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/complain" element={<ComplaintsForm />} />


      {/* everything inside here will render via <Outlet /> */}
      <Route path="/admin" element={<PasswordGate />} />

    </Routes>
  );
}
