import imageSrc from "../assets/images/AvocaDoor.png";
import ProjectTemplate from "../components/ProjectTemplate";
import Tag from "../components/Tag";

const AvocaDoor = () => {
  const title = "AvocaDoor /";
  const image = <img src={imageSrc} />;
  const tags = (
    <>
      <Tag tag={"React"} />
      <Tag tag={"React"} />
      <Tag tag={"React"} />
      <Tag tag={"React"} />
    </>
  );
  const text = (
    <p>
      The layout organizer that brings structure to your content. With the power
      to automatically arrange your HTML elements and text into a clean and
      reader-friendly layout, Digital Binder is here to simplify your content
      presentation.
    </p>
  );
  return (
    <ProjectTemplate title={title} text={text} tags={tags} image={image} />
  );
};

export default AvocaDoor;
