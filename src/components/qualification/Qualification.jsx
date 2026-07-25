import { useState } from "react";
import "./qualification.css";

const EXPERIENCE = [
  {
    role: "Développeur Full-Stack",
    company: "Dynamic Impact",
    date: "Aug 2025 – Feb 2026",
    description:
      "Built full-stack applications from the ground up — designing REST APIs, optimizing PostgreSQL queries, and leading code reviews. Worked across the entire product lifecycle, from architecture decisions to deployment.",
  },
  {
    role: "Développeur Front-End",
    company: "Digitalia Solutions",
    date: "Apr 2025 – Aug 2025",
    description:
      "Led front-end development for a social platform using React and TypeScript. Implemented authentication, role-based access, and built a reusable component library that the team could iterate on quickly.",
  },
  {
    role: "Développeur Web Full-Stack",
    company: "Ocean Connecting",
    date: "Aug 2024 – Mar 2025",
    description:
      "Developed a medical platform serving real patients — building secure authentication, role-based access control, and optimizing database performance across PostgreSQL and MySQL.",
  },
  {
    role: "Développeur Web & Marketing",
    company: "Optisent",
    date: "Sep 2023 – Jun 2024",
    description:
      "Started my professional career building web campaigns and tracking performance. Learned the fundamentals of HTML, CSS, and data-driven decision making.",
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
