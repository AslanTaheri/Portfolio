import NavBar from "../components/NavBar";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";
import Intro from "../components/Intro";

const Layout = () => {
  return (
    <div className="container mx-auto max-w-6xl py-6">
      <NavBar />
      <div className="">
        <AlphabeticBlock title={["About", "Projects"]}>
          <Intro />

          <Projects />
        </AlphabeticBlock>
      </div>
    </div>
  );
};

export default Layout;
