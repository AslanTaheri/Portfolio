import frame01 from "../assets/images/01 - FRAMED.png";
import NumberedBlock from "../components/NumberedBlock";
const DigitalBinder = () => {
  return (
    <div className="grid md:grid-cols-2 bg-slate-100 leading-6">
      <NumberedBlock>
        <h3 className="font-bold">Digital Binder</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi ex
          voluptatem reiciendis exercitationem aperiam rem doloremque
          repudiandae et asperiores. Quo facilis vitae amet ex non labore nemo a
          porro eos. Harum molestias, doloribus voluptas dolore magnam
          consequatur, placeat illum, voluptatibus obcaecati dolores omnis eum
          expedita excepturi explicabo! Consectetur, assumenda.
        </p>
      </NumberedBlock>
      <img src={frame01} alt="" className="" />
    </div>
  );
};

export default DigitalBinder;
