import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
const ProjectTemplate = ({ title, text, tags, image }) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-2 leading-6 p-2 bg-slate-100">
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg md:text-xl ml-7">{title}</h3>

        <NumberedBlock>
          <article className="md:text-lg">{text}</article>
        </NumberedBlock>
        <div className="my-auto">
          <Button label={"View project"} className={"ml-7 py-2 mb-2"} />
          <div className="ml-7 items-center flex flex-wrap">{tags}</div>
        </div>
      </div>
      <div className="md:max-w-md mx-auto">{image}</div>
    </div>
  );
};

export default ProjectTemplate;
