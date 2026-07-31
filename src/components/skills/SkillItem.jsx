import { memo } from "react";

const SkillItem = memo(({ icon: Icon, name }) => (
  <li className="skills__item">
    <Icon className="skills__icon" aria-hidden="true" />
    <span className="skills__name">{name}</span>
  </li>
));

export default SkillItem;
