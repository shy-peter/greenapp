import { Button, Modal, Select } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { CarContext } from "../../context/GreenAppContext";

const StateQuery = ({ opened, close, open }) => {
  const { state, setState, area, setArea } = useContext(CarContext);
  const handleState = (value) => {
    setState(value);
  };
  const handleArea = (value) => {
    setArea(value);
  };
  

  return (
    <Modal opened={opened} onClose={close} centered>
      {/* Modal content */}
      <p className="text-center  ">Search by Location.</p>
      <div className="md:p-6 p-2">
        <div className="flex flex-col gap-4">
          <div>
            <span className="font-bold text-[18px]">Select State</span>{" "}
            <Select
              onChange={handleState}
              value={state}
              placeholder="Region"
              data={["Abia", "Adamawa"]}
              required
              size="lg"
            />
          </div>
          <div>
            <span className="font-bold text-[18px]">Select State</span>{" "}
            <Select
              onChange={handleState}
              value={state}
              placeholder="Pick one"
              data={["Akpajo", "odili road"]}
              size="lg"
            />
          </div>
          <Button onClick={close} size="lg" color="green">
            Search
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StateQuery;
