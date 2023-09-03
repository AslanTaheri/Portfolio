import imageSrc from "../assets/images/RestaurantsApp.png";
import ProjectTemplate from "../components/ProjectTemplate";
import Tag from "../components/Tag";

const Restaurants = () => {
  const title = "My Restaurant Adventures /";
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
      A minimal yet quick way to share and review your favorite food spots with
      friends and family.
    </p>
  );
  return (
    <ProjectTemplate title={title} text={text} tags={tags} image={image} />
  );
};

export default Restaurants;
