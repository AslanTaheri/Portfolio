import NavBar from "../components/NavBar";
import Home from "../routes/Home";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";

const Layout = () => {
  return (
    <div className="corntainer bg-transparent py-8 max-w-6xl mx-auto">
      <NavBar />
      <div>
        <AlphabeticBlock title={["About", "Projects"]}>
          <Home />
          <Projects />
        </AlphabeticBlock>
      </div>
    </div>
  );
};

export default Layout;
