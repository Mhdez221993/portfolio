import React from 'react';
import headerImage from './icons/header_image.svg';
import MediaHeader from './MediaHeader';
import Nav from './Nav';
import NavMobile from './NavMobile';

function Header() {
  return (
    <div className="header">

      <Nav />

      <div
        className="overlap-group-container-2"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="intro-container">

          <NavMobile />

          <h1 className="title">Moises Hernandez</h1>
          <div className="software-developer">Software Engineer</div>
          <p className="hello-i-am-a-softwar">
            Hello I am a software developer! I can help you build a
            product, featre or website. Look through some of my work and experience!
            If you like what you see and have project you need coded,
            don’t hesistate to contact me.
          </p>

          <MediaHeader />
        </div>
      </div>

    </div>
  );
}

export default Header;
