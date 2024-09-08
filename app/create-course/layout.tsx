import React from "react";
import Header from "../dashboard/_components/Header/Header";
const CreateCourseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CreateCourseLayout;
