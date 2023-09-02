import Layout from "./routes/Layout";
import BkgFilter from "./components/BkgFilter";
import BkgBackup from "./components/BkgBackup";

const App = () => {
  return (
    <>
      <BkgFilter />
      {/* <BkgBackup /> */}
      {/* <div className="fixed inset-0 opacity-[.5] noise mix-blend-lighten" /> */}

      <Layout />
    </>
  );
};

export default App;
