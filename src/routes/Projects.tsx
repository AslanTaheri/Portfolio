import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
import Chunk from "./Chunk";
import DigitalBinder from "./DigitalBinder";

const Projects = () => {
  return (
    <div className="container mx-auto p-6 mt-6">
      <div className="flex flex-col gap-10">
        <div>
          <DigitalBinder />
        </div>
        <div>
          <DigitalBinder />
          <Button label={"GitHub"} />
        </div>
        <div>
          <DigitalBinder />
        </div>
      </div>
      <div>
        <h3>AvocaDoor</h3>
      </div>
      <div>
        <h3>Yelp Clone</h3>
      </div>
    </div>
  );
};

export default Projects;
