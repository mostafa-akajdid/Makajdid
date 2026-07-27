import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Mostafa Akajdid — Full-Stack Developer in Casablanca | React, Next.js, Spring Boot</title>
        <meta
          name="description"
          content="Full-stack developer in Casablanca. React, Next.js, Spring Boot, PostgreSQL. Oracle Java SE 17 OCP. Available for freelance and full-time roles."
        />
        <link rel="canonical" href="https://akajdidm.vercel.app" />
        <meta property="og:title" content="Mostafa Akajdid — Full-Stack Developer in Casablanca" />
        <meta
          property="og:description"
          content="Full-stack developer in Casablanca. React, Next.js, Spring Boot, PostgreSQL. Oracle Java SE 17 OCP. Available for freelance and full-time roles."
        />
        <meta property="og:url" content="https://akajdidm.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://akajdidm.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mostafa Akajdid — Full-Stack Developer in Casablanca" />
        <meta
          name="twitter:description"
          content="Full-stack developer in Casablanca. React, Next.js, Spring Boot, PostgreSQL. Oracle Java SE 17 OCP. Available for freelance and full-time roles."
        />
        <meta name="twitter:image" content="https://akajdidm.vercel.app/og-image.png" />
      </Helmet>
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
