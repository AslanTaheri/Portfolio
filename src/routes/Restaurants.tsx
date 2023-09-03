import imageSrc from "../assets/images/RestaurantsApp.png";
import ProjectTemplate from "../components/ProjectTemplate";
import Tag from "../components/Tag";

const Restaurants = () => {
  const liveLink = "https://myrestaurantsapp.netlify.com";
  const githubLink = "https://github.com/AslanTaheri/Restaurants";
  const title = "My Restaurant Adventures /";
  const image = <img src={imageSrc} />;
  const tags = (
    <>
      <Tag tag={"Javascipt"} />
      <Tag tag={"Node.js"} />
      <Tag tag={"Express.js"} />
      <Tag tag={"PostgreSQL"} />
      <Tag tag={"React"} />
      <Tag tag={"Vite"} />
      <Tag tag={"Tailwind"} />
      <Tag tag={"Render"} />
      <Tag tag={"Netlify"} />
    </>
  );
  const text = (
    <p>
      A full-stack app;ocation that provides a minimal yet quick way to share
      and review your favorite food spots with friends and family. I wrote the
      backend of this project with Node.js and PostgreSQL. The Express API and
      PostgreSQL database are deployed on Render.com serving the React frontend
      deployed on Netlify. Please checkout the Github link below to explore
      what's under the hood!
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

export default Restaurants;
