import React, { useContext } from "react";
import LocationHeader from "./LocationHeader";
import heroLeft from "../assets/images/hero-left.png";
import heroRight from "../assets/images/hero-right.png";
import { CarContext } from "../context/GreenAppContext";
import { cars } from "../assets";

const Hero = () => {
  const { nameQuery, setNameQuery, filteredCars } = useContext(CarContext);

  
  return (
    <div className=" container   mx-auto mt-10 ">
      <div className=" text-white flex flex-col gap-8 items-center   w-full py-10 md:py-18 lg:py-24 xl:py-36  ">
        <img
          className="absolute hidden md:flex  max-w-[250px] top-0 lg:top-20 left-30 z-0"
          src={heroLeft}
          alt=" "
        />
        <img
          className="absolute hidden md:flex max-w-[350px] xl:max-w-[400px] xl:top-40 right-20 z-0"
          src={heroRight}
          alt=" "
        />
        <LocationHeader />
        <input
          className="border text-black border-none bg-white rounded-md outline-none focus:ring-3 focus:ring-[#166000] z-1 md:w-1/2 w-[90%] p-2 mb-5"
          type="text"
          placeholder="Search for cars"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Hero;
