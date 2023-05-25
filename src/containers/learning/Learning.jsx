import React from "react";
import "./learning.scss";
import Heading from "../../components/heading/Heading";
import { Certificate } from "../../components";
import { Css, Javascript } from "./index";
function Learning() {
  return (
    <section className="learning" id="learning">
      <Heading heading="My Certifications" />
      <div className="row">
        <Certificate
          img={Javascript}
          titile="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
          link="https://www.udemy.com/certificate/UC-a0acd58e-bcac-473b-a0ef-13944c8ee35f/"
        />
        <Certificate
          img={Css}
          titile="The Complete JavaScript Course: From Zero to Expert!"
          link="https://www.udemy.com/certificate/UC-29a18ea2-1d71-45e9-b8a1-da5f4e462f1b/"
        />
        {/* <Certificate
          img={Css}
          titile="The Complete JavaScript Course: From Zero to Expert!"
          link="https://www.udemy.com/certificate/UC-29a18ea2-1d71-45e9-b8a1-da5f4e462f1b/"
        /> */}
      </div>
    </section>
  );
}

export default Learning;
