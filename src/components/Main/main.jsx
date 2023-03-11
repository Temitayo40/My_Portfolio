import React from "react";
import "./main.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    title: "Multi-Post Stories Gain+Glory",
    tools: ["html", "css", "JavaScript", "reactJS"],
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">My Recent Works</h3>
      </div>
      <div className="secContent grid"></div>
    </section>
  );
};

export default Main;
