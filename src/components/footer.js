import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__heading-div">
        <h1 className="footer__heading">
          Let's Work Together{" "}
          <span role="img" aria-label="emoji">
            {" "}
            🙌
          </span>
        </h1>
      </div>
      <div className="footer__text-div">
        <p className="footer__text">Accepting new projects and collabs!</p>
        <p className="footer__heading-link">
          {" "}
          Email:{" "}
          <a
            className="footer__heading-link"
            href="mailto: codeecodes92@gmail.com"
          >
            codeecodes92@gmail.com
          </a>
        </p>
        <p className="footer__heading-link">
          GitHub:{" "}
          <a
            className="footer__heading-link"
            href="https://github.com/CodeeCodes"
          >
            www.github.com/codeecodes
          </a>
        </p>
      </div>
    </div>
  );
}
