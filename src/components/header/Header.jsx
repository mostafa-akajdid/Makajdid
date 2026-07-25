import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

const navItems = [
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "case-studies", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const Header = () => {
  const [active, setActive] = useState("");
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      if (isScrolling.current) return;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        let current = "";

        sections.forEach((section) => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (
            window.scrollY >= top - 300 &&
            window.scrollY < top + height - 300
          ) {
            current = section.id;
          }
        });

        if (current) setActive(current);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [pathname]);

  const handleNavClick = useCallback(
    (id) => {
      if (pathname === "/") {
        isScrolling.current = true;
        setActive(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    },
    [pathname, navigate]
  );

  const handleBrandClick = useCallback(
    (e) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pathname]
  );

  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <a
          href="/"
          className="nav__brand"
          onClick={handleBrandClick}
          aria-label="Home"
        >
          Mostafa
        </a>

        <ul className="nav__links" role="list">
          {navItems.map((item) => (
            <li key={item.id} role="listitem">
              <a
                href={`#${item.id}`}
                className={`nav__link${active === item.id ? " nav__link--active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__end">
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
