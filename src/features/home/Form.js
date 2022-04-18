import React from "react";

function Form() {

  return (
    <form class="overlap-group-container-4" action="https://formspree.io/f/xknyqkgk" method="POST">
      <div className="input-wrapper">
        <div class="inputs">
          <input class="overlap-group-4 poppins-normal-storm-gray-16px" placeholder="Name*" name="Name" id="name" type="text" />
          <input class="overlap-group-4 poppins-normal-storm-gray-16px" placeholder="Email*" name="Email" id="email" type="email" />
        </div>

        <div class="overlap-group3-1border-1px-black-2">
          <textarea class="message roboto-normal-manatee-16px" name="message" id="message" type="text" placeholder="Message*"></textarea>
        </div>
      </div>

      <div class="overlap-group1-2">
        <button type="submit" value="Submit" class="get-in-touch roboto-bold-white-16px">Get in touch</button>
        <a href="mailto:cg@gmailjob.com" target="_blank" class="align-self-flex-end"
        ><div class="cggmailjobcom roboto-normal-periwinkle-16px">mhdezcoronado@gmail.com</div></a>
      </div>
    </form>
  );
}

export default Form;