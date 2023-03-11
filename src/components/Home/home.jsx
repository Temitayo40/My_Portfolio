import React from "react";
import home from "../../img/home.png";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={home} alt="home background image" />

      <div className="homeContent container">
        <div className="textDiv flex">
          <h1 className="textTitle">
            <span className="top">Hey there. I’m Damilola</span> <br />
            <span className="low">I’m a software developer</span>
          </h1>
          <p className="paragraph">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>

          <div className="homeIcons flex">
            <a className="icons" to="/#">
              <BsTwitter className="icon" />
            </a>
            <a className="icons" to="/#">
              <FaLinkedinIn className="icon" />
            </a>
            <a className="icons" to="/#">
              <FaFacebookF className="icon" />
            </a>
            <a className="icons" to="/#">
              <BsGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
