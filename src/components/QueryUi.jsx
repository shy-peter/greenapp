import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QueryUi = ({
  textField = false,
  queryName = "queryName",
  counterKey = "name",
  counterValue = 0,
  radioName = "radio",
  onchange,
  counterArray = [],
}) => {
  const [showQuery, setShowQuery] = useState(false);
  const [textValues, setTextValues] = useState(["", ""]);

  // Function to collect input values
  const getQueryUiValues = () => {
    const selectedRadio = document.querySelector(
      `input[name="${radioName}"]:checked`
    );

    return {
      textFieldValues: textField ? textValues : [],
      selectedCounter: selectedRadio
        ? selectedRadio.nextSibling.textContent
        : null,
      counterValues: counterArray.map((item) => ({
        counterKey: item.counterKey,
        counterValue: item.counterValue,
      })),
    };
  };

  // Handle text input change
  const handleTextChange = (index, value) => {
    const newValues = [...textValues];
    newValues[index] = value;
    setTextValues(newValues);
  };

  // Call onchange when values change
  useEffect(() => {
    if (onchange) {
      onchange(getQueryUiValues());
    }
  }, [textValues, showQuery]);

  return (
    <ul className="w-full">
      <li
        className={`border-b ${
          showQuery ? "border border-black/20" : "border-b border-b-black/20"
        } py-3 px-5 flex flex-col gap-2 rounded-md cursor-pointer`}
      >
        {/* Toggle Button */}
        <div
          onClick={() => setShowQuery(!showQuery)}
          className="flex justify-between w-full items-center cursor-pointer"
        >
          <span>{queryName}</span>
          <div
            className={`transition-transform duration-300 ${
              showQuery ? "rotate-180" : "rotate-0"
            }`}
          >
            {showQuery ? (
              <FaMinus size={12} color="green" />
            ) : (
              <FaPlus size={12} color="green" />
            )}
          </div>
        </div>

        {/* Animated Dropdown Section */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            showQuery
              ? "opacity-100 max-h-screen scale-y-100"
              : "opacity-0 max-h-0 scale-y-95"
          } overflow-hidden origin-top`}
        >
          {textField && (
            <div className="flex items-center gap-2 justify-around mt-2">
              <input
                className="border-black/20 border flex-grow w-1/2 rounded-md p-1 px-2 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                type="text"
                id="min"
                name="min"
                value={textValues[0]}
                onChange={(e) => handleTextChange(0, e.target.value)}
              />
              <span>-</span>
              <input
                className="border-black/20 border flex-grow w-1/2 rounded-md p-1 px-2 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                type="text"
                id="max"
                name="max"
                value={textValues[1]}
                onChange={(e) => handleTextChange(1, e.target.value)}
              />
            </div>
          )}

          {counterArray.map((item, idx) => (
            <div key={idx} className="flex justify-between py-1">
              <div className="flex gap-2 items-center">
                <input className="mt-1" type="radio" name={radioName} />
                <span>{item.counterKey}</span>
              </div>
              <span className="text-black/50">
                {"#"}
                {item.counterValue} ads
              </span>
            </div>
          ))}

          {/* Clear Button */}
          <button
            onClick={() => onchange(getQueryUiValues())}
            style={{ fontSize: "11px" }}
            className="self-start border border-green-500 text-xs px-2 -py-1 rounded-md text-green-600 mt-2 w-fit transition-transform duration-200 active:scale-95"
          >
            Clear
          </button>
        </div>
      </li>
    </ul>
  );
};

export default QueryUi;
