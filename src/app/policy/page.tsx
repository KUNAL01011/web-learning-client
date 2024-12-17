"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import React, { useState } from "react";
import Policy from "./Policy";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Policy - Elearning"
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
      <Policy />
      <Footer />
    </div>
  );
};

export default Page;