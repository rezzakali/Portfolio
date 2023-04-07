import Link from 'next/link';

function Social() {
  return (
    <>
      <h1 className="text-lg text-[#023047] dark:text-white">Social Links</h1>

      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link
          href="https://www.facebook.com/rezzakali22"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Facebook
        </Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link
          href="https://www.instagram.com/rezzak134"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Instagram
        </Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link
          href="https://github.com/rezzakali"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Github
        </Link>
      </div>
      <div className="my-4 hover:text-[#023047]  dark:hover:text-gray-300">
        <Link
          href="https://dev.to/rezzakali"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Dev.to
        </Link>
      </div>
    </>
  );
}

export default Social;
