"use client";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Courses from "@/components/Route/Courses";
import Hero from "@/components/Route/Hero";
import Reviews from "@/components/Route/Reviews";
import Heading from "@/utils/Heading";
import { useState } from "react";

const Home = () => {
  // this state for which is active right route
  const [activeItem] = useState(0);
  // open and close for mobile sidebar open and close
  const [open, setOpen] = useState(false);
  // 
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
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
