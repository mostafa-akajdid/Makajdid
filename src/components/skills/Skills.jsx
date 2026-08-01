import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiJsonwebtokens,
  SiSpringboot,
  SiNodedotjs,
} from "react-icons/si";
import { RiNextjsLine, RiCodeLine, RiLoopLeftLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import SkillItem from "./SkillItem";
import "./skills.css";

const SKILL_GROUPS = [
  {
    title: "Core product stack",
    description:
      "The technologies I use to build complete web products, from interfaces and APIs to authentication and data.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js / Express", icon: SiNodedotjs },
      { name: "REST APIs", icon: RiCodeLine },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "JWT / NextAuth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Delivery and collaboration",
    description:
      "The tools and practices that help the work stay maintainable, reviewable, and ready to ship.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Agile / Scrum", icon: RiLoopLeftLine },
    ],
  },
];

const HEADING = "Tools evolve. The way you solve problems matters longer.";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__intro-block">
          <span className="skills__label">Skills</span>

          <h2 className="skills__heading">{HEADING}</h2>

          <p className="skills__intro">
            I work across interfaces, backend systems, data, and delivery. The
            tools change from one product to another, but these are the
            technologies and practices that shape most of my work.
          </p>
        </div>

        {SKILL_GROUPS.map((group, groupIndex) => (
          <div className="skills__band" key={group.title}>
            <div className="skills__band-info">
              <span className="skills__band-number">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="skills__band-title">{group.title}</h3>
              <p className="skills__band-description">{group.description}</p>
            </div>
            <ul
              className={`skills__composition ${
                groupIndex === 0
                  ? "skills__composition--cols-3"
                  : "skills__composition--cols-2"
              }`}
            >
              {group.skills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
