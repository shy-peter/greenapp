import React, { useContext } from "react";
import ProfileTab from "../userProfile/ProfileTab";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { IoMdArrowBack } from "react-icons/io";

const ManageNotification = () => {
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
          <p className="font-bold ">Manage Notification</p>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>Mangae notificaiton</p>
    </div>
  );
};

export default ManageNotification;
