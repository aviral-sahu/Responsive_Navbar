import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>R</span>esponsive
            <span> N</span>avbar
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              {" "}
              <a href="#">Home </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Services </a>
            </li>
            <li>
              {" "}
              <a href="#">Contact </a>
            </li>
            <li>
              {" "}
              <a href="#">About </a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="_blank">
                <FaFacebookSquare className="facbook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {" "}
              <GiHamburgerMenu />{" "}
            </a>
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <p>welcome to</p>
        <h1> Responsive Navbar</h1>
      </section>
    </div>
  );
};
export default Navbar;
