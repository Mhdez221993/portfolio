import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Details from "./Details";
import Form from "./Form";
import './HomeDesktop.css';
import footershape from './icons/footershape.svg';
import MediaFooter from "./MediaFooter";
import MediaHeader from "./MediaHeader";
import MyPortfolio from "./MyPortfoli";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Skills from "./Skills";


function App() {
  return <Template7Main />;
}

export default App;

function Template7Main() {
  const [ditail, setDisplayDitails] = useState(false);
  const displayDitail = () => {
    setDisplayDitails(true);
  }

  return (

    <div class="template-7-main screen">
      {ditail && <Details setDisplayDitails={setDisplayDitails} />}

      <Nav />

      <div class="flex-col">

        <div class="overlap-group-container-2">

          <div className="intro-container">

            <NavMobile />

            <h1 className="title">Moises Hernandez</h1>

            <div class="software-developer">Software Engineer</div>

            <p className="hello-i-am-a-softwar">
              Hello I am a software developer! I can help you build a product, featre or website. Look through some of my work and experience!
              If you like what you see and have project you need coded, don’t hesistate to contact me.
            </p>

            <MediaHeader />

          </div>

        </div>

        <div className="content-wrapper">

          <div class="my-portfolio roboto-bold-scarpa-flow-28px" id="portfolio">My Portfolio</div>

          <MyPortfolio displayDitail={displayDitail} />

          <AboutMe />

          <Skills />

        </div>

        <div class="overlap-group13" id="footer">

          <div class="group-13">

            <div className="interested">
              <div class="interested-in-collaborating roboto-bold-scarpa-flow-28px">Interested in collaborating?</div>

              <p class="if-you-have-an-appli poppins-normal-storm-gray-16px">
                If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love
                to help you with it.
              </p>

            </div>

            <Form />

            <MediaFooter />

            <div className="vector"></div>

            <div class="copyright roboto-normal-periwinkle-16px">© 2022&nbsp;&nbsp;Moises Hernandez</div>

          </div>

          <img className="footershape" src={footershape} />

        </div>

      </div>

    </div>
  );
}
