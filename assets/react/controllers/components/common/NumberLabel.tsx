import React from "react";
import NormalParagraph from "./NormalParagraph";

// Define the props type for NavbarItem
interface SocialIconProps {
  number: string;
  label: string;
}

const NumberLabel: React.FC<SocialIconProps> = ({ number, label }) => {
  return (
    <h1 className="font-semibold bg-neutral-900 px-6 pb-6 rounded-lg">
      <p className="text-white text-[70px]">{number}</p>
      <NormalParagraph className="text[16px] w-20">{label}</NormalParagraph>
    </h1>
  );
};

export default NumberLabel;
