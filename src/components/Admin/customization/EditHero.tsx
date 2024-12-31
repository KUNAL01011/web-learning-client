import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import { styles } from "@/styles/style";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";

const EditHero = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("Hero updated successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isSuccess, error]);

  const handleUpdate = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleEdit = async () => {
    await editLayout({
      type: "Banner",
      image,
      title,
      subTitle,
    });
  };
  return (
    <>
      <div className="w-full 1000px:flex items-center mt-[88px]">
        {/* <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vh] hero_animation rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"></div> */}
        <div className="w-full">
          <div className="w-full flex justify-center mb-4">
            {/* logo  */}
            <div className="relative flex items-center justify-center bg-red-600 rounded-full">
              <Image width={300} height={300} src={image} alt="" className="" />
              <input
                type="file"
                name=""
                id="banner"
                accept="image/*"
                onChange={handleUpdate}
                className="hidden"
              />
              <label htmlFor="banner" className="absolute top-0 right-0 z-20">
                <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
              </label>
            </div>
          </div>
          <div className="w-[60%] m-auto pt-8 flex flex-col">
            {/* Title  */}
            <label htmlFor="" className={`${styles.lable}`}>Title</label>
            <textarea
              className={`${styles.input}`}
              placeholder="Improve Your Online Learning Experience Better Instantly"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows={4}
            />
            <br />
            {/* discription  */}
            <label htmlFor="" className={`${styles.lable}`}>Description</label>
            <textarea
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              placeholder="We have 48K+ Online courses & 500k+  Online registerd student. Find Your desired Courses from them."
              className={`${styles.input}`}
            ></textarea>
          </div>
          <div
            className={`${
              styles.button
            } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] ${
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? "!cursor-pointer !bg-[#42d383]"
                : "!cursor-not-allowed"
            } !rounded absolute bottom-12 right-12`}
            onClick={
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? handleEdit
                : () => null
            }
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHero;
// 8:30
