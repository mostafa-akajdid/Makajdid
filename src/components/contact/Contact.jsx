import { useState } from "react";
import { send } from "../../assets/assets";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [errors, setErrors] = useState({}); // State to handle validation errors
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  }); // State to track focus and input
  const [isLoading, setIsLoading] = useState(false); // State to handle loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for this field
    }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setIsFocused((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setIsFocused((prev) => ({ ...prev, [name]: value.trim() !== "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true); // Show loading state
    const emailSent = await sendEmail(formData);
    setIsLoading(false); // Hide loading state

    if (emailSent) {
      setShowPopup(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch(
        "https://email-fawn-alpha.vercel.app/api/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      return response.ok;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <a
              href="mailto:mostafaakajdid6@gmail.com"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                mostafaakajdid6@gmail.com
              </span>
            </a>
            <a
              href="https://wa.me/212762544011"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+2127 62544011</span>
            </a>
            <a
              href="tel:+212762544011"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+2127 62544011</span>
            </a>
          </div>
        </div>

        <div className="contact__content">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="name"
                className={`contact__form-input ${
                  isFocused.name ? "has-text" : ""
                }`}
                placeholder="Your name"
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`contact__form-input ${
                  isFocused.email ? "has-text" : ""
                }`}
                placeholder="Your email"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`contact__form-input ${
                  isFocused.message ? "has-text" : ""
                }`}
                placeholder="Type the message here"
                required
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="button button--flex"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
              {!isLoading && (
                <img src={send} alt="Send message" className="button__icon" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>
              Thank you for contacting us, I will respond to your message as
              soon as possible.
            </p>
            <button onClick={closePopup} className="popup-ok-button">
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;