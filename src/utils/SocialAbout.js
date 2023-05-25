import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function SocialAbout() {
  return (
    <div className="text-3xl flex gap-4 my-10 absolute">
      <Link
        href="https://www.linkedin.com/in/rezzak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={22} />
      </Link>
      <Link
        href="https://github.com/rezzakali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare size={22} />
      </Link>
      <Link
        href="https://www.facebook.com/coder.rezzak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook size={24} />
      </Link>
      <Link
        href="https://www.instagram.com/coder.rezzak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size={25} />
      </Link>
    </div>
  );
}

export default SocialAbout;
