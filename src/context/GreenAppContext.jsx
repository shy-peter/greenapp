import React, { createContext, useContext, useEffect, useState } from "react";
import { cars } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

export const CarContext = createContext(null);

const GreenAppContextProvider = ({ children }) => {
  const location = useLocation();
  const [state, setState] = useState("All Nigeria");
  const [area, setArea] = useState("ph");
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState(0);
  const [make, setMake] = useState("All");
  const [condition, setCondition] = useState("Idle");
  const [nameQuery, setNameQuery] = useState("");
  const [registered, setRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogOutMenu, setShowLogOutMenu] = useState(false);
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);
  const [carId, setCarId] = useState(5);
  const [loginState, setLoginState] = useState("login");


  const [savedItem, setSavedItem] = useState(() => {
    const savedItem = localStorage.getItem("savedItem");
    return savedItem ? JSON.parse(savedItem) : {};
  });

  const savedCars = cars.filter((item) => Object.hasOwn(savedItem, item.id));

  const savedCarsCount = savedCars.length;

  const activePath = location.pathname;

  const handleSelectedButton = (selectedButtonVal) => {
    navigate(selectedButtonVal);
    setSelectedButton(selectedButtonVal);
  };
  useEffect(() => {}, [selectedButton, navigate]);

  const filteredCars = cars.filter(
    (car) =>
      (!nameQuery ||
        (car.name &&
          car.name.toLowerCase().includes(nameQuery.toLowerCase()))) &&
      (!priceFrom || (car.price && car.price >= parseInt(priceFrom)))
  );

  const handleAddToSave = (itemId) => {
    setSavedItem((prevSaved) => {
      const updatedCart = { ...prevSaved };

      if (updatedCart[itemId]) {
        delete updatedCart[itemId]; // Remove item if it exists
      } else {
        updatedCart[itemId] = true; // Add item if it doesn't exist
      }

      return updatedCart;
    });

    console.log(itemId);
  };

  useEffect(() => {
    localStorage.setItem("savedItem", JSON.stringify(savedItem));
  }, [savedItem]);

  const carsCount = savedCarsCount > 0 ? savedCarsCount : "";

  const contextValue = {
    state,
    setState,
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
    isLoggedIn,
    setIsLoggedIn,
    showLogOutMenu,
    setShowLogOutMenu,
    selectedButton,
    setSelectedButton,
    navigate,
    handleSelectedButton,
    activePath,
    handleAddToSave,
    savedItem,
    savedCarsCount,
    savedCars,
    carsCount,
    carId,
    setCarId,
    loginState,
    setLoginState,
  };

  
  return (
    <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
  );
};

export default GreenAppContextProvider;
