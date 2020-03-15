import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__heading">Lets Work Together!</h1>
      <h2 className="footer__heading-link">
        {" "}
        Email:{" "}
        <a className="footer__heading-link" href="codeecodes92@gmail.com">
          codeecodes92@gmail.com
        </a>
      </h2>
      <h2 className="footer__heading-link">
        GitHub:{" "}
        <a
          className="footer__heading-link"
          href="https://github.com/CodeeCodes"
        >
          www.github.com/codeecodes
        </a>
      </h2>
    </div>
  );
}
