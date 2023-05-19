import React from "react";
import "./projects.scss";
import Heading from "../../components/heading/Heading";
import { ProjectCards } from "../../components";
import img1 from "../../assets/images/natours.jpg";
const projects = () => {
  return (
    <section className="projects" id="projects">
      <Heading heading="My Projects" />
      <div className="row">
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
      </div>
      <div className="row u-margin-top-medium">
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={img1}
          name={"Natours: Responsive website"}
          stack={"Html,Css,Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
      </div>
    </section>
  );
};

export default projects;
