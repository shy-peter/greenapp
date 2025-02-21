import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import SettingsProfileTab from "./SettingsProfileTab";

const SettingsLayout = () => {
  return (
    <div className="container mx-auto p-2 mt-12 lg:mt-20 md:pt-4 flex gap-2  relative">
      <SettingsProfileTab />
      <div className="w-full border">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
