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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          link={
            "https://drive.google.com/file/d/1O9-JEHLyVOvYNv1sdEyWiY4LXYQXWh2H/view"
          }
        />
        <div className="line"></div>
        <ExperienceCard
          title={"Web Developer at Imagenate Solutions"}
          timePeriod={"Nov 2022 - Aprial 2023"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    </section>
  );
};

export default Experience;
