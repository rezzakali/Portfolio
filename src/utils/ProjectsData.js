import careerImage from '../assets/projects/career.png';
import chatAppImage from '../assets/projects/chat-app-redux.png';
import domImage from '../assets/projects/dom.png';
import eShopImage from '../assets/projects/e-shop.png';
import fitnessImage from '../assets/projects/fitness.png';
import netflixImage from '../assets/projects/netflix.png';
import QuizAppImage from '../assets/projects/quiz_app.png';
import youtubeCloneImage from '../assets/projects/youtube.png';

const projectsData = [
  {
    id: 1,
    title: 'e-Commerce (Full Stack)',
    description:
      'A Full Stack Web Application in MERN where I used multiple technologies like React with Vite, Redux-Toolkit, RTK Query, MongoDB as a Database with Mongoose(ODM), Authentication with JWT(role based), Payment Integration (Stripe) and lots of libraries(packages).',
    sourceCodeLink: 'https://github.com/rezzakali/e-commerce',
    liveLink: 'https://e-shop-m.vercel.app',
    thumbnail: eShopImage,
    technologies: [
      'React Vite',
      'Redux Toolkit',
      'RTK Query',
      'Node Express',
      'MongoDB',
      'JWT',
      'Stripe',
      'More',
    ],
  },
  {
    id: 2,
    title: 'Chat App',
    description:
      'Using Vite as the build tool, Redux Toolkit for state management, RTK Query for data fetching, and JSON-Server as a mock API, I created a chat application with efficient development workflow, simplified state management, seamless data retrieval, and simulated backend interactions.',
    sourceCodeLink: 'http://github.com/rezzakali/Chat-App-Redux',
    liveLink: '#',
    thumbnail: chatAppImage,
    technologies: ['Vite', 'Redux Toolkit', 'RTK Query', 'JSON-Server'],
  },
  {
    id: 3,
    title: 'React Quiz App',
    description: `A quiz application developed using Vite, React, and Firebase, providing a dynamic and interactive user experience. It leverages Vite's fast build process, React's component-based structure, and Firebase's real-time database and authentication features.`,
    sourceCodeLink: 'https://github.com/rezzakali/react-quiz-app-with-firebase',
    liveLink: 'https://react-vite-quiz-app.netlify.app',
    thumbnail: QuizAppImage,
    technologies: ['Vite', 'React', 'Firebase'],
  },
  {
    id: 4,
    title: 'YouTube Clone',
    description: `Using Vite and React, I created a YouTube clone app. It replicates the familiar video-sharing platform's features, allowing users to upload, view, and interact with videos, providing an immersive experience.`,
    sourceCodeLink: 'https://github.com/rezzakali/YouTube-Clone',
    liveLink: 'https://youtube-clone-10d.netlify.app',
    thumbnail: youtubeCloneImage,
    technologies: ['React', 'Vite'],
  },
  {
    id: 5,
    title: 'Career',
    description: `Using HTML and CSS, I created an Educba template, a visually appealing design for educational websites. The template incorporates a professional layout, intuitive navigation, and responsive elements to enhance the user experience.`,
    sourceCodeLink: 'https://github.com/rezzakali/educavo-project',
    liveLink: 'https://educavo-pro.netlify.app',
    thumbnail: careerImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'DOM Operation',
    description: `Using HTML, CSS, and JavaScript, I implemented DOM manipulation with the Programming Hero API. Achieving milestones, the project enables dynamic interactions and updates on the web page, enhancing user experience and interactivity.`,
    sourceCodeLink: 'https://github.com/rezzakali/dom-manipulation-project',
    liveLink: 'https://dom-manipulate-project.netlify.app',
    thumbnail: domImage,
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 7,
    title: 'Fitness',
    description:
      'Using HTML and CSS, I created an Fitness template, a visually appealing design for gym websites. The template incorporates a professional layout, intuitive navigation, and responsive elements to enhance the user experience.',
    sourceCodeLink: 'https://github.com/rezzakali/html-project-one',
    liveLink: 'https://fitness-club-fb.netlify.app',
    thumbnail: fitnessImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 8,
    title: 'Netflix Clone',
    description: `Using React and TailwindCSS, I created a Netflix clone, replicating the popular streaming platform's user interface and functionalities. The project leverages React's component-based architecture and TailwindCSS's utility classes for responsive and sleek designs.`,
    sourceCodeLink: 'https://github.com/rezzakali/netflix_clone',
    liveLink: 'https://netflix-clone-demo1.netlify.app',
    thumbnail: netflixImage,
    technologies: ['React', 'TailwindCSS'],
  },
];

export default projectsData;
