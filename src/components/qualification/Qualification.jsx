import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(2);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section id="evolution" className="qualification section">
      <h2 className="section__title">Evolution</h2>
      <span className="section__subtitle">Career and learning journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Section */}
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* New Full Stack Formation on the RIGHT side */}
            <div className="qualification__data">
              <div></div> {/* Empty left column */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  FORMATION FULL STACK (SPRING BOOT &amp; REACT)
                </h3>
                <span className="qualification__subtitle">
                  Coding Tech, Casablanca
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT INFORMATIQUE
                </h3>
                <span className="qualification__subtitle">
                  ISTA TADDART, Agadir
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 – 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  AKM - Kerala
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spanin - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div> */}
          </div>

          {/* Experience Section */}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  DÉVELOPPEUR FULL-STACK
                </h3>
                <span className="qualification__subtitle">
                  Dynamic Impact — Full-stack (React/Next.js, Spring Boot). REST
                  APIs (Spring Boot, Express.js). PostgreSQL modeling and query
                  optimization. Agile, code reviews. Stack: React, Next.js,
                  Spring Boot, Express.js, PostgreSQL, Docker, Git.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2025 – Feb 2026
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  DÉVELOPPEUR FRONT-END
                </h3>
                <span className="qualification__subtitle">
                  Digitalia Solutions — InfluMatch platform with React 18 and
                  TypeScript. JWT auth and user roles. Reusable UI with
                  TailwindCSS and shadcn/ui. Stack: React 18, TypeScript,
                  TailwindCSS, shadcn/ui, JWT.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Apr 2025 – Aug 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  DÉVELOPPEUR WEB FULL-STACK
                </h3>
                <span className="qualification__subtitle">
                  Ocean Connecting — monpatient medical platform with Next.js.
                  NextAuth (RBAC). PostgreSQL and MySQL. Backend: Java, Spring
                  Boot, Node.js/Express, REST. Stack: React, Next.js, NextAuth,
                  PostgreSQL, MySQL.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2024 – Mar 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  DÉVELOPPEUR WEB &amp; MARKETING
                </h3>
                <span className="qualification__subtitle">
                  Optisent — HTML/CSS email offers and campaigns. Performance
                  reporting and tracking. Stack: HTML, CSS, email marketing,
                  data analysis.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 – Jun 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
