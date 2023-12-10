// App.tsx

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SciencePage from "./components/pages/SciencePage";
import EngineeringPage from "./components/pages/EngineeringPage";
import TechnologyPage from "./components/pages/TechnologyPage";
import MathematicsPage from "./components/pages/MathematicsPage";
import Animation from "./components/Animation";
import LogoAnimationData from "./animations/logoFinal.json";
import { SectionContextProvider } from "./components/SectionContext";

function App() {
  return (
    <SectionContextProvider>
      <div className="w-full bg-light">
        <div className="fixed top-0 right-0 z-10 flex mr-4 mt-4 gap-2">
          <div className="w-14 aspect-square flex justify-center items-center text-white"></div>
          <div className="w-14 aspect-square flex justify-center items-center text-white"></div>
        </div>

        <div className="top-0 w-full h-[35vh] bg-dark flex justify-center items-center">
          <Animation
            animationData={LogoAnimationData}
            loop={true}
            className="w-[40%] translate-y-10"
          />
        </div>

        <div className="sticky top-0 left-0 flex">
          <Sidebar />
          <Navbar />
        </div>

        <div className="flex flex-col">
          <SciencePage />
          <div className="w-full h-[1px] bg-slate-400"></div>
          <TechnologyPage />
          <div className="w-full h-[1px] bg-slate-400"></div>
          <EngineeringPage />
          <div className="w-full h-[1px] bg-slate-400"></div>
          <MathematicsPage />
        </div>
      </div>
    </SectionContextProvider>
  );
}

export default App;
