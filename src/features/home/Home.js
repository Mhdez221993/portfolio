import React from "react";
import './HomeDesktop.css';
import facebook from './icons/facebook.svg';
import github from './icons/github.svg';
import group31 from './icons/group31.svg';
import group32 from './icons/group32.svg';
import Shape1 from './icons/Shape-1.svg';
import Shape from './icons/Shape.svg';
import Subtract1 from './icons/Subtract-1.svg';
import Subtract2 from './icons/Subtract-2.svg';
import twitter from './icons/twitter.svg';
import Union1 from './icons/Union-1.svg';
import Union from './icons/Union.svg';

function App() {
  return <Template7Main />;
}

export default App;

function Template7Main() {
  return (

    <div class="template-7-main screen">
      <div class="overlap-group-container-1">
        <div class="cp">Mhdez</div>
        <div class="intro-portfolio-about-contact">
          <span class="span1">Intro</span>
          <span class="span1">Portfolio</span>
          <span class="span1">About</span>
          <span class="span1">Contact</span>
        </div>
      </div>

      <div class="flex-col">
        <div class="overlap-group-container-2">
          <div className="intro-container">
            <h1 className="title">Moises Hernandez</h1>
            <div class="software-developer">Software Engineer</div>
            <p className="hello-i-am-a-softwar">
              Hello I am a software developer! I can help you build a product, featre or website. Look through some of my work and experience!
              If you like what you see and have project you need coded, don’t hesistate to contact me.
            </p>
            <div className="my-work-on-social-network">
              <p className="my-work-p">My work on socail networks</p>
              <img src={Union} className="union" alt="union" />
              <img src={Union1} className="union" alt="union" />
              <img src={Shape} className="union" alt="union" />
              <img src={Shape1} className="union" alt="union" />
              <img src={Subtract1} className="union" alt="union" />
              <img src={Subtract2} className="union" alt="union" />
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div class="my-portfolio roboto-bold-scarpa-flow-28px">My Portfolio</div>

          <div class="overlap-group-container-3">
            <div class="overlap-group3">
              <div class="soap-soap poppins-semi-bold-white-20px">SoapSoap</div>
              <div class="group-9">
                <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
                <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby</div>
                <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
              </div>
              <div class="overlap-group-2">
                <div class="see-the-project">See the project</div>
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
                <div class="see-the-project">See the project</div>
              </div>
            </div>

          </div>



          <div class="group-38">
            <div class="about-me roboto-bold-scarpa-flow-28px">About me</div>
            <p class="in-three-sentences-d roboto-normal-storm-gray-16px">
              In three sentences describe who you are as a proffessional. Look through some of my work and experience! If you like what you see
              and have project <br />you need coded, don’t hesistate to contact me.
            </p>
            <div class="overlap-group-3">
              <div class="get-my-resume roboto-bold-white-16px">Get my resume</div>
            </div>
          </div>

          <div class="group-container-1">
            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Languages</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>

            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Framewors</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>

            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Skills</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>
          </div>

        </div>

        <div class="overlap-group13">
          <div class="group-13">

            <div className="interested">
              <div class="interested-in-collaborating roboto-bold-scarpa-flow-28px">Interested in collaborating?</div>

              <p class="if-you-have-an-appli poppins-normal-storm-gray-16px">
                If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love
                to help you with it.
              </p>
            </div>

            <form class="overlap-group-container-4">
              <div className="input-wrapper">
                <div class="inputs">
                  <input class="overlap-group-4 poppins-normal-storm-gray-16px" placeholder="Name*" />
                  <input class="overlap-group-4 poppins-normal-storm-gray-16px" placeholder="Email*" />
                </div>

                <div class="overlap-group3-1border-1px-black-2">
                  <textarea class="message roboto-normal-manatee-16px">Message*</textarea>
                </div>
              </div>

              <div class="overlap-group1-2">
                <div class="get-in-touch roboto-bold-white-16px">Get in touch</div>
                <a href="mailto:cg@gmailjob.com" target="_blank" class="align-self-flex-end"
                ><div class="cggmailjobcom roboto-normal-periwinkle-16px">cg@gmailjob.com</div></a
                >
              </div>
            </form>

            <div className="social-media-footer">
              <img src={github} className="union" alt="union" />
              <img src={twitter} className="union" alt="union" />
              <img src={group32} className="union" alt="union" />
              <img src={group31} className="union" alt="union" />
              <img src={facebook} className="union" alt="union" />
            </div>

            <div className="vector"></div>

            <div class="copyright roboto-normal-periwinkle-16px">© 2022&nbsp;&nbsp;Moises Hernandez</div>
          </div>
        </div>
      </div>
    </div>
  );
}
