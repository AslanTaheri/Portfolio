import Restaurants from "./Restaurants";
import AvocaDoor from "./AvocaDoor";
import DigitalBinder from "./DigitalBinder";

const Projects = () => {
  return (
    <div className="container mx-auto mt-6 p-6">
      <div className="grid gap-16">
        <div>
          <DigitalBinder />
        </div>
        <div>
          <Restaurants />
        </div>
        <div>
          <AvocaDoor />
        </div>
      </div>
    </div>
  );
};

export default Projects;
