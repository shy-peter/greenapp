import React, { useContext, useEffect } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";
import { FaArrowDown, FaSave } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import ProfileTab from "./ProfileTab";
import { cars } from "../../../assets";
import CarCard from "../../CarCard";
import SavedCarCard from "../../SavedCarCard";

const Saved = () => {
  const { navigate, selectedButton, savedItem, handleAddToSave, savedCars, carsCount } = useContext(CarContext);
  // useEffect(() => {}, [navigate]);

  // const saved = cars.filter((item) => (savedItem[item.id] === true));
  //  creating a new array called savedCars by using filter and the
  //  Object.hasOwn()  is used to check the savedItem has a property of the given item.id

  // generally it is looping throug the cars array and cheking if the id's in they in the
  // saveditem object is present in the car array and creating a new array out of it
  
  return (
    <div className="container mx-auto flex flex-col sm:gap-5 p-2 md:pt-4 ">
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
          <p className="font-bold ">Saved</p>
          <div className="mr-5">
            <Button
              variant="light"
              color="green"
              leftSection={<FaSave />}
              rightSection={carsCount}
            >
              Saved
            </Button>
          </div>
        </div>
        <div className="border-b-2 border-green-600"></div>
      </div>
      <div>
        <div>
        <div className=" flex flex-col gap-3 ">
      {savedCars.map((item, idx) => {
        return (
          <SavedCarCard
            handleAddToSave={handleAddToSave}
            key={idx}
            {...item}
          />
          
        );
      })}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
