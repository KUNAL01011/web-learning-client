import { redirect } from "next/navigation";
import React from "react";
import useAuth from "./useAuth";

type Props = {
  children: React.ReactNode;
};

const Protected = ({ children }: Props) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : redirect("/");
};

export default Protected;
