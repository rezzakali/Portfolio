import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSun } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMoon } from 'react-icons/hi';
import styles from '../styles/Header.module.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setShowNav(false)
    );
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full absolute px-10 mx-auto ">
      <div className="bg-[#fdfeff]  dark:bg-[#22262f] opacity-95 px-10 h-[80px] flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <Link href="/">
          <h3
            className={`text-xl sm:text-lg lg:text-2xl md:text-2xl text-[#023047] cursor-pointer dark:text-[#f2f2f3] ${styles.header_brand_name}`}
          >
            Rezzak A.
          </h3>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-4 w-8 h-8 flex items-center justify-center rounded">
            <div className="flex">
              {theme === 'light' ? (
                <HiMoon
                  className="cursor-pointer"
                  onClick={() => setTheme('dark')}
                />
              ) : (
                <BiSun
                  className="cursor-pointer text-yellow-400"
                  onClick={() => setTheme('light')}
                />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="md:hidden" onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <AiOutlineClose className="text-black dark:text-white cursor-pointer" />
              ) : (
                <GiHamburgerMenu className="text-black dark:text-white cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showNav
            ? 'bg-[#fdfeff] dark:bg-[#232630] opacity-95 px-4 fixed z-50'
            : 'absolute left-[-100%]'
        }
      >
        <ul className="block mb-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>

          <li>
            <Link href="#projects">Project</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
