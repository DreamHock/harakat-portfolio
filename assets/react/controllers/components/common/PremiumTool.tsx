import React from "react";
import NormalParagraph from "./NormalParagraph";

interface PremiumToolProps {
  imgSrc: string;
  tool: string;
  description: string;
  className: string;
}

const PremiumTool: React.FC<PremiumToolProps> = ({
  imgSrc,
  tool,
  description,
  className
}) => {
  return (
    <div className="flex items-center gap-4 w-[300px]">
      <div className={"w-16 h-16 rounded-xl" + className}>
        <img className="rounded-xl " src={imgSrc} alt="" srcset="" />
      </div>
      <div className="">
        <h3 className="text-xl text-white font-semibold">{tool}</h3>
        <NormalParagraph>{description}</NormalParagraph>
      </div>
    </div>
  );
};

export default PremiumTool;
