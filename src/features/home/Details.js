import React from 'react';
import './Details.css';
import group18 from './icons/Group18.svg';

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
        <div className='project-image'></div>
        <div className='project-description'></div>
      </div>
    </div>
  );
}

export default Details;
