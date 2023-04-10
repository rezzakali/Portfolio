import Image from 'next/image';

function ServiceCard({ data }) {
  const { title, description, image } = data;

  return (
    <div className="relative border text-left p-3 rounded-lg transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-105 duration-1000 dark:border-[#34384270] hover:shadow-md mt-5 cursor-pointer">
      <div className="w-14 h-14 bg-white rounded-full ">
        <Image src={image} width={80} height={80} alt={title} className="p-3" />
      </div>
      <h1 className="font-bold text-lg dark:text-white mt-4">{title}</h1>
      <p className="text-justify mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
