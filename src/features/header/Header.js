import React from 'react';
import headerImage from './icons/header_image.svg';
import MediaHeader from './MediaHeader';
import NavMobile from './NavMobile';

function Header() {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <NavMobile />
      <div className="intro-container">

        <h1 className="title">Moises Hernandez</h1>
        <p className="hello-i-am-a-softwar">
          Hello I am a software developer! I can help you build a
          product, featre or website. Look through some of my work and experience!
          If you like what you see and have project you need coded,
          don’t hesistate to contact me.
        </p>

        <MediaHeader />
      </div>
    </div>
  );
}

export default Header;
