import React from "react";
import QueryUi from "../QueryUi";

const YearQuery = () => {
  return (
    <QueryUi
      queryName="Year Of Manufacture"
      radioName="year"
      counterArray={[
        { counterKey: 2003, counterValue: 3 },
        { counterKey: 2025, counterValue: 3 },
      ]}
    />
  );
};

export default YearQuery;
