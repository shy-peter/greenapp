import React, { createContext, useContext, useState } from "react";
import { cars } from "../assets";

export const CarContext = createContext(null);

const GreenAppContextProvider = ({ children }) => {
  const [location, setLocation] = useState("All Nigeria");
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState(0);
  const [make, setMake] = useState("All");
  const [area, setArea] = useState("");
  const [condition, setCondition] = useState("Idle");
  const [nameQuery, setNameQuery] = useState("");
  const [registered, setRegistered] = useState(false);

  const filteredCars = cars.filter((car) => 
  (!nameQuery || (car.name && car.name.toLowerCase().includes(nameQuery.toLowerCase()))) &&
  (!priceFrom || (car.price && car.price >= parseInt(priceFrom))) 
);

  
  const contextValue = {
    location,
    setLocation,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    make,
    setMake,
    area,
    setArea,
    nameQuery,
    setNameQuery,
    condition,
    setCondition,
    registered,
    setRegistered,
    filteredCars,
  };

  return (
    <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
  );
};

export default GreenAppContextProvider;
