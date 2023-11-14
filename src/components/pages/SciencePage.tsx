import ScienceLogo from "../../images/science.svg";

const SciencePage = () => {
  return (
    <div
      id="science"
      className="w-full h-[120vh] flex flex-col items-center gap-5"
    >
      <div className="flex justify-center items-center h-36 mt-[10%] gap-5">
        <img
          className="w-[20%] aspect-square fill-current text-black"
          src={ScienceLogo}
          alt=""
        />
        <h1 className="text-5xl">SCIENCE</h1>
      </div>
      <div className="w-[25%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        quibusdam aliquid incidunt, nam facilis iste dolores dolorem, ducimus
        illo at ipsam temporibus? Ipsa sed fuga alias quae expedita est impedit?
        Lorem ipsum dolor sit
      </div>
      <img
        className="w-[18%] aspect-square object-cover"
        src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default SciencePage;
