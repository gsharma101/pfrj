import React from "react";
import logo from "../../assets/images/heading.png";
import { Links } from "../../components";
import "./header.scss";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__left">
        <div className="header__left--box">
          <h1 className="header__heading">
            Hi, 👋 I'am <span>Gaurav Sharma</span>
          </h1>
          <a
            className="resume"
            href="https://drive.google.com/file/d/1nmbemU-clB9-QE9a4ufEa_5jLk7vzCOn/view"
          >
            Download CV
          </a>
          <div className="header__links u-margin-top-medium">
            <Links />
          </div>
        </div>
      </div>

      <div className="header__right">
        <img className="headerImg" src={logo} alt="headerimg" />
      </div>
    </div>
  );
};

export default Header;
