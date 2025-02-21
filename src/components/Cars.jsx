import React, { useContext, useEffect } from "react";
import CarCard from "./CarCard";
import { cars } from "../assets";
import { CarContext } from "../context/GreenAppContext";
import SellerProfile from "./pages/profilepage/SellerProfile";

const Cars = () => {
  const {
    filteredCars,
    isLoggedIn,
    handleAddToSave,
    navigate,
    savedItem,
    carId,
    setCarId,
  } = useContext(CarContext);


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5">
      {filteredCars.map((item, idx) => {
        return (
          <CarCard
            isLoggedIn={isLoggedIn}
            handleAddToSave={handleAddToSave}
            handler={handleAddToSave}
            key={idx}
            {...item}
            savedItem={savedItem}
          />
        );
      })}
    </div>
  );
};

export default Cars;
