import React from "react";

function MyPortfolio({ displayDitail }) {
  return (
    <div class="overlap-group-container-3">
      <div class="overlap-group3">
        <div class="soap-soap poppins-semi-bold-white-20px">SoapSoap</div>
        <div class="group-9">
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
        </div>
        <div class="overlap-group-2">
          <button onClick={displayDitail} type="button" class="see-the-project">See the project</button>
        </div>
      </div>

      <div class="overlap-group3">
        <div class="soap-soap poppins-semi-bold-white-20px">SoapSoap</div>
        <div class="group-9">
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
          <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
        </div>
        <div class="overlap-group-2">
          <button onClick={displayDitail} type="button" class="see-the-project">See the project</button>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
