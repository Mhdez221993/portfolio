import React from 'react';
import AboutMe from './AboutMe';
import Form from './Form';
import './HomeDesktop.css';
import footershape from './icons/footershape.svg';
import rocket2 from './images/space/rocket2.jpg';
import space1 from './images/space/space1.PNG';
import space2 from './images/space/space2.PNG';
import space3 from './images/space/space3.PNG';
import space4 from './images/space/space4.PNG';
import MediaFooter from './MediaFooter';
import MediaHeader from './MediaHeader';
import MyPortfolio from './MyPortfoli';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Skills from './Skills';

const projects = [
  {
    title: "Space Travelers's Hub",
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
];

function App() {
  return <Template7Main />;
}

export default App;

function Template7Main() {
  return (

    <div className="template-7-main screen">

      <Nav />

      <div className="flex-col">

        <div className="overlap-group-container-2">

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

        <div className="content-wrapper">

          <div className="my-portfolio roboto-bold-scarpa-flow-28px" id="portfolio">My Portfolio</div>

          <div className="overlap-group-container-3">
            {
              projects.map((project) => (
                <MyPortfolio
                  key={project.title}
                  project={project}
                />
              ))
            }
          </div>

          <AboutMe />

          <Skills />

        </div>

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

      </div>

    </div>
  );
}
