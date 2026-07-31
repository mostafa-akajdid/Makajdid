import "./experience.css";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Dynamic Impact",
    label: "TODAY",
    current: true,
    summary: "Building full-stack products inside a real engineering team.",
    technologies: ["React", "Next.js", "Spring Boot", "Express.js", "PostgreSQL", "Docker", "Git"],
  },
  {
    role: "Front-End Developer",
    company: "Digitalia Solutions",
    label: "2025",
    summary: "Learning that good interfaces depend on decisions users never see.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "JWT"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Ocean Connecting",
    label: "2024",
    summary: "The product that changed how I understand architecture and user experience.",
    technologies: ["React", "Next.js", "NextAuth", "PostgreSQL", "MySQL"],
  },
  {
    role: "Web & Marketing Developer",
    company: "Optisent",
    label: "2023",
    summary: "My first professional experience seeing how users respond to what we build.",
    technologies: ["HTML", "CSS", "Email Marketing", "Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="experience__container">
        <span className="experience__label">Experience</span>

        <h2 className="experience__heading" id="experience-heading">
          Experience is where ideas become habits.
        </h2>

        <p className="experience__intro">
          From early web and marketing work to frontend and full-stack products,
          each role helped me understand how software is built, used, and
          maintained.
        </p>

        <ol className="experience__timeline">
          {EXPERIENCE.map((entry) => (
            <li
              className={`experience__entry${entry.current ? " experience__entry--current" : ""}`}
              key={entry.company}
            >
              <span className="experience__time">{entry.label}</span>

              <article className="experience__card">
                <div className="experience__card-header">
                  <h3 className="experience__role">{entry.role}</h3>
                  {entry.current && <span className="experience__present">PRESENT</span>}
                </div>

                <p className="experience__company">{entry.company}</p>

                <p className="experience__summary">{entry.summary}</p>

                <ul className="experience__chips" aria-label={`Technologies used at ${entry.company}`}>
                  {entry.technologies.map((technology) => (
                    <li className="experience__chip" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
