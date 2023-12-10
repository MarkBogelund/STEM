import ScienceLogo from "../../images/science.svg";
import { IMAGE_LINKS } from "../../utilities/image_links";

const SciencePage = () => {
  return (
    <div id="science" className="w-full h-[120vh] bg-[#fafcff]">
      <div className="grid grid-cols-3 w-full mt-[10%]">
        <div></div>
        <div className="mb-10">
          <div className="flex justify-start items-end gap-5">
            <img
              className="w-[15%] aspect-square fill-current text-black"
              src={ScienceLogo}
              alt=""
            />
            <h1 className="text-5xl">SCIENCE</h1>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col gap-5">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quibusdam aliquid incidunt, nam facilis iste dolores dolorem,
            ducimus illo at ipsam temporibus? Ipsa sed fuga alias quae expedita
            est impedit? Lorem ipsum dolor sit
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quibusdam aliquid incidunt, nam facilis iste dolores dolorem,
            ducimus illo at ipsam temporibus? Ipsa sed fuga alias quae expedita
            est impedit? Lorem ipsum dolor sit
          </p>
        </div>
        <div>
          <img
            className="w-[50%] aspect-square object-cover ml-10"
            src={IMAGE_LINKS.SCIENCE_IMAGE}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SciencePage;
