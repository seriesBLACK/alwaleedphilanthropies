import Header from "./components/Header";
import Hero from "./sections/Hero";
import News from "./sections/News";
import Projects from "./sections/Projects";
import './index.css'
import Ideas from "./sections/Ideas";
import InfoSection from "./sections/InfoSection";
import FocusAreasSection from "./sections/FocusAreasSection";
import About from "./sections/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import ComplaintsForm from "./components/ComplaintsForm";
import AdminSubmissions from "./components/Admin";
import PasswordGate from "./components/Private";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div dir="rtl" className="">
            <Header />
            <Hero />
            <Projects />
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
      <Route path="/complain" element={<ComplaintsForm />} />


      {/* everything inside here will render via <Outlet /> */}
      <Route path="/admin" element={<PasswordGate />} />

    </Routes>
  );
}
