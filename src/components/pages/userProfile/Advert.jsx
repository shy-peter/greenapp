import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import {
  FaArrowDown,
  FaCheck,
  FaCheckCircle,
  FaCheckDouble,
} from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "./ProfileTab";
import { PiFlagCheckeredBold } from "react-icons/pi";

const Advert = () => {
  const { navigate, selectedButton } = useContext(CarContext);
  useEffect(() => {}, [navigate]);
  const [select, setSelect] = useState("active");
  const handleSelect = (val) => {
    setSelect(val)
  };
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

      <div className="  p-2 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold ">Adverts</p>
          <div className="flex gap-2 mr-5">
            <Button onClick={()=>handleSelect('active')}
              color="green"
              leftSection={<FaCheckCircle />}
              variant={select === "active" ? "light" : "transparent"}
            >
              Active
            </Button>
            <Button onClick={()=>handleSelect('close')}
              color="green"
              leftSection={<PiFlagCheckeredBold />}
              variant={select === "close" ? "light" : "transparent"}
            >
              Close
            </Button>
            <Button onClick={()=>handleSelect('expire')}
              color="green"
              leftSection={<FaCheckDouble />}
              variant={select === "expire" ? "light" : "transparent"}
            >
              Expired
            </Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <p>advert</p>
    </div>
  );
};

export default Advert;
