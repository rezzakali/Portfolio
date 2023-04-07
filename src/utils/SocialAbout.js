import Link from 'next/link';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

function SocialAbout() {
  return (
    <div className="text-3xl flex gap-4 my-10 absolute">
      <Link
        href="https://github.com/rezzakali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size={30} />
      </Link>
      <Link
        href="https://www.facebook.com/rezzakali22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </Link>
      <Link
        href="https://www.instagram.com/rezzak134"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size={30} />
      </Link>
    </div>
  );
}

export default SocialAbout;
