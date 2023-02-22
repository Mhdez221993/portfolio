import Form from "./Form";
import MediaFooter from "./MediaFooter";
import React from "react";
import footershape from "./icons/footershape.svg";

function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${footershape})` }}
      id="footer"
    >
      <Form />

      <MediaFooter />

      <div className="vector" />

      <div className="copyright roboto-normal-periwinkle-16px">
        © 2023&nbsp;&nbsp;Moises Hernandez
      </div>
    </div>
  );
}

export default Footer;
