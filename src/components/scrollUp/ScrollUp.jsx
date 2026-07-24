import { useEffect } from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (!scrollUp) return;
      if (window.scrollY >= 700) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#" className="scrollup" aria-label="Scroll to top">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
