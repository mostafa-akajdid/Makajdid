import { useState } from "react";
import "./qualification.css";

const EXPERIENCE = [
  {
    role: "Développeur Full-Stack",
    company: "Dynamic Impact",
    date: "Aug 2025 – Present",
    description:
      "Building full-stack applications with React, Next.js, and Spring Boot. Designing and integrating REST APIs with Spring Boot and Express.js, modeling PostgreSQL databases, and optimizing data access. Delivering features to production in an Agile environment with thorough code reviews.",
  },
  {
    role: "Développeur Front-End",
    company: "Digitalia Solutions",
    date: "Apr 2025 – Aug 2025",
    description:
      "Built the InfluMatch platform using React 18 and TypeScript. Implemented JWT authentication with role-based user management. Created a reusable UI component library with TailwindCSS and shadcn/ui.",
  },
  {
    role: "Développeur Web Full-Stack",
    company: "Ocean Connecting",
    date: "Aug 2024 – Mar 2025",
    description:
      "Developed the monpatient medical platform with Next.js, implementing secure authentication via NextAuth with role-based access control. Managed data across PostgreSQL and MySQL databases.",
  },
  {
    role: "Développeur Web & Marketing",
    company: "Optisent",
    date: "Sep 2023 – Jun 2024",
    description:
      "Built email campaigns and marketing offers from scratch in HTML and CSS. Tracked campaign performance and reported on key metrics, learning data-driven decision making early in my career.",
  },
];

const EDUCATION = [
  {
    role: "Formation Full Stack (Spring Boot & React)",
    company: "Coding Tech, Casablanca",
    date: "2025",
    description:
      "Intensive full-stack training focused on modern web technologies. Deepened understanding of backend architecture, API design, and system thinking.",
  },
  {
    role: "Technicien Spécialisé en Développement Informatique",
    company: "ISTA TADDART, Agadir",
    date: "2020 – 2023",
    description:
      "Three-year specialization in software development. Built the foundational skills in programming, databases, and software engineering that everything else grew from.",
  },
  {
    role: "Oracle Certified Professional",
    company: "Java SE 17 Developer",
    date: "2025",
    description:
      "Industry-recognized certification validating deep knowledge of Java SE 17, including language features, APIs, and best practices.",
  },
];

const HEADING = "Every role shaped how I think about software.";

const renderEntries = (entries, isExperience = false) => (
  <div className="qualification__timeline">
    {entries.map((entry, index) => (
      <div
        className={`qualification__entry${
          isExperience && index === 0 ? " qualification__entry--hero" : ""
        }`}
        key={entry.role}
      >
        <h3 className="qualification__entry-role">{entry.role}</h3>
        <p className="qualification__entry-company">{entry.company}</p>
        <p className="qualification__entry-description">
          {entry.description}
        </p>
        <span className="qualification__entry-date">{entry.date}</span>
      </div>
    ))}
  </div>
);

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="qualification" id="evolution">
      <div className="qualification__container">
        <span className="qualification__label">Evolution</span>

        <h2 className="qualification__heading">{HEADING}</h2>

        <p className="qualification__intro">
          I&apos;ve worked across front-end, full-stack, and infrastructure
          — always with the same goal: building products that serve people.
          Each role taught me something the previous one couldn&apos;t.
        </p>

        <div
          className="qualification__tabs"
          role="tablist"
          aria-label="Career sections"
        >
          <button
            className={`qualification__tab${
              activeTab === "experience" ? " qualification__tab--active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
            role="tab"
            id="tab-experience"
            aria-selected={activeTab === "experience"}
            aria-controls="panel-experience"
          >
            Experience
          </button>
          <button
            className={`qualification__tab${
              activeTab === "education" ? " qualification__tab--active" : ""
            }`}
            onClick={() => setActiveTab("education")}
            role="tab"
            id="tab-education"
            aria-selected={activeTab === "education"}
            aria-controls="panel-education"
          >
            Education
          </button>
        </div>

        <div
          className={`qualification__content${
            activeTab === "experience" ? " qualification__content-active" : ""
          }`}
          role="tabpanel"
          id="panel-experience"
          aria-labelledby="tab-experience"
        >
          {renderEntries(EXPERIENCE, true)}
        </div>

        <div
          className={`qualification__content${
            activeTab === "education" ? " qualification__content-active" : ""
          }`}
          role="tabpanel"
          id="panel-education"
          aria-labelledby="tab-education"
        >
          {renderEntries(EDUCATION)}
        </div>

        <div className="qualification__actions">
          <a href="#case-studies" className="qualification__cta">
            See selected projects
            <span className="qualification__cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
