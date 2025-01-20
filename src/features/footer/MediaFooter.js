import React from "react";
import github from "./icons/github.svg";
import group31 from "./icons/group31.svg";
import group32 from "./icons/group32.svg";

function MediaFooter() {
  return (
    <div className="social-media-footer">
      <a href="https://github.com/Mhdez221993" target="_blank" rel="noreferrer">
        <img src={github} className="union" alt="union" />
      </a>

      <a
        href="https://stackoverflow.com/users/14582840/moises-hernandez"
        target="_blank"
        rel="noreferrer"
      >
        <img src={group32} className="union" alt="union" />
      </a>

      <a
        href="https://angel.co/u/moises-hernandez-7"
        target="_blank"
        rel="noreferrer"
      >
        <img src={group31} className="union" alt="union" />
      </a>
    </div>
  );
}

export default MediaFooter;
