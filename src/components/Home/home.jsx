import React from "react";
import home from "../../img/home.png";

import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={home} alt="home background image" />

      <div className="homeContent container">
        <div className="textDiv flex">
          <h1 className="textTitle">
            <span className="top">Hey there. I’m Damilola</span> <br />
            <span className="top">I’m a software developer</span>
          </h1>
          <p className="paragraph">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
