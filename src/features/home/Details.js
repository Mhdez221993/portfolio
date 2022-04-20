import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Details.css';
import Fill4 from './icons/Fill4.svg';
import group18 from './icons/Group18.svg';
import Group41 from './icons/Group41.svg';
import image3 from './icons/image3.png';
import image4 from './icons/image4.png';
import image5 from './icons/image5.png';

function Details({ setDisplayDitails }) {
  const image = 'https://github.com/Mhdez221993/portfolio/blob/main/src/features/home/icons/project.png?raw=true';

  const [state, setState] = useState(image);

  const [state1, setState1] = useState(image3);
  const [state2, setState2] = useState(image4);
  const [state3, setState3] = useState(image5);

  const nonDisplay = () => {
    setDisplayDitails(false);
  };

  const swapImages = (newImg, cb) => {
    setState(newImg);
    cb(state);
  };

  return (
    <div className="overlap-group8">
      <div className="rectangle-16">
        <button onClick={nonDisplay} onKeyDown={nonDisplay} type="button" className="closeModal">
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

              <button type="button" onClick={() => swapImages(state1, setState1)}>
                <img
                  className="thom-image"
                  src={state1}
                  alt="thom-nail"
                />
              </button>

              <button type="button" onClick={() => swapImages(state2, setState2)}>
                <img
                  className="thom-image"
                  src={state2}
                  alt="thom-nail"
                />
              </button>

              <button type="button" onClick={() => swapImages(state3, setState3)}>
                <img
                  className="thom-image"
                  src={state3}
                  alt="thom-nail"
                />
              </button>

            </div>

            <div className="see-live-source">
              <button type="button" className="see-source">
                See source
                <img src={Fill4} alt="Fill4" className="source-img" />
              </button>

              <button type="button" className="see-source">
                See Live
                <img src={Group41} alt="Group41" className="live-img" />
              </button>
            </div>

          </div>
        </div>
        <div className="project-description">
          <h1 className="roboto-bold-scarpa-flow-28px">
            SoapSoap
          </h1>
          <div className="group-9">
            <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
            <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
            <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          </div>
          <p className="lorem-ipsum-dolor-si">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  setDisplayDitails: PropTypes.func.isRequired,
};

export default Details;
