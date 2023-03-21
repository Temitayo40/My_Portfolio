import React, { useEffect } from "react";
import "./about.css";
import img1 from "../../img/ilus-left.png";
import img2 from "../../img/ilus-right.png";
import logo1 from "../../img/languages.png";
import logo2 from "../../img/framework.png";
import logo3 from "../../img/skills.png";
import cv from "../../img/cv.pdf";
import Aos from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    id: 1,
    logoSrc: logo1,
    title: "Languages",
    tools: ["JavaScript", "html", "css"],
  },
  {
    id: 2,
    logoSrc: logo2,
    title: "Framework",
    tools: ["Sass", "React.js", "TypeScrip", "BootStrap"],
  },
  {
    id: 3,
    logoSrc: logo3,
    title: "Skills",
    tools: ["CodeKit", "Github", "CodePen", "Gitlab", "Terminal"],
  },
];
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="About" className="About container section ">
      <div className="topSection">
        <img className="left" src={img1} alt="left ilustration" />
        <img className="right" src={img2} alt=" right" />
        <div className="aboutme">
          <div className="secTitle">
            <h2 data-aos="fade-right" className="title">
              About Me
            </h2>
          </div>
          <p data-aos="fade-up" className="paragraph">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>

          <a
            data-aos="fade-up"
            // data-aos-duration="500"
            className="btn"
            href={cv}
            download
          >
            Get my Resume
          </a>
        </div>
      </div>

      <div className="cardSection">
        <div className="singleCard">
          {cards.map(({ id, logoSrc, title, tools }) => {
            return (
              <div data-aos="fade-up" key={id} className="cardContents">
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
