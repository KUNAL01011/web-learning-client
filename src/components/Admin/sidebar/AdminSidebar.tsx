"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Corrected the typo here
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import WebIcon from "@mui/icons-material/Web";
import QuizIcon from "@mui/icons-material/Quiz";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import avatarDefault from "../../../../public/assets/avatar.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const AdminSidebar = ({selected, setSelected}) => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  if (!mounted) {
    return null;
  }

  const logoutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  return (
    <div>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${
              theme === "dark" ? "#111C43 !important" : "#fff !important"
            }`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            opacity: 1,
          },
          "& .pro-menu-item": {
            color: `${theme !== "dark" && "#000"}`,
          },
        }}
        className="!bg-white dark:bg-[#111C43]"
      >
        <ProSidebar
          collapsed={isCollapsed}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: isCollapsed ? "0%" : "16%",
          }}
        >
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON  */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                  ml="8px"
                >
                  <Link href="/">
                    <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                      web learn
                    </h3>
                  </Link>
                  <IconButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="inline-block"
                  >
                    <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    alt="profile-user"
                    width={100}
                    height={100}
                    src={user.avatar ? user.avatar.url : avatarDefault}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      border: "3px solid #5b6fe6",
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    className="!text-[20px] text-black dark:text-[#ffffffc1]"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {user?.name} [{user?.role}]
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : undefined}>
              <Item
                title="Dashboard"
                to="/admin"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Data"}
              </Typography>
              <Item
                title="Users"
                to="/admin/users"
                icon={<GroupsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices"
                to="/admin/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Content"}
              </Typography>
              <Item
                title="Create Course"
                to="/admin/create-course"
                icon={<VideoCallIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Live Courses"
                to="/admin/courses"
                icon={<OndemandVideoIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Customization"}
              </Typography>
              <Item
                title="Hero"
                to="/admin/hero"
                icon={<WebIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ"
                to="/admin/faq"
                icon={<QuizIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Categories"
                to="/admin/categories"
                icon={<WysiwygIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Controllers"}
              </Typography>

              <Item
                title="Manage Team"
                to="/admin/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Analytics"}
              </Typography>
              <Item
                title="Courses Analytics"
                to="/admin/courses-analytics"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Orders Analytics"
                to="/admin/orders-analytics"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Users Analytics"
                to="/admin/users-analytics"
                icon={<ManageHistoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <br />
              <Typography
                variant="h6"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-gray-500  dark:text-[#616060c1] uppercase !font-[400]"
              >
                {!isCollapsed && "Extras"}
              </Typography>
              <div onClick={logoutHandler}>
                <Item
                  title="Logout"
                  to="/"
                  icon={<ExitToAppIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </div>
  );
};

export default AdminSidebar;
