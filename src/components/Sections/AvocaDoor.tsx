import imageSrc from "../../assets/images/AvocaDoor.png";
import ProjectTemplate from "../ProjectTemplate";
import Tag from "../Tag";

const AvocaDoor = () => {
  const liveLink = "https://avocadoor.netlify.com";
  const githubLink = "https://github.com/AslanTaheri/AvocaDoor";
  const title = "AvocaDoor /";
  const image = <img src={imageSrc} />;
  const tags = (
    <>
      <Tag tag={"React"} />
      <Tag tag={"Vite"} />
      <Tag tag={"CSS"} />
      <Tag tag={"Netlify"} />
    </>
  );
  const text = (
    <p>
      AvocaDoor is a headless ecommerce solution that serves as a shopping
      storefront for taking orders and cart management, developed with React.
    </p>
  );
  return (
    <ProjectTemplate
      title={title}
      text={text}
      tags={tags}
      image={image}
      // liveLink={liveLink}
      githubLink={githubLink}
    />
  );
};

export default AvocaDoor;
