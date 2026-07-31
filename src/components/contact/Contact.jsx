import { useState, useCallback } from "react";
import { profile, resume } from "../../assets/assets";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitError("");
    try {
      const response = await fetch(
        "https://email-fawn-alpha.vercel.app/api/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container">
        <div className="contact__profile">
          <img
            src={profile}
            alt="Mostafa Akajdid"
            className="contact__portrait"
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
          />
          <h2 className="contact__name">Mostafa Akajdid</h2>
          <p className="contact__role">
            Available for freelance &amp; full-time opportunities.
          </p>

          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/mostafa-akajdid/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/akajdid-mostafa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="mailto:mostafaakajdid6@gmail.com"
              className="contact__social-link"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          <p className="contact__status">Available now</p>
        </div>

        <div className="contact__card">
          <span className="contact__eyebrow">Contact</span>

          <h3 className="contact__heading">
            Tell me what you&apos;re building.
          </h3>

          <p className="contact__text">
            Whether you&apos;re hiring for a full-time role or building a
            product, a few lines of context are enough to start the
            conversation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="contact__form"
            aria-label="Contact form"
          >
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                required
                autoComplete="name"
                aria-describedby={errors.name ? "error-name" : undefined}
              />
              {errors.name && (
                <span id="error-name" className="contact__error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                required
                autoComplete="email"
                aria-describedby={errors.email ? "error-email" : undefined}
              />
              {errors.email && (
                <span id="error-email" className="contact__error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                required
                aria-describedby={
                  errors.message ? "error-message" : undefined
                }
              />
              {errors.message && (
                <span
                  id="error-message"
                  className="contact__error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>

            {submitError && (
              <p className="contact__submit-error" role="alert">
                {submitError}
              </p>
            )}

            {showSuccess && (
              <p className="contact__success-msg" aria-live="polite">
                Your message has been sent successfully.
              </p>
            )}
          </form>

          <div className="contact__email">
            <span className="contact__email-label">Prefer email?</span>
            <a
              href="mailto:mostafaakajdid6@gmail.com"
              className="contact__email-link"
            >
              mostafaakajdid6@gmail.com
            </a>
          </div>

          <footer className="contact__footer">
            <div className="contact__footer-links">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__footer-link"
                download
              >
                Resume
              </a>
              <a href="/privacy" className="contact__footer-link">
                Privacy
              </a>
            </div>

            <span className="contact__footer-copy">
              &copy; 2026 Mostafa Akajdid. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
