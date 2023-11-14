import { useEffect, useRef } from "react";

const ActivityCard = ({
  title,
  img,
  description,
  date,
  color,
}: {
  title: string;
  img: string;
  description: string;
  date: string;
  color: string;
}) => {
  const truncatedDescription = truncateText(description, 120);

  const activityRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navbarElement = activityRef.current as HTMLElement;
    console.log(navbarElement);
    if (navbarElement) {
      navbarElement.classList.add("transition-bg-color");
      setTimeout(() => {
        navbarElement.classList.remove("transition-bg-color");
      }, 300);
    }
  }, [color]);

  return (
    <div
      ref={activityRef}
      className={`w-full h-full flex p-2 gap-2 items-center relative transition-all duration-250`}
    >
      <div className="w-[40%] h-[85%] aspect-square bg-black flex items-center z-10">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-start h-[90%] z-10">
        <h1 className="text-xl font-bold mt-0">{title}</h1>
        <p className="text-xs">{date}</p>
        <p>{truncatedDescription}</p>
      </div>
      <div className="absolute inset-0 bg-[#ffffff6d] opacity-70 shadow-lg"></div>
    </div>
  );
};

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}

export default ActivityCard;
