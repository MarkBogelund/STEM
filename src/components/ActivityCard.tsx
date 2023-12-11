const ActivityCard = ({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string;
}) => {
  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="w-full h-full flex gap-2 items-center shadow-lg transition-all duration-250 bg-[#f9f9f9] hover:scale-[102%]">
      <img
        className="w-[35%] aspect-square object-cover z-10 ml-3 shadow-sm"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-start z-10 overflow-hidden h-[90%] w-[65%] py-1">
        <h1 className="text-md font-bold mt-0">{title}</h1>
        <p className="text-xs">{truncatedDescription}</p>
      </div>
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
