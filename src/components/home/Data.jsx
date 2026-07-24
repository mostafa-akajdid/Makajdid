// eslint-disable-next-line no-unused-vars
import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"MOSTAFA AKAJDID"} />
      </h1>
      <TypeAnimation
        sequence={[
          "Full-Stack Developer | React / Next.js | Java / Spring Boot",
          4000,
          "React · Next.js · Spring Boot",
          3000,
        ]}
        cursor={false}
        wrapper="span"
        speed={5}
        className="home__subtitle"
        repeat={Infinity}
      />
      <p className="home__description">
        Full-stack developer focused on React, Next.js, and Java (Spring Boot).
        I build complete web apps—from fast, SEO-friendly UIs with SSR to secure
        REST APIs and role-based access (RBAC).
        <br />
        <br />
        I work in Agile teams and care about code quality, reviews, and
        shipping features to production. Based in Casablanca, Morocco.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
