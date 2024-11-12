import React from "react";

// Define the props type for NavbarItem
interface SocialIconProps {
  primaryHeader: string;
  secondaryHeader: string;
}

const Header: React.FC<SocialIconProps> = ({
  primaryHeader,
  secondaryHeader,
  ...props
}) => {
  return (
    <h1 className="text-[94px] font-bold leading-[6rem]" {...props}>
      <p className="text-white">{primaryHeader}</p>
      <p className="text-neutral-800">{secondaryHeader}</p>
    </h1>
  );
};

export default Header;
