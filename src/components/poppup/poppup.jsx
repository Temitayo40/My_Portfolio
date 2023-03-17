import React from "react";
import "./poppup.css";
import img from "../../img/ominifood.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Data = [
  {
    id: 1,
    imgSrc: img,
    title: "Crown-Clothing",
    tools: ["Ruby", "JavaScript", "React.js"],
    text: "This is a clothing webApp where users can sign in and check through the categories of cloth present, cart and checkout and pay via online transaction",
  },
  // {
  //   id: 2,
  //   imgSrc: img,
  //   title: "Natours-Project",
  //   tools: ["html5", "SCSS"],
  //   text: "Natours Project is a responsive webpage built with the purpose of showcasing advance css features",
  // },
  // {
  //   id: 3,
  //   imgSrc: img,
  //   title: "Crown-Clothing",
  //   tools: ["html", "CSS", "JavaScript"],
  //   text: "It's a technology company first, but with a major focus on consumer well-being through a healthy diet. A healthy meal deliver to you every single day",
  // },
];

const Poppup = () => {
  return (
    <section className="poppup">
      <div className="poppup__container">
        <div className="poppup__textContent">
          {Data.map(({ id, imgSrc, tools, title, text }) => {
            return (
              <div key={id} className="contents">
                <div className="imgDiv">
                  <img src={imgSrc} alt={title} />
                  <AiOutlineClose className="icon" />
                </div>
                <div className="texts">
                  <h3 className="title">{title}</h3>
                  <div className="tools">
                    {tools.map((tool, id) => {
                      return (
                        <span className="tool" key={id}>
                          {tool}
                        </span>
                      );
                    })}
                  </div>

                  <p className="text">{text}</p>
                  <div className="button">
                    <button className="btn">See Project</button>
                    <button className="btn">See Project</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Poppup;
