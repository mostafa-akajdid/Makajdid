import { useState } from "react";
import "./qualification.css";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Dynamic Impact",
    date: "Aug 2025 – Present",
    description:
      "Building full-stack applications with React, Next.js, and Spring Boot. Work includes REST API design and integration with Spring Boot and Express.js, PostgreSQL data modeling, and database access optimization — delivered through an Agile workflow with regular code reviews.",
  },
  {
    role: "Front-End Developer",
    company: "Digitalia Solutions",
    date: "Apr 2025 – Aug 2025",
    description:
      "Built the InfluMatch platform with React 18 and TypeScript, implementing JWT authentication with role-based user management and creating a reusable UI component library with TailwindCSS and shadcn/ui.",
  },
  {
    role: "Full-Stack Web Developer",
    company: "Ocean Connecting",
    date: "Aug 2024 – Mar 2025",
    description:
      "Developed the monpatient medical platform with Next.js, implementing role-based authentication and access control through NextAuth. Managed data across PostgreSQL and MySQL databases.",
  },
  {
    role: "Web & Marketing Developer",
    company: "Optisent",
    date: "Sep 2023 – Jun 2024",
    description:
      "Built email campaigns and marketing offers from scratch using HTML and CSS. Tracked campaign performance, reported on key metrics, and gained early experience in data-driven decision making.",
  },
];

const EDUCATION = [
  {
    role: "Formation Full Stack (Spring Boot & React)",
    company: "Coding Tech, Casablanca",
    date: "2025",
    description:
      "Intensive full-stack training in modern web technologies, with a focus on backend architecture, API design, and system thinking.",
  },
  {
    role: "Technicien Spécialisé en Développement Informatique",
    company: "ISTA TADDART, Agadir",
    date: "2020 – 2023",
    description:
      "Three-year specialization in software development that built foundational skills in programming, databases, and software engineering.",
  },
  {
    role: "Oracle Certified Professional",
    company: "Java SE 17 Developer",
    date: "2025",
    description:
      "Industry-recognized certification in Java SE 17, covering core language features, APIs, and best practices.",
  },
];

const HEADING = "Every role shaped how I think about software.";

const renderEntries = (entries, isExperience = false, activeIndex = 0) => (
  <div className="qualification__timeline">
    {entries.map((entry, index) => (
      <div
        className={`qualification__entry${
          isExperience && index === 0 ? " qualification__entry--hero" : ""
        }${index === activeIndex ? " qualification__entry--active" : ""}`}
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
            Selected Work
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
