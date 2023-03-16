import React from "react";
import "./poppup.css";
import img from "../../img/ominifood.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Data = [
  {
    id: 1,
    imgSrc: img,
    title: "You are doing well",
    tools: ["Ruby", "JavaScript", "React.js"],
    text: "Lorem ipsum dolor sit amet, consectetu adipisicing elit. Aperiam labore error temporibus nihil expedita assumenda in rerum quisquam similique, necessitatibus magni modi unde. Tempora natus voluptates deleniti maxim. Dolorum, corrupti?",
  },
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
