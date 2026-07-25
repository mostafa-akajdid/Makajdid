const SkillItem = ({ icon: Icon, name, primary = false }) => (
  <div className={`skills__item${primary ? " skills__item--primary" : ""}`}>
    <Icon className="skills__icon" aria-hidden="true" />
    <span className="skills__name">{name}</span>
  </div>
);

export default SkillItem;
