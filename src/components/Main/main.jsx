import React from "react";
import "./main.css";
import img from "../../img/img1.jpg";
const Data = [
  {
    id: 1,
    imgSrc: img,
    title: "Multi-Post Stories Gain+Glory",
    tools: ["html", "css", "JavaScript", "reactJS"],
  },
  //   {
  //     id: 2,
  //     imgSrc: img,
  //     title: "Multi-Post Stories Gain+Glory",
  //     tools: ["html", "css", "JavaScript", "reactJS"],
  //   },
  //   {
  //     id: 3,
  //     imgSrc: img,
  //     title: "Multi-Post Stories Gain+Glory",
  //     tools: ["html", "css", "JavaScript", "reactJS"],
  //   },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h2 className="title">My Recent Works</h2>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, title, tools }) => {
          return (
            <div key={id} className="singleProject">
              <div className="imageDiv">
                <img src={imgSrc} alt={title} />
              </div>

              <div className="projContent">
                <h3 className="projTitle">{title}</h3>
                {tools.map((tool, id) => {
                  return <span key={id}>{tool}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
