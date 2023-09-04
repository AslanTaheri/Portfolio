import { useRef } from "react";
import NavBar from "../components/NavBar";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";
import Intro from "../components/Intro";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = () => {
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
    <div className="container mx-auto">
      <NavBar
        onClickAbout={handleAboutScroll}
        onClickProjects={handleProjectsScroll}
        onClickContact={handleContactScroll}
      />
      <div className="grid max-w-6xl grid-cols-1 py-6">
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

export default Layout;
