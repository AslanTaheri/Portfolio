import CodeBase from "./CodeBase";

const Intro = () => {
  const text = `{ My name is Aslan.
  I am a developer from the Narnia, currently based in New York City.
I work on code.}`;

  return (
    <div className="bg-slate-100 leading-5">
      <CodeBase code={text} />
    </div>
  );
};

export default Intro;
