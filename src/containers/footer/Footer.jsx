import React from "react";
import { Links } from "../../components";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="foote">
      <h2 className="footer_heading">Wan't to connect</h2>
      <div className="footer__links u-margin-top-small u-margin-bottom-small">
        <Links />
      </div>
      <h1>No amount of money ever bought a second of time</h1>
    </div>
  );
};

export default Footer;
