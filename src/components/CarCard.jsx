import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const CarCard = ({
  name = 'Not available',
  price = 'Not available',
  days = 'Not available',
  state = 'Not available',
  registered = 'Not available',
  exchangeable = 'Not available',
  image,
}) => {
  return (
    <div className="flex flex-col gap-1 h-fit  shadow-lg bg-white rounded-md overflow-hidden">
      <img
        className=""
        src="https://i.pravatar.cc/400
"
        alt=""
      />
      <div className="flex flex-col gap-1 p-3">
        <div className="flex flex-col gap-1">
          <p className="text-nowrap truncate font-semibold">{name}</p>
          <span className="text-xs text-orange-400">{days} {' '} days ago</span>
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
