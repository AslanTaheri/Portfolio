import frame01 from "../assets/images/01 - FRAMED.png";
import NumberedBlock from "../components/NumberedBlock";
const Chunk = () => {
  return (
    <div className="bg-slate-100 leading-6">
      <NumberedBlock>
        <h3 className="font-bold">Chunk</h3>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </NumberedBlock>
      <img src={frame01} alt="" className="py-4" />
    </div>
  );
};

export default Chunk;
