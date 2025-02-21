import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { FaArrowDown } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "./ProfileTab";
import { FaBurger } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Message = () => {
  const { navigate, selectedButton } = useContext(CarContext);
  useEffect(() => {}, [navigate]);

  return (
    <div className="container mx-auto flex flex-col sm:gap-5 p-2 md:pt-4 ">
      <div className=" container    mx-auto mt-[60px] flex justify-between ">
        <span className=" lg:absolute left-5 top-18">
          <Button
            leftSection={<IoMdArrowBack />}
            variant="transparent"
            color=" red"
            onClick={() => navigate(-1)}
          >
            <span>Back</span>
          </Button>
        </span>
        <span className=" lg:hidden">
          <ProfileTab />
        </span>
      </div>

      <div className="  p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-bold ">My Messages</p>

          <div className=" flex gap-2 mr-5">
            <Button color="green" variant="transparent">
              <RxHamburgerMenu size={30} />
            </Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>message</p>
    </div>
  );
};

export default Message;
