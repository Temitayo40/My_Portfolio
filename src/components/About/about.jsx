import React from "react";
import "./about.css";
import img1 from "../../img/ilus-left.png";
import img2 from "../../img/ilus-right.png";
import logo1 from "../../img/languages.png";
import logo2 from "../../img/framework.png";
import logo3 from "../../img/skills.png";
const cards = [
  {
    id: 1,
    logoSrc: logo1,
    title: "Languages",
    tools: ["JavaScript", "html", "css"],
  },
  {
    id: 1,
    logoSrc: logo2,
    title: "Framework",
    tools: ["Sass", "React.js", "TypeScrip", "BootStrap"],
  },
  {
    id: 1,
    logoSrc: logo3,
    title: "Skills",
    tools: ["CodeKit", "Github", "CodePen", "Gitlab", "Terminal"],
  },
];
const About = () => {
  return (
    <section className="About container section ">
      <div className="topSection">
        <img className="left" src={img1} alt="left ilustration" />
        <img className="right" src={img2} alt=" right" />
        <div className="aboutme">
          <div className="secTitle">
            <h2 className="title">About Me</h2>
          </div>
          <p className="paragraph">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>

          <button className="btn" href="/#">
            Get my Resume
          </button>
        </div>
      </div>

      <div className="cardSection">
        <div className="singleCard">
          {cards.map(({ id, logoSrc, title, tools }) => {
            return (
              <div key={id} className="cardContents">
                <div className="imgDiv">
                  <img className="logo" src={logoSrc} alt="logo" />
                </div>
                <h3 className="title">{title}</h3>
                <span className="allTools">
                  {tools.map((tool, id) => {
                    return (
                      <span key={id} className="tool">
                        {tool}
                      </span>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
