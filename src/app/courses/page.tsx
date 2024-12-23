"use client";
import CourseCard from "@/components/Course/CourseCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { styles } from "@/styles/style";
import Heading from "@/utils/Heading";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Courses = () => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");

  return (
    <div>
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
        <Heading
          title={"All courses - Elearning"}
          description="Elearning is a programming community."
          keywords="Programming community, coding skills, expert insights, collaboration, growth"
        />
        <br />
        <div className="w-full flex items-center flex-wrap">
          <div
            className={`h-[35px] ${
              category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"
            } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
            onClick={() => setCategory("All")}
          >
            All
          </div>
          {/* WIP : All categories */}
        </div>
        {/* <p
          className={`${styles.lable} justify-center min-h-[50vh] flex items-center`}
        >
          {search
            ? "No courses found!"
            : "No courses found in this category. Please try another one!"}
        </p> */}
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {/* Course Card  */}
          {/* <CourseCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
