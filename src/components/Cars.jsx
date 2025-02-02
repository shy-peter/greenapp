import React, { useContext } from "react";
import CarCard from "./CarCard";
import { cars } from "../assets";
import { CarContext } from "../context/GreenAppContext";

const Cars = () => {
  const { filteredCars } = useContext(CarContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5">
      {filteredCars.map((item, idx) => {
        return <CarCard key={idx} {...item} />;
      })}
    </div>
  );
};

export default Cars;
