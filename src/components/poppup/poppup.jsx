import React from "react";
import "./poppup.css";
// import Ominifood2 from "../../img/ominifood2.png";
// import natours2 from "../../img/natours2.png";
import ecommerce2 from "../../img/ecommerce2.png";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const Datas = [
  {
    id: 1,
    imgSrc: ecommerce2,
    title: "Crown-Clothing",
    tools: ["Ruby", "JavaScript", "React.js"],
    text: "This is a clothing webApp where users can sign in and check through the categories of cloth present, cart and checkout and pay via online transaction",
    live: "https://crown-clothing-free-realm.netlify.app/",
    github: "https://github.com/Temitayo40/crown-clothing",
  },
  {
    id: 2,
    imgSrc: require("../../img/natours2.png"),
    title: "Natours-Project",
    tools: ["html5", "SCSS"],
    text: "Natours Project is a responsive webpage built with the purpose of showcasing advance css features",
    live: "https://natours-project-free-realm.netlify.app/",
    github: "https://github.com/Temitayo40/Natours_Project",
  },
  {
    id: 3,
    imgSrc: require("../../img/ominifood2.png"),
    title: "Ominifood",
    tools: ["html", "CSS", "JavaScript"],
    text: "It's a technology company first, but with a major focus on consumer well-being through a healthy diet. A healthy meal deliver to you every single day",

    live: "https://ominifood-free-realm.netlify.app/",
    github: "https://github.com/Temitayo40/OminiFood-",
  },
];

const Poppup = ({ value, togglePoppup }) => {
  const { id, imgSrc, tools, title, text, live, github } = Datas[value];

  return (
    <section className="poppup" onClick={togglePoppup}>
      <div className="poppup__container" onClick={(e) => e.stopPropagation()}>
        <div className="poppup__textContent">
          {/* <button onClick={togglePoppup}>close</button> */}
          <GrFormClose className="pop-icon" onClick={togglePoppup} />
          {/* <IoClose className="pop-icon " /> */}
          <div key={id} className="contents">
            <div className="imgDiv">
              <img src={imgSrc} alt={title} />
              <AiOutlineClose className="icon" />
            </div>
            <div className="texts">
              <h3 className="title-poppup">{title}</h3>
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
                <a className="btn" href={live} rel="noreferrer" target="_blank">
                  Live Project
                </a>
                <a
                  className="btn"
                  href={github}
                  rel="noreferrer"
                  target="_blank"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poppup;
