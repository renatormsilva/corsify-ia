"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  HiMiniSquares2X2,
  HiLightBulb,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory/SelectCategory";
import TopicDescription from "./_components/TopicDescription/TopicDescription";

const CreateCourse: React.FC = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 1,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 1,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const [activeIndex, setActiveindex] = useState(0);
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div className="flex items-center" key={index}>
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white
                  ${activeIndex >= index && "bg-purple-500"}
                  `}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index !== StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                  ${activeIndex - 1 >= index && "bg-purple-500"}
                  `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : null}
        <div className="flex justify-between mt-10">
          <Button
            className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-black"
            disabled={activeIndex == 0}
            onClick={() => setActiveindex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button onClick={() => setActiveindex(activeIndex + 1)}>
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button onClick={() => setActiveindex(activeIndex + 1)}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
