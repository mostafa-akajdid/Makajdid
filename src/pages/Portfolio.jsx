import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";

const About = lazy(() => import("../components/about/About"));
const Skills = lazy(() => import("../components/skills/Skills"));
const Services = lazy(() => import("../components/services/Services"));
const Qualification = lazy(() =>
  import("../components/qualification/Qualification")
);
const CaseStudies = lazy(() =>
  import("../components/caseStudies/CaseStudies")
);
const Contact = lazy(() => import("../components/contact/Contact"));

const Portfolio = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [state]);

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
          <CaseStudies />
          {/* <Work /> */}
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </>
  );
};

export default Portfolio;
