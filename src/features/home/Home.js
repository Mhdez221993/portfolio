import React from "react";
import './HomeDesktop.css';
import Shape1 from './icons/Shape-1.svg';
import Shape from './icons/Shape.svg';
import Subtract1 from './icons/Subtract-1.svg';
import Subtract2 from './icons/Subtract-2.svg';
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
                <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
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
                <div class="overlap-group1-1 poppins-medium-mystic-14px">Ruby on Rails</div>
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

          {/* <div class="group-container-1">
            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Languages</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>

            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Languages</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>

            <div class="group-37">
              <div class="languages roboto-bold-scarpa-flow-22px">Languages</div>
              <div class="languages roboto-normal-storm-gray-16px">JavaScript (ES5/ES6)</div>
              <div class="languages roboto-normal-storm-gray-16px">Ruby</div>
              <div class="languages roboto-normal-storm-gray-16px">HTML</div>
              <div class="languages roboto-normal-storm-gray-16px">CSS</div>
            </div>
          </div> */}

        </div>

        <div class="overlap-group13">
          <div class="group-13">
            <div class="interested-in-collaborating roboto-bold-scarpa-flow-28px">Interested in collaborating?</div>
            <p class="if-you-have-an-appli poppins-normal-storm-gray-16px">
              If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love
              to help you with it.
            </p>
            <div class="overlap-group-container-4">
              <div class="overlap-group-4">
                <div class="yeremias poppins-normal-storm-gray-16px">Yeremias</div>
              </div>
              <div class="overlap-group2-1border-1px-black-2">
                <div class="emailvalign-text-middle roboto-normal-manatee-16px">Email*</div>
              </div>
            </div>
            <div class="overlap-group3-1border-1px-black-2">
              <div class="messagevalign-text-middle roboto-normal-manatee-16px">Message*</div>
            </div>
            <div class="group-container-2">
              <div class="overlap-group1-2">
                <div class="get-in-touchroboto-bold-white-16px">Get in touch</div>
              </div>
              <div class="group-36">
                <div class="group-15">
                  <a href="mailto:cg@gmailjob.com" target="_blank" class="align-self-flex-end"
                  ><div class="cggmailjobcomroboto-normal-periwinkle-16px">cg@gmailjob.com</div></a
                  >
                  <div class="flex-row">
                    <img class="github" src="github.png" /><img class="twitter" src="twitter.png" /><img
                      class="linked-in"
                      src="linkedin.png"
                    />
                    <div class="group-31"></div>
                    <div class="group"></div>
                    <div class="group-32"></div>
                    <img class="flex-row-item" src="facebook.png" /><img
                      class="flex-row-item"
                      src="instagram.png"
                    />
                  </div>
                </div>
                {/* <img class="vector-4" src="vector-4.svg" /> */}
                <div class="copyright roboto-normal-periwinkle-16px">© 2020&nbsp;&nbsp;Microverse</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
