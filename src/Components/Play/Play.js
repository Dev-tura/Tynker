import React from "react";
import "../Play/Play.css";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import questionn from "../Images/question mark.png";
import playimg1 from "../Images/playimg1.jfif";
import playimg2 from "../Images/playimg2.jfif";
import playimg3 from "../Images/playimg3.jfif";
import play4 from "../Images/images (2).jfif";
import headerlogo from "../Images/Headerlogo.png";
import { NavLink } from "react-router-dom";

const Play = () => {
  return (
    <div className="play">
      <div className="header">
        <img src={headerlogo} alt="" />
        <div className="header__h">
          <NavLink className="textdecor" to="/">
            <h3 className="whycode-h3">HOME</h3>
          </NavLink>
          <NavLink className="textdecor" to="/whycode">
            <h3 className="whycode-h3">WHY CODE?</h3>
          </NavLink>
          <h3 className="whycode-h3">EDUCATORS</h3>
          <NavLink className="textdecor" to="/faq">
            <h3 className="whycode-h3">FAQ</h3>
          </NavLink>
        </div>
        <div className="header__button">
          <button className="header__button11">UNLOCK MORE</button>
          <button className="header__button22">LOG IN</button>
        </div>
      </div>
      <header>
        <button className="playbutton"> MY ACCOUNT</button>
        <div>
          <h3 className="playh3">MY Coding Path</h3>
          <button className="playbutton"> EXPLORE</button>
        </div>
        <IoSettingsOutline />
      </header>
      <div className="question">
        <img src={questionn} alt="" />
      </div>
      <div className="images1">
        <img src={playimg1} alt="" />
        <img src={playimg2} alt="" />
      </div>
      <div className="images2">
        <img src={play4} alt="" />
        <img src={playimg3} alt="" />
      </div>
      <div>
        <BsChatLeftDotsFill className="chaticon" />
      </div>
      {/* <div className="btn2">
        <button className="playbutton2">PROJECTS</button>
        <button className="playbutton2">WORKSHOP</button>
        <button className="playbutton2">COMMUNITY</button>
      </div> */}
      <footer className="playfooter">
        <p className="footerp">© 2022 Neuron Fuel </p>
        <p className="footerp"> Terms & Conditions </p>
        <p className="whitee"> Privacy Policy </p>
        <p className="footerp">| Kids Online |</p>
        <p className="footerp"> Contact Us</p>
      </footer>
    </div>
  );
};

export default Play;
