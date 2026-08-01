import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  return (
    <>
      <Helmet>
        <title>Projects — Mostafa Akajdid</title>
        <meta
          name="description"
          content="A curated selection of digital products designed and built by Mostafa Akajdid. React, Next.js, Spring Boot, PostgreSQL projects."
        />
        <link rel="canonical" href="https://makajdid.vercel.app/projects" />
        <meta property="og:title" content="Projects — Mostafa Akajdid" />
        <meta
          property="og:description"
          content="A curated selection of digital products designed and built by Mostafa Akajdid. React, Next.js, Spring Boot, PostgreSQL projects."
        />
        <meta property="og:url" content="https://makajdid.vercel.app/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://makajdid.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Mostafa Akajdid" />
        <meta
          name="twitter:description"
          content="A curated selection of digital products designed and built by Mostafa Akajdid. React, Next.js, Spring Boot, PostgreSQL projects."
        />
        <meta name="twitter:image" content="https://makajdid.vercel.app/og-image.png" />
      </Helmet>
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
          <Link to="/" state={{ scrollTo: "contact" }} className="projects-cta__link">
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
