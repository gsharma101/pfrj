import React from "react";
import "./learning.scss";
import Heading from "../../components/heading/Heading";
function Learning() {
  return (
    <section className="learning" id="learning">
      <Heading heading="My Learnings" />
      <div className="detail__box">
        <p className="details">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est
          libero autem perspiciatis doloribus soluta consectetur asperiores
          impedit quia, at consequatur? Accusamus eligendi sint distinctio
          quidem, sequi laudantium. Sint, corporis!
        </p>
      </div>
    </section>
  );
}

export default Learning;
