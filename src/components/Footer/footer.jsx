import React from "react";
import frame1 from "../../img/Frame-1.png";
import frame2 from "../../img/Frame-2.png";
import frame3 from "../../img/Frame-3.png";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerSection ">
        <img src={frame1} alt="frame-1" className="img-1" />
        <img src={frame2} alt="frame-2" className="img-2" />
        <img src={frame3} alt="frame-3" className="img-3" />

        <div className="footerContent">
          <h1 className="footerTitle">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </h1>
          <form action="" className="form">
            <div className="inputText">
              <div className="fullscreen full">
                <input
                  type="firstname"
                  className="fname"
                  placeholder="FirstName"
                  required
                />
                <input
                  type="lastname"
                  className="fname"
                  placeholder="LastName"
                  required
                />
              </div>
              <input
                type="text"
                className="fname hide"
                placeholder="FullName"
                required
              />
            </div>
            <input
              type="email"
              className="fname"
              placeholder="Email address"
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

            <button className="btn">Get in Touch</button>
          </form>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Footer;
