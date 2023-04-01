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

const projects = [
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
    live: "",
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
    live: "",
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
];

const fetchProjects = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(projects), 500);
  });

export default fetchProjects;
