import "./Details.css";

import React, { useState } from "react";

import Fill4 from "./icons/Fill4.svg";
import Group41 from "./icons/Group41.svg";
import PropTypes from "prop-types";
import group18 from "./icons/Group18.svg";
import { useSelector } from "react-redux";

function Details({ setDisplayDitails }) {
  // const image = 'https://github.com/Mhdez221993/portfolio/blob/main/src/features/home/icons/project.png?raw=true';

  const { title, techStack, images, description, live, source } = useSelector(
    ({ home }) => home.project
  );

  const [state, setState] = useState(images[0]);

  const [state1, setState1] = useState(images[1]);
  const [state2, setState2] = useState(images[2]);
  const [state3, setState3] = useState(images[3]);

  const nonDisplay = () => {
    setDisplayDitails(false);
  };

  const swapImages = (newImg, cb) => {
    setState(newImg);
    cb(state);
  };

  return (
    <div className="display-project">
      <div className="project-content">
        <button
          onClick={nonDisplay}
          onKeyDown={nonDisplay}
          type="button"
          className="closeModal"
        >
          <img src={group18} alt="group18" className="close" />
        </button>
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${state})`,
          }}
        >
          <div className="thomnail-warpper">
            <div className="thomenail1">
              <button
                className="thom-image"
                s
                type="button"
                onClick={() => swapImages(state1, setState1)}
              >
                <img src={state1} alt="thom-nail" />
              </button>

              <button
                className="thom-image"
                type="button"
                onClick={() => swapImages(state2, setState2)}
              >
                <img src={state2} alt="thom-nail" />
              </button>

              <button
                className="thom-image"
                type="button"
                onClick={() => swapImages(state3, setState3)}
              >
                <img src={state3} alt="thom-nail" />
              </button>
            </div>

            <div className="source">
              <a
                href={source}
                target="_blank"
                rel="noreferrer"
                className="see-source"
              >
                See source
                <img src={Fill4} alt="Fill4" className="source-img" />
              </a>

              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="see-source"
              >
                See Live
                <img src={Group41} alt="Group41" className="live-img" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-description">
          <h1 className="roboto-bold-scarpa-flow-28px">{title}</h1>

          <div className="stacks">
            {techStack.map((stack) => (
              <div key={stack} className="stack poppins-medium-mystic-14px">
                {stack}
              </div>
            ))}
          </div>

          <p className="lorem-ipsum-dolor-si">{description}</p>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  setDisplayDitails: PropTypes.func.isRequired,
};

export default Details;
