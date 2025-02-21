import React from "react";
export function DescriptionInfo({ desTitle = "title", desValue = "-" }) {
  return (
    <div>
      <p className="text-gray-400">{desTitle}</p>
      <p className="text-green-600">{desValue}</p>
    </div>
  );
}
