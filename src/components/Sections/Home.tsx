import { useRef } from "react";
import Projects from "./Projects";
import AlphabeticBlock from "../AlphabeticBlock";
import Intro from "../Intro";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBarTitle from "../NavBarTitle";
import NavBarButtons from "../NavBarButtons";
import BkgFilter from "../filters/BkgFilter";

const Home = () => {
  const scrollAbout = useRef();
  const scrollProjects = useRef();
  const scrollContact = useRef();
  const handleAboutScroll = () => {
    scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsScroll = () => {
    scrollProjects.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactScroll = () => {
    scrollContact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="clipnav fixed inset-0 z-10  h-full w-full bg-white">
        <BkgFilter />
      </div>
      <NavBarTitle />
      <div className="sticky top-10 z-50 self-center ">
        <NavBarButtons
          onClickAbout={handleAboutScroll}
          onClickProjects={handleProjectsScroll}
          onClickContact={handleContactScroll}
        />
      </div>

      <div className="grid max-w-6xl scroll-mt-8 grid-cols-1 py-6">
        <BkgFilter />
        <AlphabeticBlock
          title={["About /", "Projects /", "Contact /"]}
          ref={[scrollAbout, scrollProjects, scrollContact]}
        >
          <Intro />
          <Projects />
          <Contact />
        </AlphabeticBlock>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
