import React from "react";
import gitHubSvg from "../assets/svg/tech-svg/github.svg";
import htmlSvg from "../assets/svg/tech-svg/html-5.svg";
import cssSvg from "../assets/svg/tech-svg/css.svg";
import reactSvg from "../assets/svg/tech-svg/react.svg";
import jsSvg from "../assets/svg/tech-svg/javascript.svg";
import sassSvg from "../assets/svg/tech-svg/sass.svg";
import nodeSvg from "../assets/svg/tech-svg/nodejs.svg";

export default function Technologies() {
  return (
    <div className="tech">
      <h1 className="tech__heading">Technologies</h1>
      <div className="tech__image-div">
        <div className="tech__image-div-small">
          <img src={jsSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">javascript</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={htmlSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">HTML5</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={cssSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">CSS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={reactSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">ReactJS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={sassSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">SASS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={nodeSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">NodeJS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={gitHubSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">Github/Git</h5>
        </div>
      </div>
    </div>
  );
}
