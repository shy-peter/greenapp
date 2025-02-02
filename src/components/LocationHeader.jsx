import React, { useContext } from "react";
import { FaLocationArrow } from "react-icons/fa";

const LocationHeader = () => {
  return (
    <div className="flex gap-3 items-center font-semibold text-white z-1 ">
      <p>Find any car in </p>
      <button className="bg-green-500 hover:bg-green-600 active:translate-y-1 duration-300 transition-all px-4 p-1 rounded-sm flex items-center gap-2 font-semibold">
        <FaLocationArrow color="white" />
        <span className="font-bold text-white">Nigeria</span>
      </button>
    </div>
  );
};

export default LocationHeader;
