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

    const t1 = setTimeout(() => setStage("decrypting"), 200);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (stage !== "decrypting") return;
    const t2 = setTimeout(() => setStage("typing"), 2500);
    return () => clearTimeout(t2);
  }, [stage]);

  useEffect(() => {
    if (stage !== "typing") return;
    const t3 = setTimeout(() => setStage("complete"), 500);
    return () => clearTimeout(t3);
  }, [stage]);

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Social />
          <div
            className={`home__img${stage === "complete" ? " home__img--animated" : ""}`}
          ></div>
          <Data stage={stage} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
