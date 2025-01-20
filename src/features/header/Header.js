import MediaHeader from "./MediaHeader";
import NavMobile from "./NavMobile";
import React from "react";
import headerImage from "./icons/header_image.svg";

function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <NavMobile />
      <div className="intro-container">
        <h1 className="title">Moises Hernandez</h1>
        <p className="hello-i-am-a-softwar">
        I’m a motivated junior web developer excited about transforming ideas into functional, visually appealing websites. I’ve honed my skills in modern front-end technologies and back-end development, focusing on clean code and intuitive user experiences. If you have a project in mind—or just need a fresh perspective—feel free to explore my work and let’s chat about how we can collaborate.
        </p>

        <MediaHeader />
      </div>
    </div>
  );
}

export default Header;
