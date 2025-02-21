import { Avatar, Button, Menu } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import {
  FaAd,
  FaArrowDown,
  FaBell,
  FaNetworkWired,
  FaPhone,
  FaSave,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import { CarContext } from "../../../context/GreenAppContext";
import {
  FaGear,
  FaMessage,
  FaPeopleGroup,
  FaRegMessage,
} from "react-icons/fa6";

const UserProfile = () => {
  const { handleSelectedButton, selectedButton, activePath, carsCount, savedCarsCount } =
    useContext(CarContext);
  useEffect(() => {}, [selectedButton, handleSelectedButton]);

  const phone = 9063417195;
  return (
    <div className="container mx-auto p-2 md:pt-4 flex  relative">
      <div className="  sticky h-fit  mt-24 w-100 hidden lg:block shadow-lg ">
        <div className="flex border-b-2 border-b-green-600 flex-col gap-4 bg-gradient-to-br from-gray-50 p-4 to-green-100">
          <div className="text-green-500 flex justify-between">
            <Avatar size={50} />
            <span
              onClick={() => handleSelectedButton("/settings/personal-details")}
              className="cursor-pointer"
            >
              <FaGear size={20} />
            </span>
          </div>
          <p className="font-bold text-green-700">Peter Osaro-Bode</p>
          <a href={`tel:+234${phone}`}>
            <Button leftSection={<FaPhone />} color="green">
              0{phone}
            </Button>
          </a>
        </div>
        <div>
          <button
            onClick={() => handleSelectedButton("/profile/Advert")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              selectedButton === "/profile/Advert"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaAd /> <span>My Advert</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/profile/Message")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Message"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaMessage /> <span>Message</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/profile/Saved")}
            className={`flex items-center justify-between gap-3 w-full p-2  hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Saved"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <span className="flex items-center gap-3">
              <FaSave /> <span>Saved</span>
            </span>
            {savedCarsCount>0 && <span className=" text-xs border rounded-2xl px-2">{carsCount}</span>}
          </button>
          <button
            onClick={() => handleSelectedButton("/profile/Notification")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Notification"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaBell /> <span>Notification</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/clients/viewed")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Clients"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaPeopleGroup /> <span>Client</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/profile/Feedback")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Feedback"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaRegMessage /> <span>Feedback</span>
          </button>
          <button
            onClick={() => handleSelectedButton("/profile/Performance")}
            className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
              activePath === "/profile/Performance"
                ? "bg-green-100 text-green-600"
                : ""
            } `}
          >
            <FaNetworkWired /> <span>Performance</span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
