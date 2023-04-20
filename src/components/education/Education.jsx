import React from "react";
import "./education.scss";
import collegeImg from "../../assets/images/cgc.jpg";

function Education() {
  return (
    <section className="education" id="education">
      <div className="section_heading">Education</div>
      <div className="section__container">
        <div className="section__container--left">
          <h1 className="degree_name">
            Bachelor's Degree In Computer Science & Engineering
          </h1>
          <h2 className="college_name">
            Chandigarh Group of Colleges - Landran
          </h2>
          <h3 className="year">2019 - 2023</h3>
        </div>
        <div className="section__container--right">
          <img src={collegeImg} alt="cgc" />
        </div>
      </div>
    </section>
  );
}

export default Education;
