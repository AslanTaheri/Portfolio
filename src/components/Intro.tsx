import Button from "./Button";
import NumberedBlock from "./NumberedBlock";

const Intro = () => {
  return (
    <div className="container flex flex-col mx-auto p-6 lg:mb-0">
      <div className="flex flex-col space-y-5 mt-4">
        <NumberedBlock>
          <div className="bg-slate-100 leading-6">
            <h2 className="font-bold">
              Greetings! My name is Aslan. I am a developer, based in New York
              City.
            </h2>
            <p className="whitespace-pre-wrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              fugiat, maiores culpa asperiores iure vitae magni. Omnis, debitis
              incidunt eos dolore delectus ea aspernatur tenetur reiciendis
              pariatur. Quibusdam, veniam quam hic impedit veritatis similique,
              deserunt illum sit ipsa cumque, soluta amet aut doloribus in rem?
              Laborum consectetur repellat fugit sit.
            </p>
          </div>
        </NumberedBlock>
        <div className="flex items-center ml-8 w-full space-x-4 lg:justify-start">
          <Button label={"My Linedin"} link={""} />
          <Button label={"My GitHub"} link={""} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
