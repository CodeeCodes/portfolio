import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__heading">Contact me</h1>
      <form
        action="https://formspree.io/xbjdqnln"
        method="POST"
        className="footer__form"
      >
        <h5 className="footer__form-heading">Your name:</h5>
        <input
          type="text"
          name="name"
          className="footer__form-input-small"
        ></input>
        <h5 className="footer__form-heading">Your email:</h5>
        <input
          type="text"
          name="email"
          className="footer__form-input-small"
        ></input>
        <h5 className="footer__form-heading">Your message:</h5>
        <textarea name="message" className="footer__form-input"></textarea>
        <button type="submit" className="footer__form-button">
          Send
        </button>
      </form>
    </div>
  );
}
