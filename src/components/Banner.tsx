import React from "react";
import BannerVideo from "../videos/bannerVideoDemoDone.mp4";
import SDU_logo from "../images/SDU_logo.svg";
import STEM_logo from "../images/STEM_logo.svg";

const Banner: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 right-0 z-10 flex justify-center h-[6vh]">
        <img
          src={STEM_logo}
          alt=""
          className="scale-[100%] z-20 w-[100%] h-[100%]"
        />
        <img
          src={SDU_logo}
          alt=""
          className="scale-[100%] z-20 w-[100%] h-[100%]"
        />
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
