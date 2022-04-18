import React from "react";
import facebook from './icons/facebook.svg';
import github from './icons/github.svg';
import group31 from './icons/group31.svg';
import group32 from './icons/group32.svg';
import twitter from './icons/twitter.svg';

function MediaFooter() {
  return (
    <div className="social-media-footer">
      <a href="https://github.com/Mhdez221993" target="_blank">
        <img src={github} className="union" alt="union" />
      </a>

      <a href="https://twitter.com/MoisesH42060050" target="_blank" without rel="noreferrer">
        <img src={twitter} className="union" alt="union" />
      </a>


      <a href="https://stackoverflow.com/users/14582840/moises-hernandez" target="_blank" without rel="noreferrer">
        <img src={group32} className="union" alt="union" />
      </a>

      <a href="https://angel.co/u/moises-hernandez-7" target="_blank" without rel="noreferrer">
        <img src={group31} className="union" alt="union" />
      </a>


      <a href="https://www.facebook.com/moises.hernandezcoronado" target="_blank" without rel="noreferrer">
        <img src={facebook} className="union" alt="union" />
      </a>
    </div>
  );
}

export default MediaFooter;