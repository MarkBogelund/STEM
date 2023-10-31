import Lottie from "lottie-react";

interface AnimationProps {
  animationData: any;
  loop: boolean;
  className: string;
}

const Animation: React.FC<AnimationProps> = ({
  animationData,
  loop,
  className,
}) => {
  return (
    <div
      className={`flex justify-center items-center aspect-square ${className}`}
    >
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};

export default Animation;
