import Link from 'next/link';

function Links() {
  return (
    <>
      <h1 className="text-lg text-[#023047] dark:text-white">Quick Links</h1>

      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link href="/">Home</Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link href="#about">About</Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link href="#projects">Projects</Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link href="#contact">Contact</Link>
      </div>
    </>
  );
}

export default Links;
