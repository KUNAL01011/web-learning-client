"use client";
import DashboardHeader from "@/components/Admin/dashboard/DashboardHeader";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import AllUsers from "@/components/Admin/users/AllUsers";
import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("Manage Team");
  return (
    <AdminProtected>
      <div>
        <Heading
          title="LMS - Admin"
          description="LMS is a platfrom for students to learn and get help from teachers"
          keywords="Prograaming, MERN, Redux, Machine Learning"
        />
        <div className="flex h-full">
          <div className="w-[270px]">
            <AdminSidebar selected={selected} setSelected={setSelected} />
          </div>
          <div className="w-[calc(100vw-270px)]">
            <DashboardHeader />
            <AllUsers isTeam = {true}/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
