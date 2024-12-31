"use client";
import CustomModal from "@/utils/CustomModal";
import NavItems from "@/utils/NavItems";
import { ThemeSwitcher } from "@/utils/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Verification from "./Auth/Verification";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import avatar from "../../public/assets/avatar.png";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header = ({ activeItem, setOpen, route, open, setRoute }: Props) => {
  const [active] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };
  const {
    data: userData,
    isLoading,
    refetch,
  } = useLoadUserQuery(undefined, {});

  // social auth
  const { data } = useSession();
  const [socialAuth, { }] = useSocialAuthMutation();

  useEffect(() => {
    if (data && !userData && !isLoading) {
      // Perform social authentication when data exists
      const handleSocialAuth = async () => {
        try {
          await socialAuth({
            email: data.user?.email,
            name: data.user?.name,
            avatar: data.user?.image,
          }).unwrap(); // Ensure it waits for the mutation to complete

          await refetch(); // Refetch user data after a successful social auth
          toast.success("Login successfully");
        } catch (error) {
          console.error("Social Auth Failed", error);
          toast.error("Failed to login via social auth.");
        }
      };

      handleSocialAuth();
    }
  }, [data, userData, isLoading, socialAuth, refetch]);

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        {/* Desktop Header */}
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            {/* Mail logo  */}
            <div>
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >
                WEB LEARNING
              </Link>
            </div>
            {/* Right Menu  */}
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* only for mobile  */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              {/* user profile icon  */}
              {userData ? (
                <Link href={"/profile"}>
                  <Image
                    src={
                      userData.user.avatar ? userData.user.avatar.url : avatar
                    }
                    alt="user-image"
                    width={30}
                    height={30}
                    style={{
                      border: activeItem === 5 ? "2px solid #37a39a" : "none",
                    }}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={30}
                  className="cursor-pointer pl-2 dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
        {/* mobile side bar  */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems activeItem={activeItem} isMobile={true} />
            </div>
          </div>
        )}
      </div>
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
              refetch={refetch}
            />
          )}
        </>
      )}
      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
