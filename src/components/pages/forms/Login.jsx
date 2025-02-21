import React, { useContext } from "react";
import { CarContext } from "../../../context/GreenAppContext";
import { Button } from "@mantine/core";


const Login = () => {
  const { loginState, setLoginState } = useContext(CarContext);

  return (
    <div className="flex flex-col items-center  ">
      <h2 className="font-bold text-3xl">Sign In</h2>
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
          <p>Forgot Password?</p>
        </div>
        <Button color="green" size="lg">
          Log In
        </Button>
      </div>

      <div className="mt-3">
        <span>Don't have an account?</span>{" "}
        <button
          className="text-green-700 text-2xl"
          onClick={() => setLoginState("register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
