import React from "react";
import SciencePage from "../pages/SciencePage";
import TechnologyPage from "../pages/TechnologyPage";
import EngineeringPage from "../pages/EngineeringPage";
import MathematicsPage from "../pages/MathematicsPage";

const Pages: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SciencePage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <TechnologyPage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <EngineeringPage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <MathematicsPage />
    </div>
  );
};

export default Pages;
