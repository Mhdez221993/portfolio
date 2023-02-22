import "./HomeDesktop.css";

import React, { useState } from "react";
import { projectsAsync, setProject } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";

import AboutMe from "./AboutMe";
import Details from "./Details";
import MyPortfolio from "./MyPortfoli";
import Skills from "./Skills";

function Content() {
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
    <div className="content-wrapper">
      {ditail && <Details setDisplayDitails={setDisplayDitails} />}

      <div
        className="my-portfolio roboto-bold-scarpa-flow-28px padding"
        id="portfolio"
      >
        My Portfolio
      </div>

      <div className="projects">
        {projects.map((project) => (
          <MyPortfolio
            key={project.title}
            project={project}
            displayDitail={() => displayDitail(project)}
          />
        ))}
      </div>

      <AboutMe />

      <Skills />
    </div>
  );
}

export default Content;
