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
            👋 Hello, my name is Aslan! I am a full stack developer, based in
            New York City.
          </h2>
          <p className="tracking-tight md:text-xl md:leading-relaxed">
            The magic of turning code into vibrant life is my calling. I work
            with Typescript in Node.js and React, plus backend technologies such
            as Express and PostgreSQL. I also work with Tailwind CSS and
            Material UI to create efficient products that boast meaningful
            aesthetics. When I'm not diving into my VS Code universe, I'm likely
            improvising something tasty in the kitchen, practicing Jiu Jitsu or
            on a scenic trail for a zen ride. Let's collaborate to engineer your
            next solution!
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
          <Tag tag={"Javascript"} />
          <Tag tag={"Typescript"} />
          <Tag tag={"SQL"} />
          <Tag tag={"HTML"} />
          <Tag tag={"CSS"} />

          <h3 className="font-semibold">Libraries & Frameworks:</h3>

          <Tag tag={"React"} />
          <Tag tag={"Tailwind CSS"} />
          <Tag tag={"Node.js"} />
          <Tag tag={"Express.js"} />
          <Tag tag={"PostgreSQL"} />
          <Tag tag={"MongoDB"} />

          <h3 className="font-semibold">Tools & Platforms:</h3>

          <Tag tag={"Git"} />
          <Tag tag={"Github"} />
          <Tag tag={"Vite"} />
          <Tag tag={"Netlify"} />
          <Tag tag={"Render"} />
          <Tag tag={"Vercel"} />
          <Tag tag={"Firebase"} />
          <Tag tag={"RESTful APIs"} />
          <Tag tag={"Figma"} />
        </div>
      </NumberedBlock>
    </div>
  );
};

export default Intro;
