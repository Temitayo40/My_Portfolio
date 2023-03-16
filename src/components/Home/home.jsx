import React, { useEffect } from "react";
import home from "../../img/home.png";
// import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={home} alt="home background" />

      <div className="homeContent">
        <div data-aos="fade-up" className="textDiv flex">
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
            <a
              className="icons"
              href="https://twitter.com/Dharmmycrown"
              rel="noreferrer"
              target="_blank"
            >
              <BsTwitter className="icon" />
            </a>
            <a
              className="icons"
              href="https://in.linkedin.com/in/damilola-adebowale-1611231b3/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a
              className="icons"
              href="https://m.me/damilola.adebowale.946"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              className="icons"
              href=" https://wa.me/2349038767574"
              rel="noreferrer"
              target="_blank"
            >
              <FaWhatsapp className="icon" />
            </a>
            <a
              className="icons"
              href="https://github.com/Temitayo40"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub className="icon" />
            </a>
            <a
              className="icons"
              href="mailto:Dharmmycrown40@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <SiGmail className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
