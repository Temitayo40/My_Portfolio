import React, { useState } from "react";
import "./navbar.css";
import { GiHolyGrail } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
// import About from "../About/about";
const Navbar = () => {
  const [active, setActive] = useState("navbar");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  //function or the toggle and close icon

  const navOpen = () => {
    setActive("navbar isNavOpen");
    setModal(true);
  };
  const navclose = () => {
    setModal(!modal);
  };

  // const nav = document.querySelector(".navbar");

  // const allLinks = document.querySelectorAll("a:link");

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/#" className="logo">
            <h2>
              <GiHolyGrail className="icon" />
              Free-Realm
            </h2>
          </a>
        </div>
        {modal && (
          <div className="overlay" onClick={() => setModal(!modal)}>
            <div className={active}>
              <ul className="navLists flex">
                <li className="navItem">
                  <a href="/#About" className="navLink" onClick={navclose}>
                    About
                  </a>
                </li>
                <li className="navItem" onClick={navclose}>
                  <a href="/#Portfolio" className="navLink">
                    Portfolio
                  </a>
                </li>
                <li className="navItem" onClick={navclose}>
                  <a href="/#Contact" className="navLink">
                    Contact
                  </a>
                </li>
              </ul>

              <div onClick={navclose} className="closeNavBar">
                <AiFillCloseCircle className="icon" />
              </div>
            </div>
          </div>
        )}
        <div onClick={navOpen} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
