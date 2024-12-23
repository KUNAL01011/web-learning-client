import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Protected = ({ children }: Props) => {
  const { user, loading } = useSelector((state: any) => state.auth);


  React.useEffect(() => {
    if (!loading && !user) {
      redirect("/");
    }
  }, [loading, user]);

  if (loading) {
    return <div>Loading...</div>; // Replace with your loading component or spinner
  }

  return user ? <>{children}</> : null;
};

export default Protected;
