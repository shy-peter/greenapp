import React, { useContext } from "react";
import QueryUi from "../QueryUi";
import { CarContext } from "../../context/GreenAppContext";

const PricingQuery = () => {
  const { priceFrom, priceTo } = useContext(CarContext);

  
  return (
    <QueryUi
      queryName="Pricing"
      radioName="pricing"
      counterArray={[
        { counterKey: "peter", counterValue: 1 }, 
        { counterKey: "2m - 5m", counterValue: 2 },
        { counterKey: "hilus", counterValue: 1 },
      ]}
      textField={true}
    />
  );
};

export default PricingQuery;
