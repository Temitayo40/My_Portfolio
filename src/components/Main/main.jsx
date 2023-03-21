import React, { useEffect } from "react";
import "./main.css";

import ominifood1 from "../../img/ominifood1.png";
import natours1 from "../../img/natours1.png";
import ecommerce1 from "../../img/ecommerce1.png";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    imgMin: ecommerce1,
    title: "Crown-Clothing",
    tools: [
      "html",
      "css",
      "JavaScript",
      "Creat-React-App",
      "Terminal",
      "NPM",
      "Netlify",
    ],
  },
  {
    id: 2,
    imgSrc: img3,
    imgMin: natours1,
    title: "Natours-Project",
    tools: ["html5", "SCSS", "Terminal", "NPM", "Netlify"],
  },
  {
    id: 3,
    imgSrc: img2,
    imgMin: ominifood1,
    title: "Ominifood",
    tools: ["html", "CSS", "JavaScript", "Terminal", "NPM", "Netlify"],
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="Portfolio" className="main container section">
      <div className="secTitle">
        <h2 data-aos="fade-right" className="title">
          My Recent Works
        </h2>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, title, tools, imgMin }) => {
          return (
            <div data-aos="fade-up" key={id} className="singleProject">
              <div className="imageDiv">
                <picture>
                  <source srcSet={imgSrc} type="image/jpg" />
                  {/* <source srcSet={imgMin} type="image/jpg" /> */}
                  <img src={imgSrc} alt={title} />
                </picture>
              </div>

              <div className="projContent">
                <div className="projTitle">
                  <h3>{title}</h3>
                </div>
                <span className="tools">
                  {tools.map((tool, id) => {
                    return (
                      <span className="projTool" key={id}>
                        {tool}
                      </span>
                    );
                  })}
                  {/* <button className="btn">See Project</button> */}
                </span>
                <button className="btn">See Project</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
