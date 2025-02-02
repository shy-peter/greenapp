import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaFilter, FaPlus } from "react-icons/fa";
import StateQuery from "./filterquery/StateQuery";
import StateQueryButton from "./filterquery/StateQueryButton";
import PricingQuery from "./filterquery/PricingQuery";
import MakeQuery from "./filterquery/MakeQuery";
import Model from "./filterquery/ModelQuery";
import YearQuery from "./filterquery/YearQuery";
import ConditionQuery from "./filterquery/ConditionQuery";
import CarCard from "./CarCard";
import Cars from "./Cars";

const Body = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setShowFilter(window.innerWidth >= 768); // 'md' breakpoint is 768px
    };

    // Run on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white  relative ">
      <div className="z-50 max-w-[1500px] mx-auto   bg-white flex flex-col md:flex-row  gap-5   px-5 pt-10">
        <div
          className={`bg-white p-3 w-fit  shadow-xl rounded-md  text-xs xl:text-base h-fit sticky top-15 z-50  flex flex-col gap-3`}
        >
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex border w-fit p-2  rounded-md bg-white cursor-pointer items-center gap-3 md:gap-5 text-green-600 md:pl-5 "
          >
            <FaFilter />
            <span>Filters</span>
          </button>
          {/* state and lga search */}
          <div className={`${showFilter ? "" : "hidden"}`}>
            <StateQueryButton open={open} />
            <StateQuery opened={opened} open={open} close={close} />

            <PricingQuery />
            <MakeQuery />
            <Model />
            <YearQuery />
            <ConditionQuery />
          </div>
        </div>

        <div className="right  z-0  w-full">
          <Cars />
        </div>
      </div>
    </div>
  );
};

export default Body;
