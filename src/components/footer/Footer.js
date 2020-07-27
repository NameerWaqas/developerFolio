import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">{emoji("Credit with ❤️ to Saad Pasta")}</p>
      <p className="footer-text">whose repository I forked</p>
    </div>
    </Fade>
  );
}
