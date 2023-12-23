import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
import { Link } from "react-router-dom";

const ProjectTemplate = ({
  title,
  text,
  tags,
  image,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="space-y-2 rounded-2xl border p-2 leading-6 shadow-sm backdrop-blur-xl lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="flex flex-col items-start">
        <h3 className="ml-7 text-lg font-bold md:text-xl">{title}</h3>

        <NumberedBlock>
          <article className="md:text-lg">{text}</article>
        </NumberedBlock>
        <div className="my-auto ml-7 space-y-4">
          {liveLink && (
            <Link
              className={
                "rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white shadow-lg transition-colors duration-500 hover:bg-transparent hover:text-black hover:outline hover:outline-2 hover:backdrop-blur-sm md:text-base"
              }
              to={liveLink}
            >
              Play Live
            </Link>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ml-2 mr-4 inline-block font-medium"
            >
              View on GitHub
              <FontAwesomeIcon icon={faGithub} size="xl" className="mx-2" />
              <span className="invisible absolute bottom-full mt-2 whitespace-nowrap rounded-full p-2 text-xs outline outline-1 group-hover:visible">
                View on Github
              </span>
            </a>
          )}

          <div className="flex flex-wrap items-center gap-1">{tags}</div>
        </div>
      </div>
      <div className="mx-auto md:max-w-md">{image}</div>
    </div>
  );
};

export default ProjectTemplate;
