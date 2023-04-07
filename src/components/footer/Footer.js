import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import Copyright from '../../utils/Copyright';
import Links from './Links';
import Social from './Social';

function Footer() {
  return (
    <div className="bg-[#f0f6f9] dark:bg-[#192132bb] px-10 bottom-0 mt-20 pt-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/">
            <h3
              className={`text-xl sm:text-3xl text-[#023047] cursor-pointer dark:text-[#f2f2f3] ${styles.header_brand_name}`}
            >
              Rezzak A.
            </h3>
          </Link>
          <p className="mt-5">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>
        <div className="text-left">
          <Links />
        </div>
        <div className="text-left">
          <Social />
        </div>
      </div>
      <hr className="bg-[#eff6ff] dark:border-gray-700 my-1" />
      <Copyright />
    </div>
  );
}

export default Footer;
