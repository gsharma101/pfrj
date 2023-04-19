import React from "react";
import "./skills.scss";
import techLogo from "../../assets/images/tech.jpg";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="section_heading">Skills</div>
      <div className="section_box">
        <div className="skills__left">
          <div className="skill_container"></div>
        </div>
        <div className="skills__right">
          <img src={techLogo} alt="techlogo" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
