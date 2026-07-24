// eslint-disable-next-line no-unused-vars
import React from "react";
import "./work.css";
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  Projects.propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired
      })
    ).isRequired
  };

  return (
    <div className="work__container container grid">
      {projects.map((project) => (
        <div className="project__card" key={project.name}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
          >
            <img
              src={project.image}
              alt={`${project.name} project screenshot`}
              className="project__img"
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="project__data">
            <h3 className="project__title">{project.name}</h3>
            <p className="project__description">{project.description}</p>

            <ul className="tags">
              {project.stacks.map((stack, i) => (
                <li key={i}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                  >
                    {stack}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
