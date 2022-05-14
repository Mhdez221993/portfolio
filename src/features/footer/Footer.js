import React from 'react';
import Form from './Form';
import footershape from './icons/footershape.svg';
import MediaFooter from './MediaFooter';

function Footer() {
  return (
    <div className="overlap-group13" id="footer">

      <div className="group-13">

        <div className="interested">
          <div className="interested-in-collaborating roboto-bold-scarpa-flow-28px">Interested in collaborating?</div>

          <p className="if-you-have-an-appli poppins-normal-storm-gray-16px">
            If you have an application you are interested in developing, a
            feature that you need built or a project that need coding, I’d love
            to help you with it.
          </p>

        </div>

        <Form />

        <MediaFooter />

        <div className="vector" />

        <div className="copyright roboto-normal-periwinkle-16px">© 2022&nbsp;&nbsp;Moises Hernandez</div>

      </div>

      <img className="footershape" src={footershape} alt="footer" />

    </div>
  );
}

export default Footer;
