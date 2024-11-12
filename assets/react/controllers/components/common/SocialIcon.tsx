import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// Define the props type for NavbarItem
interface SocialIconProps {
  children: ReactNode; // Accepts any valid React node
  content: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ content, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <a href="#" className="text-orange-600 text-3xl">
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={13}>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialIcon;
