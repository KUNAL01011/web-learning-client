import Ratings from "@/utils/Ratings";
import Link from "next/link";
import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  // item: any;
  isProfile?: boolean;
};

const CourseCard = ({ isProfile }: Props) => {
  return (
    <Link href={!isProfile ? `/course/100000` : `course-access/10000`}>
      <div className="w-full min-h-[35vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner">
        <img
          src="./assets/dsa.jpg"
          width={500}
          height={300}
          className="rounded w-full object-cover"
          alt=""
        />
        <br />
        <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff]">
          DSA Course
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={5} />
          <h5
            className={`text-black dark:text-[#fff] ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            45 Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black dark:text-[#fff]">Free</h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
              250$
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              25 Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
