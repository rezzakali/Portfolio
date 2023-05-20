import Image from 'next/image';
import lwsCerImage from '../assets/LWS-Certificate.jpg';
import LWSRecommendationLetterImage from '../assets/LWS-Recommendation-Letter.jpg';
import aboutImage from '../assets/about.webp';
import Isolate from '../utils/Isolate';
import SocialAbout from '../utils/SocialAbout';

function About() {
  return (
    <div className="relative">
      <div className="border dark:border-gray-800 mt-20 rounded-lg mx-auto dark:bg-[#34384270]">
        <Isolate />
        <div className="w-full lg:flex sm:grid md:grid p-10">
          <div className="lg:w-[70%] sm:w-full z-10">
            <h1 className="text-3xl font-bold">About me</h1>
            <p className="mt-5 ">
              I am Rezzak Ali, a web developer and I have completed my
              graduation from Gauhaty University in BCA (2022) with excellent
              marks. As part of my studies, I had learned many techniques in the
              field of web development.
            </p>
            <br />
            <p>
              I have done more than 20+ projects with latest technologies and
              tools. I am looking for new challenges and opportunities in my
              career so that I can explore new horizons of technology. I am a
              youthful and energetic web developer and always loves to learn new
              things. My area of interest are Web Applications.
            </p>
            <br />
            <p>
              Currently I am mastering in MERN Stack with my self and It's my
              hobby to become a Full Stack Web Developer.
            </p>

            <SocialAbout />
          </div>
          <div className="lg:w-[30%] sm:w-full sm:text-center sm:mt-10">
            <Image src={aboutImage} alt="about_me" className="object-right" />
          </div>
        </div>
      </div>

      <div className="flex justify-items-center mt-5 gap-2">
        <div>
          <Image
            src={lwsCerImage}
            alt="LWS-Certificate"
            width="100%"
            height="600"
            className="border dark:border-gray-800 object-cover"
          />
        </div>
        <div>
          <Image
            src={LWSRecommendationLetterImage}
            alt="LWS-Recommendation-Letter"
            width="100%"
            height="600"
            className="border dark:border-gray-800 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
