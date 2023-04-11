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
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: QuizAppImage,
    technologies: ['Vite', 'React', 'Firebase'],
  },
  {
    id: 2,
    title: 'YouTube Clone',
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: youtubeCloneImage,
    technologies: ['React'],
  },
  {
    id: 3,
    title: 'Career',
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: careerImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'DOM Operation',
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: domImage,
    technologies: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 5,
    title: 'Fitness',
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: fitnessImage,
    technologies: ['HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'Netflix Clone',
    liveLink: '#',
    sourcCodeLine: '#',
    thumbnail: netflixImage,
    technologies: ['React', 'TailwindCSS'],
  },
];

export default projectsData;
