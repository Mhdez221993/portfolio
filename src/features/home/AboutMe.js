import React from 'react';
import DownloadResume from './DownloadResume';

function AboutMe() {
  return (
    <div className="group-38" id="about">
      <div className="about-me roboto-bold-scarpa-flow-28px">About me</div>
      <p className="in-three-sentences-d roboto-normal-storm-gray-16px">
        Hi there! my name is Moises I&apos;m a full-stack software engineer.
        Specializing in using Ruby on Rails, Javascript,
        and React to build software solutions and web applications.
        I&apos;m a self-motivated learner fluent in Spanish
        and English and currently learning Italian.
        I&apos;m a pair programming, remote work enthusiast, and a good team player.
        <br />
        You can find me solving algorithms, contributing on Github, or just cooking some pasta.
      </p>
      <DownloadResume />
    </div>
  );
}

export default AboutMe;
