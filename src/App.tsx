import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import AlphabeticBlock from "./components/AlphabeticBlock";

const App = () => {
  return (
    <>
      <NavBar />
      <AlphabeticBlock title={["About", "Projects"]}>
        <Home />
        <Projects />
      </AlphabeticBlock>
    </>
  );
};

export default App;
