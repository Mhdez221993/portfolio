import "./HomeDesktop.css";

import React, { useState, useEffect } from "react";
import { componentsAsync, projectsAsync, setProject } from "./homeSlice";
import { useDispatch, useSelector } from "react-redux";

import AboutMe from "./AboutMe";
import Details from "./Details";
import MyPortfolio from "./MyPortfoli";
import Skills from "./Skills";

function Content() {
  const dispatch = useDispatch();

  const [ditail, setDisplayDitails] = useState(false);
  const { projects, components } = useSelector(({ home }) => home);
  console.log(components);

  const displayDitail = (project) => {
    dispatch(setProject(project));
    setDisplayDitails(true);
  };

  useEffect(() => {
    if (!projects.length) {
      dispatch(projectsAsync());
    }

    if (!components.length) {
      dispatch(componentsAsync());
    }
  }, [dispatch, projects.length, components.length]);

  return (
    <div className="content-wrapper">
      {ditail && <Details setDisplayDitails={setDisplayDitails} />}

      <div
        className="my-portfolio roboto-bold-scarpa-flow-28px padding"
        id="portfolio"
      >
        Components
      </div>

      <div className="components">
        {components.map(({ title, backgroundImage }) => (
          <div
            key={title}
            className="component"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>

      <div
        className="my-portfolio roboto-bold-scarpa-flow-28px padding"
        id="portfolio"
      >
        Apps
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
