import React from "react";
import Welcome from "./welcome";
import Arrow from "./downArrow";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__heading">About Me</h1>
      <Welcome />
      <h4 className="about__text">
        | Full-Stack Web Developer | Innovative optimized solution seeker |
        Ambitious and fast learning, committed to achieving high levels of
        success, meeting tight deadlines, and consistently delivering superior
        performance |
      </h4>
      <Arrow />
    </div>
  );
}
