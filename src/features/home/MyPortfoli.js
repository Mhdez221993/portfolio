import PropTypes from 'prop-types';
import React from 'react';

function MyPortfolio({ displayDitail }) {
  return (
    <div className="overlap-group-container-3">
      <div className="overlap-group3">
        <div className="soap-soap poppins-semi-bold-white-20px">SoapSoap</div>
        <div className="group-9">
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
        </div>
        <div className="overlap-group-2">
          <button onClick={displayDitail} type="button" className="see-the-project">See the project</button>
        </div>
      </div>

      <div className="overlap-group3">
        <div className="soap-soap poppins-semi-bold-white-20px">SoapSoap</div>
        <div className="group-9">
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
          <div className="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
        </div>
        <div className="overlap-group-2">
          <button onClick={displayDitail} type="button" className="see-the-project">See the project</button>
        </div>
      </div>
    </div>
  );
}

MyPortfolio.propTypes = {
  displayDitail: PropTypes.func.isRequired,
};

export default MyPortfolio;
