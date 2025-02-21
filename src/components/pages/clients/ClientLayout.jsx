import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SettingsProfileTab from "../Settings/SettingsProfileTab";
import MyClientTab from "./MyClientTab";


const ClientLayout = () => {
  return (
    <div className="container mx-auto p-2 mt-14  lg:mt-20 md:pt-4 lg:flex  gap-2    relative">
      <MyClientTab />
      <div className="w-full  mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
