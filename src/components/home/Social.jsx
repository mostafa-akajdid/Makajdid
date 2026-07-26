import { useState, useCallback } from "react";
import { resume } from "../../assets/assets";

const EMAIL = "mostafaakajdid6@gmail.com";

const Social = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mostafa-akajdid/"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
        aria-label="LinkedIn profile"
      >
        <i className="uil uil-linkedin"></i>
        <span className="home__social-tooltip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/akajdid-mostafa"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
        aria-label="GitHub profile"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-tooltip">GitHub</span>
      </a>
      <button
        type="button"
        className="home__social-icon"
        onClick={handleCopyEmail}
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        <i className="uil uil-envelope"></i>
        <span className="home__social-tooltip">{copied ? "Copied ✓" : "Email"}</span>
      </button>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
        aria-label="Resume"
        download
      >
        <i className="uil uil-file-alt"></i>
        <span className="home__social-tooltip">Resume</span>
      </a>
    </div>
  );
};

export default Social;
