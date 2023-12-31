import Button from "./Button";
import NumberedBlock from "./NumberedBlock";
import Tag from "./Tag";
import resume from "../assets/Resume.pdf";

const Intro = () => {
  return (
    <div className="flex min-h-[calc(85vh)] flex-col place-content-center gap-12 bg-transparent p-6 lg:mb-0">
      <NumberedBlock>
        <div className="space-y-8">
          <h2 className="text-xl font-bold italic md:text-2xl">
            👋 Hello, my name is Aslan! I am a software engineer, based in New
            York City.
          </h2>
          <p className="tracking-tight md:text-xl md:leading-relaxed">
            As a software engineer with an artistic background in computational
            design in architecture from Yale University and a B.Sc. in computer
            science and structural engineering, I am passionate about solving
            problems at the intersection of design and engineering. Blending
            excellence in design with engineered efficiency is what I strive
            for.
          </p>
        </div>
      </NumberedBlock>
      <div className="ml-7 flex space-x-4 lg:justify-start">
        <Button
          label={"Linedin"}
          link={"https://www.linkedin.com/in/aslantaheri/"}
        />
        <Button label={"GitHub"} link={"https://github.com/AslanTaheri"} />
        {/* <a href="" download={resume}> */}
        <Button label={"Resume"} link={resume} />
        {/* </a> */}
      </div>
      <NumberedBlock>
        <h2 className="font-bold md:text-2xl">My digital tool kit /</h2>
        <div className="my-3 flex flex-wrap items-center gap-1 text-sm leading-relaxed tracking-tight md:gap-y-3 md:text-base">
          <h3 className="font-semibold">Programming:</h3>
          <Tag tag={"Python"} />
          <Tag tag={"Javascript"} />
          <Tag tag={"Typescript"} />
          <Tag tag={"SQL"} />
          <Tag tag={"LISP"} />
          <Tag tag={"HTML"} />
          <Tag tag={"CSS"} />

          <h3 className="font-semibold">Libraries & Frameworks:</h3>

          <Tag tag={"Node.js"} />
          <Tag tag={"Express.js"} />
          <Tag tag={"PostgreSQL"} />
          <Tag tag={"MongoDB"} />
          <Tag tag={"React"} />
          <Tag tag={"Material UI"} />
          <Tag tag={"Tailwind CSS"} />

          <h3 className="font-semibold">Tools & Platforms:</h3>

          <Tag tag={"AWS"} />
          <Tag tag={"Microsoft Azure"} />
          <Tag tag={"Git"} />
          <Tag tag={"Jest"} />
          <Tag tag={"Cypress"} />
          <Tag tag={"REST APIs"} />
          <Tag tag={"GraphQL"} />

          <h3 className="font-semibold">Skills:</h3>

          <Tag tag={"Object Oriented Programming"} />
          <Tag tag={"Agile Development"} />
          <Tag tag={"Test Driven Development"} />
          <Tag tag={"CI/CD"} />
        </div>
      </NumberedBlock>
    </div>
  );
};

export default Intro;
