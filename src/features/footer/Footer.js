import React from 'react';
import Form from './Form';
import footershape from './icons/footershape.svg';
import MediaFooter from './MediaFooter';

function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${footershape})` }}
      id="footer"
    >

      <Form />

      <MediaFooter />

      <div className="vector" />

      <div className="copyright roboto-normal-periwinkle-16px">© 2022&nbsp;&nbsp;Moises Hernandez</div>

    </div>
  );
}

export default Footer;
