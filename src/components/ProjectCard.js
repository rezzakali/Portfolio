import Image from 'next/image';

function ProjectCard({ data }) {
  const { title, thumbnail, liveLink, sourceCodeLink } = data;

  return (
    <div className="border dark:border-gray-800 dark:hover:border-gray-700 rounded-lg mx-auto dark:bg-[#192132bb] p-3 mt-4 hover:shadow-md">
      <Image src={thumbnail} alt={title} />
      <div className="flex justify-between mt-10 mb-3">
        <h1 className="text-2xl">{title}</h1>
        <div className="items-center justify-between">
          <button
            className="border dark:border-gray-800 dark:hover:border-gray-700 px-2 py-1 rounded mx-2"
            src={liveLink}
          >
            Live
          </button>
          <button
            className="border dark:border-gray-800 dark:hover:border-gray-700 px-2 py-1 rounded"
            src={sourceCodeLink}
          >
            Source
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
