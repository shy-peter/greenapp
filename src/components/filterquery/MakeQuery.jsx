import React from "react";
import QueryUi from "../QueryUi";

const MakeQuery = () => {
  return (
    <QueryUi
      queryName="Make"
      radioName="make"
      counterArray={[
        { counterKey: "Lexus", counterValue: 3 },
        { counterKey: "Mercedez-benz", counterValue: 3 },
      ]}
    />
  );
};

export default MakeQuery;
