import Image from 'next/image';

function ProjectCard({ data }) {
  const { title, thumbnail, liveLink, sourceCodeLink } = data;

  return (
    <div className="border dark:border-[#34384270]  rounded-lg mx-auto p-3 hover:shadow-md">
      <Image src={thumbnail} alt={title} />
      <div className="flex justify-between mt-10 mb-3">
        <h1 className="text-2xl">{title}</h1>
        <div className="items-center justify-between">
          <button
            className="border dark:border-[#34384270]   px-2 py-1 rounded mx-2"
            src={liveLink}
          >
            Live
          </button>
          <button
            className="border dark:border-[#34384270]   px-2 py-1 rounded"
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
