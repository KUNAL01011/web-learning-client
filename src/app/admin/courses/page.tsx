"use client";

import AllCourses from "@/components/Admin/course/AllCourses";
import DashboardHeader from "@/components/Admin/dashboard/DashboardHeader";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("Live Courses");
  return (
    <AdminProtected>
      <div>
        <Heading
          title="Web-Lms - Admin"
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programing,MERN,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="w-[270px]">
            <AdminSidebar selected={selected} setSelected={setSelected} />
          </div>
          <div className="w-[calc(100vw-270px)]">
            <DashboardHeader />
            <AllCourses/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
