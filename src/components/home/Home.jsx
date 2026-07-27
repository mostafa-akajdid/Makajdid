import { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const [stage, setStage] = useState("idle");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setStage("complete");
      return;
    }
    setStage("complete");
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Social />
          <div
            className={`home__img${stage === "complete" ? " home__img--animated" : ""}`}
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
