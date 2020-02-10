import React from "react";
import gitHub from "../assets/svg/github-logo.svg";
import linkedIn from "../assets/svg/linkedin.svg";
import pdf from "../assets/svg/pdf.svg";
import cv from "../assets/CodeeJPalmerWebCv.pdf";

export default function Header() {
  //navSlide
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header__div");
    const navLinks = document.querySelectorAll(".header__div div");
    //Toggle Nav
    nav.classList.toggle("burger-active");
    //toggle burger
    burger.classList.toggle("toggle");
  };

  return (
    <div className="header">
      <div className="header__heading-div">
        <h1 className="header__heading">Codee Palmer</h1>
        <h5 className="header__heading-small">Full-stack Web Developer</h5>
      </div>
      <div className="header__div">
        <div className="header__div-small">
          <a href="https://github.com/CodeeCodes" className="header__menu-link">
            <img
              src={gitHub}
              alt="github"
              className="header__menu-link-image"
            />
            <h5 className="header__menu-link-heading">GitHub</h5>
          </a>
        </div>
        <div className="header__div-small">
          <a
            href="https://www.linkedin.com/in/codeepalmer/"
            className="header__menu-link"
          >
            <img
              src={linkedIn}
              alt="linkedIn"
              className="header__menu-link-image"
            />
            <h5 className="header__menu-link-heading">linkedIn</h5>
          </a>
        </div>

        <div className="header__div-small">
          <a href={cv} className="header__menu-link" download>
            <img src={pdf} alt="cv" className="header__menu-link-image" />
            <h5 className="header__menu-link-heading">CV</h5>
          </a>
        </div>
      </div>
      <div className="burger" onClick={navSlide}>
        <div className="lineOne"></div>
        <div className="lineTwo"></div>
        <div className="lineThree"></div>
      </div>
    </div>
  );
}
