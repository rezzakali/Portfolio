import Image from 'next/image';
import myImage from '../assets/r.png';
import Buttons from '../utils/Buttons';
import Description from '../utils/Description';
import Isolate from '../utils/Isolate';
import TypicalComponent from '../utils/Typical';

function Hero() {
  return (
    <>
      <Isolate />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 mx-auto px-12 pt-10 justify-center dark:heropattern-hideout-gray-500/10 heropattern-hideout-gray-500/10 bg-[#eff6ff3b] dark:bg-[#23272f] border-b border-[#eff6ff] dark:border-[#343842] py-6 z-100 text-center">
        <div className="w-1/2 sm:w-full justify-center sm:block sm:place-items-center md:text-left sm:text-center">
          <div>
            Currently Learning{' '}
            <button className="border border-gray-400 dark:border-gray-700 rounded-full dark:hover:border-gray-500 z-50 sm:mt-4 px-3">
              TypeScript
            </button>
          </div>
          <h1 className="mt-3">
            Hey There 👋 I am <br />
            <span className="text-6xl font-extrabold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080] ">
              Rezzak Ali
            </span>
            <br /> <TypicalComponent />
          </h1>
          <Description />
          <Buttons />
        </div>
        <div>
          <Image
            src={myImage}
            alt="rezzak_image"
            className="rounded-lg object-center place-items-center mx-auto mt-4"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
