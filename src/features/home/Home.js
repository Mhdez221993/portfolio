import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutMe from './AboutMe';
import Details from './Details';
import Form from './Form';
import './HomeDesktop.css';
import { projectsAsync, setProject } from './homeSlice';
import footershape from './icons/footershape.svg';
import MediaFooter from './MediaFooter';
import MediaHeader from './MediaHeader';
import MyPortfolio from './MyPortfoli';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Skills from './Skills';

function App() {
  return <Template7Main />;
}

export default App;

function Template7Main() {
  const image = 'https://anima-uploads.s3.amazonaws.com/projects/62599356bd3456045c671682/releases/6259936b670b0b62486d7351/img/header-shape@1x.svg';
  const dispatch = useDispatch();

  const [ditail, setDisplayDitails] = useState(false);
  const { projects } = useSelector(({ home }) => home);

  const displayDitail = (project) => {
    dispatch(setProject(project));
    setDisplayDitails(true);
  };

  useState(() => {
    if (!projects.length) {
      dispatch(projectsAsync());
    }
  });

  return (

    <div className="template-7-main screen">

      {ditail && <Details setDisplayDitails={setDisplayDitails} />}

      <Nav />

      <div className="flex-col">

        <div
          className="overlap-group-container-2"
          style={{ backgroundImage: `url(${image})` }}
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

        <div className="content-wrapper">

          <div className="my-portfolio roboto-bold-scarpa-flow-28px" id="portfolio">My Portfolio</div>

          <div className="overlap-group-container-3">
            {
              projects.map((project) => (
                <MyPortfolio
                  key={project.title}
                  project={project}
                  displayDitail={() => displayDitail(project)}
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
