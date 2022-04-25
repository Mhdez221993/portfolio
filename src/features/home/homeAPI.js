import axios from 'axios';
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
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: "Space Travelers's Hub",
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: "Space Travelers's Hub",
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: "Space Travelers's Hub",
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: "Space Travelers's Hub",
    techStack: ['React', 'Redux', 'HTML/SCSS', 'Jest'],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: 'https://github.com/Mhdez221993/spacex_travelers_hub',
    live: 'https://magical-taffy-2adbc3.netlify.app',
    description: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
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

export const fetchProjects = () => new Promise((resolve) => {
  setTimeout(() => resolve(projects), 500);
});
