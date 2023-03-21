import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import frame1 from "../../img/Frame-1.png";
import frame2 from "../../img/Frame-2.png";
import frame3 from "../../img/Frame-3.png";
import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_boxvq3n",
        "template_7mg1fhh",
        form.current,
        "xh4BQjC4YO-PXY5h6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="Contact" className="footer">
      <div className="footerSection ">
        <img src={frame1} alt="frame-1" className="img-1" />
        <img src={frame2} alt="frame-2" className="img-2" />
        <img src={frame3} alt="frame-3" className="img-3" />

        <div className="footerContent">
          <h1 data-aos="fade-up" className="footerTitle">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </h1>
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="form"
            name="contactme"
            netlify="true"
          >
            <div className="inputText">
              <div className="fullscreen full">
                <input
                  type="firstname"
                  className="fname"
                  placeholder="FirstName"
                  name="firstname"
                  required
                />
                <input
                  type="lastname"
                  className="fname"
                  placeholder="LastName"
                  name="lastname"
                  required
                />
              </div>
              <input
                type="text"
                className="fname hide"
                placeholder="FullName"
                name="fullname"
              />
            </div>
            <input
              type="email"
              className="fname"
              placeholder="Email address"
              name="email"
              required
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
              minLength="10"
              placeholder="Enter texts here"
            ></textarea>

            <button type="submit" className="btn">
              Get in Touch
            </button>
          </form>
        </div>
        <hr />
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
    </section>
  );
};

export default Footer;
