import React, { useState } from "react";
import "./navbar.css";
import { GiHolyGrail } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  const [active, setActive] = useState("navbar");

  //function or the toggle and close icon

  const navOpen = () => {
    setActive("navbar isNavOpen");
  };
  const navclose = () => {
    setActive("navbar");
  };
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
            <li className="navItem">
              <a href="/#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="/#" className="navLink">
                Portfolio
              </a>
            </li>
            <li className="navItem">
              <a href="/#" className="navLink">
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
