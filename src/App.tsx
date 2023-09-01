import Layout from "./routes/Layout";
import BkgFilter from "./components/BkgFilter";

const App = () => {
  return (
    <>
      <BkgFilter />
      {/* <div className="fixed inset-0 opacity-[.5] noise mix-blend-lighten" /> */}

      <Layout />
    </>
  );
};

export default App;
