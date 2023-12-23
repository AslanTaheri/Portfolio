import imageSrc from "../../assets/images/CADcircles.png";
import ProjectTemplate from "../ProjectTemplate";
import Tag from "../Tag";

const CAD = () => {
  const liveLink = "/cadcircles";
  const githubLink = "https://github.com/AslanTaheri/CADcircles";
  const title = "CAD Circles/";
  const image = <img src={imageSrc} />;
  const tags = (
    <>
      <Tag tag={"HTML5"} />
      <Tag tag={"Canvas"} />
      <Tag tag={"CreateJS"} />
      <Tag tag={"Vector Graphics"} />
    </>
  );
  const text = (
    <p>
      A playground for drawing simple vector geometries. As a computational
      designer, CAD/CAM software has always been an area of interest for me. I
      coded this simple application to experiment with JavaScript's capabilties
      in manipulating the 2D coordinate system. I will be adding more shapes as
      I continue working on this project!
    </p>
  );
  return (
    <ProjectTemplate
      title={title}
      text={text}
      tags={tags}
      image={image}
      liveLink={liveLink}
      githubLink={githubLink}
    />
  );
};

export default CAD;
