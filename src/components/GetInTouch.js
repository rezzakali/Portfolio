function GetInTouch() {
  return (
    <div className="mt-20 mx-auto rounded-lg bg-[#eeeff259]  dark:bg-[#34384270] p-10 border dark:border-gray-800">
      <h1 className="text-4xl font-bold text-center">
        Describe your project & requirements
      </h1>
      <p className="text-center text-xl mt-7">
        Let's create your beautiful websites & digital presence 🌈
      </p>
      <div className="flex flex-col items-center mt-7">
        <button className="rounded border border-gray-500 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black p-2 w-[150px]">
          Get in touch
        </button>
      </div>
      <p className="text-center mt-7">
        Or mail me at
        <a
          className="dark:text-[#e2e8f0]"
          href="mailto: myrezzakalirk@gmail.com"
        >
          <strong> myrezzakalirk@gmail.com </strong>
        </a>
      </p>
    </div>
  );
}

export default GetInTouch;
