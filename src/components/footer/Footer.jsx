import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <h2 className="footer__title">Portfolio</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <address className="footer__address">
          <p>Casablanca, Morocco</p>
          <p>
            <a href="mailto:mostafaakajdid6@gmail.com">mostafaakajdid6@gmail.com</a>
          </p>
          <p>
            <a href="tel:+212762544011">+212 7 62 54 40 11</a>
          </p>
        </address>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/mostafaakajdidm/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-akajdid/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/akajdid-mostafa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; 2026 Mostafa Akajdid. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
