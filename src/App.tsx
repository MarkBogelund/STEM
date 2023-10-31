import Navbar from "./components/Navbar";
import SciencePage from "./components/pages/SciencePage";
import EngineeringPage from "./components/pages/EngineeringPage";
import TechnologyPage from "./components/pages/TechnologyPage";
import MathematicsPage from "./components/pages/MathematicsPage";

function App() {
  return (
    <div className="w-full bg-light">
      <div className="top-0 w-full h-[35vh] bg-dark"></div>
      <Navbar />
      <div className="w-full h-[50vh] flex justify-center items-center">
        <h1 className="text-xl">
          Det nye initiativ for en strømlignet naturvidenskabelig karriere
        </h1>
      </div>
      <div className="w-full h-[1px] bg-slate-400"></div>
      <SciencePage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <TechnologyPage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <EngineeringPage />
      <div className="w-full h-[1px] bg-slate-400"></div>
      <MathematicsPage />
    </div>
  );
}

export default App;
