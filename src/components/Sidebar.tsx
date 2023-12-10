import ActivityCard from "./ActivityCard";
import { useContext } from "react";
import { sectionContext } from "../App";
import { ACTIVITIES } from "../data/activities";

function Sidebar() {
  const { activeSection } = useContext(sectionContext);

  return (
    <div className="w-[22%] h-screen flex flex-col absolute z-20">
      <div className="w-full h-[4vh] bg-dark"></div>
      <div className="w-full flex-grow bg-light shadow-lg flex flex-col items-center">
        <h1 className="text-4xl my-10 text-black">{activeSection}</h1>
        <div className="flex-grow w-[95%] h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFFFFF] scrollbar-thumb-rounded-md">
          {ACTIVITIES.map((activity, index) => (
            <div key={index} className="w-full h-[25%] mb-5 px-2">
              <ActivityCard
                title={activity.title}
                img={activity.img}
                description={activity.description}
                date={activity.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
