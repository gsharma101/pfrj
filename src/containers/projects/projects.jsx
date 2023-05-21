import React from "react";
import "./projects.scss";
import Heading from "../../components/heading/Heading";
import { ProjectCards } from "../../components";
import { Natours, Gpt3, TwitterImg, Game, Pig, Nexter } from "./index";
const projects = () => {
  return (
    <section className="projects" id="projects">
      <Heading heading="My Projects" />
      <div className="row">
        <ProjectCards
          img={Natours}
          name={"Natours: Responsive website"}
          stack={"Html, Css, Sass"}
          demo={"https://gsharma101.github.io/Natours/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={Gpt3}
          name={"Gpt3 - Responsive "}
          stack={"React, Css"}
          demo={"https://gsharma101.github.io/GPT3/"}
          sourcecode={"https://github.com/gsharma101/GPT3"}
        />
        <ProjectCards
          img={TwitterImg}
          name={"Twitter Full Stack Clone"}
          stack={"Html, Css, Javascript, php, Mysql"}
          demo={"https://github.com/gsharma101/Twitter-Social-Network-Clone"}
          sourcecode={
            "https://github.com/gsharma101/Twitter-Social-Network-Clone"
          }
        />
      </div>
      <div className="row u-margin-top-medium">
        <ProjectCards
          img={Game}
          name={"Guess My Number"}
          stack={"Html, Css, JavaScript"}
          demo={"https://gsharma101.github.io/Guess-My-Number/"}
          sourcecode={"https://github.com/gsharma101/Guess-My-Number/"}
        />
        <ProjectCards
          img={Pig}
          name={"Pig Game"}
          stack={"Html, Css, JavaScript"}
          demo={"https://gsharma101.github.io/Pig-game/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={Nexter}
          name={"Nexter Responsive Website"}
          stack={"Html, Css Grid"}
          demo={"https://gsharma101.github.io/Nexter/"}
          sourcecode={"https://github.com/gsharma101/Nexter/"}
        />
      </div>
    </section>
  );
};

export default projects;
