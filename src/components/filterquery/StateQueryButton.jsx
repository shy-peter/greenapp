import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CarContext } from "../../context/GreenAppContext";

const StateQueryButton = ({ open }) => {
  const { location } = useContext(CarContext);
  

  return (
    <button
      variant="default"
      onClick={open}
      className="flex justify-between w-full items-center border py-1 px-5 border-black/10 rounded-md cursor-pointer"
    >
      <div className="flex flex-col items-start">
        <span className="text-green-600">Location</span>
        <span>{location}</span>
      </div>
      <FaArrowRight color="green" />
    </button>
  );
};

export default StateQueryButton;
