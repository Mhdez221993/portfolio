import React from "react";
import Shape1 from './icons/Shape-1.svg';
import Shape from './icons/Shape.svg';
import Subtract1 from './icons/Subtract-1.svg';
import Subtract2 from './icons/Subtract-2.svg';
import Union1 from './icons/Union-1.svg';
import Union from './icons/Union.svg';

function MediaHeader() {
  return (
    <div className="my-work-on-social-network">
      <p className="my-work-p">My work on socail networks</p>

      <a href="https://github.com/Mhdez221993" target="_blank">
        <img src={Union} className="union" alt="union" />
      </a>

      <a href="https://stackoverflow.com/users/14582840/moises-hernandez" target="_blank" without rel="noreferrer">
        <img src={Union1} className="union" alt="union" />
      </a>

      <a href="https://www.linkedin.com/in/moises-hdez-coronado/" target="_blank" without rel="noreferrer">
        <img src={Shape} className="union" alt="union" />
      </a>

      <a href="https://twitter.com/MoisesH42060050" target="_blank" without rel="noreferrer">
        <img src={Shape1} className="union" alt="union" />
      </a>

      <a href="https://www.facebook.com/moises.hernandezcoronado" target="_blank" without rel="noreferrer">
        <img src={Subtract1} className="union" alt="union" />
      </a>

      <a href="https://angel.co/u/moises-hernandez-7" target="_blank" without rel="noreferrer">
        <img src={Subtract2} className="union" alt="union" />
      </a>

    </div>
  );
}

export default MediaHeader;
