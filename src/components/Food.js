import React from "react";

import FoodData from "./Food.json";

const Food = ({ allConsumption, setAllConsumption }) => {
  return (
    <div>
      {FoodData.map((snackData) => {
        return (
          <div key={snackData.id}>
            {snackData.Name} --- 1kg <strong>causes </strong> {snackData.Impact}
            of CO2{" "}
            <button
              onClick={() => {
                setAllConsumption(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, allConsumption, {
                    breakfast: [snackData.Name, 5, snackData.Impact],
                  })
                );
              }}
            >
              Select this food
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
