import PropTypes, { string } from 'prop-types';
import React from 'react';

function MyPortfolio({ project, displayDitail }) {
  const {
    title,
    techStack,
    backgroundImage,
  } = project;

  return (
    <div
      key={title}
      className="project"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="soap-soap poppins-semi-bold-white-20px padding">{title}</div>
      <div className="group-9 padding">
        {
          techStack.slice(1).map((stack) => (
            <div
              key={stack}
              className="overlap-group1-1 poppins-medium-mystic-14px"
            >
              {stack}
            </div>
          ))
        }
      </div>
      <div className="overlap-group-2">
        <button onClick={displayDitail} type="button" className="see-the-project">See the project</button>
      </div>
    </div>
  );
}

MyPortfolio.propTypes = {
  displayDitail: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: string.isRequired,
    backgroundImage: string.isRequired,
    techStack: PropTypes.arrayOf(string.isRequired),
  }).isRequired,
};

export default MyPortfolio;
