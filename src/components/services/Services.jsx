import "./service.css";
import { FiLayers, FiMonitor, FiCode } from "react-icons/fi";
import ServiceItem from "./ServiceItem";

const SERVICES = [
  {
    icon: FiLayers,
    title: "Product Design",
    description:
      "Turning ideas into clear, intuitive interfaces that people naturally understand.",
  },
  {
    icon: FiMonitor,
    title: "Front-end Development",
    description:
      "Fast, responsive interfaces built with attention to detail and usability.",
  },
  {
    icon: FiCode,
    title: "Full-stack Development",
    description:
      "Complete digital products built to remain maintainable as they grow.",
  },
];

const HEADING = "Every product deserves thoughtful execution.";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <span className="services__label">Services</span>

        <h2 className="services__heading">{HEADING}</h2>

        <p className="services__intro">
          I help people and teams turn ideas into products — from the first
          interface sketch to the final deploy. Every project gets the same
          care: clear thinking, clean code, and real attention to detail.
        </p>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <ServiceItem
              key={title}
              icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>

        <div className="services__actions">
          <a href="#contact" className="services__cta">
            Let&apos;s build something together
            <span className="services__cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
