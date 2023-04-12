import React from "react";
import "./about.scss";
import aboutImg from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="about">
      <h1 className="section_heading">a little about me</h1>
      <div className="section_box">
        <div className="about__left">
          <img src={aboutImg} alt="aboutimg" />
        </div>
        <div className="about__right">
          <h3 className="para_heading">I'am Gaurav Sharma</h3>
          <p>
            junior software developer from India. I'm deeply passionate about
            software development, computers and cyber security. Apart from that
            I have a habit of reading books of different genres like self-help,
            business & non-fiction etc;
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
