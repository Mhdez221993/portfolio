import DownloadResume from "./DownloadResume";
import React from "react";

function AboutMe() {
  return (
    <div className="about-me-wrapper" id="about">
      <div className="about-me roboto-bold-scarpa-flow-28px">About me</div>
      <p className="in-three-sentences-d roboto-normal-storm-gray-16px">
      Hi there! I’m Moises, specializing in building software solutions and web applications with Ruby on Rails, JavaScript, and React. I’m a self-motivated learner fluent in Spanish and English, and currently picking up Italian. Pair programming, remote work, and teamwork are my jam—there’s nothing like tackling problems together.
      <br />
      When I’m not solving algorithms or contributing on GitHub, you can usually find me cooking up some pasta.
      </p>
      <DownloadResume />
    </div>
  );
}

export default AboutMe;
