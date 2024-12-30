"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const AdminProtected = ({ children }: Props) => {
  const { user } = useSelector((state: any) => state.auth);

  if (user) {
    const isAdmin = user?.role === "admin";
    return isAdmin ? children : redirect("/");
  }
  else{
    return redirect("/");
  }
};

export default AdminProtected;
