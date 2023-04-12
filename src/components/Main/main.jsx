import React, { useEffect, useState } from "react";
import "./main.css";

import ominifood1 from "../../img/ominifood1.png";
import natours1 from "../../img/natours1.png";
import ecommerce1 from "../../img/ecommerce1.png";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import Poppup from "../poppup/poppup";

const Datas = [
  {
    id: 1,
    imgSrc: img1,
    imgMin: ecommerce1,
    title: "Crown-Clothing",
    tools: ["html", "css", "JavaScript", "Creat-React-App", "Terminal"],
    text: "This is a clothing webApp where users can sign in and check through the categories of cloth present, cart and checkout and pay via online transaction",
  },

  {
    id: 2,
    imgSrc: img3,
    imgMin: natours1,
    title: "Natours-Project",
    tools: ["html5", "SCSS", "Terminal", "NPM", "Netlify"],
    text: "Natours Project is a responsive webpage built with the purpose of showcasing advance css features",
  },
  {
    id: 3,
    imgSrc: img2,
    imgMin: ominifood1,
    title: "Ominifood",
    tools: ["html", "CSS", "JavaScript", "Terminal", "NPM", "Netlify"],
    text: "It's a technology company first, but with a major focus on consumer well-being through a healthy diet. A healthy meal deliver to you every single day",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="Portfolio" className="main container section">
      <div data-aos="fade-right" className="secTitle">
        <h2 className="title">About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="secContent grid">
        {Datas.map((data) => {
          return (
            <div data-aos="fade-up" key={data.id} className="singleProject">
              <div className="imageDiv">
                <picture>
                  <source srcSet={data.imgSrc} type="image/jpg" />
                  {/* <source srcSet={imgMin} type="image/jpg" /> */}
                  <img src={data.imgSrc} alt={data.title} />
                </picture>
              </div>

              <div className="projContent">
                <div className="projTitle">
                  <h3>{data.title}</h3>
                </div>
                <span className="tools">
                  {data.tools.map((tool, id) => {
                    return (
                      <span className="projTool" key={id}>
                        {tool}
                      </span>
                    );
                  })}
                </span>
                <button className="btn">See Project</button>
              </div>
            </div>
          );
        })}
      </div>
      {/* {poppupToggle && (
        <Poppup poppupContent={poppupContent} changeData={changeData} />
      )} */}
    </section>
  );
};

export default Main;
