"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import React, {useState } from "react";



const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(5);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
        <Heading
          title={`Kunal Kumar profile`}
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Prograaming,MERN,Redux,RTK,ML,DSA"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        {/* <Profile user={user}/> */}
        <Footer/>
    </div>
  );
};

export default Page;