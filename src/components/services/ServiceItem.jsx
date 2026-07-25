const ServiceItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="services__card">
      <Icon className="services__icon" aria-hidden="true" />
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{description}</p>
    </div>
  );
};

export default ServiceItem;
