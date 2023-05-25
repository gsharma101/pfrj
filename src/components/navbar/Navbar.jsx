import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>Gaurav Sharma</h2>
      </div>

      <div className="subnavbar">
        <div className="subnavbar__elements">
          <a href="#home">Home</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#about">About</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#skills">Skills</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#experience">Experience</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#education">Education</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#learning">Certifications</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#projects">Projects</a>
        </div>
        <div className="subnavbar__elements">
          <a href="#footer">Contact Me</a>
        </div>
      </div>
      <div className="lights">
        <BsFillMoonFill />
      </div>
      {/* Mobile Menu */}
      <div className="mobile__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={20}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={20}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mobile__menu--list">
            <div className="mobile__menu--elements">
              <a href="#home">Home</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#about">About</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#skills">Skills</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#experience">Experience</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#education">Education</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#learning">Certifications</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#projects">Projects</a>
            </div>
            <div className="mobile__menu--elements">
              <a href="#footer">Contact Me</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
