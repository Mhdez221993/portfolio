import chartAdobe from "./images/chart/chart_adobe.jpeg";
import chartAdobe1 from "./images/chart/chart_adobe1.jpeg";
import chartView from "./images/chart/chart_view.PNG";
import tableView from "./images/chart/table_view.PNG";
import api1 from "./images/comic_dance/api1.jpg";
import api3 from "./images/comic_dance/api3.jpg";
import apiDocs1 from "./images/comic_dance/api_docs1.PNG";
import apiDocs2 from "./images/comic_dance/api_docs2.PNG";
import apiDocs3 from "./images/comic_dance/api_docs3.PNG";
import linter1 from "./images/linter/linter1.jpeg";
import rubocop1 from "./images/linter/rubocop1.PNG";
import rubocop2 from "./images/linter/rubocop2.PNG";
import rubocop3 from "./images/linter/rubocop3.PNG";
import rubocop4 from "./images/linter/rubocop4.PNG";
import rocket2 from "./images/space/rocket2.jpg";
import space1 from "./images/space/space1.PNG";
import space2 from "./images/space/space2.PNG";
import space3 from "./images/space/space3.PNG";
import space4 from "./images/space/space4.PNG";
import ticTackToe1 from "./images/tic/tic_tac_toe1.jpeg";
import ticTackToe2 from "./images/tic/tic_tac_toe2.jpeg";
import ticTackToe3 from "./images/tic/tic_tac_toe3.PNG";
import ticTackToe4 from "./images/tic/tic_tac_toe4.PNG";
import ticTackToe5 from "./images/tic/tic_tac_toe5.PNG";
import youtubeDetails from "./images/youtube/youtube_details.PNG";
import youtubeHome from "./images/youtube/youtube_home.PNG";
import youtubeSubscription from "./images/youtube/youtube_subscriptions.PNG";
import youtubeTrendings from "./images/youtube/youtube_trendings.PNG";
import ninja1 from "./images/ninja/ninja-1.PNG";
import ninja2 from "./images/ninja/ninja-2.PNG";
import ninja3 from "./images/ninja/ninja-3.PNG";
import ninja4 from "./images/ninja/ninja-4.PNG";
import tnw1 from "./images/tnw/tnw-1.PNG";
import tnw2 from "./images/tnw/tnw-2.PNG";
import tnw3 from "./images/tnw/tnw-3.PNG";
import tnw4 from "./images/tnw/tnw-4.PNG";
import newsweek1 from "./images/newsweek/newsweek-1.PNG";
import newsweek2 from "./images/newsweek/newsweek-2.PNG";
import newsweek3 from "./images/newsweek/newsweek-3.PNG";
import newsweek4 from "./images/newsweek/newsweek-4.PNG";
import vegas1 from "./images/vegas/vegas-1.PNG";
import vegas2 from "./images/vegas/vegas-2.PNG";
import vegas3 from "./images/vegas/vegas-3.PNG";
import vegas4 from "./images/vegas/vegas-4.PNG";
import face1 from "./images/face/face-1.PNG";
import face2 from "./images/face/face-2.PNG";
import face3 from "./images/face/face-3.PNG";
import face4 from "./images/face/face-4.PNG";
import math1 from "./images/math/math-1.PNG";
import math2 from "./images/math/math-2.PNG";
import math3 from "./images/math/math-3.PNG";
import math4 from "./images/math/math-4.PNG";
import breakfast1 from "./images/breakfast/breakfast-1.PNG";
import breakfast2 from "./images/breakfast/breakfast-2.PNG";
import breakfast3 from "./images/breakfast/breakfast-3.PNG";
import breakfast4 from "./images/breakfast/breakfast-4.PNG";

const projects = [
  {
    title: "Newsweek Clone",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    backgroundImage: newsweek1,
    images: [newsweek1, newsweek2, newsweek3, newsweek4],
    source: "https://github.com/Mhdez221993/newsweek-clone",
    live: "https://mhdez221993.github.io/newsweek-clone/",
    description:
      "This is a clone of an archived homepage of the Newsweek from 20 January, 2021. The initial build of this project contains the header and the footer sections. The main goal of this project is to learn how to use the Bootstrap framework, specifically its responsive design features.",
  },
  {
    title: "Css Ninja",
    techStack: ["HTML", "CSS", "Bootstrap"],
    backgroundImage: ninja1,
    images: [ninja3, ninja4, ninja2, ninja1],
    source: "https://github.com/Mhdez221993/css-ninja",
    live: "https://mhdez221993.github.io/css-ninja/index.html",
    description:
      "The goal of CSS Ninja is to explore and implement CSS fundamentals through hands-on experience. This project emphasizes responsive design, layout techniques, and creating visually appealing components tailored to different screen sizes. It consists of multiple pages, each styled for optimal performance on mobile and desktop devices.",
  },
  {
    title: "Space Travelers's Hub",
    techStack: ["HTML/SCSS", "React", "Redux", "Jest"],
    backgroundImage: rocket2,
    images: [space1, space2, space3, space4],
    source: "https://github.com/Mhdez221993/spacex_travelers_hub",
    live: "https://magical-taffy-2adbc3.netlify.app",
    description:
      "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. Rockets /Dragons The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or canceling the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. My Profile The My Profile section displays all reserved rockets and space missions.",
  },
  {
    title: "Dance club API",
    techStack: ["Swagger", "Ruby on Rails", "RSpec", "JWT"],
    backgroundImage: api3,
    images: [api1, apiDocs2, apiDocs3, apiDocs1],
    source: "https://github.com/Mhdez221993/dance_club_api",
    live: "https://comic-dance-club.herokuapp.com/api-docs/index.html",
    description:
      "This API offers service to a react application that books and displays dance class appointments. It was built in Ruby on Rails, has twelve end-points to manage resources, is tested with Rspec, and uses Swagger for documentation.",
  },
  {
    title: "YouTube",
    techStack: ["Express", "Node.js", "PostgreSQL", "React"],
    backgroundImage: youtubeDetails,
    images: [
      youtubeDetails,
      youtubeSubscription,
      youtubeTrendings,
      youtubeHome,
    ],
    source: "https://github.com/Mhdez221993/youtube",
    live: "https://mhdez-youtube.herokuapp.com/",
    description:
      "This is my own YouTube version. A fully functional application, that allows you to upload videos and songs. You can like, comment, and subscribe to others' uploads",
  },
  {
    title: "Rubocop",
    techStack: ["RSpec", "Ruby"],
    backgroundImage: linter1,
    images: [rubocop4, rubocop2, rubocop3, rubocop1],
    source: "https://github.com/Mhdez221993/rubocop",
    live: "",
    description:
      "This project was built in ruby to check ruby code, it is a linters for beginners, and it provides feedback about errors or warnings in code little by little. It was developed following the best practices. In this project we are looking for the following errors: The wrong indentation Trailing spaces New line error empty files Last empty line",
  },
  {
    title: "Tic Tac Toe",
    techStack: ["RSpec", "Ruby", "Unix shell"],
    backgroundImage: ticTackToe1,
    images: [ticTackToe2, ticTackToe3, ticTackToe4, ticTackToe5],
    source: "https://github.com/Mhdez221993/tic_tac_toe",
    live: "",
    description:
      "A game in which two players alternately put Xs and Os in compartments of a figure formed by two vertical lines crossing two horizontal lines and each tries to get a row of three Xs or three Os before the opponent does. I would like to point out that, this project is built in pure Ruby no packages, no Genfile needed.",
  },
  {
    title: "Crypto Price Tracker",
    techStack: ["Mocha", "Vue", "Vuetify", "CSS"],
    backgroundImage: chartView,
    images: [chartAdobe1, tableView, chartView, chartAdobe],
    source: "https://github.com/Mhdez221993/crypto_tracker",
    live: "https://wonderful-fenglisu-f68b01.netlify.app",
    description:
      "This is a Vue project designed to track crypto coin prices. You can see the prices in the Bar chart or table mode. Also, you can interact with the table, which is multicolumn sorting or preferer to find a specific price or date, you can filter by custom input.",
  },
  {
    title: "Tnw Clone",
    techStack: ["HTML", "CSS"],
    backgroundImage: tnw3,
    images: [tnw1, tnw2, tnw3, tnw4],
    source: "https://github.com/Mhdez221993/tnw-clone",
    live: "https://mhdez221993.github.io/tnw-clone/",
    description:
      "This project is a clone of The Next Web website. The primary goal is to master CSS and HTML technologies by replicating a responsive version of the archived website. The design focuses on responsiveness and ensuring the site adapts seamlessly to different screen sizes, including mobile and desktop.",
  },
  {
    title: "VegasCrest Casino",
    techStack: ["HTML5", "CSS3"],
    backgroundImage: vegas1,
    images: [vegas2, vegas3, vegas4, vegas1],
    source: "https://github.com/Mhdez221993/VegasCrest",
    live: "https://mhdez221993.github.io/VegasCrest/",
    description:
      "This is a promotional dashboard for VegasCrest Casino, showcasing various offers and bonuses for players. The project focuses on learning and implementing key web development concepts such as CSS Grid Layout, Flexbox, and responsive design with three breakpoints to ensure optimal usability across mobile, tablet, and desktop devices.",
  },
  {
    title: "Face Detection",
    techStack: ["HTML", "JavaScript"],
    backgroundImage: face1,
    images: [face1, face2, face3, face4],
    source: "https://github.com/Mhdez221993/face_detection",
    live: "https://mhdez221993.github.io/face_detection/",
    description:
      "This is a real-time face detection application built using face-api.js and JavaScript. The project utilizes a webcam feed to detect faces, showcasing how modern face detection models can be applied directly in the browser. The primary purpose of this project was to master the use of APIs and their integration into web applications.",
  },
  {
    title: "Math Magicians",
    techStack: ["JavaScript", "React", "HTML/SCSS", "Jest"],
    backgroundImage: math2,
    images: [math1, math2, math3, math4],
    source: "https://github.com/Mhdez221993/math_magicians",
    live: "https://mhdez221993.github.io/math_magicians/#/",
    description:
      "This is a calculator app that provides simple mathematical functions in a beautifully designed interface. Users can perform basic calculations such as addition, subtraction, multiplication, and division. The primary purpose of this project was to learn how to build multiple pages in React and test these pages thoroughly using Jest.",
  },
  {
    title: "The Breakfast Guide",
    techStack: ["WordPress", "HTML", "CSS", "GenerateBlocks", "CDN"],
    backgroundImage: breakfast1,
    images: [breakfast1, breakfast2, breakfast3, breakfast4],
    source: "https://thebreakfastguide.com/about/",
    live: "https://thebreakfastguide.com/",
    description:
      "The Breakfast Guide is a website dedicated to breakfast enthusiasts, currently under development. I built the site independently using WordPress and GenerateBlocks, incorporating custom CSS for a unique design. Content creation, including photography and writing, is a collaborative effort with my wife. I conducted keyword research using Ahrefs to optimize SEO, set up a Content Delivery Network (CDN) for enhanced performance, and installed necessary themes and plugins to ensure a seamless user experience. This project demonstrates my skills in web development, design, content creation, and SEO optimization.",
  }
];

const fetchProjects = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(projects), 500);
  });

export default fetchProjects;
