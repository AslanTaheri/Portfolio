import NavBar from "../components/NavBar";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";
import Intro from "../components/Intro";

const Layout = () => {
  return (
    <div className="container mx-auto grid max-w-6xl grid-cols-1 py-6">
      <div className="">
        <NavBar />
        <AlphabeticBlock title={["About", "Projects"]}>
          <Intro />

          <Projects />
        </AlphabeticBlock>
      </div>
    </div>
  );
};

export default Layout;
