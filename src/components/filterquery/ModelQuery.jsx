import React from "react";
import QueryUi from "../QueryUi";

const ModelQuery = () => {
  return (
    <QueryUi
      queryName="Model"
      radioName="model"
      counterArray={[
        { counterKey: "ES350", counterValue: 0 },
        { counterKey: 'Hiance', counterValue: 1 },
      ]}
    />
  );
};

export default ModelQuery;
