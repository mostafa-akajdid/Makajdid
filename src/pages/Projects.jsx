import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";
import "./Projects.css";

const CaseStudies = lazy(() =>
  import("../components/caseStudies/CaseStudies")
);

const PROJECT_COUNT = 6;

const Projects = () => {
  useEffect(() => {
    document.title = "Projects — Mostafa Akajdid";
    return () => {
      document.title = "Mostafa Akajdid | Portfolio";
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <section className="projects-hero">
          <h1 className="projects-hero__title">Selected Work</h1>
          <p className="projects-hero__description">
            A curated selection of digital products I&apos;ve designed and
            built. Each project represents a different challenge, process and
            outcome.
          </p>
          <span className="projects-hero__counter">
            0{PROJECT_COUNT} Selected Projects
          </span>
        </section>

        <Suspense fallback={null}>
          <CaseStudies showHeader={false} />
        </Suspense>

        <section className="projects-cta">
          <span className="projects-cta__label">Let&apos;s Connect</span>
          <h2 className="projects-cta__title">
            Interested in working together?
          </h2>
          <p className="projects-cta__description">
            I&apos;m always open to discussing new ideas,
            <br />
            products and collaborations.
          </p>
          <Link to="/#contact" className="projects-cta__link">
            Contact Me
            <svg
              className="projects-cta__arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </>
  );
};

export default Projects;
