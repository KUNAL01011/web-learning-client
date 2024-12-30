"use client";
import CreateCourse from "@/components/Admin/course/CreateCourse";
import DashboardHeader from "@/components/Admin/dashboard/DashboardHeader";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("Create Course");
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platfrom for students to learn and get help from teachers"
        keywords="Prograaming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="w-[270px]">
          <AdminSidebar selected={selected} setSelected={setSelected} />
        </div>
        <div className="w-[calc(100vw-270px)]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default Page;
