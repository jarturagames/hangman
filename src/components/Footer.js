import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <span>&copy; jartura games</span>
      <span>
        logo
        <img alt="logo" src={logo}></img>
      </span>
    </footer>
  );
};
export default Footer;
