import {
  Avatar,
  AvatarGroup,
  Button,
  ButtonGroup,
  List,
  ThemeIcon,
} from "@mantine/core";
import React, { useContext } from "react";
import {
  FaBackward,
  FaCar,
  FaCircle,
  FaClock,
  FaEye,
  FaGasPump,
  FaLocationArrow,
  FaPhone,
  FaRecycle,
  FaRegStar,
  FaSave,
  FaWhatsapp,
} from "react-icons/fa";
import { FaGear, FaMessage, FaTimeline } from "react-icons/fa6";
import { HiListBullet } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import sportCar from "../../../assets/images/sporty.jpg";
import { CarContext } from "../../../context/GreenAppContext";
import { IoSaveOutline } from "react-icons/io5";
import Description from "./Description";
import { cars } from "../../../assets";

const SellerProfile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleAddToSave } = useContext(CarContext);
  const { id } = useParams();

  const user = cars.find((u) => u.id === Number(id));
  // console.log(user);

  return (
    <div className="container mx-auto">
      

      <div className=" container   mx-auto mt-[60px] ">
        <Button
          leftSection={<IoMdArrowBack />}
          color=" red"
          variant="transparent"
          onClick={() => navigate(-1)}
        >
          <span>Back</span>
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4  ">
        <div className="w-full  flex flex-col gap-4">
          <div>
            <img className="w-full" src={sportCar} alt="" />
            <div className="grid grid-cols-3 gap-1 mt-2 max-w-[80%] md:max-w-[50%]">
              <img className="w-full" src={sportCar} alt="" />
              <img className="w-full" src={sportCar} alt="" />
              <img className="w-full" src={sportCar} alt="" />
            </div>
          </div>{" "}
          <div className=" flex flex-col gap-4 px-3">
            <div className="flex  justify-between">
              <p className="font-bold">{user?.name}</p>
              {isLoggedIn && (
                <span
                  onClick={() => handleAddToSave(id)}
                  className=" rounded-sm px-2 py-1  hover:bg-orange-200"
                >
                  <IoSaveOutline color="orange" />
                </span>
              )}
            </div>
            <div className="flex justify-between flex-col sm:flex-row  font-semibold">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-2">
                  <FaLocationArrow />
                  <p className="font-semibold text-green-500">Enugu</p>
                </span>
                <span className="text-orange-600 flex items-center gap-2">
                  <FaClock /> <p>Posted {user?.days} days Ago</p>
                </span>
              </div>
              <div className="flex  items-center gap-2 text-blue-500">
                <FaEye /> <span>1 Views</span>
              </div>
            </div>
            <div className="grid grid-cols-3 w-full lg:w-1/2 gap-2 px-3 ">
              <div className="border rounded-md border-black/10 flex flex-col md:gap-2 items-center justify-center py-3 sm:py-5 w-full">
                <FaRecycle />
                <p>Automatic</p>
              </div>
              <div className="border rounded-md border-black/10 flex flex-col md:gap-2 items-center justify-center py-3 sm:py-5 w-full">
                <FaGasPump />
                <p>Petrol</p>
              </div>
              <div className="border rounded-md border-black/10 flex flex-col md:gap-2 items-center justify-center py-3 sm:py-5 w-full">
                <FaCar />
                <p>Nigerian Used</p>
              </div>
            </div>
            <div className="border  border-black/10 flex flex-col gap-4 md:gap-6 text-sm lg:text-base p-3 sm:py-5 w-full rounded-md">
              <Description />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold">Customer Feedbacks</p>
              <div className="flex flex-col gap-4">
                <FaRegStar />
                <form className="flex flex-col gap-4" action="">
                  <textarea
                    className="border p-3 border-gray-400 rounded-md w-full focus:outline-none"
                    placeholder="Leave a review"
                    name="review" // Added a name attribute here
                    id="review" // Optional, but can be useful for linking labels or targeting in JS
                  />
                  <div>
                    <Button size="md" color="green">
                      Submit Review
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-100 px-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1   lg:h-fit gap-4">
          <p className="text-xl font-bold text-black/70">$ {user?.price}</p>

          <div className="  border-green-500 p-2 flex flex-col gap-4  self-start ">
            <div className="flex gap-5 items-center">
              <Avatar
                variant="light"
                color="green"
                src="https://www.gistreel.com/wp-content/uploads/2022/12/vh.jpg.webp"
              />
              <p className="font-semibold text-sm">Esinmulo Santus</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-4 gap-2">
                <Button
                  className="col-span-3 text-green-500"
                  leftSection={<FaPhone />}
                  color="blue"
                  variant="light"
                >
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </Button>
                <Button className="col-span-1" color="green" variant="light">
                  <FaWhatsapp color="green" size={20} />
                </Button>
              </div>
              <div className="grid ">
                <Button
                  leftSection={<FaMessage />}
                  variant="light"
                  color="orange"
                >
                  Start chat
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3  border-red-500 self-start ">
            <p className="text-red-600 font-semibold text-sm">Safety Tips</p>
            <List
              center
              spacing="lg"
              size="sm"
              icon={
                <ThemeIcon size={10} radius="xl">
                  {" "}
                  <FaCircle size={10} />
                </ThemeIcon>
              }
            >
              <List.Item>Remember, don't send any pre-payments</List.Item>
              <List.Item>Meet the seller at a safe public place</List.Item>
              <List.Item>
                {" "}
                Inspect the goods to make sure they meet your needs{" "}
              </List.Item>
              <List.Item>
                {" "}
                Check all documentation and only pay if you're satisfied
              </List.Item>
            </List>
            <Button
              className="mt-3 mb-5"
              fullWidth
              variant="light"
              color="green"
            >
              Post Ad Like This
            </Button>
          </div>
        </div>
      </div>
    </div>
    // <div>big booty bitches</div>
  );
};

export default SellerProfile;
