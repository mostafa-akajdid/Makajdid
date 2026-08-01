import { memo } from "react";
import PropTypes from "prop-types";

const SkillItem = memo(({ icon: Icon, name }) => (
  <li className="skills__item">
    <Icon className="skills__icon" aria-hidden="true" />
    <span className="skills__name">{name}</span>
  </li>
));

SkillItem.displayName = "SkillItem";

SkillItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillItem;
