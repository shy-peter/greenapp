import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CarContext } from "../../context/GreenAppContext";
import { IoMdClose } from "react-icons/io";

const StateQueryButton = ({ open }) => {
  const { state, setState } = useContext(CarContext);

  const handleClearState = (e) => {
    e.stopPropagation()
    setState("All Nigeria");
  };

  return (
    <button
      variant="default"
      onClick={open}
      className="flex justify-between w-full items-center border py-1 px-5 border-black/10 rounded-md cursor-pointer"
    >
      <div className="flex flex-col items-start">
        <span className="text-green-600">Location</span>
        <span>{state}</span>
      </div>
      {state !== "All Nigeria" ? (
        <span onClick={handleClearState}>
          <IoMdClose size={20} className="border border-red-500 " />
        </span>
      ) : null}
      <FaArrowRight color="green" />
    </button>
  );
};

export default StateQueryButton;
