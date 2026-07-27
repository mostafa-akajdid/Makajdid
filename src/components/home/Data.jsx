import { send } from "../../assets/assets";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">MOSTAFA AKAJDID</h1>
      <TypeAnimation
        sequence={[
          "Full-Stack Developer \u00B7 React \u00B7 Java \u00B7 Spring Boot",
          4000,
          "Turning product ideas into production-ready software",
          3000,
        ]}
        cursor={false}
        wrapper="span"
        speed={25}
        className="home__subtitle"
        repeat={Infinity}
      />
      <p className="home__description">
        I build for the people who use it — and the team that maintains it.
      </p>
      <p className="home__description">
        From concept to production, clarity guides every decision.
      </p>

      <a href="#contact" className="button button--flex">
        Let&rsquo;s build something
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
