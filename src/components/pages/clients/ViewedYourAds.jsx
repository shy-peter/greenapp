import React, { useContext } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "../userProfile/ProfileTab";

const ViewedYourAds = () => {
  const { navigate, selectedButton } = useContext(CarContext);

  const count = 5;

  return (
    <div className="container mx-auto p-2 md:pt-2 ">
      {/* <div className=" container   mx-auto  flex hidden justify-between ">
        <span className="  lg:hidden left-5 top-18">
          <Button
            leftSection={<IoMdArrowBack />}
            variant="transparent"
            color=" red"
            onClick={() => navigate(-1)}
          >
            <span>Back</span>
          </Button>
        </span>
        <span className=" lg:hidden"><ProfileTab/></span>
      </div> */}

      <div className="  flex flex-col gap-4 ">
        <div className="flex justify-between gap-5">
          <p className="font-semibold text-sm lg:text-base ">Potential Clients who viewed your ads</p>
          <div>
            <Button rightSection={count} variant="light" color="green">
              Clients
            </Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>clients viewed</p>
    </div>
  );
};

export default ViewedYourAds;
