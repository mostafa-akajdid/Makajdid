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
  SiExpress,
} from "react-icons/si";
import { RiNextjsLine, RiCodeLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import SkillItem from "./SkillItem";
import "./skills.css";

const SKILL_GROUPS = [
  {
    title: "Technologies I use every day",
    description:
      "The tools I reach for when building complete products, from interfaces to backend systems.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js / Express", icon: SiNodedotjs },
      { name: "REST APIs", icon: RiCodeLine },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "How I work",
    description:
      "The practices that help software stay reliable, maintainable, and easy to evolve.",
    skills: [
      { name: "Git", icon: SiGit, primary: true },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker, primary: true },
      { name: "CI/CD", icon: SiGithubactions, primary: true },
      { name: "Authentication (JWT)", icon: SiJsonwebtokens },
    ],
  },
];

const HEADING = "Tools evolve. The way you solve problems matters longer.";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <span className="skills__label">Skills</span>

        <h2 className="skills__heading">{HEADING}</h2>

        <p className="skills__intro">
          Every product asks different technical questions. I don&apos;t start
          with a favorite framework — I start with the problem. Once the
          constraints are clear, choosing the right architecture and technology
          becomes the easy part.
        </p>

        {SKILL_GROUPS.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3 className="skills__group-title">{group.title}</h3>
            <p className="skills__group-description">{group.description}</p>
            <div className="skills__grid">
              {group.skills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}

        <p className="skills__closing">
          I don&apos;t aim to know every technology. I aim to become the kind of
          engineer who can learn any technology when it matters.
        </p>
      </div>
    </section>
  );
};

export default Skills;
