import EngineeringLogo from "../../images/engeneering.svg";

const EngineeringPage = () => {
  return (
    <div
      id="engenieering"
      className="w-full h-[120vh] flex flex-col items-center gap-5"
    >
      <div className="flex justify-center items-center h-36 mt-[10%] gap-5">
        <img
          className="w-[20%] aspect-square fill-current text-black"
          src={EngineeringLogo}
          alt=""
        />
        <h1 className="text-5xl">ENGINEERING</h1>
      </div>
      <img
        className="w-[20%] aspect-square object-cover"
        src="https://images.pexels.com/photos/4709377/pexels-photo-4709377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="w-[30%] h-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        quibusdam aliquid incidunt, nam facilis iste dolores dolorem, ducimus
        illo at ipsam temporibus? Ipsa sed fuga alias quae expedita est impedit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        quibusdam aliquid incidunt, nam facilis iste dolores dolorem, ducimus
        illo at ipsam temporibus? Ipsa sed fuga alias quae expedita est impedit?
      </div>
    </div>
  );
};

export default EngineeringPage;
