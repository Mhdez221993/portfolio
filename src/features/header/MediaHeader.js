import React from "react";
import Shape from "./icons/Shape.svg";
import Subtract2 from "./icons/Subtract-2.svg";
import Union from "./icons/Union.svg";
import Union1 from "./icons/Union-1.svg";

function MediaHeader() {
  return (
    <div className="my-work-on-social-network">
      <p className="my-work-p">My work on socail networks</p>

      <a href="https://github.com/Mhdez221993" target="_blank" rel="noreferrer">
        <img src={Union} className="union" alt="union" />
      </a>

      <a
        href="https://stackoverflow.com/users/14582840/moises-hernandez"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Union1} className="union" alt="union" />
      </a>

      <a
        href="https://www.linkedin.com/in/moises-hdez-coronado/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Shape} className="union" alt="union" />
      </a>

      <a
        href="https://angel.co/u/moises-hernandez-7"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Subtract2} className="union" alt="union" />
      </a>
    </div>
  );
}

export default MediaHeader;
