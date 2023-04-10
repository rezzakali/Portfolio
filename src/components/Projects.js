import projectsData from '../utils/ProjectsData';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <>
      <div className="mt-20 mx-auto">
        <h1 className="dark:text-white text-center text-3xl font-bold">
          Projects
        </h1>
        <p className="text-center mt-5">
          I have worked on a multitude of projects, ranging from small-scale{' '}
          <br />
          initiatives to large, complex undertakings.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {projectsData.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default Projects;
