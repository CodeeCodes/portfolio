import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__heading">Let's Work Together 🙌</h1>
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

      <div
        itemscope
        itemtype="http://schema.org/Person"
        class="fiverr-seller-widget"
      >
        <a
          itemprop="url"
          href="https://www.fiverr.com/codeecodes"
          rel="nofollow"
          target="_blank"
        >
          <div
            class="fiverr-seller-content"
            id="fiverr-seller-widget-content-e364cc24-2558-4971-b09f-265ea4eb7bd5"
            itemprop="contentURL"
          ></div>
          <div id="fiverr-widget-seller-data">
            <div itemprop="name">codeecodes</div>
            <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Fiverr</span>
            </div>
          </div>
        </a>
      </div>

      <script
        id="fiverr-seller-widget-script-e364cc24-2558-4971-b09f-265ea4eb7bd5"
        src="https://widgets.fiverr.com/api/v1/seller/codeecodes?widget_id=e364cc24-2558-4971-b09f-265ea4eb7bd5"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async="true"
        defer="true"
      ></script>
    </div>
  );
}
