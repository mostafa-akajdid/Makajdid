const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Mostafa Akajdid</h1>
      <span className="home__subtitle">Full-Stack Developer</span>
      <p className="home__main-statement">
        I start with the user experience, then build the architecture that
        makes it possible.
      </p>
      <p className="home__supporting">
        From interface decisions to APIs and data flows, I like understanding
        how every part of the product works together.
      </p>

      <div className="home__cta">
        <a href="#contact" className="button button--flex">
          Get in Touch
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
        <a href="#case-studies" className="home__cta-secondary">
          Explore My Work
          <span className="home__cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Data;
