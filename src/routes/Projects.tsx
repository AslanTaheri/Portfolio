import Restaurants from "./Restaurants";
import AvocaDoor from "./AvocaDoor";
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
        <div>
          <Restaurants />
        </div>
      </div>
    </div>
  );
};

export default Projects;
