import React, { useContext } from "react";
import { FaMessage, FaPerson, FaRegMessage } from "react-icons/fa6";
import { CarContext } from "../../../context/GreenAppContext";

import {
  FaArrowLeft,
  FaBell,
  FaBusinessTime,
  FaEye,
  FaLock,
  FaSave,
  FaSignOutAlt,
  FaWhatsapp,
} from "react-icons/fa";

const MyClientTab = () => {
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
      <div className="  sticky w-full   lg:w-100  shadow-lg  ">
        <div className="flex gap-5 py-2 lg:py-4 text-green-700 pl-2 bg-green-50 font-bold items-center">
          <button
            onClick={() => navigate(-1)}
            className="border cursor-pointer py-2 px-4 rounded-md"
          >
            <FaArrowLeft />
          </button>
          <span className="text-sm md:text-base">My Clients</span>
        </div>
        <div className="border-b-2 border-green-600"></div>
        <div>
          <button
            onClick={() => handleSelectedButton("/clients/viewed")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/clients/viewed"
                ? "bg-green-50 text-green-600"
                : ""
            } `}
          >
            <FaEye /> <span>Viewed Your Ads</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/clients/saved")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/clients/saved"
                ? "bg-green-50 text-green-600"
                : ""
            } `}
          >
            <FaSave /> <span>saved Your Ads</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClientTab;
