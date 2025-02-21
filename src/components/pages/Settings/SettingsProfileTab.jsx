import React, { useContext } from "react";
import { FaMessage, FaPerson, FaRegMessage } from "react-icons/fa6";

import { CarContext } from "../../../context/GreenAppContext";
import {
  FaArrowLeft,
  FaBell,
  FaBusinessTime,
  FaLock,
  FaSignOutAlt,
  FaWhatsapp,
} from "react-icons/fa";

const SettingsProfileTab = () => {
  const {
    handleSelectedButton,
    selectedButton,
    navigate,
    setIsLoggedIn,
    isLogged,
    activePath,
  } = useContext(CarContext);
  return (
    <div>
      <div className="  sticky   w-100  hidden lg:block shadow-lg ">
        <div className="flex gap-5 py-4 text-green-700 font-bold items-center">
          <button
            onClick={() => navigate(-1)}
            className="border cursor-pointer py-2 px-4 rounded-md"
          >
            <FaArrowLeft />
          </button>
          <span>Settings</span>
        </div>
        <div className="border-b-2 border-green-600"></div>
        <div>
          <button
            onClick={() => handleSelectedButton("/settings/personal-details")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/personal-details"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaPerson /> <span>Personal Details</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/settings/business-details")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/business-details"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaBusinessTime /> <span>Business Details</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/settings/disable-chat")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/disable-chat"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaRegMessage /> <span>Disabled Chats</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/settings/disable-feedback")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/disable-feedback"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaMessage /> <span>Disable feedback</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/settings/get-whatsapp")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/get-whatsapp"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaWhatsapp /> <span>Get WhatsApp</span>
          </button>
          <button
            onClick={() =>
              handleSelectedButton("/settings/manage-notification")
            }
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/manage-notification"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaBell /> <span>Manage Notification</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/settings/change-password")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/settings/change-password"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaLock /> <span>Change Password</span>
          </button>
          <button
            onClick={() => setIsLoggedIn(false)}
            className={`flex items-center gap-3 w-full p-2 bg-red-600 text-white hover:bg-red-400 cursor-pointer ${
              activePath === "/settings/logout"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileTab;
