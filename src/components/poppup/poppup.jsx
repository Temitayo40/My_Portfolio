import React, { useState } from "react";
import "./poppup.css";
// import Ominifood2 from "../../img/ominifood2.png";
// import natours2 from "../../img/natours2.png";
import ecommerce2 from "../../img/ecommerce2.png";
import { AiOutlineClose } from "react-icons/ai";

const Datas = [
  {
    id: 1,
    imgSrc: ecommerce2,
    title: "Crown-Clothing",
    tools: ["Ruby", "JavaScript", "React.js"],
    text: "This is a clothing webApp where users can sign in and check through the categories of cloth present, cart and checkout and pay via online transaction",
  },
  {
    id: 2,
    imgSrc: ecommerce2,
    title: "Natours-Project",
    tools: ["html5", "SCSS"],
    text: "Natours Project is a responsive webpage built with the purpose of showcasing advance css features",
  },
  // {
  //   id: 3,
  //   imgSrc: Ominifood2,
  //   title: "Ominifood",
  //   tools: ["html", "CSS", "JavaScript"],
  //   text: "It's a technology company first, but with a major focus on consumer well-being through a healthy diet. A healthy meal deliver to you every single day",
  // },
];

const Poppup = () => {
  // const [index, setIndex] = useState(0);
  const { id, imgSrc, tools, title, text } = Datas;

  return (
    <section className="poppup">
      <div className="poppup__container" onClick={(e) => e.stopPropagation()}>
        <div className="poppup__textContent">
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
        </div>
      </div>
    </section>
  );
};

export default Poppup;
