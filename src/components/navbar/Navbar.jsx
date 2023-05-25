import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./navbar.scss";

const Navbar = () => {
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
        <AiOutlineMenu />
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
      </div>
    </div>
  );
};

export default Navbar;
