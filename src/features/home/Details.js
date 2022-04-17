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
        <div className='project-description'></div>
      </div>
    </div>
  );
}

export default Details;
