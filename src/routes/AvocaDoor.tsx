import imageSrc from "../assets/images/AvocaDoor.png";
import ProjectTemplate from "../components/ProjectTemplate";
import Tag from "../components/Tag";

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
      AvocaDoor is a headless ecommerce solution that serves as a grocery
      shopping storefront. It was my first experience doing a full-scale React
      project, it offered a fantastic opportunity to immerse myself in the world
      of web development. This project allowed me to master essential React
      concepts, bringing me closer to becoming a proficient front-end developer.
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

export default AvocaDoor;
