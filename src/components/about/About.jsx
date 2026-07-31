import "./about.css";
import { about } from "../../assets/assets";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__body">
          <img
            src={about}
            alt="Mostafa Akajdid"
            className="about__portrait"
            width="280"
            height="373"
            loading="lazy"
            decoding="async"
          />

          <div className="about__narrative">
            <span className="about__label">About</span>

            <h2 className="about__heading">
              The interface is only part of the product.
            </h2>

            <p className="about__text">
              Most of my professional experience has been on the frontend, but
              that&apos;s never been the limit of my curiosity. The more I
              worked on real products, the more interested I became in
              everything happening behind the interface&mdash;from architecture
              and APIs to the decisions that shape the final experience.
            </p>

            <p className="about__text">
              I enjoy working with people who ask questions, share ideas, and
              care about building the right thing. I don&apos;t try to know
              everything. I prefer understanding the problem, learning what the
              project needs, and contributing where I can make the biggest
              impact.
            </p>

            <p className="about__proof">
              Oracle Certified Professional &middot; Java SE 17
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
