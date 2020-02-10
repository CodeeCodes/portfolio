import React from "react";
import meme from "../assets/photos/me-meme.jpeg";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={meme} alt="meme" className="welcome__image " />
    </div>
  );
}
