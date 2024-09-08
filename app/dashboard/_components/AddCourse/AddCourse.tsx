"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AddCourse: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">
        Hello, <span className="font-bold">{user?.fullName}</span>
        <p className="text-sm text-gray-500">
          Create new course with AI, share knowledge and empower others.
        </p>
      </h2>
      <Link href={"/create-course"}>
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
};

export default AddCourse;
