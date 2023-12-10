import React from "react";
import BannerVideo from "../videos/bannerVideoDemoDone.mp4";
import ScienceLogo from "../images/science.svg";
import TechnologyLogo from "../images/technology.svg";
import EngineeringLogo from "../images/engineering.svg";
import MathematicsLogo from "../images/mathematics.svg";

const Banner: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 right-0 z-10 flex justify-center gap-2 h-[6vh]">
        <div className="w-[14%] aspect-square fill-current flex justify-center items-center text-white">
          <img src={ScienceLogo} alt="" />
        </div>
        <div className="w-[14%] aspect-square fill-current flex justify-center items-center text-white">
          <img src={TechnologyLogo} alt="" />
        </div>
        <div className="w-[14%] aspect-square fill-current flex justify-center items-center text-white">
          <img src={EngineeringLogo} alt="" />
        </div>
        <div className="w-[14%] aspect-square fill-current flex justify-center items-center text-white">
          <img src={MathematicsLogo} alt="" />
        </div>
      </div>

      <div className="relative w-full h-[60vh] bg-dark">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={BannerVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
