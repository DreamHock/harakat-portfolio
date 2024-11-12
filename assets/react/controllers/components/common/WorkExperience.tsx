import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import NormalParagraph from "./NormalParagraph";

interface WorkExperienceProps {
  company: string;
  duration: string;
  description: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  duration,
  description,
}) => {
  return (
    <div className="group flex  w-[700px] py-6 px-4 bg-neutral-900 hover:bg-neutral-800 rounded-xl">
      <div className="flex flex-col gap-4">
        <h3 className=" font-semibold text-[26px] text-white">{company}</h3>
        <NormalParagraph>{description}</NormalParagraph>
        <NormalParagraph>{duration}</NormalParagraph>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="1.5em"
          viewBox="0 0 24 24"
          className="text-orange-600 group-hover:translate-x-3 group-hover:-translate-y-3 duration-150"
        >
          <path
            fill="currentColor"
            d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WorkExperience;
