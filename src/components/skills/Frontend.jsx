import { RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const Frontend = () => {
  const frontendSkills = [
    {
      name: "React",
      icon: "bx bxl-react skills_icon",
    },
    {
      name: "Next.js",
      icon: RiNextjsLine,
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript skills_icon",
    },
    {
      name: "Tailwind CSS",
      icon: "bx bxl-tailwind-css skills_icon",
    },
    {
      name: "shadcn/ui",
      icon: SiShadcnui,
    },
  ];

  const firstGroup = frontendSkills.slice(0, 3);
  const secondGroup = frontendSkills.slice(3);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
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

export default Frontend;
