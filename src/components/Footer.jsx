import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";

const Footer = ({ year }) => {
  return (
    <footer>
      <p>© Tomas Eliz {year} / photos by Jana Makroczy</p>
      <a href="https://github.com/TomasEliz" alt="github tomas eliz" target="_blank" ><AiFillGithub className="footer-icon" title="GitHub" /></a>      
      <a href="/" alt="" target="_blank"><AiFillLinkedin className="footer-icon" title="LinkedIn"  /></a>
      <a href="https://codepen.io/elHombreInvisible" alt="codepen elhombreinvisible" target="_blank"><AiFillCodepenSquare className="footer-icon" title="CodePen" /></a>
    </footer>
  );
};

export default Footer;
