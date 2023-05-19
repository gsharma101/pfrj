import React from "react";
import "./experience.scss";
import Heading from "../../components/heading/Heading";
function Experience() {
  return (
    <section className="experience" id="experience">
      <Heading heading="Experience" />
      <div className="timeline">
        <div className="experiene__box ex__1 tilt-in-fwd-tr">
          <div className="title">Web Developer at greycat digital</div>
          <div className="timePeriod">Jan 2022 - March 2022</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos
            debitis quaerat quidem? Corporis fugiat soluta ea totam nostrum
            eaque odit amet voluptates mollitia nam? Soluta autem eos qui.
            Adipisci!
          </p>
        </div>
        <div className="line"></div>
        <div className="experiene__box ex__2">
          <div className="title">Web Developer at Imagenate Solutions</div>
          <div className="timePeriod">Nov 2022 - Present</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos
            debitis quaerat quidem? Corporis fugiat soluta ea totam nostrum
            eaque odit amet voluptates mollitia nam? Soluta autem eos qui.
            Adipisci!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
