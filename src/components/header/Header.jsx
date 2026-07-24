import { useState, useEffect, useRef } from "react";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

const navItems = [
  { id: "home", name: "Welcome", icon: "uil uil-estate" },
  { id: "about", name: "About", icon: "uil uil-user" },
  { id: "skills", name: "Skills", icon: "uil uil-file-alt" },
  { id: "services", name: "Services", icon: "uil uil-briefcase-alt" },
  { id: "evolution", name: "Evolution", icon: "uil uil-chart-line" },
  { id: "work", name: "Portfolio", icon: "uil uil-scenery" },
  { id: "contact", name: "Contact", icon: "uil uil-message" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("#home");
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");

      if (isScrolling.current) return;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "";
        
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (window.scrollY >= sectionTop - 300 && 
              window.scrollY < sectionTop + sectionHeight - 300) {
            currentSection = `#${section.id}`;
          }
        });

        if (currentSection) {
          setActive(currentSection);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleNavClick = (id) => {
    isScrolling.current = true;
    setActive(`#${id}`);
    setMenu(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={
                    active === `#${item.id}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={`${item.icon} nav__icon`}></i>
                  <span className="nav__tooltip">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setMenu(!menu)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setMenu(!menu)}>
          <i className="uil uil-apps"></i>
        </div>
        <DarkMode/>
      </nav>
    </header>
  );
};

export default Header;