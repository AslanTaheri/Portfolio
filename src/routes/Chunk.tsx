import card from "../assets/images/Square_template.png";
import Button from "../components/Button";
import NumberedBlock from "../components/NumberedBlock";
import Tag from "../components/Tag";
const Chunk = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-2 leading-6 p-2 bg-slate-100">
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg ml-7">Digital Binder</h3>

        <NumberedBlock>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est
            similique impedit provident ut excepturi, aspernatur dolores
            veritatis corrupti quod necessitatibus perferendis suscipit ipsam
            eos illum tenetur veniam aliquam soluta neque at quae assumenda!
            Ipsum aut doloribus cumque, sapiente expedita dolore at nostrum
            accusamus ab facere animi odit adipisci quam voluptatibus
            necessitatibus hic ipsa ratione exercitationem beatae natus ducimus!
            Laboriosam iusto saepe unde ab corporis.
          </p>
        </NumberedBlock>
        <div className="my-auto">
          <Button label={"View project"} className={"ml-7 py-2 mb-2"} />
          <div className="ml-7 items-center flex flex-wrap">
            <Tag tag={"Javascript"} />
            <Tag tag={"React"} />
            <Tag tag={"CSS"} />
            <Tag tag={"Figma"} />
            <Tag tag={"Netlify"} />
          </div>
        </div>
      </div>
      <img src={card} alt="" className="md:max-w-md mx-auto" />
    </div>
  );
};

export default Chunk;
