import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
const ProjectTemplate = ({ title, text, tags, image }) => {
  return (
    <div className="space-y-2 rounded-2xl border p-2 leading-6 shadow-sm backdrop-blur-xl lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="flex flex-col items-start">
        <h3 className="ml-7 text-lg font-bold md:text-xl">{title}</h3>

        <NumberedBlock>
          <article className="md:text-lg">{text}</article>
        </NumberedBlock>
        <div className="my-auto ml-7 space-y-4">
          <Button label={"View project"} />
          <div className="flex flex-wrap items-center">{tags}</div>
        </div>
      </div>
      <div className="mx-auto md:max-w-md">{image}</div>
    </div>
  );
};

export default ProjectTemplate;
