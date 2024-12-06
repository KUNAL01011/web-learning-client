"use client";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="About us - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
