import React, { useContext, useEffect } from "react";
import { FaLocationArrow, FaSave } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import ProtectedRoute from "./ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../context/GreenAppContext";

const CarCard = ({
  name = "Not available",
  price = "Not available",
  days = "Not available",
  state = "Not available",
  registered = "Not available",
  exchangeable = "Not available",
  image,
  id,
  handleAddToSave,
  savedItem,
  viewSellerProfile,
}) => {
  const { navigate } = useContext(CarContext);
  return (
    <div className="flex flex-col gap-1 h-fit  shadow-lg bg-white rounded-md overflow-hidden">
      <img
        onClick={() => navigate(`/sellerprofile/${id}`)}
        className=" cursor-pointer"
        src="https://i.pravatar.cc/400"
        alt=""
      />
      <div className="flex flex-col gap-1 p-3">
        <div className="flex flex-col gap-1">
          <div className="flex  items-center justify-between">
            <p className="text-nowrap truncate font-semibold">{name}</p>
            <ProtectedRoute>
              <span
                onClick={() => handleAddToSave(id)}
                className=" rounded-sm px-2 py-1 hover:bg-orange-200"
              >
                <IoSaveOutline color="green" />
              </span>
            </ProtectedRoute>
          </div>
          <span className="text-xs text-orange-400">{days} days ago</span>
          <p>${price}</p>
          <div className="flex items-center gap-2">
            <FaLocationArrow size={12} />
            <span>{state}</span>
          </div>
        </div>
        <div className="flex flex-col  items-center gap-1  ">
          <span className="text-[10px] w-fit text-nowrap border rounded-xl px-2 border-green-600 text-green-500">
            {registered ? "REGISTERED" : "NOT REGISTERED"}
          </span>
          <span className="text-[10px] w-fit text-nowrap border rounded-xl px-2 border-green-600 text-green-500">
            {" "}
            {exchangeable ? "EXCHANGEABLE" : "NOT EXCHANGEABLE"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
