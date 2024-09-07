import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
        <p className="font-bold">Coursify IA</p>
      </div>
      <Button className="font-semibold">Get Started</Button>
    </div>
  );
};

export default Header;
