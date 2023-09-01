import "./App.css";
import Layout from "./routes/Layout";

const App = () => {
  return (
    <div className="">
      <div className="fixed inset-0 background" />
      <div className="fixed inset-0 opacity-[.5] noise mix-blend-lighten" />
      <Layout />
    </div>
  );
};

export default App;
