import { useRef } from "react";
import NavBar from "../components/NavBar";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";
import Intro from "../components/Intro";
import Contact from "./Contact";
import Conta from "./contact2";

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
    <div className="container mx-auto grid max-w-6xl grid-cols-1 py-6">
      <NavBar
        onClickAbout={handleAboutScroll}
        onClickProjects={handleProjectsScroll}
        onClickContact={handleContactScroll}
      />
      <AlphabeticBlock
        title={["About", "Projects", "Contact"]}
        ref={[scrollAbout, scrollProjects, scrollContact]}
      >
        <Intro />
        <Projects />
        <Conta />
      </AlphabeticBlock>
    </div>
  );
};

export default Layout;
