import React from "react";
import "../../ComponentsCSS/about.css";
import ChartR from "./chartR";

const AboutC = () => {
  return (
    <div className="aboutContainer">
      <div>
        <img
          src={require("../../ASSETS/IMAGES/stand.jpg")}
          className={"aboutImage"}
        />
        <div className="aboutTitle">About Me</div>

        <div className="aboutTitle1">
          I'm a software engineer based in the Coachella Valley, focused on
          building reliable, scalable, and intentional systems.
        </div>

        <div className="aboutTitle2">
          I’m driven by a deep curiosity for how complex systems behave — from
          distributed architectures and workflow engines to complexity theory,
          computation models, and the foundations behind intelligent systems.
        </div>

        <div className="aboutTitle3">
          My interests extend into AI engineering and AIX, especially in areas
          involving model behavior, interpretability, and AI explainability —
          understanding not just what a model predicts, but *why* it behaves the
          way it does.
        </div>

        <div className="aboutTitle4">
          I hold a B.S. in Computer Science and am currently pursuing my M.S. in
          Computer Science, expanding into advanced topics in machine learning,
          intelligent system design, and explainable AI. My background in
          systems engineering shapes how I approach AI: structured, principled,
          and grounded in clarity.
        </div>

        <div className="aboutTitle5">
          My long-term goal is to build and contribute to AI systems that are
          not only powerful, but transparent, trustworthy, and aligned with
          real-world reasoning.
        </div>

        <div className="aboutTitle5">
          Outside of engineering, I enjoy strength training, learning new
          technologies, and spending time with my family.
        </div>
      </div>

      <ChartR />
    </div>
  ); //end of return
}; //end of component

export default AboutC;
