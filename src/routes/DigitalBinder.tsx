import frame01 from "../assets/images/01 - FRAMED.png";
import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
import Tag from "../components/Tag";
const DigitalBinder = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-2 leading-6 p-2 bg-slate-100">
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg ml-7">Digital Binder</h3>

        <NumberedBlock>
          <p className="">
            The layout organizer that brings structure to your content. With the
            power to automatically arrange your HTML elements and text into a
            clean and reader-friendly layout, Digital Binder is here to simplify
            your content presentation.
          </p>
        </NumberedBlock>

        <Button label={"View project"} className={"ml-7 py-2 mt-auto"} />
      </div>
      <img src={frame01} alt="" className="py-2" />
      <div className="ml-7 items-center flex flex-wrap col-span-2">
        <Tag tag={"React"} />
        <Tag tag={"Tailwind"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
        <Tag tag={"React"} />
      </div>
    </div>
  );
};

export default DigitalBinder;
