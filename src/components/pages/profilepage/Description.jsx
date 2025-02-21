import { DescriptionInfo } from "./DescriptionInfo";
import React from "react";

const Description = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500">Description</p>
        <p className="text-sm md:text-base">
          *Toks standard 2012 Mercedes Benz E350, Black engine, extremely clean
          inside and out with duty. Buy and drive…..13m
        </p>
      </div>
      <div className="border-b border-gray-400"></div>

      <div className="grid grid-cols-2 gap-2">
        <DescriptionInfo desTitle="Make" desValue="mercedez-benz" />
        <DescriptionInfo desTitle="Model" desValue="e350" />
        <DescriptionInfo
          desTitle="Trim"
          desValue="base 4matic sedan awd(3.5l 6cyl 7a)"
        />
        <DescriptionInfo desTitle="VIN Number" desValue="" />
        <DescriptionInfo desTitle="Year of Manufacture" desValue="2012" />
        <DescriptionInfo desTitle="Condition" desValue="Nigerian Used" />
        <div>
          <p className="text-gray-400">Second Condition</p>
          <p className="text-green-700 text-[11px] font-semibold border inline rounded-2xl px-2">
            NO FAULTS
          </p>
        </div>
        <DescriptionInfo desTitle="Key Features" desValue="" />
        <DescriptionInfo desTitle="Interior Color" desValue="Black" />
        <DescriptionInfo desTitle="Verified" desValue="No" />
        <DescriptionInfo desTitle="Negotiable" desValue="Yes" />
        <DescriptionInfo
          desTitle="Registration Status"
          desValue="Not Registered"
        />
      </div>
    </>
  );
};

export default Description;
