import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ data }) {
  const {
    title,
    thumbnail,
    liveLink,
    sourceCodeLink,
    technologies,
    description,
  } = data;

  return (
    <div className="border dark:border-[#34384270]  rounded-lg mx-auto p-3 hover:shadow-md">
      <Image src={thumbnail} alt={title} />
      {technologies.map((tech, id) => (
        <div key={id} className="inline-flex py-2 ">
          <p className="border dark:border-[#34384270] rounded px-2 mx-1">
            {tech}
          </p>
        </div>
      ))}

      <p className="text-justify">{description}</p>

      <div className="flex justify-between my-3">
        <h1 className="text-md">{title}</h1>
        <div className="items-center justify-between">
          <Link
            className="border dark:border-[#34384270] px-2 rounded mx-2"
            href={`${liveLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Link>
          <Link
            className="border dark:border-[#34384270] px-2 rounded"
            href={`${sourceCodeLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
