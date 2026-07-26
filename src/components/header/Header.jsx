import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

const navItems = [
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "case-studies", name: "Project" },
  { id: "contact", name: "Contact" },
];

const SECTION_IDS = ["home", "about", "skills", "services", "evolution", "case-studies", "contact"];

const Header = () => {
  const [active, setActive] = useState("");

  const isScrolling = useRef(false);
  const observerRef = useRef(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  /* ─── IntersectionObserver for active section ─── */
  useEffect(() => {
    if (pathname !== "/") return;

    if (observerRef.current) observerRef.current.disconnect();

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !isScrolling.current) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [pathname]);

  /* ─── nav click — smooth scroll to section + cross-page navigation ─── */
  const handleNavClick = useCallback(
    (id) => {
      if (pathname === "/") {
        isScrolling.current = true;
        setActive(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    },
    [pathname, navigate]
  );

  /* ─── brand click — scroll to top on homepage ─── */
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
                className={`nav__link${active === item.id ? " nav__link--active" : ""}${item.id === "contact" ? " nav__link--cta" : ""}`}
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
