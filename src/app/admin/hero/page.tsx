"use client";
import EditHero from "@/components/Admin/customization/EditHero";
import DashboardHeader from "@/components/Admin/dashboard/DashboardHeader";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("Hero");
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platfrom for students to learn and get help from teachers"
        keywords="Prograaming, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="w-[270px]">
          <AdminSidebar selected={selected} setSelected={setSelected} />
        </div>
        <div className="w-[calc(100vw-270px)]">
          <DashboardHeader />
          <EditHero />
        </div>
      </div>
    </div>
  );
};

export default Page;
