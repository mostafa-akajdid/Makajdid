// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
import { files, resume, img2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={img2} alt="Mostafa Akajdid portrait" className="about__img" loading="lazy" decoding="async" />
        <div className="about__data">
          <p className="about__description">
            Oracle Certified Professional, Java SE 17 Developer (2025).
            Full-stack profile: React, Next.js, TypeScript, Tailwind CSS,
            shadcn/ui on the front; Spring Boot, Express.js, and PostgreSQL on
            the back; JWT and NextAuth for auth.
            <br></br>
            <br></br>
            I design and integrate REST APIs, model and query relational
            databases, and deliver features in production within Agile/Scrum
            teams—with code reviews and solid engineering practices.
            <br></br>
            <br></br>
            Languages: French (professional), English (intermediate).
          </p>

          <a
            download="Mostafa Akajdid CV.pdf"
            href={resume}
            className="button button--flex"
          >
            Download CV
            <img src={files} alt="Download CV" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
