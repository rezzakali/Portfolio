import About from '../components/About';
import GetInTouch from '../components/GetInTouch';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Tools from '../components/Tools';

function index() {
  return (
    <>
      <Hero />
      <div className="mx-auto">
        <div className=" dark:bg-[#191b21] px-10 py-5">
          <Services />
        </div>
        <div
          className="dark:bg-[#1b1e25] px-10 py-5 scroll-mt-36"
          id="projects"
        >
          <Projects />
        </div>
        <div className="dark:bg-[#1b1e25] px-10 py-5">
          <Tools />
        </div>
        <div className="px-10">
          <span id="about" className="scroll-mt-32">
            <About />
          </span>
        </div>
        <div className="px-10">
          <span id="contact" className="scroll-mt-36">
            <GetInTouch />
          </span>
        </div>
      </div>
    </>
  );
}

export default index;
