import { ProfilePopOver } from "./ProfilePopOver";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import { FaAd, FaBell, FaPlus, FaSave } from "react-icons/fa";
import { CarContext } from "../context/GreenAppContext";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";

const Navbar = () => {
  const {
    isLoggedIn,
    selectedButton,
    setSelectedButton,
    navigate,
    handleSelectedButton,
    activePath,
    loginState,
    setLoginState,
  } = useContext(CarContext);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {}, [navigate, selectedButton]);
  return (
    <div className="  bg-gradient-to-r from-[#23814d] to-[#2baf67]   border-b-green-700 border-b-1 fixed top-0 right-0 left-0 h-fit z-50 ">
      <div className=" container mx-auto  flex justify-between p-2  ">
        <Link to="/">
          <button
            onClick={() => handleSelectedButton("logo")}
            className=" w-fit cursor-pointer b"
          >
            <img className=" w-30 md:w-40 " src={logo} alt="" />
          </button>
        </Link>
        <div className="flex  items-center gap-5">
          {isLoggedIn && (
            <div className=" gap-5 hidden lg:flex">
              <button
                onClick={() => handleSelectedButton("/profile/Saved")}
                className={`text-white cursor-pointer ${
                  activePath === "/profile/Saved" ? "border-b-4" : ""
                }  border-b-orange-400 py-2`}
              >
                <FaSave />
              </button>
              <button
                onClick={() => handleSelectedButton("/profile/Notification")}
                className={`text-white cursor-pointer ${
                  activePath === "/profile/Notification" ? "border-b-4" : ""
                }  border-b-orange-400 py-2`}
              >
                <FaBell />
              </button>
              <button
                onClick={() => handleSelectedButton("/profile/Message")}
                className={`text-white cursor-pointer ${
                  activePath === "/profile/Message" ? "border-b-4" : ""
                }  border-b-orange-400 py-2`}
              >
                <FaMessage />
              </button>
              <button
                onClick={() => handleSelectedButton("/profile/Advert")}
                className={`text-white cursor-pointer ${
                  activePath === "/profile/Advert" ? "border-b-4" : ""
                }  border-b-orange-400 py-2`}
              >
                <FaAd />
              </button>
            </div>
          )}
          {isLoggedIn && (
            <ProfilePopOver handleSelectedButton={handleSelectedButton} />
          )}
          <>
            <Modal
              opened={opened}
              onClose={close}
              title=""
              centered
              // size={'50%'}
            >
              {loginState === "login" ? <Login /> : <Register />}
            </Modal>
            <button
              // onClick={open}
              onClick={isLoggedIn ? () => navigate("/upload") : open}
              className="flex bg-gradient-to-r active:translate-y-1  active:duration-300 from-orange-300 hover:from-orange-400/90 to-orange-600 hover:to-orange-600/90 transition-all duration-300  cursor-pointer p-1 md:p-2 px-4 md:px-6 rounded-3xl items-center gap-2 text-white"
            >
              <FaPlus size={10} />

              <span className="font-bold  md:text-lg">Sell</span>
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
