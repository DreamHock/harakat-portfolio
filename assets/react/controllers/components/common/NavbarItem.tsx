import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// Define the props type for NavbarItem
interface NavbarItemProps {
  children: ReactNode; // Accepts any valid React node
  content: string; // Content for the tooltip, which is a string
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, content, link }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <a href={link} className="text-white">
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

export default NavbarItem;
