import React from "react";
import QueryUi from "../QueryUi";

const ConditionQuery = () => {
  return (
    <QueryUi

    queryName="Condition"
    radioName="condition"
      counterArray={[
        { counterKey: "Nigeria Used", counterValue: 7 },
        { counterKey: "Foreign Used", counterValue: 3 },
        { counterKey: "Brand New", counterValue: 9 },
      ]}
    />
  );
};

export default ConditionQuery;
