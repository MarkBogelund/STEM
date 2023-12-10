const ActivityCard = ({
  title,
  img,
  description,
  date,
}: {
  title: string;
  img: string;
  description: string;
  date: string;
}) => {
  const truncatedDescription = truncateText(description, 120);

  return (
    <div
      className={`w-full h-full flex p-2 gap-2 items-center relative transition-all duration-250 bg-white`}
    >
      <img
        className="w-[40%] aspect-square object-cover z-10 ml-3 shadow-sm"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-start h-[90%] z-10 overflow-hidden">
        <h1 className="text-xl font-bold mt-0">{title}</h1>
        <p className="text-xs">{date}</p>
        <p>{truncatedDescription}</p>
      </div>
      <div className="absolute inset-0 bg-[#ffffff6d] shadow-md"></div>
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
