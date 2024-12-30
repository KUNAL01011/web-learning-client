"use client";
import DashboardHeader from "@/components/Admin/dashboard/DashboardHeader";
import AllInvoices from "@/components/Admin/invoices/AllInvoices";
import AdminSidebar from "@/components/Admin/sidebar/AdminSidebar";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
    const [selected, setSelected] = useState("Invoices");
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platfrom for students to learn and get help from teachers"
        keywords="Prograaming, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="w-[270px]">
        <AdminSidebar selected={selected} setSelected={setSelected}/>
        </div>
        <div className="w-[calc(100vw-270px)]">
          <DashboardHeader />
          <AllInvoices isDashboard = {true}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
