import React from "react";
import "./skills.scss";
import techLogo from "../../assets/images/tech.jpg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section_heading">Skills</div>
      <div className="section__container">
        <div className="section__container--left left"></div>
        <div className="section__container--right right">
          <img src={techLogo} alt="techlogo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
