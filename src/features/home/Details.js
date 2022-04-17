import React from 'react';
import './Details.css';
import Fill4 from './icons/Fill4.svg';
import group18 from './icons/Group18.svg';
import Group41 from './icons/Group41.svg';
import image4 from './icons/image4.png';


function Details({ setDisplayDitails }) {
  const nonDisplay = () => {
    setDisplayDitails(false)
  }

  return (
    <div className="overlap-group8">
      <div className="rectangle-16">
        <div onClick={nonDisplay} className='closeModal'>
          <img src={group18} alt="group18" />
        </div>
        <div className='project-image'>
          <div className='thomnail-warpper'>

            <div className='thomenail1'>
              <img className='thom-image' src={image4} alt="thom-nail" />
              <img className='thom-image' src={image4} alt="thom-nail" />
              <img className='thom-image' src={image4} alt="thom-nail" />
            </div>

            <div className='see-live-source'>
              <button className='see-source'>See source
                <img src={Fill4} alt="Fill4" />
              </button>

              <button className='see-source'>See Live
                <img src={Group41} alt="Group41" />
              </button>
            </div>

          </div>
        </div>
        <div className='project-description'>
          <h1 className="roboto-bold-scarpa-flow-28px">
            SoapSoap
          </h1>
          <div class="group-9">
            <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
            <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
            <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          </div>
          <p className="lorem-ipsum-dolor-si">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Details;
