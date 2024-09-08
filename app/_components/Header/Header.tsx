import { Button } from "@/components/ui/button";
import React from "react";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Logo />
      <Button className="font-semibold">Get Started</Button>
    </div>
  );
};

export default Header;
