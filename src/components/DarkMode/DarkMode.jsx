import { useState, useEffect, useCallback } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./DarkMode.css";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const DarkMode = () => {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark);
    localStorage.setItem(STORAGE_KEY, dark);
  }, [dark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setDark(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = useCallback(() => {
    setDark((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      role="switch"
      aria-checked={dark === "dark"}
      aria-label={`Switch to ${dark === "dark" ? "light" : "dark"} mode`}
    >
      <FiSun
        className={`theme-toggle__icon${dark !== "dark" ? " theme-toggle__icon--visible" : ""}`}
        size={14}
      />
      <FiMoon
        className={`theme-toggle__icon${dark === "dark" ? " theme-toggle__icon--visible" : ""}`}
        size={14}
      />
    </button>
  );
};

export default DarkMode;
