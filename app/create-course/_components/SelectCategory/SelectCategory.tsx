import React from "react";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";

const SelectCategory = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-10 md:px-20">
      {CategoryList.map((item, index) => (
        <div
          className="flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer"
          key={index}
        >
          <Image src={item.icon} width={100} height={100} alt="icon" />
          <h2> {item.name} </h2>
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
