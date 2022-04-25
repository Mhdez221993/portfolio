import axios from 'axios';
import api1 from './images/comic_dance/api1.jpg';
import api3 from './images/comic_dance/api3.jpg';
import apiDocs1 from './images/comic_dance/api_docs1.PNG';
import apiDocs2 from './images/comic_dance/api_docs2.PNG';
import apiDocs3 from './images/comic_dance/api_docs3.PNG';
import covid1 from './images/covid/covid1.jpeg';
import covid2 from './images/covid/covid2.jpeg';
import covid3 from './images/covid/covid3.png';
import deatils from './images/covid/deatils.PNG';
import index from './images/covid/index.PNG';
import linter1 from './images/linter/linter1.jpeg';
import rubocop1 from './images/linter/rubocop1.PNG';
import rubocop2 from './images/linter/rubocop2.PNG';
import rubocop3 from './images/linter/rubocop3.PNG';
import rubocop4 from './images/linter/rubocop4.PNG';
import rocket2 from './images/space/rocket2.jpg';
import space1 from './images/space/space1.PNG';
import space2 from './images/space/space2.PNG';
import space3 from './images/space/space3.PNG';
import space4 from './images/space/space4.PNG';

const BASE_URL = 'https://formspree.io/f/xknyqkgk';

export const fetchMessage = (payload = {}) => axios
  .post(BASE_URL, {
    payload,
  })
  .then((response) => response);

const projects = [
  {
    title: "Space Travelers's Hub",
    techStack: ['HTML/SCSS', 'React', 'Redux', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: 'Dance club API',
    techStack: ['Swagger', 'Ruby on Rails', 'RSpec', 'JWT'],
    backgroundImage: api3,
    images: [api1, apiDocs2, apiDocs3, apiDocs1],
    source: 'https://github.com/Mhdez221993/dance_club_api',
    live: 'https://comic-dance-club.herokuapp.com/api-docs/index.html',
    description: 'This API offers service to a react application that books and displays dance class appointments. It was built in Ruby on Rails, has twelve end-points to manage resources, is tested with Rspec, and uses Swagger for documentation.',
  },
  {
    title: 'Covid Tracking App',
    techStack: ['HTML/SCSS', 'React', 'Redux', 'Jest'],
    backgroundImage: covid2,
    images: [covid1, covid3, deatils, index],
    source: 'https://github.com/Mhdez221993/covid_tracking',
    live: 'https://mh-react-capstone-project.herokuapp.com',
    description: 'The Covid-19 Tracking Project collects information from different data sources to provide comprehensive data for the novel coronavirus, SARS-CoV-2.',
  },
  {
    title: 'Rubocop',
    techStack: ['RSpec', 'Ruby'],
    backgroundImage: linter1,
    images: [rubocop4, rubocop2, rubocop3, rubocop1],
    source: 'https://github.com/Mhdez221993/rubocop',
    live: '',
    description: 'This project was built in ruby to check ruby code, it is a linters for beginners, it provides feedback about errors or warning in code little by little. It was developed following the best practices. In this project we are looking for the following errors: Wrong indentation Trailing spaces New line errorsEmpty files Last empty line',
  },
];

export const fetchProjects = () => new Promise((resolve) => {
  setTimeout(() => resolve(projects), 500);
});
