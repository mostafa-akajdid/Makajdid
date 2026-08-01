import PropTypes from "prop-types";
import "./caseStudies.css";
import CaseStudyCard from "./CaseStudyCard";
import caseStudies from "../../data/caseStudies";

const CaseStudies = ({ showHeader = true }) => {
  return (
    <section className="case-studies" id="case-studies">
      {showHeader && (
        <div className="case-studies__container">
          <span className="case-studies__label">Projects</span>
          <h2 className="case-studies__heading">Work that reflects how I think, not just what I build.</h2>
          <p className="case-studies__intro">
            Every project is an opportunity to solve a real problem through thoughtful engineering, clear decisions, and attention to the details that shape the final experience.
          </p>
        </div>
      )}
      <div className="case-studies__grid">
        {caseStudies.map((project) => (
          <CaseStudyCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            description={project.description}
            subtitle={project.subtitle}
            image={project.image}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
};

CaseStudies.propTypes = {
  showHeader: PropTypes.bool,
};

export default CaseStudies;
