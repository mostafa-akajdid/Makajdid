import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql, SiGithubactions } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

const Backend = () => {
  const backendSkills = [
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "Git",
      icon: "bx bxl-git skills_icon",
    },
    {
      name: "GitHub",
      icon: "bx bxl-github skills_icon",
    },
    {
      name: "Docker",
      icon: "bx bxl-docker skills_icon",
    },
    {
      name: "CI/CD",
      icon: SiGithubactions,
    },
    {
      name: "JWT",
      icon: "bx bx-shield-quarter skills_icon",
    },
    {
      name: "NextAuth",
      icon: "bx bx-lock-alt skills_icon",
    },
    {
      name: "Agile / Scrum",
      icon: FaPeopleGroup,
    },
  ];

  const firstGroup = backendSkills.slice(0, 4);
  const secondGroup = backendSkills.slice(4);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Data, tools &amp; methods</h3>
      <div className="skills__box">
        <div className="skills__group">
          {firstGroup.map((skill, index) => (
            <div className="skills__data" key={index}>
              {typeof skill.icon === "string" ? (
                <i className={skill.icon}></i>
              ) : (
                <skill.icon className="skills_icon" />
              )}
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {secondGroup.map((skill, index) => (
            <div className="skills__data" key={index}>
              {typeof skill.icon === "string" ? (
                <i className={skill.icon}></i>
              ) : (
                <skill.icon className="skills_icon" />
              )}
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
