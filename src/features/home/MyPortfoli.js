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
      className="overlap-group3"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="soap-soap poppins-semi-bold-white-20px">{title}</div>
      <div className="group-9">
        {
          techStack.map((stack) => (
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
    techStack: PropTypes.shape([
      string.isRequired,
    ]),
  }).isRequired,
};

export default MyPortfolio;
