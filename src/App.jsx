import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Services = lazy(() => import("./components/services/Services"));
const Qualification = lazy(() => import("./components/qualification/Qualification"));
const Work = lazy(() => import("./components/work/Work"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </>
  );
};

export default App;
