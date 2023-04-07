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
      <div className="container mx-auto">
        <Services />
        <span id="projects" className="scroll-mt-36">
          <Projects />
        </span>
        <Tools />
        <span id="about" className="scroll-mt-32">
          <About />
        </span>
        <span id="contact" className="scroll-mt-36">
          <GetInTouch />
        </span>
      </div>
    </>
  );
}

export default index;
