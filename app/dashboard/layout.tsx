import React from "react";
import SideBar from "./_components/SideBar/SideBar";
import Header from "./_components/Header/Header";

const dashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default dashboardLayout;
