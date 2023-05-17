import Image from 'next/image';

function ServiceCard({ data }) {
  const { title, description, image } = data;

  return (
    <div className="relative border text-left p-3 rounded-lg dark:border-[#34384270] hover:shadow-md mt-5 cursor-pointer">
      <div className="w-12 h-12 bg-transparent border border-[#34384270] rounded-full ">
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className="p-3"
        />
      </div>
      <h1 className="font-bold text-lg mt-4">{title}</h1>
      <p className="text-justify mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
