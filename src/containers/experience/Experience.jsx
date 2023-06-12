import React from "react";
import Heading from "../../components/heading/Heading";
import { ExperienceCard } from "../../components";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Heading heading="Experience" />
      <div className="timeline">
        <ExperienceCard
          title={"Web Developer Intern at GreyCat Digital"}
          timePeriod={"Jan 2022 - March 2022"}
          description={
            "In my 3th year of college i did an internship for greycat digital as a  Web developer my day to day task involve development and handling of websites the tech stack used was HTML, CSS/SCSS, JavaScript, PHP and MySQL"
          }
          link={
            "https://drive.google.com/file/d/1O9-JEHLyVOvYNv1sdEyWiY4LXYQXWh2H/view"
          }
        />
        <div className="line"></div>
        <ExperienceCard
          title={"Full-Stack Developer at Imagenate Solutions"}
          timePeriod={"Nov 2022 - Aprial 2023"}
          description={
            "In my 4th year of college i did an internship for Imagenate Solutions as a  Full-Stack Web developer my day to day task involve development and handling of websites the tech stack used was HTML, CSS/SCSS, JavaScript, React, PHP and MySQL, Wordpress and etc"
          }
          link={
            "https://drive.google.com/file/d/1APa0eb-aDXA4yS_eY7JZVU5_4aUzEgoB/view?usp=sharing"
          }
        />
      </div>
    </section>
  );
};

export default Experience;
