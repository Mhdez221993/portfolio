import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import AboutMe from './AboutMe';
import Details from './Details';
import './HomeDesktop.css';
import { projectsAsync, setProject } from './homeSlice';
import MyPortfolio from './MyPortfoli';
import Skills from './Skills';

function App() {
  return <Template7Main />;
}

export default App;

function Template7Main() {
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

      <div className="flex-col">

        <Header />

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

        <Footer />

      </div>

    </div>
  );
}
