import ActivityCard from "./ActivityCard";
import { ACTIVITIES } from "../data/activities";
import { useSectionContext } from "./SectionContext";

function Sidebar() {
  const { activeSection } = useSectionContext();

  return (
    <div className="w-[23%] h-screen flex flex-col absolute z-20">
      <div className="w-full h-[3vh]"></div>
      <div className="w-full flex-grow bg-[#ffffff] shadow-lg flex flex-col items-center">
        <h1 className="text-4xl my-10 text-black">{activeSection}</h1>
        <div className="flex-grow w-[95%] h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFFFFF]">
          {ACTIVITIES.map((activity, index) => (
            <div key={index} className="w-full h-[25%] mb-5 px-2">
              <ActivityCard
                title={activity.title}
                img={activity.img}
                description={activity.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
