"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import React, { useState } from "react";
import About from "./About";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div>
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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
