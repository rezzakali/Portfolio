import Link from 'next/link';

function Buttons() {
  return (
    <div className="my-10 relative mx-1">
      <button className="rounded bg-[#0f172a] dark:text-black text-white p-2 w-[150px] hover:bg-[#0f172ae3]  dark:bg-gray-200 dark:hover:bg-gray-300 z-50">
        Download CV
      </button>
      <Link href="#contact">
        <button className="border border-gray-400 dark:border-gray-700 rounded mx-3 p-2 w-[150px]  dark:hover:border-gray-500 z-50 sm:mt-4">
          Contact
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
