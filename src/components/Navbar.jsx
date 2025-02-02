import React from "react";
import logo from "../assets/icons/logo.png";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#166539] border-b-green-700 border-b-1 fixed top-0 right-0 left-0 h-fit z-50 ">
      <div className=" container mx-auto  flex justify-between p-2  ">
        <button className=" w-fit cursor-pointer b">
          <img className="w-40" src={logo} alt="" />
        </button>
        <button className="flex bg-gradient-to-r active:translate-y-1 active:duration-300 from-orange-300 hover:from-orange-400/90 to-orange-600 hover:to-orange-600/90 transition-all duration-300  cursor-pointer p-2 px-6 rounded-3xl items-center gap-2 text-white">
          <FaPlus />
          <span className="font-bold text-lg">Sell</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
