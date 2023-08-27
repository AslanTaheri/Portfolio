import AvocaDoor from "./AvocaDoor";
import Chunk from "./Chunk";
import DigitalBinder from "./DigitalBinder";

const Projects = () => {
  return (
    <div className="container mx-auto p-6 mt-6">
      <div className="grid gap-16">
        <div>
          <DigitalBinder />
        </div>
        <div>
          <AvocaDoor />
        </div>
        <div>{/* <DigitalBinder /> */}</div>
      </div>
    </div>
  );
};

export default Projects;
