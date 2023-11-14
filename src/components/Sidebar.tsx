import ActivityCard from "./ActivityCard";
import { useState, useContext, useEffect } from "react";
import { sectionContext } from "../App";

function Sidebar() {
  const [activities, setActivities] = useState([
    {
      title: "Activity 1",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
    {
      title: "Activity 2",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
    {
      title: "Activity 3",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
    {
      title: "Activity 4",
      img: "https://picsum.photos/200/300",
      description:
        "In the episode of the truman show, i will be playing the role of the truman show. more text is aquired to show the effect of this crop",
      date: "2021-09-01",
    },
    {
      title: "Activity 5",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
    {
      title: "Activity 6",
      img: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet fbd gjklds sd klm sedavksd fgsejkg f mnsd ndb s fas nfm",
      date: "2021-09-01",
    },
    {
      title: "Activity 7",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
    {
      title: "Activity 8",
      img: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet",
      date: "2021-09-01",
    },
  ]);

  const { activeSection, activeSectionColor } = useContext(sectionContext);

  const [section, setSection] = useState("");
  const [sectionColor, setSectionColor] = useState("");

  useEffect(() => {
    setSection(activeSection);
    setSectionColor(activeSectionColor);
  }, [activeSection, activeSectionColor]);

  return (
    <div className="w-[30%] h-screen flex flex-col">
      <div className="w-full h-[5%] bg-dark"></div>
      <div className="w-full flex-grow bg-light shadow-lg flex flex-col items-center">
        <h1 className="text-4xl mt-10 text-black">{section}</h1>
        <div className="w-full h-[0.5%] bg-light mt-10 mb-5"></div>
        <div className="flex-grow w-[95%] h-[400px] overflow-y-scroll no-scrollbar">
          {activities.map((activity, index) => (
            <div key={index} className="w-full h-[25%] mb-5 px-2">
              <ActivityCard
                title={activity.title}
                img={activity.img}
                description={activity.description}
                date={activity.date}
                color={sectionColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
