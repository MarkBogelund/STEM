import ScienceLogo from "../images/science.svg";
import { IMAGE_LINKS } from "../utilities/image_links";
import { page_information } from "../data/page_information";

const SciencePage = () => {
  return (
    <div id="science" className="w-full h-[120vh] bg-[#ffffff]">
      <div className="grid grid-cols-3 w-full mt-[10%]">
        <div></div>
        <div className="mb-10">
          <div className="flex justify-start items-end gap-5">
            <img
              className="w-[15%] aspect-square fill-current text-black"
              src={ScienceLogo}
              alt=""
            />
            <h1 className="text-4xl">SCIENCE</h1>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col gap-5">
          <p className="">{page_information.science_section_1}</p>
          <p className="">{page_information.science_section_2}</p>
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
