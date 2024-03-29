import TechnologyLogo from "../images/technology_page_logo.svg";
import { IMAGE_LINKS } from "../utilities/image_links";
import { page_information } from "../data/page_information";

const TechnologyPage = () => {
  return (
    <div id="technology" className="w-full h-[120vh] bg-[#ffffff]">
      <div className="grid grid-cols-3 w-full mt-[10%]">
        <div></div>
        <div className="mb-10">
          <div className="flex justify-start items-end gap-5">
            <img
              className="w-[15%] aspect-square fill-current text-black"
              src={TechnologyLogo}
              alt=""
            />
            <h1 className="text-4xl font-didact-gothic">Technology</h1>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-col gap-5">
          <p className="font-libre-baskerville">
            {page_information.technology_section_1}
          </p>
          <p className="font-libre-baskerville">
            {page_information.technology_section_2}
          </p>
        </div>
        <div>
          <img
            className="w-[50%] aspect-square object-cover ml-10"
            src={IMAGE_LINKS.TECHNOLOGY_IMAGE}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
