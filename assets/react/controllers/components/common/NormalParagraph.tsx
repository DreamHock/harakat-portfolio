import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface NormalParagraphProps {
  children: ReactNode; // Accepts any valid React node
}
const NormalParagraph: React.FC<NormalParagraphProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn("text-neutral-400 text-base font-medium", className)}>
      {children}
    </p>
  );
};

export default NormalParagraph;
