import "./about.css";
import { about } from "../../assets/assets";

const HEADING_OPTIONS = [
  "Software should feel effortless.",
  "Building products people enjoy using.",
  "I solve problems, not just write code.",
  "Good design is invisible.",
  "Every pixel has a purpose.",
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <span className="about__label">About</span>

        <h2 className="about__heading">{HEADING_OPTIONS[0]}</h2>

        <p className="about__quote">
          &ldquo;I don&apos;t just build interfaces. I remove the friction
          between people and what they&apos;re trying to accomplish.&rdquo;
        </p>

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
            <p className="about__text">
              I&apos;m a full-stack developer who believes software should serve
              people, not the other way around. Based in Morocco, I&apos;ve spent
              years learning what makes digital products actually work — not just
              compile.
            </p>
            <p className="about__text">
              I start with the person using the product, not the technology
              behind it. Every decision — from layout to API design — is
              measured against one question: does this make the experience
              simpler?
            </p>
            <p className="about__text">
              You can expect clear communication, thoughtful code, and a genuine
              interest in solving the right problem. I work best with people who
              care about quality and aren&apos;t afraid to iterate.
            </p>

            <div className="about__actions">
              <a href="#contact" className="about__cta">
                Get in touch
                <span className="about__cta-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
