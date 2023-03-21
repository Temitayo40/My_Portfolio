import React, { useState } from "react";
import "./navbar.css";
import { GiHolyGrail } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
// import About from "../About/about";
const Navbar = () => {
  const [active, setActive] = useState("navbar");

  //function or the toggle and close icon

  const navOpen = () => {
    setActive("navbar isNavOpen");
  };
  const navclose = () => {
    setActive("navbar");
  };

  const nav = document.querySelector(".navbar");

  const allLinks = document.querySelectorAll("a:link");
  // allLinks.forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     ////close mobile navigation
  //     if (link.classList.contains("navbar")) nav.classList.toggle("isNavOpen");
  //   });
  // });
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/#" className="logo">
            <h1>
              <GiHolyGrail className="icon" />
              Free-Realm
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem" onClick={navclose}>
              <a href="/#About" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="/#Portfolio" className="navLink">
                Portfolio
              </a>
            </li>
            <li className="navItem">
              <a href="/#Contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>

          <div onClick={navclose} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={navOpen} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
