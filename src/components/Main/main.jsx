import React, { useEffect } from "react";
import "./main.css";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    title: "Multi-Post Stories Gain+Glory",
    tools: ["html", "css", "JavaScript", "reactJS"],
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Multi-Post Stories Gain+Glory",
    tools: ["html", "css", "JavaScript", "reactJS"],
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Multi-Post Stories Gain+Glory",
    tools: ["html", "css", "JavaScript", "reactJS"],
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
        {Data.map(({ id, imgSrc, title, tools }) => {
          return (
            <div data-aos="fade-up" key={id} className="singleProject">
              <div className="imageDiv">
                <img src={imgSrc} alt={title} />
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
