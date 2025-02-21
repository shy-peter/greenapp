import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { FaArrowDown } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "./ProfileTab";

const MyClients = () => {
  const { navigate, selectedButton } = useContext(CarContext);
  useEffect(() => {}, [navigate]);
  const count = 6

  return (
    <div className="container flex flex-col sm:gap-5 mx-auto p-2 md:pt-4 ">
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
          <p className="font-bold ">Potential Clients who saved your Ads</p>
          <div>
            <Button  rightSection={count} variant="light" color="green" >Clients</Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>MyClients</p>
    </div>
  );
};

export default MyClients;
