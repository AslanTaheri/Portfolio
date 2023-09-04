import Layout from "./routes/Layout";
import BkgFilter from "./components/filters/BkgFilter";
import Resume from "./routes/Resume";

const App = () => {
  return (
    <>
      <BkgFilter />
      {/* <Resume /> */}
      <Layout />
    </>
  );
};

export default App;
