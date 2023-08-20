import CodeBase from "./CodeBase";

const Intro = () => {
  const text = `{ My name is Aslan.
  I am a developer from the Narnia, currently based in New York City.
I work on code.}`;

  return (
    <CodeBase>
      <div className="bg-green-100 text-base/6 ">
        {/* <CodeBase code={text} /> */}
        {text}
      </div>
    </CodeBase>
  );
};

export default Intro;
