import React from "react";
import Header from "./header";
import Hero from "./hero";
import Work from "./prevWork";
import Projects from "./prevProjects";
export default function MainContent() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Projects />
      <Work />
    </div>
  );
}
