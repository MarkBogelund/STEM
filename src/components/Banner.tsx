import React from "react";
import Animation from "./Animation";
import LogoAnimationData from "../animations/logoFinal.json";
import BannerVideo from "../videos/bannerVideoDemoDone.mp4";

const Banner: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 right-0 z-10 flex mr-4 mt-4 gap-2">
        <div className="w-14 aspect-square flex justify-center items-center text-white"></div>
        <div className="w-14 aspect-square flex justify-center items-center text-white"></div>
      </div>

      <div className="top-0 w-full h-[45vh] bg-dark flex justify-center items-center">
        {/* <Animation
          animationData={LogoAnimationData}
          loop={true}
          className="w-[40%] translate-y-10"
        /> */}
        <video
          className="w-full h-full object-cover"
          src={BannerVideo}
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default Banner;
