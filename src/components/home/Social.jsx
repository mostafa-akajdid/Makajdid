const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/mostafaakajdidm/"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
        <span className="home__social-tooltip">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/mostafa-akajdid/"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
        <span className="home__social-tooltip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/akajdid-mostafa"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-tooltip">GitHub</span>
      </a>
      <a
        href="tel:+212762544011"
        rel="noopener noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-phone"></i>
        <span className="home__social-tooltip">Phone</span>
      </a>
    </div>
  );
};

export default Social;
