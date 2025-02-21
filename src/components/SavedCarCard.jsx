import React, { useContext } from "react";
import {
  FaLocationArrow,
  FaPhone,
  FaSave,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import ProtectedRoute from "./ProtectedRoute";
import { CarContext } from "../context/GreenAppContext";
import { Button } from "@mantine/core";
import { FaRegMessage } from "react-icons/fa6";

const SavedCarCard = ({
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
  phone = "not available",
}) => {
  const { navigate } = useContext(CarContext);
  return (
    <div className="sm:flex   items-center gap-1 h-fit  shadow-lg bg-white rounded-md overflow-hidden hover:shadow-2xl transform transition-all duration-500">
      <img
        className="sm:w-40 h-50 sm:h-fit w-full  "
        src="https://i.pravatar.cc/400
"
        alt=""
      />
      <div className=" flex w-full p-4 justify-between items-center">
        <div className="flex flex-col gap-1 p-3">
          <div className="flex flex-col gap-1">
            <div className="flex  items-center justify-between ">
              <p className="text-nowrap truncate font-semibold">{name}</p>

              <span
                onClick={() => handleAddToSave(id)}
                className=" rounded-sm  border w-fit  absolute right-[30%] "
              >
                <Button variant="transparent" color="red">
                  <FaTrash />
                </Button>
              </span>
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
        <div className="self-end flex flex-col gap-3">
          <Button
            onClick={() => navigate("/profile/Message")}
            variant="outline"
            color="green"
            leftSection={<FaRegMessage />}
          >
            Chat
          </Button>
          <Button variant="outline" color="red" leftSection={<FaWhatsapp />}>
            {phone}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavedCarCard;
