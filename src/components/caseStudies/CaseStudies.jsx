import "./caseStudies.css";
import CaseStudyCard from "./CaseStudyCard";
import caseStudies from "../../data/caseStudies";

const CaseStudies = ({ showHeader = true }) => {
  return (
    <section className="section" id="case-studies">
      {showHeader && (
        <>
          <h2 className="section__title">Case Studies</h2>
          <span className="section__subtitle">
            A selection of projects I&apos;ve built
          </span>
        </>
      )}
      <div className="case-studies__grid container">
        {caseStudies.map((project) => (
          <CaseStudyCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
