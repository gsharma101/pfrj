import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Gaurav Sharma</h1>
      </div>

      <div className="subnavbar">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#education">Education</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#techiknow">Tech I Know</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
