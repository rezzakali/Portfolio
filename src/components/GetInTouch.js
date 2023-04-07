function GetInTouch() {
  return (
    <div className="mt-20 mx-auto rounded-lg bg-[#f0f6f9] dark:bg-[#192132bb] p-10 border dark:border-gray-800">
      <h1 className="text-4xl text-[#023047] font-bold text-center dark:text-white">
        Describe your project & requirements
      </h1>
      <p className="text-center text-xl mt-7 dark:text-[#e2e8f0]">
        Let's create your beautiful websites & digital presence 🌈
      </p>
      <div className="flex flex-col items-center mt-7">
        <button className="rounded bg-[#0f172a] hover:bg-[#0f172ae3] dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black text-white p-2 w-[150px]">
          Get in touch
        </button>
      </div>
      <p className="text-center mt-7">
        Or mail me at{' '}
        <a
          className="text-[#023047] dark:text-[#e2e8f0]"
          href="mailto: myrezzakalirk@gmail.com"
        >
          <strong> myrezzakalirk@gmail.com </strong>
        </a>
      </p>
    </div>
  );
}

export default GetInTouch;
