import React, { useContext } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";

const Login = () => {
  const { loginState, setLoginState } = useContext(CarContext);

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-3xl">Register</h2>
      <div className="flex flex-col w-full gap-3 md:gap-6">
        <div>
          <label className="  md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Email <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Your Password <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Confirm Password <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            First Name <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Last Name <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Phone <span className="text-red-400 mt-1">*</span>
          </label>
          <input
            style={{ fontSize: "20px" }}
            className="border border-gray-300 px-3 py-1 md:py-3 rounded-md w-full  text-5xl   focus:outline-none"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number (e.g 08012345678)"
            required
          />
        </div>
        <div>
          <label className=" md:text-2xl font-semibold flex  gap-2" htmlFor="">
            Select User type
            {/* <span className="text-red-400 mt-1">*</span> */}
          </label>
          <div className="flex flex-col gap-2">
          <Button variant="outline" color="green">Regular User </Button>
          <Button variant="outline" color="green">Car Dealer </Button>
          <Button variant="outline" color="green">VIP Car Dealer </Button>
          </div>
        </div>
        <div>
          <p>Forgot Password?</p>
        </div>
        <Button color="green" size="lg">
          Register
        </Button>
      </div>

      <div className="mt-3">
        <span>Already have an account?</span>{" "}
        <button
          className="text-green-700 text-2xl"
          onClick={() => setLoginState("login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
