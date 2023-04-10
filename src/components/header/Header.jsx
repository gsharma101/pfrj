import React from "react";
import logo from "../../assets/images/heading.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
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
        </div>
      </div>

      <div className="header__right">
        <img className="headerImg" src={logo} alt="headerimg" />
      </div>
    </div>
  );
};

export default Header;
