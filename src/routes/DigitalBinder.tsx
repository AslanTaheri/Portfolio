import imageSrc from "../assets/images/DigitalBinder.png";
import ProjectTemplate from "../components/ProjectTemplate";
import Tag from "../components/Tag";

const DigitalBinder = () => {
  const liveLink = "https://github.com/AslanTaheri/portfolio";
  const githubLink = "https://github.com/AslanTaheri/portfolio";
  const title = "Digital Binder /";
  const image = <img src={imageSrc} />;
  const tags = (
    <>
      <Tag tag={"Javascript"} />
      <Tag tag={"Typescript"} />
      <Tag tag={"React"} />
      <Tag tag={"Tailwind"} />
      <Tag tag={"Vite"} />
      <Tag tag={"Netlify"} />
    </>
  );
  const text = (
    <p>
      Digital Binder is a layout organizer that brings structure to your
      content. With the power to automatically arrange your HTML elements and
      text into a clean and reader-friendly layout, Digital Binder is here to
      simplify your content presentation. I am developing this product using
      Typescript and React, and currently my personal website uses this product
      to present my projects.
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

export default DigitalBinder;
