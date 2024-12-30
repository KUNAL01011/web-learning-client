"use client";
import DashboardHero from "@/components/Admin/dashboard/DashboardHero";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/hooks/adminProtected";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <AdminProtected>
      <div>
        <Heading
          title="Web-Lms - Admin"
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programing,MERN,Redux,Machine Learning"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar selected={selected} setSelected={setSelected}/>
          </div>
          <div className="w-[calc(100vw-270px)]">
            <DashboardHero isDashboard = {true}/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
