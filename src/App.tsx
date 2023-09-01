import "./App.css";
import SvgFilter from "svg-filter";
import Layout from "./routes/Layout";
import BkgFilter from "./components/BkgFilter";

const App = () => {
  return (
    <div className="">
      <BkgFilter />
      {/* <div className="fixed inset-0 opacity-[.5] noise mix-blend-lighten" /> */}

      <Layout />
    </div>
  );
};

export default App;
