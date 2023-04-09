import React from "react";
import logo from "../../assets/images/heading.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__heading">Hi,I'am Gaurav Sharma</h1>
      </div>

      <div className="header__rigth">
        <h1> Right </h1>
        <img className="headerImg" src={logo} alt="headerimg" />
      </div>
    </div>
  );
};

export default Header;
