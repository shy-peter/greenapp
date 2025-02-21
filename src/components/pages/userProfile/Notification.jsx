import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { FaArrowDown, FaBell } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "./ProfileTab";

const Notification = () => {
  const { navigate, selectedButton } = useContext(CarContext);
  useEffect(() => {}, [navigate]);
  const count = 6

  return (
    <div className="container mx-auto flex flex-col sm:gap-5 p-2 md:pt-4 ">
      <div className=" container   mx-auto mt-[60px] flex justify-between ">
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

      <div className="  p-2 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold ">Notifications</p>
          <div>
            <Button leftSection={<FaBell/>} rightSection={count} variant="transparent" color="green" >Notification</Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>notificaton</p>
    </div>
  );
};

export default Notification;
