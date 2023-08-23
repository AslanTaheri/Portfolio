import Button from "./Button";
import NumberedBlock from "./NumberedBlock";

const Intro = () => {
  return (
    <div className="container flex flex-col mx-auto p-6 lg:mb-0">
      <div className="flex flex-col space-y-5 mt-4">
        <NumberedBlock>
          <div className="bg-slate-100 leading-6">
            <h2 className="font-bold">
              Hello! My name is Aslan. I am a full-stack developer, based in New
              York City.
            </h2>
            <p className="whitespace-pre-wrap">
              The magic of turning code into vibrant life is my calling. With a
              background in design and engineering, my focus is creating
              efficient products that boast meaningful aesthetics. When I'm not
              diving into my VS Code universe, I'm likely improvising something
              tasty in the kitchen, practicing Jiu Jitsu or on a scenic trail
              for a zen ride. Let's collaborate to engineer your next solution!
            </p>
          </div>
        </NumberedBlock>
        <div className="flex py-4 ml-8 space-x-4 lg:justify-start">
          <Button
            label={"My Linedin"}
            link={"https://www.linkedin.com/in/aslantaheri/"}
          />
          <Button label={"My GitHub"} link={"https://github.com/AslanTaheri"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
