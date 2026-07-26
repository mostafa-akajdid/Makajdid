// eslint-disable-next-line no-unused-vars
import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = ({ stage }) => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        {stage !== "idle" ? (
          <TextDecrypt text={"MOSTAFA AKAJDID"} />
        ) : (
          <span>&nbsp;</span>
        )}
      </h1>
      {(stage === "typing" || stage === "complete") && (
        <TypeAnimation
          sequence={[
            "Full-Stack Developer | React · Next.js · Java · Spring Boot",
            4000,
            "Building polished web experiences from idea to production",
            3000,
          ]}
          cursor={false}
          wrapper="span"
          speed={25}
          className="home__subtitle"
          repeat={Infinity}
        />
      )}
      <p className="home__description">
        I build fast, thoughtful web applications that feel clear to use and
        reliable to scale.
      </p>
      <p className="home__description">
        From responsive React and Next.js interfaces to secure Java/Spring Boot
        APIs, I turn product ideas into production-ready features.
      </p>

      <a href="#contact" className="button button--flex">
        Let&rsquo;s build something
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
