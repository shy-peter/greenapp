import React, { useContext } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Drawer, Button, Avatar, Menu } from "@mantine/core";

import {
  FaAd,
  FaArrowDown,
  FaBell,
  FaNetworkWired,
  FaPhone,
  FaSave,
} from "react-icons/fa";
import {
  FaGear,
  FaMessage,
  FaPeopleGroup,
  FaRegMessage,
} from "react-icons/fa6";

const UserProfileTab = () => {
  const { handleSelectedButton, selectedButton } = useContext(CarContext);
  const phone = 9063417195;
  return (
    <div className="  sticky  w-full  ">
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
          onClick={() => handleSelectedButton("/profile/advert")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Advert" ? "bg-green-100 text-green-600" : ""
          } `}
        >
          <FaAd /> <span>My Advert</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Message")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Message" ? "bg-green-100 text-green-600" : ""
          } `}
        >
          <FaMessage /> <span>Message</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Saved")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Saved" ? "bg-green-100 text-green-600" : ""
          } `}
        >
          <FaSave /> <span>Saved</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Notification")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Notification"
              ? "bg-green-100 text-green-600"
              : ""
          } `}
        >
          <FaBell /> <span>Notification</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Clients")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Clients" ? "bg-green-100 text-green-600" : ""
          } `}
        >
          <FaPeopleGroup /> <span>Client</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Feedback")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Feedback" ? "bg-green-100 text-green-600" : ""
          } `}
        >
          <FaRegMessage /> <span>Feedback</span>
        </button>
        <button
          onClick={() => handleSelectedButton("/profile/Performance")}
          className={`flex items-center gap-3 w-full p-2 hover:bg-green-50 cursor-pointer ${
            selectedButton === "Performance"
              ? "bg-green-100 text-green-600"
              : ""
          } `}
        >
          <FaNetworkWired /> <span>Performance</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileTab;
