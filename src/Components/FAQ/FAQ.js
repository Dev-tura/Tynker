import React from "react";
import { NavLink } from "react-router-dom";
import headerlogo from "../Images/Headerlogo.png";
import { MdNavigateNext } from "react-icons/md";
import "../FAQ/FAQ.css";

const Educators = () => {
  return (
    <div>
      <div className="header">
        <img src={headerlogo} alt="" />
        <div className="header__h">
          <NavLink className="textdecor" to="/">
            {" "}
            <h3 className="whycode-h3">HOME</h3>
          </NavLink>
          <NavLink className="textdecor" to="/whycode">
            <h3 className="whycode-h3">WHY CODE?</h3>
          </NavLink>
          <NavLink className="textdecor" to="/play">
            <h3 className="whycode-h3">PLAY</h3>
          </NavLink>
          <NavLink className="textdecor" to="/faq">
            <h3 className="whycode-h3">FAQ</h3>
          </NavLink>
        </div>
        <div className="header__button">
          <button className="header__button1">JOIN FOR FREE</button>
          <button className="header__button2">LOG IN</button>
        </div>
      </div>
      <div className="faq-text">
        <h1>Frequently asked questions</h1>
        <p>
          <MdNavigateNext /> Why buy Tynker?
        </p>
        <p>
          <MdNavigateNext /> Who is BYJU's?
        </p>
        <p>
          <MdNavigateNext /> Does Tynker offer offline classes?
        </p>
        <p>
          <MdNavigateNext /> How will my child benefit frrom using Tynker?
        </p>
        <p>
          <MdNavigateNext /> How do i pick the best plan for my child?
        </p>
        <p>
          <MdNavigateNext /> Can my children share a single account?
        </p>
        <p>
          <MdNavigateNext /> Do you offer discount for multiple children?
        </p>
        <p>
          <MdNavigateNext /> How do i know my child is learning how to code?
        </p>
        <p>
          <MdNavigateNext /> Will my subcription renew automatically?
        </p>
        <p>
          <MdNavigateNext /> How do i turnoff auto-renewal for my subscription?
        </p>
        <p>
          <MdNavigateNext /> What devices are Tynker courses supported on?
        </p>
        <p>
          <MdNavigateNext /> What is the difference between the web subcription and ipad
          subscription?
        </p>
        <p>
          <MdNavigateNext /> What are the technical requirements for the minecraft modding?
        </p>
        <p>
          <MdNavigateNext /> Can i give a subcription as a gift?
        </p>
        <p>
          <MdNavigateNext /> Do you have a satisfaction guarantee?
        </p>
      </div>
      <div className="cookies">
        <p className="cookies-text">
          We use cookies to enhance <break></break> your experience and ensure <break></break>the
          proper use of <break></break> our website.
        </p>
        <div className="cookies-space">
          <span className="blue">Manage cookies</span>
          <button className="cookies-popup">ACCEPT ALL</button>
        </div>
      </div>
      <footer className="faqfooter">
        <p className="footerp">© 2022 Neuron Fuel </p>
        <p className="footerp"> Terms & Conditions </p>
        <p className="whitee"> Privacy Policy </p>
        <p className="footerp">| Kids Online |</p>
        <p className="footerp"> Contact Us</p>
      </footer>
    </div>
  );
};

export default Educators;
