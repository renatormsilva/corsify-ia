import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 30,
  height = 30,
  className = "font-bold",
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/favicon.svg"} width={width} height={height} alt="logo" />
      <p className={className}>Coursify IA</p>
    </div>
  );
};

export default Logo;
