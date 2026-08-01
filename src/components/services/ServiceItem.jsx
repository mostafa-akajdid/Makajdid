import { memo } from "react";
import PropTypes from "prop-types";

const ServiceItem = memo(({ icon: Icon, title, description }) => {
  return (
    <div className="services__card">
      <Icon className="services__icon" aria-hidden="true" />
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{description}</p>
    </div>
  );
});

ServiceItem.displayName = "ServiceItem";

ServiceItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceItem;
