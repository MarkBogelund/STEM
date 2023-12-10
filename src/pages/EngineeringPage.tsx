import EngineeringLogo from "../images/engineering.svg";
import { IMAGE_LINKS } from "../utilities/image_links";
import { page_information } from "../data/page_information";

const EngineeringPage = () => {
  return (
    <div id="engineering" className="w-full h-[120vh] bg-[#fefbfb]">
      <div className="grid grid-cols-3 w-full mt-[10%]">
        <div></div>
        <div className="mb-10">
          <div className="flex justify-start items-end gap-5">
            <img
              className="w-[15%] aspect-square fill-current text-black"
              src={EngineeringLogo}
              alt=""
            />
            <h1 className="text-5xl">ENGINEERING</h1>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col gap-5">
          <p className="">{page_information.engineering_section_1}</p>
          <p className="">{page_information.engineering_section_2}</p>
        </div>
        <div>
          <img
            className="w-[50%] aspect-square object-cover ml-10"
            src={IMAGE_LINKS.ENGINEERING_IMAGE}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EngineeringPage;
