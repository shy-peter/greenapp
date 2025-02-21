import React, { useContext } from "react";
import ProfileTab from "../userProfile/ProfileTab";
import { CarContext } from "../../../context/GreenAppContext";
import { Avatar, Button } from "@mantine/core";
import { IoMdArrowBack } from "react-icons/io";
import { FaUpload } from "react-icons/fa";

const PersonalDetails = () => {
  const { navigate, selectedButton } = useContext(CarContext);

  return (
    <div className="container mx-auto p-2 md:pt-4 ">
      <div className=" container   mx-auto  flex justify-between ">
        <span className=" lg:hidden left-5 top-18">
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
          <p className="font-bold ">Personal Details</p>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <div className="p-2">
        <div className="relative   w-fit">
          <Avatar size={100} />
          <div className="absolute right-0 bottom-0">
            <button className="cursor-pointer p-2 rounded-full bg-green-200">
              <FaUpload  color="black" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PersonalDetails;
