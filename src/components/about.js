import React from "react";
import Welcome from "./welcome";
import Arrow from "./downArrow";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__heading">About Me</h1>
      <Welcome />
      <p className="about__text">
        I’m a recent Web Development student just graduating from BrainStation
        Vancouver. Before my journey in web development I was and Officer on
        Private yachts.
      </p>{" "}
      <p className="about__text">
        After years of working as an Officer on Yachts I had a yearning for
        change. Taking courses on Udemy I started to teach myself Web
        Development. I was hooked! I started working on personal projects and
        decided to take my skills and knowledge a step forward do my formal
        studies to further progress my personal and professional goals.
      </p>{" "}
      <p className="about__text">
        {" "}
        Having completed at BrainStation (Vancouver) just over a month ago I
        have taken up some new freelance work and continued to progress my
        skills wherever I can. I have just moved down to San Diego, CA and I can
        not wait to grow and progress my skills in Development both personally
        and professionally.
      </p>
      <Arrow />
    </div>
  );
}
