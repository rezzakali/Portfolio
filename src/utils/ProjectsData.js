import careerImage from '../assets/projects/career.png';
import domImage from '../assets/projects/dom.png';
import fitnessImage from '../assets/projects/fitness.png';
import netflixImage from '../assets/projects/netflix.png';
import QuizAppImage from '../assets/projects/quiz_app.png';
import youtubeCloneImage from '../assets/projects/youtube.png';

const projectsData = [
  {
    id: 1,
    title: 'React Quiz App',
    sourceCodeLink: 'https://github.com/rezzakali/react-quiz-app-with-firebase',
    liveLink: 'https://react-vite-quiz-app.netlify.app',
    thumbnail: QuizAppImage,
    technologies: ['Vite', 'React', 'Firebase'],
  },
  {
    id: 2,
    title: 'YouTube Clone',
    sourceCodeLink: 'https://github.com/rezzakali/YouTube-Clone',
    liveLink: 'https://youtube-clone-10d.netlify.app',
    thumbnail: youtubeCloneImage,
    technologies: ['React'],
  },
  {
    id: 3,
    title: 'Career',
    sourceCodeLink: 'https://github.com/rezzakali/educavo-project',
    liveLink: 'https://educavo-pro.netlify.app',
    thumbnail: careerImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'DOM Operation',
    sourceCodeLink: 'https://dom-manipulate-project.netlify.app',
    liveLink: 'https://github.com/rezzakali/dom-manipulation-project',
    thumbnail: domImage,
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 5,
    title: 'Fitness',
    sourceCodeLink: 'https://github.com/rezzakali/html-project-one',
    liveLink: 'https://fitness-club-fb.netlify.app',
    thumbnail: fitnessImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'Netflix Clone',
    sourceCodeLink: 'https://github.com/rezzakali/netflix_clone',
    liveLink: 'https://netflix-clone-demo1.netlify.app',
    thumbnail: netflixImage,
    technologies: ['React', 'TailwindCSS'],
  },
];

export default projectsData;
