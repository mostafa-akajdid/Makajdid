import "./footer.css";
import { resume } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__name">Mostafa Akajdid</p>
        <p className="footer__role">Full-Stack Software Engineer</p>

        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/mostafa-akajdid/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akajdid-mostafa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a href="mailto:mostafaakajdid6@gmail.com" className="footer__link">
            Email
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            download
          >
            Resume
          </a>
        </div>

        <a href="/privacy" className="footer__link footer__privacy">
          Privacy Policy
        </a>

        <span className="footer__copy">&copy; 2026 Mostafa Akajdid.</span>
      </div>
    </footer>
  );
};

export default Footer;
