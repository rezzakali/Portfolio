import Image from 'next/image';

function ToolCard({ data }) {
  const { image, title, description } = data;
  return (
    <div className="border p-5 rounded-lg  dark:border-[#34384270] border-gray-100 hover:border-gray-200 dark:hover:border-[#3438425b] shadow-sm hover:shadow-md cursor-pointer z-10">
      <div className="w-14 h-14 bg-[#f1f6f9] dark:bg-[#1e293b86] rounded-full items-center justify-center">
        <Image src={image} width={80} height={80} alt={title} className="p-3" />
      </div>
      <h1 className="font-bold text-lg dark:text-white mt-2">{title}</h1>
      <p className="mt-1 text-justify">{description}</p>
    </div>
  );
}

export default ToolCard;
