"use client";
import Header from "@/components/Header";
import Heading from "@/utils/Heading";
import { useState } from "react";

const Home = () => {
  const [activeItem,] = useState(0);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="LMS"
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
    </div>
  );
};

export default Home;
