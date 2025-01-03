'use client';
import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

type Props = {
  isDashboard?: boolean;
};

const DashboardHero = ({ }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {" "}
      <DashboardHeader open={open} setOpen={setOpen} />
      {/* {isDashboard && <DashboardWidgets open={open} />} */}
    </div>
  );
};

export default DashboardHero;
